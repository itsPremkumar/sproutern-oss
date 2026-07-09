/**
 * JavaScript Code Runner
 * Executes JavaScript code safely in a sandboxed Web Worker
 */

export interface ExecutionResult {
  output: string;
  error?: string;
  executionTime: number;
}

export interface TestCase {
  input: string[];
  expectedOutput: string;
  description?: string;
}

export interface ValidationResult {
  passed: boolean;
  testResults: {
    input: string;
    expected: string;
    actual: string;
    passed: boolean;
  }[];
  executionTime: number;
}

// Web Worker code as a string (executed in sandboxed context)
const workerCode = `
  self.onmessage = function(e) {
    const { code, args, timeout } = e.data;
    const startTime = performance.now();
    let output = [];
    let error = null;
    
    // Override console.log to capture output
    const originalLog = console.log;
    console.log = function(...args) {
      output.push(args.map(a => 
        typeof a === 'object' ? JSON.stringify(a) : String(a)
      ).join(' '));
    };
    
    try {
      // Create function from user code
      const userFunc = new Function('args', code + '\\n//# sourceURL=userCode.js');
      
      // Execute with timeout
      const timeoutId = setTimeout(() => {
        throw new Error('Execution timed out (5s limit)');
      }, timeout || 5000);
      
      const result = userFunc(args);
      clearTimeout(timeoutId);
      
      // If function returns a value, add to output
      if (result !== undefined) {
        output.push(typeof result === 'object' ? JSON.stringify(result) : String(result));
      }
    } catch (e) {
      error = e.message || 'Unknown error';
    }
    
    console.log = originalLog;
    const endTime = performance.now();
    
    self.postMessage({
      output: output.join('\\n'),
      error,
      executionTime: endTime - startTime
    });
  };
`;

// Create a blob URL for the worker
let workerBlobUrl: string | null = null;

function getWorkerBlobUrl(): string {
  if (typeof window === 'undefined') return '';
  if (!workerBlobUrl) {
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    workerBlobUrl = URL.createObjectURL(blob);
  }
  return workerBlobUrl;
}

/**
 * Execute JavaScript code in a sandboxed Web Worker
 */
export async function executeJavaScript(
  code: string,
  args: string[] = [],
  timeout: number = 5000,
): Promise<ExecutionResult> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve({
        output: '',
        error: 'Server-side execution not supported',
        executionTime: 0,
      });
      return;
    }

    try {
      const worker = new Worker(getWorkerBlobUrl());
      const startTime = performance.now();

      // Set a timeout for the entire operation
      const timeoutId = setTimeout(() => {
        worker.terminate();
        resolve({
          output: '',
          error: 'Execution timed out (5s limit)',
          executionTime: performance.now() - startTime,
        });
      }, timeout + 1000);

      worker.onmessage = (e) => {
        clearTimeout(timeoutId);
        worker.terminate();
        resolve(e.data);
      };

      worker.onerror = (e) => {
        clearTimeout(timeoutId);
        worker.terminate();
        resolve({
          output: '',
          error: e.message || 'Worker error',
          executionTime: performance.now() - startTime,
        });
      };

      worker.postMessage({ code, args, timeout });
    } catch (error: any) {
      resolve({
        output: '',
        error: error.message || 'Failed to create worker',
        executionTime: 0,
      });
    }
  });
}

/**
 * Validate JavaScript code against test cases
 */
export async function validateJavaScript(
  code: string,
  testCases: TestCase[],
  functionName: string = 'solution',
): Promise<ValidationResult> {
  const startTime = performance.now();
  const testResults: ValidationResult['testResults'] = [];
  let allPassed = true;

  for (const testCase of testCases) {
    // Wrap user code to call the function with test inputs
    const wrappedCode = `
      ${code}
      
      // Call the function with test inputs
      const testArgs = ${JSON.stringify(testCase.input)};
      const result = ${functionName}(...testArgs.map(arg => {
        try { return JSON.parse(arg); } catch { return arg; }
      }));
      return result;
    `;

    const result = await executeJavaScript(wrappedCode, [], 5000);
    const actual = result.error || result.output.trim();
    const expected = testCase.expectedOutput.trim();
    const passed = !result.error && actual === expected;

    testResults.push({
      input: testCase.input.join(', '),
      expected,
      actual,
      passed,
    });

    if (!passed) allPassed = false;
  }

  return {
    passed: allPassed,
    testResults,
    executionTime: performance.now() - startTime,
  };
}

/**
 * Simple code execution for "Run" button (no validation)
 */
export async function runJavaScript(code: string): Promise<ExecutionResult> {
  return executeJavaScript(code, [], 5000);
}

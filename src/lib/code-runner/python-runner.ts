/**
 * Python Code Runner
 * Uses Pyodide for client-side Python execution
 * Lazy-loads Pyodide only when needed (~10MB download)
 */

import type {
  ExecutionResult,
  TestCase,
  ValidationResult,
} from './javascript-runner';

// Re-export types
export type { ExecutionResult, TestCase, ValidationResult };

// Pyodide instance (lazy loaded)
let pyodideInstance: any = null;
let pyodideLoading: Promise<any> | null = null;

/**
 * Load Pyodide (lazy, only when needed)
 * This downloads ~10MB of WebAssembly, so we do it once and cache
 */
async function loadPyodide(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;

  if (pyodideLoading) return pyodideLoading;

  pyodideLoading = (async () => {
    if (typeof window === 'undefined') {
      throw new Error('Pyodide can only run in browser');
    }

    // Dynamically load pyodide from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';

    await new Promise<void>((resolve, reject) => {
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Pyodide'));
      document.head.appendChild(script);
    });

    // Wait for loadPyodide to be available
    const maxWait = 10000;
    const startTime = Date.now();
    while (!(window as any).loadPyodide) {
      if (Date.now() - startTime > maxWait) {
        throw new Error('Pyodide load timeout');
      }
      await new Promise((r) => setTimeout(r, 100));
    }

    pyodideInstance = await (window as any).loadPyodide();
    return pyodideInstance;
  })();

  return pyodideLoading;
}

/**
 * Check if Pyodide is ready
 */
export function isPyodideReady(): boolean {
  return pyodideInstance !== null;
}

/**
 * Execute Python code
 */
export async function executePython(
  code: string,
  timeout: number = 5000,
): Promise<ExecutionResult> {
  const startTime = performance.now();

  try {
    const pyodide = await loadPyodide();

    // Capture stdout
    pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
    `);

    // Set timeout using Promise.race
    const executionPromise = (async () => {
      try {
        const result = pyodide.runPython(code);
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        const stderr = pyodide.runPython('sys.stderr.getvalue()');

        // Reset stdout/stderr
        pyodide.runPython(`
sys.stdout = StringIO()
sys.stderr = StringIO()
        `);

        let output = stdout || '';
        if (
          result !== undefined &&
          result !== null &&
          String(result) !== 'None'
        ) {
          output += (output ? '\n' : '') + String(result);
        }

        return {
          output: output.trim(),
          error: stderr || undefined,
          executionTime: performance.now() - startTime,
        };
      } catch (error: any) {
        return {
          output: '',
          error: error.message || 'Python execution error',
          executionTime: performance.now() - startTime,
        };
      }
    })();

    const timeoutPromise = new Promise<ExecutionResult>((resolve) => {
      setTimeout(() => {
        resolve({
          output: '',
          error: 'Execution timed out (5s limit)',
          executionTime: timeout,
        });
      }, timeout);
    });

    return Promise.race([executionPromise, timeoutPromise]);
  } catch (error: any) {
    return {
      output: '',
      error: error.message || 'Failed to load Python runtime',
      executionTime: performance.now() - startTime,
    };
  }
}

/**
 * Validate Python code against test cases
 */
export async function validatePython(
  code: string,
  testCases: TestCase[],
  functionName: string = 'solution',
): Promise<ValidationResult> {
  const startTime = performance.now();
  const testResults: ValidationResult['testResults'] = [];
  let allPassed = true;

  try {
    const pyodide = await loadPyodide();

    for (const testCase of testCases) {
      // Parse inputs and create Python call
      const parsedInputs = testCase.input.map((inp) => {
        // Try to parse as JSON, otherwise treat as string
        try {
          const parsed = JSON.parse(inp);
          // Convert to Python literal
          if (Array.isArray(parsed)) return JSON.stringify(parsed);
          if (typeof parsed === 'string') return `"${parsed}"`;
          return String(parsed);
        } catch {
          return `"${inp}"`;
        }
      });

      const wrappedCode = `
${code}

# Call function with test inputs
result = ${functionName}(${parsedInputs.join(', ')})
print(result if result is not None else "")
      `;

      const result = await executePython(wrappedCode, 5000);
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
  } catch (error: any) {
    return {
      passed: false,
      testResults: [
        {
          input: 'N/A',
          expected: 'N/A',
          actual: error.message || 'Failed to run Python',
          passed: false,
        },
      ],
      executionTime: performance.now() - startTime,
    };
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
export async function runPython(code: string): Promise<ExecutionResult> {
  return executePython(code, 5000);
}

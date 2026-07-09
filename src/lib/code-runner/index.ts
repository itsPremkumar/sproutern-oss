/**
 * Unified Test Validator
 * Runs code against test cases for any supported language
 */

import {
  runJavaScript,
  validateJavaScript,
  type ExecutionResult,
  type TestCase,
  type ValidationResult,
} from './javascript-runner';

import { runPython, validatePython } from './python-runner';

export type Language = 'javascript' | 'python' | 'typescript';

// Re-export types
export type { ExecutionResult, TestCase, ValidationResult };

/**
 * Run code without validation (for "Run" button)
 */
export async function runCode(
  code: string,
  language: Language,
): Promise<ExecutionResult> {
  switch (language) {
    case 'javascript':
    case 'typescript':
      return runJavaScript(code);
    case 'python':
      return runPython(code);
    default:
      return {
        output: '',
        error: `Unsupported language: ${language}`,
        executionTime: 0,
      };
  }
}

/**
 * Validate code against test cases (for "Submit" button)
 */
export async function validateCode(
  code: string,
  language: Language,
  testCases: TestCase[],
  functionName: string = 'solution',
): Promise<ValidationResult> {
  switch (language) {
    case 'javascript':
    case 'typescript':
      return validateJavaScript(code, testCases, functionName);
    case 'python':
      return validatePython(code, testCases, functionName);
    default:
      return {
        passed: false,
        testResults: [
          {
            input: 'N/A',
            expected: 'N/A',
            actual: `Unsupported language: ${language}`,
            passed: false,
          },
        ],
        executionTime: 0,
      };
  }
}

/**
 * Calculate score based on test results and performance
 */
export function calculateScore(
  result: ValidationResult,
  options: {
    baseScore?: number;
    bonusPerTest?: number;
    timeBonus?: boolean;
    usedHint?: boolean;
    hintPenalty?: number;
  } = {},
): number {
  const {
    baseScore = 10,
    bonusPerTest = 5,
    timeBonus = true,
    usedHint = false,
    hintPenalty = 10,
  } = options;

  if (!result.passed) return 0;

  let score = baseScore;

  // Bonus for each passed test
  const passedTests = result.testResults.filter((t) => t.passed).length;
  score += passedTests * bonusPerTest;

  // Time bonus (faster = more points, max 20 bonus)
  if (timeBonus && result.executionTime < 100) {
    score += Math.floor((100 - result.executionTime) / 5);
  }

  // Hint penalty
  if (usedHint) {
    score = Math.max(0, score - hintPenalty);
  }

  return score;
}

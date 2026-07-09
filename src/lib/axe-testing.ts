/**
 * Axe Accessibility Testing Integration
 *
 * Integrates axe-core for automated accessibility testing.
 * Can be used in development, CI/CD pipelines, and Playwright tests.
 */

import type { AxeResults, Result, NodeResult } from 'axe-core';

export interface AccessibilityViolation {
  id: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical' | null;
  description: string;
  help: string;
  helpUrl: string;
  nodes: Array<{
    target: string[];
    html: string;
    failureSummary?: string;
  }>;
}

export interface AccessibilityTestResult {
  passed: boolean;
  violations: AccessibilityViolation[];
  violationCount: number;
  incompleteCount: number;
  passedCount: number;
  url: string;
  timestamp: string;
}

/**
 * Convert axe-core results to simplified format
 */
function simplifyResults(
  results: AxeResults,
  url: string,
): AccessibilityTestResult {
  const violations: AccessibilityViolation[] = results.violations.map(
    (violation: Result) => ({
      id: violation.id,
      impact: violation.impact ?? null,
      description: violation.description,
      help: violation.help,
      helpUrl: violation.helpUrl,
      nodes: violation.nodes.map((node: NodeResult) => ({
        target: node.target as string[],
        html: node.html,
        failureSummary: node.failureSummary,
      })),
    }),
  );

  return {
    passed: violations.length === 0,
    violations,
    violationCount: results.violations.length,
    incompleteCount: results.incomplete.length,
    passedCount: results.passes.length,
    url,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Run accessibility tests in the browser
 */
export async function runAccessibilityTest(
  context?: Element | Document,
  options?: {
    runOnly?: string[];
    rules?: Record<string, { enabled: boolean }>;
  },
): Promise<AccessibilityTestResult> {
  if (typeof window === 'undefined') {
    throw new Error(
      'runAccessibilityTest must be run in a browser environment',
    );
  }

  // Dynamically import axe-core
  const axe = await import('axe-core');

  const results = await axe.default.run(context || document, {
    runOnly: options?.runOnly
      ? { type: 'rule', values: options.runOnly }
      : undefined,
    rules: options?.rules,
  });

  return simplifyResults(results, window.location.href);
}

/**
 * WCAG 2.1 AA specific test
 */
export async function runWcag21AATest(
  context?: Element | Document,
): Promise<AccessibilityTestResult> {
  return runAccessibilityTest(context, {
    runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
  });
}

/**
 * Print test results to console
 */
export function printTestResults(results: AccessibilityTestResult): void {
  console.log('\n🔍 Accessibility Test Results');
  console.log('==============================');
  console.log(`URL: ${results.url}`);
  console.log(`Timestamp: ${results.timestamp}`);
  console.log(`Passed: ${results.passedCount}`);
  console.log(`Violations: ${results.violationCount}`);
  console.log(`Incomplete: ${results.incompleteCount}`);

  if (results.violations.length > 0) {
    console.log('\n❌ Violations:');
    results.violations.forEach((violation, index) => {
      console.log(
        `\n${index + 1}. [${violation.impact?.toUpperCase()}] ${violation.id}`,
      );
      console.log(`   ${violation.help}`);
      console.log(`   Help: ${violation.helpUrl}`);
      violation.nodes.forEach((node, nodeIndex) => {
        console.log(`   Node ${nodeIndex + 1}: ${node.target.join(' > ')}`);
        if (node.failureSummary) {
          console.log(`   Fix: ${node.failureSummary}`);
        }
      });
    });
  } else {
    console.log('\n✅ No accessibility violations found!');
  }
}

/**
 * Generate HTML report
 */
export function generateHtmlReport(results: AccessibilityTestResult): string {
  const getImpactColor = (impact: string | null): string => {
    switch (impact) {
      case 'critical':
        return '#dc3545';
      case 'serious':
        return '#fd7e14';
      case 'moderate':
        return '#ffc107';
      case 'minor':
        return '#28a745';
      default:
        return '#6c757d';
    }
  };

  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessibility Test Report</title>
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
    .summary { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; }
    .summary-item { text-align: center; }
    .summary-number { font-size: 2em; font-weight: bold; }
    .passed { color: #28a745; }
    .failed { color: #dc3545; }
    .violation { border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden; }
    .violation-header { padding: 15px; background: #f8f9fa; border-bottom: 1px solid #ddd; }
    .violation-body { padding: 15px; }
    .impact-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; color: white; font-size: 0.8em; text-transform: uppercase; }
    .node { background: #f8f9fa; padding: 10px; margin-top: 10px; border-radius: 4px; font-family: monospace; font-size: 0.9em; overflow-x: auto; }
  </style>
</head>
<body>
  <h1>♿ Accessibility Test Report</h1>
  
  <div class="summary">
    <div class="summary-grid">
      <div class="summary-item">
        <div class="summary-number ${results.passed ? 'passed' : 'failed'}">${results.passed ? '✅' : '❌'}</div>
        <div>${results.passed ? 'Passed' : 'Failed'}</div>
      </div>
      <div class="summary-item">
        <div class="summary-number">${results.violationCount}</div>
        <div>Violations</div>
      </div>
      <div class="summary-item">
        <div class="summary-number">${results.passedCount}</div>
        <div>Passed Rules</div>
      </div>
      <div class="summary-item">
        <div class="summary-number">${results.incompleteCount}</div>
        <div>Incomplete</div>
      </div>
    </div>
    <p style="margin-top: 15px; color: #666;">
      URL: ${results.url}<br>
      Tested: ${results.timestamp}
    </p>
  </div>
`;

  if (results.violations.length > 0) {
    html += '<h2>Violations</h2>';

    results.violations.forEach((violation) => {
      html += `
  <div class="violation">
    <div class="violation-header">
      <span class="impact-badge" style="background: ${getImpactColor(violation.impact)}">${violation.impact || 'unknown'}</span>
      <strong>${violation.id}</strong>
      <p>${violation.help}</p>
      <a href="${violation.helpUrl}" target="_blank">Learn more →</a>
    </div>
    <div class="violation-body">
      <p>${violation.description}</p>
      <h4>Affected Elements (${violation.nodes.length})</h4>
      ${violation.nodes
        .map(
          (node) => `
        <div class="node">
          <strong>Target:</strong> ${node.target.join(' > ')}<br>
          <strong>HTML:</strong> ${node.html.replace(/</g, '&lt;').replace(/>/g, '&gt;')}<br>
          ${node.failureSummary ? `<strong>Fix:</strong> ${node.failureSummary}` : ''}
        </div>
      `,
        )
        .join('')}
    </div>
  </div>
`;
    });
  } else {
    html +=
      '<p style="color: #28a745; font-size: 1.2em;">✅ No accessibility violations found!</p>';
  }

  html += `
</body>
</html>`;

  return html;
}

/**
 * Check if test results pass the threshold
 */
export function passesThreshold(
  results: AccessibilityTestResult,
  options: {
    maxViolations?: number;
    allowedImpacts?: string[];
  } = {},
): boolean {
  const { maxViolations = 0, allowedImpacts = [] } = options;

  // Filter out allowed impacts
  const significantViolations = results.violations.filter(
    (v) => !allowedImpacts.includes(v.impact || ''),
  );

  return significantViolations.length <= maxViolations;
}

/**
 * React hook for development accessibility testing
 */
export function useAccessibilityCheck(
  enabled: boolean = process.env.NODE_ENV === 'development',
) {
  if (typeof window === 'undefined') return;

  if (enabled) {
    // Run on initial load
    setTimeout(async () => {
      try {
        const results = await runWcag21AATest();
        if (results.violations.length > 0) {
          console.warn(
            '⚠️ Accessibility issues detected:',
            results.violations.length,
          );
          printTestResults(results);
        }
      } catch (e) {
        console.warn('Failed to run accessibility check:', e);
      }
    }, 1000);
  }
}

export default {
  runAccessibilityTest,
  runWcag21AATest,
  printTestResults,
  generateHtmlReport,
  passesThreshold,
  useAccessibilityCheck,
};

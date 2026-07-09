/**
 * CGPA Conversion Utility Functions
 *
 * Provides functions to convert CGPA/GPA values to:
 * - Percentage (Indian standards)
 * - US GPA (4.0 scale)
 * - German Grade (Bavarian formula)
 */

export type GradingScale = '10' | '7' | '4';

export interface ConversionResult {
  percentage: number;
  usGpa: string;
  germanGpa: string;
  isValid: boolean;
  error?: string;
}

/**
 * Validates CGPA input against the given scale
 */
export function validateCGPA(
  cgpa: number,
  scale: GradingScale,
): { valid: boolean; error?: string } {
  if (isNaN(cgpa) || cgpa < 0) {
    return { valid: false, error: 'Please enter a valid CGPA' };
  }

  const maxValues: Record<GradingScale, number> = {
    '10': 10,
    '7': 7,
    '4': 4,
  };

  const max = maxValues[scale];
  if (cgpa > max) {
    return { valid: false, error: `Max CGPA/GPA is ${max}` };
  }

  return { valid: true };
}

/**
 * Converts CGPA to percentage based on Indian standards
 *
 * @param cgpa - The CGPA value to convert
 * @param scale - The grading scale ('10', '7', or '4')
 * @returns Percentage value (0-100)
 */
export function cgpaToPercentage(cgpa: number, scale: GradingScale): number {
  let percentage = 0;

  switch (scale) {
    case '10':
      // Standard Indian formula: CGPA × 9.5
      percentage = cgpa * 9.5;
      break;
    case '7':
      // 7-point scale: CGPA × 10 - 7.5
      percentage = cgpa * 10 - 7.5;
      break;
    case '4':
      // 4-point scale: (CGPA / 4) × 100
      percentage = (cgpa / 4) * 100;
      break;
  }

  // Cap between 0 and 100
  return Math.round(Math.max(0, Math.min(100, percentage)) * 100) / 100;
}

/**
 * Converts CGPA to US GPA (4.0 scale)
 *
 * Uses WES approximation for Indian 10-point scale
 *
 * @param cgpa - The CGPA value
 * @param scale - The grading scale
 * @param percentage - The calculated percentage (used for non-10-point scales)
 * @returns US GPA as a string
 */
export function cgpaToUsGpa(
  cgpa: number,
  scale: GradingScale,
  percentage: number,
): string {
  if (scale === '10') {
    // WES approximation for Indian 10-point scale
    if (cgpa >= 9) return '4.0';
    if (cgpa >= 8) return '3.7';
    if (cgpa >= 7) return '3.3';
    if (cgpa >= 6) return '3.0';
    if (cgpa >= 5) return '2.3';
    return '< 2.0';
  }

  // Fallback using percentage for other scales
  if (percentage >= 85) return '4.0';
  if (percentage >= 75) return '3.7';
  if (percentage >= 65) return '3.3';
  if (percentage >= 60) return '3.0';
  return '< 2.5';
}

/**
 * Converts CGPA to German Grade using the Bavarian Formula
 *
 * Formula: N = 1 + 3 × ((Pmax - P) / (Pmax - Pmin))
 * Result: 1.0 (Best) to 4.0 (Pass), 5.0 (Fail)
 *
 * @param cgpa - The CGPA value
 * @param scale - The grading scale
 * @returns German grade as a string
 */
export function cgpaToGermanGrade(cgpa: number, scale: GradingScale): string {
  const scaleParams: Record<GradingScale, { pMax: number; pMin: number }> = {
    '10': { pMax: 10, pMin: 5 },
    '7': { pMax: 7, pMin: 3 },
    '4': { pMax: 4, pMin: 2 },
  };

  const { pMax, pMin } = scaleParams[scale];

  if (cgpa < pMin) {
    return '5.0 (Fail)';
  }

  const germanGrade = 1 + 3 * ((pMax - cgpa) / (pMax - pMin));

  // Round to 1 decimal and cap at minimum 1.0
  const rounded = Math.round(Math.max(1, germanGrade) * 10) / 10;
  return rounded.toFixed(1);
}

/**
 * Performs complete CGPA conversion to all formats
 *
 * @param cgpa - The CGPA value to convert
 * @param scale - The grading scale
 * @returns Complete conversion result with all formats
 */
export function convertCGPA(
  cgpa: number,
  scale: GradingScale,
): ConversionResult {
  const validation = validateCGPA(cgpa, scale);

  if (!validation.valid) {
    return {
      percentage: 0,
      usGpa: 'N/A',
      germanGpa: 'N/A',
      isValid: false,
      error: validation.error,
    };
  }

  const percentage = cgpaToPercentage(cgpa, scale);
  const usGpa = cgpaToUsGpa(cgpa, scale, percentage);
  const germanGpa = cgpaToGermanGrade(cgpa, scale);

  return {
    percentage,
    usGpa,
    germanGpa,
    isValid: true,
  };
}

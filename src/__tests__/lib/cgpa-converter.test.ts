import {
  validateCGPA,
  cgpaToPercentage,
  cgpaToUsGpa,
  cgpaToGermanGrade,
  convertCGPA,
  type GradingScale,
} from '@/lib/cgpa-converter';

describe('CGPA Converter Utilities', () => {
  describe('validateCGPA', () => {
    it('should reject negative CGPA', () => {
      const result = validateCGPA(-1, '10');
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Please enter a valid CGPA');
    });

    it('should reject NaN CGPA', () => {
      const result = validateCGPA(NaN, '10');
      expect(result.valid).toBe(false);
    });

    it('should reject CGPA above scale maximum', () => {
      expect(validateCGPA(11, '10').valid).toBe(false);
      expect(validateCGPA(8, '7').valid).toBe(false);
      expect(validateCGPA(5, '4').valid).toBe(false);
    });

    it('should accept valid CGPA values', () => {
      expect(validateCGPA(8.5, '10').valid).toBe(true);
      expect(validateCGPA(6, '7').valid).toBe(true);
      expect(validateCGPA(3.5, '4').valid).toBe(true);
    });

    it('should accept zero CGPA', () => {
      expect(validateCGPA(0, '10').valid).toBe(true);
    });

    it('should accept maximum CGPA for each scale', () => {
      expect(validateCGPA(10, '10').valid).toBe(true);
      expect(validateCGPA(7, '7').valid).toBe(true);
      expect(validateCGPA(4, '4').valid).toBe(true);
    });
  });

  describe('cgpaToPercentage', () => {
    describe('10-point scale', () => {
      it('should use 9.5 multiplier for Indian standard', () => {
        expect(cgpaToPercentage(10, '10')).toBe(95);
        expect(cgpaToPercentage(8, '10')).toBe(76);
        expect(cgpaToPercentage(7.5, '10')).toBe(71.25);
      });

      it('should return 0 for CGPA 0', () => {
        expect(cgpaToPercentage(0, '10')).toBe(0);
      });
    });

    describe('7-point scale', () => {
      it('should use correct formula: CGPA × 10 - 7.5', () => {
        expect(cgpaToPercentage(7, '7')).toBe(62.5);
        expect(cgpaToPercentage(6, '7')).toBe(52.5);
      });
    });

    describe('4-point scale', () => {
      it('should convert to percentage correctly', () => {
        expect(cgpaToPercentage(4, '4')).toBe(100);
        expect(cgpaToPercentage(3, '4')).toBe(75);
        expect(cgpaToPercentage(2, '4')).toBe(50);
      });
    });

    it('should cap percentage at 100', () => {
      // Edge case: if calculation somehow exceeds 100
      expect(cgpaToPercentage(4, '4')).toBeLessThanOrEqual(100);
    });

    it('should not return negative percentage', () => {
      expect(cgpaToPercentage(0, '7')).toBeGreaterThanOrEqual(0);
    });
  });

  describe('cgpaToUsGpa', () => {
    describe('10-point scale WES approximation', () => {
      it('should return 4.0 for CGPA >= 9', () => {
        expect(cgpaToUsGpa(9, '10', 85.5)).toBe('4.0');
        expect(cgpaToUsGpa(10, '10', 95)).toBe('4.0');
      });

      it('should return 3.7 for CGPA >= 8', () => {
        expect(cgpaToUsGpa(8, '10', 76)).toBe('3.7');
        expect(cgpaToUsGpa(8.9, '10', 84.55)).toBe('3.7');
      });

      it('should return 3.3 for CGPA >= 7', () => {
        expect(cgpaToUsGpa(7, '10', 66.5)).toBe('3.3');
      });

      it('should return 3.0 for CGPA >= 6', () => {
        expect(cgpaToUsGpa(6, '10', 57)).toBe('3.0');
      });

      it('should return 2.3 for CGPA >= 5', () => {
        expect(cgpaToUsGpa(5, '10', 47.5)).toBe('2.3');
      });

      it('should return < 2.0 for CGPA < 5', () => {
        expect(cgpaToUsGpa(4, '10', 38)).toBe('< 2.0');
      });
    });

    describe('percentage-based fallback', () => {
      it('should use percentage for non-10-point scales', () => {
        expect(cgpaToUsGpa(4, '4', 100)).toBe('4.0');
        expect(cgpaToUsGpa(3, '4', 75)).toBe('3.7');
        expect(cgpaToUsGpa(2.6, '4', 65)).toBe('3.3');
        expect(cgpaToUsGpa(2.4, '4', 60)).toBe('3.0');
        expect(cgpaToUsGpa(2, '4', 50)).toBe('< 2.5');
      });
    });
  });

  describe('cgpaToGermanGrade', () => {
    describe('10-point scale', () => {
      it('should return 1.0 for perfect CGPA', () => {
        expect(cgpaToGermanGrade(10, '10')).toBe('1.0');
      });

      it('should return 4.0 for minimum passing CGPA', () => {
        expect(cgpaToGermanGrade(5, '10')).toBe('4.0');
      });

      it('should return 5.0 (Fail) for below minimum', () => {
        expect(cgpaToGermanGrade(4, '10')).toBe('5.0 (Fail)');
      });

      it('should calculate intermediate values correctly', () => {
        // CGPA 7.5: 1 + 3 × ((10 - 7.5) / (10 - 5)) = 1 + 3 × (2.5/5) = 1 + 1.5 = 2.5
        expect(cgpaToGermanGrade(7.5, '10')).toBe('2.5');
      });
    });

    describe('7-point scale', () => {
      it('should use correct min/max for 7-point scale', () => {
        expect(cgpaToGermanGrade(7, '7')).toBe('1.0');
        expect(cgpaToGermanGrade(3, '7')).toBe('4.0');
        expect(cgpaToGermanGrade(2, '7')).toBe('5.0 (Fail)');
      });
    });

    describe('4-point scale', () => {
      it('should use correct min/max for 4-point scale', () => {
        expect(cgpaToGermanGrade(4, '4')).toBe('1.0');
        expect(cgpaToGermanGrade(2, '4')).toBe('4.0');
        expect(cgpaToGermanGrade(1, '4')).toBe('5.0 (Fail)');
      });
    });
  });

  describe('convertCGPA (integration)', () => {
    it('should return all conversions for valid input', () => {
      const result = convertCGPA(8.5, '10');

      expect(result.isValid).toBe(true);
      expect(result.percentage).toBe(80.75);
      expect(result.usGpa).toBe('3.7');
      expect(result.germanGpa).toBe('1.9');
      expect(result.error).toBeUndefined();
    });

    it('should return error for invalid input', () => {
      const result = convertCGPA(-1, '10');

      expect(result.isValid).toBe(false);
      expect(result.error).toBeDefined();
      expect(result.percentage).toBe(0);
      expect(result.usGpa).toBe('N/A');
      expect(result.germanGpa).toBe('N/A');
    });

    it('should handle edge case: zero CGPA', () => {
      const result = convertCGPA(0, '10');

      expect(result.isValid).toBe(true);
      expect(result.percentage).toBe(0);
    });

    it('should handle maximum CGPA', () => {
      const result = convertCGPA(10, '10');

      expect(result.isValid).toBe(true);
      expect(result.percentage).toBe(95);
      expect(result.usGpa).toBe('4.0');
      expect(result.germanGpa).toBe('1.0');
    });
  });

  describe('Real-world scenarios', () => {
    const testCases: Array<{
      description: string;
      cgpa: number;
      scale: GradingScale;
      expectedPercentage: number;
      expectedUsGpa: string;
    }> = [
      {
        description: 'VTU student with 9.0 CGPA',
        cgpa: 9,
        scale: '10',
        expectedPercentage: 85.5,
        expectedUsGpa: '4.0',
      },
      {
        description: 'Anna University student with 7.2 CGPA',
        cgpa: 7.2,
        scale: '10',
        expectedPercentage: 68.4,
        expectedUsGpa: '3.3',
      },
      {
        description: 'US student with 3.5 GPA',
        cgpa: 3.5,
        scale: '4',
        expectedPercentage: 87.5,
        expectedUsGpa: '4.0',
      },
    ];

    testCases.forEach(
      ({ description, cgpa, scale, expectedPercentage, expectedUsGpa }) => {
        it(description, () => {
          const result = convertCGPA(cgpa, scale);
          expect(result.percentage).toBe(expectedPercentage);
          expect(result.usGpa).toBe(expectedUsGpa);
        });
      },
    );
  });
});

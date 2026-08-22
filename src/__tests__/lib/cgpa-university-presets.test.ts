import {
  convertCgpaWithUniversityPreset,
  getUniversityCgpaPreset,
  UNIVERSITY_CGPA_PRESETS,
  type UniversityCgpaPresetId,
} from '@/lib/cgpa-university-presets';

describe('University CGPA presets', () => {
  it('provides exactly 10 selectable university presets', () => {
    expect(UNIVERSITY_CGPA_PRESETS).toHaveLength(10);
  });

  it('uses unique preset ids', () => {
    const ids = UNIVERSITY_CGPA_PRESETS.map((preset) => preset.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each<{
    presetId: UniversityCgpaPresetId;
    cgpa: number;
    expectedPercentage: number;
  }>([
    { presetId: 'anna-university', cgpa: 8.2, expectedPercentage: 82 },
    { presetId: 'vtu', cgpa: 8.2, expectedPercentage: 74.5 },
    { presetId: 'aktu', cgpa: 8.2, expectedPercentage: 74.5 },
    { presetId: 'vit', cgpa: 8.2, expectedPercentage: 82 },
    { presetId: 'rgukt', cgpa: 8.2, expectedPercentage: 82 },
    { presetId: 'cgu-odisha', cgpa: 8.2, expectedPercentage: 77 },
    { presetId: 'nicmar-pune', cgpa: 8.2, expectedPercentage: 77.9 },
    { presetId: 'mgahv', cgpa: 8.2, expectedPercentage: 77 },
    { presetId: 'des-pune', cgpa: 8.2, expectedPercentage: 82 },
    { presetId: 'kannur-university', cgpa: 8, expectedPercentage: 85 },
  ])(
    'applies the $presetId conversion formula',
    ({ presetId, cgpa, expectedPercentage }) => {
      expect(convertCgpaWithUniversityPreset(cgpa, presetId).percentage).toBe(
        expectedPercentage,
      );
    },
  );

  it('rounds converted percentages to two decimal places', () => {
    const result = convertCgpaWithUniversityPreset(8.37, 'nicmar-pune');
    expect(result.percentage).toBe(79.52);
  });

  it('caps results between zero and 100 percent', () => {
    expect(convertCgpaWithUniversityPreset(0, 'vtu').percentage).toBe(0);
    expect(
      convertCgpaWithUniversityPreset(10, 'anna-university').percentage,
    ).toBe(100);
  });

  it('rejects a CGPA above the selected university scale', () => {
    const result = convertCgpaWithUniversityPreset(9.1, 'kannur-university');

    expect(result.isValid).toBe(false);
    expect(result.error).toContain('Max CGPA is 9');
  });

  it('rejects non-finite and negative CGPA values', () => {
    expect(
      convertCgpaWithUniversityPreset(NaN, 'anna-university').isValid,
    ).toBe(false);
    expect(
      convertCgpaWithUniversityPreset(Infinity, 'anna-university').isValid,
    ).toBe(false);
    expect(convertCgpaWithUniversityPreset(-1, 'anna-university').isValid).toBe(
      false,
    );
  });

  it('rejects an unknown preset id', () => {
    const result = convertCgpaWithUniversityPreset(8, 'unknown');

    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please select a valid university preset');
    expect(getUniversityCgpaPreset('unknown')).toBeUndefined();
  });
});

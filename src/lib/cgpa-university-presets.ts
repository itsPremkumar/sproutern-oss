export interface UniversityCgpaPreset {
  id: string;
  name: string;
  maxCgpa: number;
  formula: {
    multiplier: number;
    offset: number;
  };
  formulaLabel: string;
  note?: string;
  sourceUrl: string;
}

export const UNIVERSITY_CGPA_PRESETS = [
  {
    id: 'anna-university',
    name: 'Anna University',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: 0 },
    formulaLabel: 'Percentage = CGPA × 10',
    note: 'Confirm the regulation printed on your grade sheet.',
    sourceUrl: 'https://onlineservices.annauniv.edu/',
  },
  {
    id: 'vtu',
    name: 'Visvesvaraya Technological University (VTU)',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: -7.5 },
    formulaLabel: 'Percentage = (CGPA − 0.75) × 10',
    note: 'Applies to the 2015, 2017 and 2018 schemes.',
    sourceUrl: 'https://vtu.ac.in/cgpa-standard-formula/',
  },
  {
    id: 'aktu',
    name: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: -7.5 },
    formulaLabel: 'Percentage = (CGPA − 0.75) × 10',
    note: 'Check your programme ordinance before official use.',
    sourceUrl: 'https://aktu.ac.in/',
  },
  {
    id: 'vit',
    name: 'Vellore Institute of Technology (VIT)',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: 0 },
    formulaLabel: 'Percentage = CGPA × 10',
    sourceUrl: 'https://vit.ac.in/files/CGPA-to-Percentage-Conversion.pdf',
  },
  {
    id: 'rgukt',
    name: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT)',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: 0 },
    formulaLabel: 'Percentage = CGPA × 10',
    note: 'Based on Registrar order RGUKT/Acad/Exams/01/2014.',
    sourceUrl:
      'https://rguktn.ac.in/examcell/CGPA%20to%20Percentage%20Conversion%20formula.pdf',
  },
  {
    id: 'cgu-odisha',
    name: 'C. V. Raman Global University',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: -5 },
    formulaLabel: 'Percentage = (CGPA − 0.5) × 10',
    sourceUrl: 'https://cgu-odisha.ac.in/exchange-program-cgu/',
  },
  {
    id: 'nicmar-pune',
    name: 'NICMAR University, Pune',
    maxCgpa: 10,
    formula: { multiplier: 9.5, offset: 0 },
    formulaLabel: 'Percentage = CGPA × 9.5',
    sourceUrl: 'https://www.nicmar.ac.in/pune-campus/examinations',
  },
  {
    id: 'mgahv',
    name: 'Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: -5 },
    formulaLabel: 'Percentage = (CGPA × 10) − 5',
    sourceUrl:
      'https://www.hindiuniv.ac.in/students-corner/updated-prospectus/',
  },
  {
    id: 'des-pune',
    name: 'DES Pune University',
    maxCgpa: 10,
    formula: { multiplier: 10, offset: 0 },
    formulaLabel: 'Percentage = CGPA × 10',
    note: 'Approved by the Board of Examinations in February 2025.',
    sourceUrl: 'https://despu.edu.in/academics/examination',
  },
  {
    id: 'kannur-university',
    name: 'Kannur University (M.Sc. Applied Zoology)',
    maxCgpa: 9,
    formula: { multiplier: 10, offset: 5 },
    formulaLabel: 'Percentage = (CGPA × 10) + 5',
    note: 'Programme-specific preset using a 9-point grading scale.',
    sourceUrl:
      'https://kannuruniversity.ac.in/en/academics/campus/all-departments/department-of-zoology/academics/programmes/msc-applied-zoology/',
  },
] as const satisfies readonly UniversityCgpaPreset[];

export type UniversityCgpaPresetId =
  (typeof UNIVERSITY_CGPA_PRESETS)[number]['id'];

export interface UniversityCgpaConversionResult {
  percentage: number;
  isValid: boolean;
  error?: string;
}

export function getUniversityCgpaPreset(
  presetId: string,
): UniversityCgpaPreset | undefined {
  return UNIVERSITY_CGPA_PRESETS.find((preset) => preset.id === presetId);
}

export function convertCgpaWithUniversityPreset(
  cgpa: number,
  presetId: string,
): UniversityCgpaConversionResult {
  const preset = getUniversityCgpaPreset(presetId);

  if (!preset) {
    return {
      percentage: 0,
      isValid: false,
      error: 'Please select a valid university preset',
    };
  }

  if (!Number.isFinite(cgpa) || cgpa < 0) {
    return {
      percentage: 0,
      isValid: false,
      error: 'Please enter a valid CGPA',
    };
  }

  if (cgpa > preset.maxCgpa) {
    return {
      percentage: 0,
      isValid: false,
      error: `Max CGPA is ${preset.maxCgpa} for ${preset.name}`,
    };
  }

  const converted = cgpa * preset.formula.multiplier + preset.formula.offset;
  const clamped = Math.max(0, Math.min(100, converted));
  const percentage =
    Math.round((clamped + Number.EPSILON * Math.abs(clamped)) * 100) / 100;

  return { percentage, isValid: true };
}

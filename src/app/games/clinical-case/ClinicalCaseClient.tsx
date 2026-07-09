'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  DifficultySelector,
  Difficulty,
} from '@/components/games/DifficultySelector';
import { ScoreBoard } from '@/components/games/ScoreBoard';
import { cn } from '@/lib/utils';
import {
  RotateCcw,
  ArrowRight,
  CheckCircle,
  XCircle,
  Trophy,
  Stethoscope,
  ClipboardList,
} from 'lucide-react';

interface ClinicalCase {
  id: string;
  title: string;
  presentation: string;
  vitals: { label: string; value: string; abnormal?: boolean }[];
  labResults: { label: string; value: string; abnormal?: boolean }[];
  question: string;
  options: { label: string; isCorrect: boolean; explanation: string }[];
  difficulty: Difficulty;
}

const cases: ClinicalCase[] = [
  {
    id: 'diabetes-1',
    title: 'Young Patient with Polyuria',
    presentation:
      'A 22-year-old male presents with increased thirst, frequent urination, and unexplained weight loss over the past 3 weeks. He reports feeling fatigued and occasionally experiences blurred vision.',
    vitals: [
      { label: 'BP', value: '120/80 mmHg' },
      { label: 'Pulse', value: '88 bpm' },
      { label: 'Temp', value: '37.1°C' },
      { label: 'BMI', value: '19.5', abnormal: true },
    ],
    labResults: [
      { label: 'Fasting Glucose', value: '280 mg/dL', abnormal: true },
      { label: 'HbA1c', value: '11.2%', abnormal: true },
      { label: 'Urine Ketones', value: '++', abnormal: true },
      { label: 'C-peptide', value: '0.3 ng/mL', abnormal: true },
    ],
    question: 'What is the most likely diagnosis?',
    options: [
      {
        label: 'Type 2 Diabetes Mellitus',
        isCorrect: false,
        explanation:
          'Type 2 usually presents in older, overweight patients with higher C-peptide',
      },
      {
        label: 'Type 1 Diabetes Mellitus',
        isCorrect: true,
        explanation:
          'Young patient, low BMI, ketones, very low C-peptide indicate autoimmune β-cell destruction',
      },
      {
        label: 'Diabetes Insipidus',
        isCorrect: false,
        explanation: 'DI causes polyuria but normal glucose levels',
      },
      {
        label: 'MODY',
        isCorrect: false,
        explanation:
          'MODY typically has family history and milder presentation',
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'thyroid-1',
    title: 'Weight Loss with Anxiety',
    presentation:
      'A 35-year-old female presents with unintentional weight loss, palpitations, tremors, and heat intolerance. She reports feeling anxious and has difficulty sleeping.',
    vitals: [
      { label: 'BP', value: '140/85 mmHg', abnormal: true },
      { label: 'Pulse', value: '110 bpm', abnormal: true },
      { label: 'Temp', value: '37.3°C' },
    ],
    labResults: [
      { label: 'TSH', value: '0.1 mIU/L', abnormal: true },
      { label: 'Free T4', value: '4.8 ng/dL', abnormal: true },
      { label: 'Free T3', value: '8.2 pg/mL', abnormal: true },
    ],
    question: 'What is the underlying pathophysiology?',
    options: [
      {
        label: 'TSH-secreting pituitary adenoma',
        isCorrect: false,
        explanation: 'This would show elevated TSH',
      },
      {
        label: 'Autoimmune stimulation of TSH receptors',
        isCorrect: true,
        explanation:
          "Graves' disease: TSI antibodies mimic TSH, causing hyperthyroidism with suppressed TSH",
      },
      {
        label: 'Iodine deficiency',
        isCorrect: false,
        explanation: 'Iodine deficiency causes hypothyroidism',
      },
      {
        label: 'Thyroid hormone resistance',
        isCorrect: false,
        explanation: 'This would show elevated TSH with high T4',
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'anemia-1',
    title: 'Fatigue in a Vegetarian',
    presentation:
      'A 28-year-old strict vegan female presents with fatigue, pallor, and dyspnea on exertion. She mentions occasional tingling in her feet and difficulty concentrating.',
    vitals: [
      { label: 'BP', value: '118/75 mmHg' },
      { label: 'Pulse', value: '95 bpm' },
      { label: 'Pallor', value: 'Present', abnormal: true },
    ],
    labResults: [
      { label: 'Hb', value: '9.2 g/dL', abnormal: true },
      { label: 'MCV', value: '115 fL', abnormal: true },
      { label: 'Vitamin B12', value: '95 pg/mL', abnormal: true },
      {
        label: 'RBC Morphology',
        value: 'Hypersegmented neutrophils',
        abnormal: true,
      },
    ],
    question: 'What type of anemia is this?',
    options: [
      {
        label: 'Iron deficiency anemia',
        isCorrect: false,
        explanation: 'Iron deficiency causes microcytic (low MCV) anemia',
      },
      {
        label: 'Megaloblastic anemia due to B12 deficiency',
        isCorrect: true,
        explanation:
          'High MCV, low B12, hypersegmented neutrophils, neurologic symptoms = B12 deficiency',
      },
      {
        label: 'Thalassemia',
        isCorrect: false,
        explanation: 'Thalassemia causes microcytic anemia',
      },
      {
        label: 'Sickle cell anemia',
        isCorrect: false,
        explanation: 'Sickle cell shows different RBC morphology',
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'kidney-1',
    title: 'Swelling and Frothy Urine',
    presentation:
      'A 45-year-old male with long-standing diabetes presents with bilateral leg swelling and foamy urine. He has had diabetes for 15 years with poor control.',
    vitals: [
      { label: 'BP', value: '165/100 mmHg', abnormal: true },
      { label: 'Pitting edema', value: '++', abnormal: true },
    ],
    labResults: [
      { label: 'Creatinine', value: '2.8 mg/dL', abnormal: true },
      { label: 'eGFR', value: '28 mL/min', abnormal: true },
      { label: 'Urine Protein', value: '4.2 g/24hr', abnormal: true },
      { label: 'Albumin', value: '2.5 g/dL', abnormal: true },
    ],
    question: 'What is the most likely complication?',
    options: [
      {
        label: 'Acute kidney injury',
        isCorrect: false,
        explanation:
          'AKI is sudden; this is chronic with long-standing diabetes',
      },
      {
        label: 'Diabetic nephropathy with CKD Stage 4',
        isCorrect: true,
        explanation:
          'Proteinuria + low eGFR + hypertension + edema in diabetic = diabetic nephropathy',
      },
      {
        label: 'Minimal change disease',
        isCorrect: false,
        explanation:
          'MCD is common in children, not typical of diabetic patients',
      },
      {
        label: 'Acute glomerulonephritis',
        isCorrect: false,
        explanation: 'AGN presents more acutely with hematuria',
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'mi-1',
    title: 'Chest Pain with Diaphoresis',
    presentation:
      'A 58-year-old male smoker with hypertension presents with crushing substernal chest pain radiating to left arm, diaphoresis, and nausea for 2 hours.',
    vitals: [
      { label: 'BP', value: '90/60 mmHg', abnormal: true },
      { label: 'Pulse', value: '110 bpm', abnormal: true },
      { label: 'SpO2', value: '94%', abnormal: true },
    ],
    labResults: [
      { label: 'Troponin I', value: '8.5 ng/mL', abnormal: true },
      { label: 'ECG', value: 'ST elevation in V1-V4', abnormal: true },
      { label: 'CK-MB', value: '45 U/L', abnormal: true },
    ],
    question: 'What is the immediate priority treatment?',
    options: [
      {
        label: 'CT angiography',
        isCorrect: false,
        explanation: 'CT wastes time; STEMI needs immediate intervention',
      },
      {
        label: 'Emergency PCI (angioplasty)',
        isCorrect: true,
        explanation:
          'STEMI with classic presentation — door-to-balloon time is critical',
      },
      {
        label: 'Thrombolytics only',
        isCorrect: false,
        explanation: 'PCI is preferred if available within 90 minutes',
      },
      {
        label: 'Admit for observation',
        isCorrect: false,
        explanation: 'Active STEMI requires immediate intervention',
      },
    ],
    difficulty: 'hard',
  },
];

interface GameState {
  phase: 'setup' | 'playing' | 'result';
  difficulty: Difficulty;
  currentCase: ClinicalCase | null;
  selectedIndex: number | null;
  roundNumber: number;
  totalRounds: number;
  score: number;
  correctAnswers: number;
  usedIds: string[];
}

export default function ClinicalCaseClient() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    difficulty: 'easy',
    currentCase: null,
    selectedIndex: null,
    roundNumber: 0,
    totalRounds: 3,
    score: 0,
    correctAnswers: 0,
    usedIds: [],
  });
  const [showFeedback, setShowFeedback] = useState(false);

  const getRandomCase = useCallback(
    (difficulty: Difficulty, usedIds: string[]): ClinicalCase | null => {
      const available = cases.filter(
        (c) => c.difficulty === difficulty && !usedIds.includes(c.id),
      );
      if (available.length === 0) {
        const all = cases.filter((c) => c.difficulty === difficulty);
        return all.length > 0
          ? all[Math.floor(Math.random() * all.length)]
          : null;
      }
      return available[Math.floor(Math.random() * available.length)];
    },
    [],
  );

  const startGame = useCallback(
    (difficulty: Difficulty) => {
      const caseData = getRandomCase(difficulty, []);
      if (!caseData) return;
      setGameState({
        phase: 'playing',
        difficulty,
        currentCase: caseData,
        selectedIndex: null,
        roundNumber: 1,
        totalRounds: 3,
        score: 0,
        correctAnswers: 0,
        usedIds: [caseData.id],
      });
      setShowFeedback(false);
    },
    [getRandomCase],
  );

  const selectAnswer = (index: number) => {
    if (showFeedback) return;
    const isCorrect = gameState.currentCase?.options[index].isCorrect ?? false;
    const points = isCorrect
      ? gameState.difficulty === 'hard'
        ? 150
        : gameState.difficulty === 'medium'
          ? 100
          : 50
      : 0;
    setGameState((prev) => ({
      ...prev,
      selectedIndex: index,
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
    setShowFeedback(true);
  };

  const nextRound = () => {
    if (gameState.roundNumber >= gameState.totalRounds) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }
    const caseData = getRandomCase(gameState.difficulty, gameState.usedIds);
    if (!caseData) {
      setGameState((prev) => ({ ...prev, phase: 'result' }));
      return;
    }
    setGameState((prev) => ({
      ...prev,
      currentCase: caseData,
      selectedIndex: null,
      roundNumber: prev.roundNumber + 1,
      usedIds: [...prev.usedIds, caseData.id],
    }));
    setShowFeedback(false);
  };

  if (gameState.phase === 'setup') {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Select Difficulty
          </h2>
          <DifficultySelector
            selected={gameState.difficulty}
            onChange={(d) =>
              setGameState((prev) => ({ ...prev, difficulty: d }))
            }
            className="mb-8"
          />
          <div className="mb-8 rounded-xl bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">How to Play:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              <li>Read the clinical vignette carefully</li>
              <li>Analyze vitals and lab results</li>
              <li>Apply diagnostic reasoning to select the correct answer</li>
              <li>Perfect practice for NEET clinical scenarios!</li>
            </ol>
          </div>
          <Button
            onClick={() => startGame(gameState.difficulty)}
            size="lg"
            className="w-full gap-2"
          >
            <Stethoscope className="h-5 w-5" />
            Start Clinical Rounds
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.phase === 'result') {
    return (
      <ScoreBoard
        score={gameState.score}
        totalQuestions={gameState.totalRounds}
        correctAnswers={gameState.correctAnswers}
        incorrectAnswers={gameState.totalRounds - gameState.correctAnswers}
        streak={0}
        bestStreak={gameState.correctAnswers}
        onPlayAgain={() =>
          setGameState((prev) => ({ ...prev, phase: 'setup', usedIds: [] }))
        }
      />
    );
  }

  const clinicalCase = gameState.currentCase;
  if (!clinicalCase) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <div className="text-xl font-bold text-blue-600">
            {gameState.roundNumber}/{gameState.totalRounds}
          </div>
          <div className="text-xs text-muted-foreground">Case</div>
        </div>
        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <div className="text-xl font-bold text-green-600">
            {gameState.score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <div className="text-xl font-bold text-purple-600">
            {gameState.correctAnswers}
          </div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <div className="mb-4 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">{clinicalCase.title}</h3>
        </div>

        <div className="mb-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
          <p className="text-sm leading-relaxed">{clinicalCase.presentation}</p>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <h4 className="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
              Vitals
            </h4>
            <div className="space-y-1">
              {clinicalCase.vitals.map((v, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'text-sm',
                    v.abnormal && 'font-medium text-red-600 dark:text-red-400',
                  )}
                >
                  {v.label}: {v.value}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <h4 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
              Lab Results
            </h4>
            <div className="space-y-1">
              {clinicalCase.labResults.map((l, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'text-sm',
                    l.abnormal && 'font-medium text-red-600 dark:text-red-400',
                  )}
                >
                  {l.label}: {l.value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400">
            {clinicalCase.question}
          </h4>
        </div>

        <div className="space-y-2">
          {clinicalCase.options.map((option, idx) => {
            const isSelected = gameState.selectedIndex === idx;
            const isCorrect = option.isCorrect;
            return (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                disabled={showFeedback}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all',
                  !showFeedback &&
                    'cursor-pointer hover:border-primary hover:bg-primary/5',
                  showFeedback &&
                    isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50 dark:bg-green-900/20',
                  showFeedback &&
                    isSelected &&
                    !isCorrect &&
                    'border-red-500 bg-red-50 dark:bg-red-900/20',
                  showFeedback &&
                    !isSelected &&
                    isCorrect &&
                    'border-green-500 bg-green-50/50 dark:bg-green-900/10',
                )}
              >
                {showFeedback && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className="flex-1">{option.label}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && gameState.selectedIndex !== null && (
          <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {clinicalCase.options[gameState.selectedIndex].explanation}
            </p>
          </div>
        )}

        {showFeedback && (
          <Button
            onClick={nextRound}
            className="mt-6 w-full"
          >
            {gameState.roundNumber >= gameState.totalRounds ? (
              <>
                <Trophy className="mr-2 h-4 w-4" />
                View Results
              </>
            ) : (
              <>
                <ArrowRight className="mr-2 h-4 w-4" />
                Next Case
              </>
            )}
          </Button>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() =>
            setGameState((prev) => ({ ...prev, phase: 'setup', usedIds: [] }))
          }
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}

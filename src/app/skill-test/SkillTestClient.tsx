'use client';

import { useState, useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import type { GenerateMCQQuestionsOutput } from '@/ai/flows/generate-mcq-questions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Loader2,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
  Clock,
  Flag,
  Bookmark,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { createQuizAction } from './actions';

export type UserAnswer = {
  questionIndex: number;
  selectedOption: number;
};

const initialState = {
  message: '',
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full"
      size="lg"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating Quiz...
        </>
      ) : (
        'Start Quiz'
      )}
    </Button>
  );
}

function SkillForm({
  onQuizStart,
}: {
  onQuizStart: (data: GenerateMCQQuestionsOutput) => void;
}) {
  const [state, formAction] = useActionState(createQuizAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === 'success' && state.data) {
      onQuizStart(state.data);
    } else if (state.message && state.message !== 'success') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, onQuizStart, toast]);

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>Create Your Quiz</CardTitle>
        <CardDescription>
          Enter the skills you want to be tested on, and we'll generate a
          personalized quiz for you.
        </CardDescription>
      </CardHeader>
      <form
        ref={formRef}
        action={formAction}
      >
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Textarea
              id="skills"
              name="skills"
              placeholder="e.g., React, TypeScript, Next.js, Tailwind CSS"
              required
              rows={4}
            />
            {state.errors?.skills && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.skills[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="numberOfQuestions">Number of Questions</Label>
            <Select
              name="numberOfQuestions"
              defaultValue="5"
            >
              <SelectTrigger
                id="numberOfQuestions"
                className="w-full"
              >
                <SelectValue placeholder="Select number of questions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.numberOfQuestions && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.numberOfQuestions[0]}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}

function Quiz({
  quizData,
  onQuizSubmit,
  initialAnswers,
}: {
  quizData: GenerateMCQQuestionsOutput;
  onQuizSubmit: (answers: UserAnswer[]) => void;
  initialAnswers: UserAnswer[];
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(initialAnswers);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes timer
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<number[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [showQuestionPalette, setShowQuestionPalette] = useState(true);
  const questions = quizData.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const totalQuestions = questions.length;
  const answeredQuestions = userAnswers.length;

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      onQuizSubmit(userAnswers);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onQuizSubmit, userAnswers]);

  const handleAnswerSelect = (optionIndex: number) => {
    const existingAnswerIndex = userAnswers.findIndex(
      (answer) => answer.questionIndex === currentQuestionIndex,
    );
    const newAnswer = {
      questionIndex: currentQuestionIndex,
      selectedOption: optionIndex,
    };

    let updatedAnswers;
    if (existingAnswerIndex !== -1) {
      updatedAnswers = [...userAnswers];
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers = [...userAnswers, newAnswer];
    }
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleQuestionNavigation = (index: number) => {
    setCurrentQuestionIndex(index);
    setShowQuestionPalette(false);
  };

  const toggleBookmark = () => {
    setBookmarkedQuestions((prev) =>
      prev.includes(currentQuestionIndex)
        ? prev.filter((q) => q !== currentQuestionIndex)
        : [...prev, currentQuestionIndex],
    );
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) =>
      prev.includes(currentQuestionIndex)
        ? prev.filter((q) => q !== currentQuestionIndex)
        : [...prev, currentQuestionIndex],
    );
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.length - userAnswers.length;
    if (unansweredQuestions > 0) {
      if (
        !confirm(
          `You have ${unansweredQuestions} unanswered questions. Are you sure you want to submit?`,
        )
      ) {
        return;
      }
    }
    onQuizSubmit(userAnswers);
  };

  const selectedOption = userAnswers.find(
    (answer) => answer.questionIndex === currentQuestionIndex,
  )?.selectedOption;

  return (
    <div className="flex w-full flex-col gap-6 lg:flex-row">
      {/* Question Navigation Panel */}
      <div
        className={cn(
          'w-full lg:w-64',
          showQuestionPalette ? 'block' : 'hidden lg:block',
        )}
      >
        <Card className="w-full lg:sticky lg:top-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, index) => {
                const isAnswered = userAnswers.some(
                  (a) => a.questionIndex === index,
                );
                const isBookmarked = bookmarkedQuestions.includes(index);
                const isFlagged = flaggedQuestions.includes(index);
                const isCurrent = currentQuestionIndex === index;

                return (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => handleQuestionNavigation(index)}
                          className={cn(
                            'relative flex h-10 w-10 items-center justify-center rounded-md border transition-colors',
                            isCurrent
                              ? 'border-primary bg-primary text-primary-foreground'
                              : isAnswered
                                ? 'bg-muted'
                                : 'hover:bg-accent',
                            isBookmarked && 'ring-2 ring-yellow-400',
                            isFlagged && 'ring-2 ring-red-500',
                          )}
                        >
                          {index + 1}
                          {isBookmarked && (
                            <Bookmark
                              className="absolute -right-1 -top-1 h-3 w-3 text-yellow-400"
                              fill="currentColor"
                            />
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Question {index + 1}
                          {isBookmarked ? ' • Bookmarked' : ''}
                          {isFlagged ? ' • Flagged' : ''}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <div className="flex w-full items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-muted"></div>
              <span className="text-sm">Unanswered</span>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <span className="text-sm">Current</span>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-muted ring-2 ring-yellow-400"></div>
              <span className="text-sm">Bookmarked</span>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-muted ring-2 ring-red-500"></div>
              <span className="text-sm">Flagged</span>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Main Quiz Content */}
      <Card className="flex-1 shadow-lg">
        <CardHeader>
          <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowQuestionPalette(!showQuestionPalette)}
              >
                <span className="sr-only">Toggle question palette</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line
                    x1="4"
                    y1="12"
                    x2="20"
                    y2="12"
                  ></line>
                  <line
                    x1="4"
                    y1="6"
                    x2="20"
                    y2="6"
                  ></line>
                  <line
                    x1="4"
                    y1="18"
                    x2="20"
                    y2="18"
                  ></line>
                </svg>
              </Button>
              <CardTitle>
                Question {currentQuestionIndex + 1}/{questions.length}
              </CardTitle>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm font-medium">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  {String(minutes).padStart(2, '0')}:
                  {String(seconds).padStart(2, '0')}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {answeredQuestions} of {totalQuestions} answered
              </div>
            </div>
          </div>
          <Progress
            value={progress}
            className="h-2"
          />
        </CardHeader>
        <CardContent className="relative min-h-[300px] space-y-6">
          <div className="flex items-start justify-between gap-4">
            <p className="flex-1 text-lg font-medium">
              {currentQuestion.question}
            </p>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleBookmark}
                      className="h-8 w-8"
                    >
                      <Bookmark
                        className={cn(
                          'h-4 w-4',
                          bookmarkedQuestions.includes(currentQuestionIndex)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground',
                        )}
                      />
                      <span className="sr-only">Bookmark question</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {bookmarkedQuestions.includes(currentQuestionIndex)
                        ? 'Remove bookmark'
                        : 'Bookmark this question'}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleFlag}
                      className="h-8 w-8"
                    >
                      <Flag
                        className={cn(
                          'h-4 w-4',
                          flaggedQuestions.includes(currentQuestionIndex)
                            ? 'fill-red-500 text-red-500'
                            : 'text-muted-foreground',
                        )}
                      />
                      <span className="sr-only">Flag question</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {flaggedQuestions.includes(currentQuestionIndex)
                        ? 'Remove flag'
                        : 'Flag for review'}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <RadioGroup
            value={
              selectedOption !== undefined ? String(selectedOption) : undefined
            }
            onValueChange={(value) => handleAnswerSelect(Number(value))}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const optionLetter = String.fromCharCode(65 + index); // A, B, C, D

              return (
                <Label
                  key={index}
                  htmlFor={`option-${index}`}
                  className={cn(
                    'group flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-all hover:bg-accent/50',
                    isSelected
                      ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/30'
                      : 'border-muted-foreground/20',
                    'hover:border-primary/30',
                  )}
                >
                  <div
                    className={cn(
                      'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border',
                      isSelected
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted-foreground/30 group-hover:border-primary/50',
                    )}
                  >
                    {optionLetter}
                  </div>
                  <div className="flex-1">
                    <RadioGroupItem
                      value={String(index)}
                      id={`option-${index}`}
                      className="sr-only"
                    />
                    <span className="text-base font-normal leading-relaxed">
                      {option}
                    </span>
                  </div>
                </Label>
              );
            })}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row">
          <div className="flex w-full gap-2 sm:w-auto">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex-1 sm:flex-none"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                // Skip to next unanswered question
                const nextUnanswered = questions.findIndex(
                  (_, idx) => !userAnswers.some((a) => a.questionIndex === idx),
                );
                if (nextUnanswered !== -1) {
                  setCurrentQuestionIndex(nextUnanswered);
                } else {
                  handleNext();
                }
              }}
              className="flex-1 sm:flex-none"
            >
              Skip to Unanswered
            </Button>
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            {currentQuestionIndex < questions.length - 1 ? (
              <Button
                onClick={handleNext}
                className="flex-1 sm:flex-none"
              >
                Next
              </Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="flex-1 sm:flex-none">Submit Quiz</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Ready to submit your quiz?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {userAnswers.length} of {questions.length} questions
                          answered
                        </span>
                      </div>
                      {flaggedQuestions.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Flag className="h-4 w-4 text-destructive" />
                          <span>
                            {flaggedQuestions.length} questions flagged for
                            review
                          </span>
                        </div>
                      )}
                      {bookmarkedQuestions.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Bookmark
                            className="h-4 w-4 text-yellow-400"
                            fill="currentColor"
                          />
                          <span>
                            {bookmarkedQuestions.length} questions bookmarked
                          </span>
                        </div>
                      )}
                      <p className="mt-2">
                        You won't be able to change your answers after
                        submission.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Review Answers</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleSubmit}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Submit Quiz
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function Results({
  quizData,
  userAnswers,
  onRestart,
}: {
  quizData: GenerateMCQQuestionsOutput;
  userAnswers: UserAnswer[];
  onRestart: () => void;
}) {
  const { questions } = quizData;
  let correctAnswersCount = 0;

  const results = questions.map((question, index) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.questionIndex === index,
    );
    const isCorrect =
      userAnswer?.selectedOption === question.correctAnswerIndex;
    if (isCorrect) {
      correctAnswersCount++;
    }
    return { question, userAnswer, isCorrect };
  });

  const score = (correctAnswersCount / questions.length) * 100;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 50) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="items-center text-center">
        <CardTitle className="text-3xl">Quiz Results</CardTitle>
        <CardDescription>
          You scored{' '}
          <strong className={cn('text-2xl font-bold', getScoreColor(score))}>
            {correctAnswersCount}
          </strong>{' '}
          out of{' '}
          <strong className="text-2xl font-bold">{questions.length}</strong>
        </CardDescription>
        <p className={cn('text-4xl font-bold', getScoreColor(score))}>
          {score.toFixed(0)}%
        </p>
      </CardHeader>
      <CardContent>
        <h3 className="mb-4 text-center text-lg font-semibold">
          Review Your Answers
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {results.map(({ question, userAnswer, isCorrect }, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
            >
              <AccordionTrigger
                className={cn(
                  isCorrect === false
                    ? 'text-destructive'
                    : 'text-foreground/80',
                  'hover:no-underline',
                )}
              >
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="text-success" />
                  ) : (
                    <XCircle className="text-destructive" />
                  )}
                  Question {index + 1}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 font-medium">{question.question}</p>
                <ul className="space-y-2">
                  {question.options.map((option, optionIndex) => {
                    const isCorrectAnswer =
                      question.correctAnswerIndex === optionIndex;
                    const isSelected =
                      userAnswer?.selectedOption === optionIndex;

                    return (
                      <li
                        key={optionIndex}
                        className={cn(
                          'flex items-center justify-between rounded-md border p-3',
                          isCorrectAnswer
                            ? 'bg-success/10 border-success/30'
                            : '',
                          isSelected && !isCorrectAnswer
                            ? 'border-destructive/30 bg-destructive/10'
                            : '',
                        )}
                      >
                        <span>{option}</span>
                        {isCorrectAnswer ? (
                          <CheckCircle2 className="text-success h-5 w-5" />
                        ) : isSelected ? (
                          <XCircle className="h-5 w-5 text-destructive" />
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
                {userAnswer === undefined && (
                  <p className="text-warning mt-4 flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    You did not answer this question.
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onRestart}
          className="w-full"
          size="lg"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Take Another Quiz
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function SkillTestClient() {
  const [appState, setAppState] = useState<'input' | 'quiz' | 'results'>(
    'input',
  );
  const [quizData, setQuizData] = useState<GenerateMCQQuestionsOutput | null>(
    null,
  );
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const handleQuizStart = (data: GenerateMCQQuestionsOutput) => {
    setQuizData(data);
    setUserAnswers([]);
    setAppState('quiz');
  };

  const handleQuizSubmit = (answers: UserAnswer[]) => {
    setUserAnswers(answers);
    setAppState('results');
  };

  const handleRestart = () => {
    setQuizData(null);
    setUserAnswers([]);
    setAppState('input');
  };

  const renderContent = () => {
    switch (appState) {
      case 'input':
        return <SkillForm onQuizStart={handleQuizStart} />;
      case 'quiz':
        if (!quizData) return null;
        return (
          <Quiz
            quizData={quizData}
            onQuizSubmit={handleQuizSubmit}
            initialAnswers={userAnswers}
          />
        );
      case 'results':
        if (!quizData) return null;
        return (
          <Results
            quizData={quizData}
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        );
      default:
        return <SkillForm onQuizStart={handleQuizStart} />;
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <header className="mb-8 text-center">
          <div className="mb-2 inline-flex items-center gap-3">
            <BrainCircuit className="h-10 w-10 text-primary" />
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
              SkillTest Pro
            </h1>
          </div>
          <p className="text-muted-foreground">
            Sharpen your skills with AI-powered quizzes tailored to you.
          </p>
        </header>
        <div className="w-full">{renderContent()}</div>
      </div>
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Plus,
  Trash2,
  Download,
  Upload,
  Eye,
  EyeOff,
  Shuffle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed?: Date;
  reviewCount: number;
}

export default function StudyFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState<
    'normal' | 'shuffle' | 'difficulty'
  >('normal');
  const [newCard, setNewCard] = useState({ front: '', back: '' });
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState<
    'all' | 'easy' | 'medium' | 'hard'
  >('all');

  useEffect(() => {
    const savedCards = localStorage.getItem('flashcards');
    if (savedCards) {
      setFlashcards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    if (flashcards.length > 0) {
      localStorage.setItem('flashcards', JSON.stringify(flashcards));
    }
  }, [flashcards]);

  const getFilteredCards = () => {
    let filtered = [...flashcards];

    if (filterDifficulty !== 'all') {
      filtered = filtered.filter(
        (card) => card.difficulty === filterDifficulty,
      );
    }

    if (studyMode === 'shuffle') {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    } else if (studyMode === 'difficulty') {
      filtered = [...filtered].sort((a, b) => {
        const difficultyOrder = { hard: 0, medium: 1, easy: 2 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      });
    }

    return filtered;
  };

  const currentCards = getFilteredCards();
  const currentCard = currentCards[currentIndex];

  const addCard = () => {
    if (newCard.front.trim() && newCard.back.trim()) {
      const card: Flashcard = {
        id: Date.now().toString(),
        front: newCard.front.trim(),
        back: newCard.back.trim(),
        difficulty: 'medium',
        reviewCount: 0,
      };
      setFlashcards([...flashcards, card]);
      setNewCard({ front: '', back: '' });
      setIsAddingCard(false);
    }
  };

  const deleteCard = (id: string) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
    if (currentIndex >= currentCards.length - 1) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const markDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    if (!currentCard) return;

    setFlashcards(
      flashcards.map((card) =>
        card.id === currentCard.id
          ? {
              ...card,
              difficulty,
              lastReviewed: new Date(),
              reviewCount: card.reviewCount + 1,
            }
          : card,
      ),
    );

    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < currentCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setShowAnswer(false);
    }
  };

  const resetProgress = () => {
    setFlashcards(
      flashcards.map((card) => ({
        ...card,
        difficulty: 'medium',
        reviewCount: 0,
        lastReviewed: undefined,
      })),
    );
  };

  const exportCards = () => {
    const data = JSON.stringify(flashcards, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashcards.json';
    a.click();
  };

  const importCards = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setFlashcards([...flashcards, ...imported]);
        } catch (error) {
          console.error('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStats = () => {
    const total = flashcards.length;
    const easy = flashcards.filter((c) => c.difficulty === 'easy').length;
    const medium = flashcards.filter((c) => c.difficulty === 'medium').length;
    const hard = flashcards.filter((c) => c.difficulty === 'hard').length;
    const reviewed = flashcards.filter((c) => c.lastReviewed).length;

    return { total, easy, medium, hard, reviewed };
  };

  const stats = getStats();

  if (flashcards.length === 0) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold">Study Flashcards</h2>
          <p className="text-muted-foreground">
            Create and study with digital flashcards
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>No flashcards yet</CardTitle>
            <CardDescription>
              Create your first flashcard to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setIsAddingCard(true)}
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create First Flashcard
            </Button>
          </CardContent>
        </Card>

        {isAddingCard && (
          <Card>
            <CardHeader>
              <CardTitle>New Flashcard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="front">Front (Question)</Label>
                <Textarea
                  id="front"
                  placeholder="Enter the question or term"
                  value={newCard.front}
                  onChange={(e) =>
                    setNewCard((prev) => ({ ...prev, front: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="back">Back (Answer)</Label>
                <Textarea
                  id="back"
                  placeholder="Enter the answer or definition"
                  value={newCard.back}
                  onChange={(e) =>
                    setNewCard((prev) => ({ ...prev, back: e.target.value }))
                  }
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={addCard}>Add Card</Button>
                <Button
                  variant="outline"
                  onClick={() => setIsAddingCard(false)}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold">Study Flashcards</h2>
        <p className="text-muted-foreground">
          Master your material with spaced repetition
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    Card {currentIndex + 1} of {currentCards.length}
                  </CardTitle>
                  <CardDescription>
                    {currentCard && (
                      <Badge
                        className={getDifficultyColor(currentCard.difficulty)}
                      >
                        {currentCard.difficulty}
                      </Badge>
                    )}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={showAnswer ? 'default' : 'outline'}
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {showAnswer ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Progress
                value={((currentIndex + 1) / currentCards.length) * 100}
              />
            </CardHeader>
            <CardContent>
              {currentCard && (
                <div className="space-y-4">
                  <div
                    className={`min-h-[200px] cursor-pointer rounded-lg border p-6 transition-all ${
                      isFlipped
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <div className="text-center">
                      <p className="text-lg font-medium">
                        {isFlipped ? currentCard.back : currentCard.front}
                      </p>
                      <p className="mt-4 text-sm opacity-70">
                        {isFlipped ? 'Answer' : 'Question'}
                      </p>
                    </div>
                  </div>

                  {showAnswer && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Quick view:
                      </p>
                      <div className="rounded bg-muted p-3">
                        <p className="font-medium">{currentCard.front}</p>
                        <Separator className="my-2" />
                        <p>{currentCard.back}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={prevCard}
                      disabled={currentIndex === 0}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={nextCard}
                      disabled={currentIndex === currentCards.length - 1}
                    >
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      How difficult was this?
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markDifficulty('easy')}
                        className="text-green-600 hover:text-green-700"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Easy
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markDifficulty('medium')}
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        Medium
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markDifficulty('hard')}
                        className="text-red-600 hover:text-red-700"
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Hard
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Total Cards</span>
                <span className="font-medium">{stats.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Reviewed</span>
                <span className="font-medium">{stats.reviewed}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-green-600">Easy</span>
                  <span className="font-medium">{stats.easy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-yellow-600">Medium</span>
                  <span className="font-medium">{stats.medium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-red-600">Hard</span>
                  <span className="font-medium">{stats.hard}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={resetProgress}
                className="w-full"
              >
                Reset Progress
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Mode</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant={studyMode === 'normal' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setStudyMode('normal')}
                className="w-full"
              >
                Normal Order
              </Button>
              <Button
                variant={studyMode === 'shuffle' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setStudyMode('shuffle')}
                className="w-full"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Shuffle
              </Button>
              <Button
                variant={studyMode === 'difficulty' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setStudyMode('difficulty')}
                className="w-full"
              >
                By Difficulty
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={() => setIsAddingCard(true)}
                size="sm"
                className="w-full"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Card
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={exportCards}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
              >
                <label
                  htmlFor="import"
                  className="flex cursor-pointer items-center justify-center"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Import
                </label>
                <input
                  id="import"
                  type="file"
                  accept=".json"
                  onChange={importCards}
                  className="hidden"
                />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {isAddingCard && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Flashcard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="new-front">Front (Question)</Label>
              <Textarea
                id="new-front"
                placeholder="Enter the question or term"
                value={newCard.front}
                onChange={(e) =>
                  setNewCard((prev) => ({ ...prev, front: e.target.value }))
                }
              />
            </div>
            <div>
              <Label htmlFor="new-back">Back (Answer)</Label>
              <Textarea
                id="new-back"
                placeholder="Enter the answer or definition"
                value={newCard.back}
                onChange={(e) =>
                  setNewCard((prev) => ({ ...prev, back: e.target.value }))
                }
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={addCard}>Add Card</Button>
              <Button
                variant="outline"
                onClick={() => setIsAddingCard(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

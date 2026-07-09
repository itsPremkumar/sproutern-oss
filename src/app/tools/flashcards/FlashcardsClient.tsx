'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
  Layers,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  CheckCircle,
  XCircle,
  Edit,
  Save,
} from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  lastReviewed?: Date;
  confidence: number; // 0-2: hard, medium, easy
}

const preloadedDecks: Record<string, Flashcard[]> = {
  DSA: [
    {
      id: '1',
      front: 'What is the time complexity of Binary Search?',
      back: 'O(log n) - It halves the search space in each step',
      category: 'DSA',
      confidence: 0,
    },
    {
      id: '2',
      front: 'What is a Stack?',
      back: 'A linear data structure following LIFO (Last In First Out) principle',
      category: 'DSA',
      confidence: 0,
    },
    {
      id: '3',
      front: 'What is the difference between BFS and DFS?',
      back: 'BFS uses Queue, explores level by level. DFS uses Stack (or recursion), explores as deep as possible first',
      category: 'DSA',
      confidence: 0,
    },
    {
      id: '4',
      front: 'Time complexity of QuickSort (average)?',
      back: 'O(n log n) average, O(n²) worst case',
      category: 'DSA',
      confidence: 0,
    },
    {
      id: '5',
      front: 'What is a Hash Table collision?',
      back: 'When two keys produce the same hash index. Resolved via chaining or open addressing',
      category: 'DSA',
      confidence: 0,
    },
  ],
  DBMS: [
    {
      id: '6',
      front: 'What does ACID stand for?',
      back: 'Atomicity, Consistency, Isolation, Durability - properties of database transactions',
      category: 'DBMS',
      confidence: 0,
    },
    {
      id: '7',
      front: 'What is Normalization?',
      back: 'Process of organizing data to reduce redundancy and improve data integrity',
      category: 'DBMS',
      confidence: 0,
    },
    {
      id: '8',
      front: 'Difference between DELETE and TRUNCATE?',
      back: 'DELETE removes rows one by one (can be rolled back), TRUNCATE removes all rows instantly (cannot be rolled back)',
      category: 'DBMS',
      confidence: 0,
    },
    {
      id: '9',
      front: 'What is a Foreign Key?',
      back: 'A column that creates a link between two tables by referencing the Primary Key of another table',
      category: 'DBMS',
      confidence: 0,
    },
    {
      id: '10',
      front: 'What is a View in SQL?',
      back: 'A virtual table based on the result of a SELECT query. Does not store data physically',
      category: 'DBMS',
      confidence: 0,
    },
  ],
  OS: [
    {
      id: '11',
      front: 'What is Deadlock?',
      back: 'A situation where processes are waiting for each other in a circular manner, causing all to be blocked',
      category: 'OS',
      confidence: 0,
    },
    {
      id: '12',
      front: '4 conditions for Deadlock?',
      back: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait',
      category: 'OS',
      confidence: 0,
    },
    {
      id: '13',
      front: 'What is Virtual Memory?',
      back: 'A memory management technique that gives programs the illusion of a large, continuous memory space using disk storage',
      category: 'OS',
      confidence: 0,
    },
    {
      id: '14',
      front: 'What is Thrashing?',
      back: 'When the system spends more time paging than executing, causing very low CPU utilization',
      category: 'OS',
      confidence: 0,
    },
    {
      id: '15',
      front: 'Process vs Thread?',
      back: 'Process is an independent program with own memory. Thread is a lightweight process sharing memory with parent process',
      category: 'OS',
      confidence: 0,
    },
  ],
  OOPs: [
    {
      id: '16',
      front: 'What is Encapsulation?',
      back: 'Bundling data and methods that operate on that data, hiding internal implementation details',
      category: 'OOPs',
      confidence: 0,
    },
    {
      id: '17',
      front: 'What is Polymorphism?',
      back: 'Ability of objects to take many forms. Same method name behaves differently based on context',
      category: 'OOPs',
      confidence: 0,
    },
    {
      id: '18',
      front: 'Abstract class vs Interface?',
      back: 'Abstract class can have constructors and implementations. Interface (pre-Java 8) only has method signatures',
      category: 'OOPs',
      confidence: 0,
    },
    {
      id: '19',
      front: 'What is the Diamond Problem?',
      back: 'Ambiguity in multiple inheritance when a class inherits from two classes with a common ancestor',
      category: 'OOPs',
      confidence: 0,
    },
    {
      id: '20',
      front: 'What is Method Overloading?',
      back: 'Multiple methods with same name but different parameters. Compile-time polymorphism',
      category: 'OOPs',
      confidence: 0,
    },
  ],
};

export default function FlashcardsClient() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null);
  const [isStudying, setIsStudying] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newCard, setNewCard] = useState({
    front: '',
    back: '',
    category: 'Custom',
  });
  const [studyStats, setStudyStats] = useState({ easy: 0, medium: 0, hard: 0 });

  // Load custom cards from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('flashcards-custom');
    if (saved) {
      // Custom cards are available in localStorage if needed
    }
  }, []);

  const startDeck = (deckName: string) => {
    const deckCards = preloadedDecks[deckName] || [];
    setCards([...deckCards]);
    setSelectedDeck(deckName);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsStudying(true);
    setStudyStats({ easy: 0, medium: 0, hard: 0 });
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const markConfidence = (level: number) => {
    // 0 = hard, 1 = medium, 2 = easy
    const key = level === 0 ? 'hard' : level === 1 ? 'medium' : 'easy';
    setStudyStats({
      ...studyStats,
      [key]: studyStats[key as keyof typeof studyStats] + 1,
    });

    const updatedCards = [...cards];
    updatedCards[currentIndex].confidence = level;
    setCards(updatedCards);

    nextCard();
  };

  const addCustomCard = () => {
    if (!newCard.front.trim() || !newCard.back.trim()) return;

    const newFlashcard: Flashcard = {
      id: Date.now().toString(),
      front: newCard.front,
      back: newCard.back,
      category: newCard.category || 'Custom',
      confidence: 0,
    };

    const updatedCards = [...cards, newFlashcard];
    setCards(updatedCards);
    setNewCard({ front: '', back: '', category: 'Custom' });
    setIsCreating(false);

    // Save to localStorage
    const customCards = JSON.parse(
      localStorage.getItem('flashcards-custom') || '[]',
    );
    customCards.push(newFlashcard);
    localStorage.setItem('flashcards-custom', JSON.stringify(customCards));
  };

  const resetStudy = () => {
    setIsStudying(false);
    setSelectedDeck(null);
    setCards([]);
    setCurrentIndex(0);
    setStudyStats({ easy: 0, medium: 0, hard: 0 });
  };

  const progress =
    cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;

  if (!isStudying) {
    return (
      <div className="space-y-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">Choose a Deck</h2>
          <p className="text-muted-foreground">
            Select a pre-made deck or create your own flashcards
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {Object.keys(preloadedDecks).map((deckName) => (
            <Card
              key={deckName}
              className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg"
              onClick={() => startDeck(deckName)}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{deckName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {preloadedDecks[deckName].length} cards
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Custom Deck
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Add your own flashcards for personalized study sessions
            </p>
            <Button
              onClick={() => {
                setIsStudying(true);
                setCards([]);
                setIsCreating(true);
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create New Deck
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={resetStudy}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
          {selectedDeck && <Badge>{selectedDeck}</Badge>}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={shuffleCards}
          >
            <Shuffle className="mr-1 h-4 w-4" />
            Shuffle
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCreating(true)}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Card
          </Button>
        </div>
      </div>

      {/* Progress */}
      {cards.length > 0 && (
        <div>
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>
              Card {currentIndex + 1} of {cards.length}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress
            value={progress}
            className="h-2"
          />
        </div>
      )}

      {/* Stats */}
      {(studyStats.easy > 0 ||
        studyStats.medium > 0 ||
        studyStats.hard > 0) && (
        <div className="flex justify-center gap-4">
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700"
          >
            Easy: {studyStats.easy}
          </Badge>
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700"
          >
            Medium: {studyStats.medium}
          </Badge>
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700"
          >
            Hard: {studyStats.hard}
          </Badge>
        </div>
      )}

      {/* Create Card Form */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Flashcard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Front (Question)</label>
              <Textarea
                placeholder="Enter the question or term"
                value={newCard.front}
                onChange={(e) =>
                  setNewCard({ ...newCard, front: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium">Back (Answer)</label>
              <Textarea
                placeholder="Enter the answer or definition"
                value={newCard.back}
                onChange={(e) =>
                  setNewCard({ ...newCard, back: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={addCustomCard}>
                <Save className="mr-2 h-4 w-4" />
                Save Card
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsCreating(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Flashcard */}
      {cards.length > 0 && currentCard && !isCreating && (
        <>
          <Card
            className="flex min-h-[300px] cursor-pointer items-center justify-center transition-all duration-300 hover:shadow-lg"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="px-8 py-12 text-center">
              <Badge
                className="mb-4"
                variant="secondary"
              >
                {isFlipped ? 'Answer' : 'Question'}
              </Badge>
              <p className="text-xl font-medium">
                {isFlipped ? currentCard.back : currentCard.front}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Click to {isFlipped ? 'see question' : 'reveal answer'}
              </p>
            </CardContent>
          </Card>

          {/* Navigation & Confidence */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevCard}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>

            {isFlipped && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                  onClick={() => markConfidence(0)}
                >
                  <XCircle className="mr-1 h-4 w-4" />
                  Hard
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-200 text-yellow-600 hover:bg-yellow-50"
                  onClick={() => markConfidence(1)}
                >
                  Medium
                </Button>
                <Button
                  variant="outline"
                  className="border-green-200 text-green-600 hover:bg-green-50"
                  onClick={() => markConfidence(2)}
                >
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Easy
                </Button>
              </div>
            )}

            <Button
              variant="outline"
              onClick={nextCard}
              disabled={currentIndex === cards.length - 1}
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </>
      )}

      {cards.length === 0 && !isCreating && (
        <Card className="py-12 text-center">
          <CardContent>
            <Layers className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">
              No cards yet. Add your first flashcard!
            </p>
            <Button
              className="mt-4"
              onClick={() => setIsCreating(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Card
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  CheckCircle,
  Clock,
  Shield,
  Copy,
  Check,
  Trash2,
  Plus,
  Shuffle,
  Download,
} from 'lucide-react';
import Link from 'next/link';

interface Team {
  name: string;
  members: string[];
}

export default function TeamGeneratorClient() {
  const [inputText, setInputText] = useState('');
  const [members, setMembers] = useState<string[]>([]);
  const [teamCount, setTeamCount] = useState(2);
  const [teams, setTeams] = useState<Team[]>([]);
  const [copied, setCopied] = useState(false);
  const [newMember, setNewMember] = useState('');

  const parseMembers = () => {
    const parsed = inputText
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    setMembers(parsed);
    setTeams([]);
  };

  const addMember = () => {
    if (newMember.trim()) {
      setMembers([...members, newMember.trim()]);
      setNewMember('');
    }
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateTeams = () => {
    const shuffled = shuffleArray(members);
    const newTeams: Team[] = [];

    for (let i = 0; i < teamCount; i++) {
      newTeams.push({ name: `Team ${i + 1}`, members: [] });
    }

    shuffled.forEach((member, index) => {
      newTeams[index % teamCount].members.push(member);
    });

    setTeams(newTeams);
  };

  const reshuffleTeams = () => {
    generateTeams();
  };

  const copyTeams = async () => {
    const text = teams
      .map(
        (team) =>
          `${team.name}:\n${team.members.map((m) => `  - ${m}`).join('\n')}`,
      )
      .join('\n\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInputText('');
    setMembers([]);
    setTeams([]);
    setNewMember('');
  };

  const teamColors = [
    'bg-red-100 border-red-300 dark:bg-red-950 dark:border-red-800',
    'bg-blue-100 border-blue-300 dark:bg-blue-950 dark:border-blue-800',
    'bg-green-100 border-green-300 dark:bg-green-950 dark:border-green-800',
    'bg-yellow-100 border-yellow-300 dark:bg-yellow-950 dark:border-yellow-800',
    'bg-purple-100 border-purple-300 dark:bg-purple-950 dark:border-purple-800',
    'bg-pink-100 border-pink-300 dark:bg-pink-950 dark:border-pink-800',
    'bg-indigo-100 border-indigo-300 dark:bg-indigo-950 dark:border-indigo-800',
    'bg-orange-100 border-orange-300 dark:bg-orange-950 dark:border-orange-800',
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Users className="h-4 w-4" />
            Free Team Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Team Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Create balanced random teams instantly. Perfect for sports, games,
            group projects, and events.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Instant Results</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Fair Distribution</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Random Assignment</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Methods */}
          <div className="space-y-6">
            {/* Bulk Input */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Members (Bulk)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter names, one per line..."
                  className="min-h-[150px] w-full rounded-lg border bg-muted/50 p-4 font-mono text-sm outline-none"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={parseMembers}
                    className="flex-1"
                  >
                    Load Members
                  </Button>
                  <Button
                    variant="outline"
                    onClick={clearAll}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add One by One */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Individual Member</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addMember()}
                    placeholder="Enter name..."
                    className="flex-1 rounded-lg border bg-muted/50 p-3 outline-none"
                  />
                  <Button onClick={addMember}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Member List & Settings */}
          <div className="space-y-6">
            {/* Current Members */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Members ({members.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {members.length === 0 ? (
                  <p className="text-center text-muted-foreground">
                    No members added yet
                  </p>
                ) : (
                  <div className="max-h-48 space-y-1 overflow-auto">
                    {members.map((member, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg bg-muted/50 p-2"
                      >
                        <span>{member}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMember(i)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Team Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">
                    Number of Teams:
                  </label>
                  <select
                    value={teamCount}
                    onChange={(e) => setTeamCount(parseInt(e.target.value))}
                    className="rounded-lg border bg-background px-3 py-2"
                  >
                    {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option
                        key={n}
                        value={n}
                      >
                        {n} Teams
                      </option>
                    ))}
                  </select>
                </div>
                <Button
                  onClick={generateTeams}
                  disabled={members.length < teamCount}
                  className="w-full gap-2"
                >
                  <Shuffle className="h-4 w-4" />
                  Generate Teams
                </Button>
                {members.length < teamCount && members.length > 0 && (
                  <p className="text-center text-sm text-red-500">
                    Need at least {teamCount} members for {teamCount} teams
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generated Teams */}
        {teams.length > 0 && (
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Generated Teams</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={reshuffleTeams}
                  className="gap-2"
                >
                  <Shuffle className="h-4 w-4" />
                  Reshuffle
                </Button>
                <Button
                  variant="outline"
                  onClick={copyTeams}
                  className="gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  Copy
                </Button>
              </div>
            </div>

            <div
              className={`grid gap-4 ${
                teams.length <= 2
                  ? 'md:grid-cols-2'
                  : teams.length <= 3
                    ? 'md:grid-cols-3'
                    : 'md:grid-cols-4'
              }`}
            >
              {teams.map((team, i) => (
                <Card
                  key={i}
                  className={`border-2 ${teamColors[i % teamColors.length]}`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      {team.name}
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        ({team.members.length})
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {team.members.map((member, j) => (
                        <li
                          key={j}
                          className="rounded bg-background/50 p-2 text-sm"
                        >
                          {member}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Perfect For</h2>
          <div className="not-prose grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Sports Teams',
                desc: 'Create fair teams for pickup games',
              },
              {
                title: 'Group Projects',
                desc: 'Randomly assign students to groups',
              },
              {
                title: 'Team Building',
                desc: 'Mix people for company activities',
              },
              { title: 'Game Night', desc: 'Form teams for trivia or games' },
              { title: 'Hackathons', desc: 'Create balanced coding teams' },
              {
                title: 'Workshops',
                desc: 'Break large groups into smaller teams',
              },
            ].map((use) => (
              <Card key={use.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{use.title}</h3>
                  <p className="text-sm text-muted-foreground">{use.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'List Randomizer',
                href: '/tools/list-randomizer',
                desc: 'Shuffle any list',
              },
              {
                title: 'Coin Flipper',
                href: '/tools/coin-flipper',
                desc: 'Flip virtual coins',
              },
              {
                title: 'Dice Roller',
                href: '/tools/dice-roller',
                desc: 'Roll virtual dice',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, RefreshCw, Shield, Eye, EyeOff } from 'lucide-react';

interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
}

export function PasswordGenerator() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: true,
  });
  const [password, setPassword] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [mode, setMode] = useState<'password' | 'passphrase'>('password');

  const charSets = {
    uppercase: options.excludeAmbiguous
      ? 'ABCDEFGHJKLMNPQRSTUVWXYZ'
      : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: options.excludeAmbiguous
      ? 'abcdefghjkmnpqrstuvwxyz'
      : 'abcdefghijklmnopqrstuvwxyz',
    numbers: options.excludeAmbiguous ? '23456789' : '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  };

  const words = [
    'apple',
    'banana',
    'cherry',
    'dragon',
    'eagle',
    'falcon',
    'guitar',
    'hammer',
    'island',
    'jungle',
    'kettle',
    'lemon',
    'mango',
    'nature',
    'orange',
    'panda',
    'quartz',
    'river',
    'sunset',
    'tiger',
    'umbrella',
    'violet',
    'winter',
    'yellow',
    'zebra',
    'ancient',
    'bridge',
    'castle',
    'desert',
    'forest',
    'garden',
    'harbor',
    'journey',
    'kingdom',
    'lantern',
    'mountain',
    'neptune',
    'ocean',
    'planet',
    'quantum',
    'rocket',
    'silver',
    'thunder',
    'universe',
    'volcano',
    'whisper',
    'crystal',
    'diamond',
  ];

  const generatePassword = () => {
    let chars = '';
    if (options.uppercase) chars += charSets.uppercase;
    if (options.lowercase) chars += charSets.lowercase;
    if (options.numbers) chars += charSets.numbers;
    if (options.symbols) chars += charSets.symbols;

    if (chars.length === 0) {
      chars = charSets.lowercase;
    }

    let result = '';
    const array = new Uint32Array(options.length);
    crypto.getRandomValues(array);

    for (let i = 0; i < options.length; i++) {
      result += chars[array[i] % chars.length];
    }

    setPassword(result);
    setCopied(false);
  };

  const generatePassphrase = () => {
    const array = new Uint32Array(4);
    crypto.getRandomValues(array);

    const selectedWords = [];
    for (let i = 0; i < 4; i++) {
      selectedWords.push(words[array[i] % words.length]);
    }

    // Add a random number
    const numArray = new Uint32Array(1);
    crypto.getRandomValues(numArray);
    const number = numArray[0] % 1000;

    setPassphrase(`${selectedWords.join('-')}-${number}`);
    setCopied(false);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = (): {
    label: string;
    color: string;
    percentage: number;
  } => {
    if (!password)
      return {
        label: 'Generate a password',
        color: 'bg-gray-300',
        percentage: 0,
      };

    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^a-zA-Z0-9]/.test(password)) score += 2;

    if (score <= 2)
      return { label: 'Weak', color: 'bg-red-500', percentage: 25 };
    if (score <= 4)
      return { label: 'Fair', color: 'bg-yellow-500', percentage: 50 };
    if (score <= 6)
      return { label: 'Good', color: 'bg-blue-500', percentage: 75 };
    return { label: 'Strong', color: 'bg-green-500', percentage: 100 };
  };

  const strength = getStrength();

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex justify-center gap-2">
        <Button
          variant={mode === 'password' ? 'default' : 'outline'}
          onClick={() => setMode('password')}
        >
          Random Password
        </Button>
        <Button
          variant={mode === 'passphrase' ? 'default' : 'outline'}
          onClick={() => setMode('passphrase')}
        >
          Memorable Passphrase
        </Button>
      </div>

      {mode === 'password' ? (
        <>
          {/* Password Display */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex-1 break-all rounded-lg bg-muted p-4 font-mono text-lg">
                  {showPassword
                    ? password || 'Click generate...'
                    : '•'.repeat(password.length || 16)}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(password)}
                  disabled={!password}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Strength Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Strength:</span>
                  <span className="font-medium">{strength.label}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full transition-all ${strength.color}`}
                    style={{ width: `${strength.percentage}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Password Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between">
                  <label className="text-sm font-medium">
                    Length: {options.length}
                  </label>
                </div>
                <input
                  type="range"
                  min="8"
                  max="64"
                  value={options.length}
                  onChange={(e) =>
                    setOptions({ ...options, length: Number(e.target.value) })
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>8</span>
                  <span>64</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: 'uppercase', label: 'Uppercase (A-Z)' },
                  { key: 'lowercase', label: 'Lowercase (a-z)' },
                  { key: 'numbers', label: 'Numbers (0-9)' },
                  { key: 'symbols', label: 'Symbols (!@#$...)' },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={options[key as keyof PasswordOptions] as boolean}
                      onChange={(e) =>
                        setOptions({ ...options, [key]: e.target.checked })
                      }
                      className="h-4 w-4"
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={options.excludeAmbiguous}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      excludeAmbiguous: e.target.checked,
                    })
                  }
                  className="h-4 w-4"
                />
                <span className="text-sm">
                  Exclude ambiguous characters (0, O, l, 1, I)
                </span>
              </label>

              <Button
                onClick={generatePassword}
                className="w-full gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Generate Password
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* Passphrase Display */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex-1 break-all rounded-lg bg-muted p-4 font-mono text-lg">
                  {passphrase || 'Click generate...'}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(passphrase)}
                  disabled={!passphrase}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Passphrases are easier to remember and often more secure than
                random characters
              </p>
            </CardContent>
          </Card>

          <Button
            onClick={generatePassphrase}
            className="w-full gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Generate Passphrase
          </Button>
        </>
      )}

      {/* Security Tips */}
      <Card className="bg-blue-50 dark:bg-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Shield className="h-5 w-5 text-blue-600" />
            Security Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Use a unique password for every account</li>
            <li>
              • Store passwords in a password manager (Bitwarden, 1Password)
            </li>
            <li>• Enable two-factor authentication (2FA) wherever possible</li>
            <li>• Never share passwords via email or messaging apps</li>
            <li>• 16+ characters is recommended for important accounts</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

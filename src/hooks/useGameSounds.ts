'use client';

import { useCallback, useRef, useEffect, useState } from 'react';

type SoundType =
  | 'correct'
  | 'wrong'
  | 'click'
  | 'complete'
  | 'countdown'
  | 'tick';

interface SoundConfig {
  volume: number;
  enabled: boolean;
}

// Web Audio API-based sound generation for game sounds
// This avoids needing external audio files

export function useGameSounds(initialConfig?: Partial<SoundConfig>) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [config, setConfig] = useState<SoundConfig>({
    volume: initialConfig?.volume ?? 0.5,
    enabled: initialConfig?.enabled ?? true,
  });

  // Initialize AudioContext on first interaction
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      )();
    }
    return audioContextRef.current;
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Generate a simple tone
  const playTone = useCallback(
    (
      frequency: number,
      duration: number,
      type: OscillatorType = 'sine',
      volumeMultiplier = 1,
    ) => {
      if (!config.enabled) return;

      try {
        const ctx = getAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

        // Envelope for smooth start/end
        const volume = config.volume * volumeMultiplier;
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          ctx.currentTime + duration,
        );

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
      } catch {
        // Audio context may not be available
      }
    },
    [config.enabled, config.volume, getAudioContext],
  );

  // Play a chord (multiple notes)
  const playChord = useCallback(
    (
      frequencies: number[],
      duration: number,
      type: OscillatorType = 'sine',
      volumeMultiplier = 1,
    ) => {
      if (!config.enabled) return;

      try {
        const ctx = getAudioContext();
        const volume = (config.volume * volumeMultiplier) / frequencies.length;

        frequencies.forEach((frequency) => {
          const oscillator = ctx.createOscillator();
          const gainNode = ctx.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(ctx.destination);

          oscillator.type = type;
          oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

          gainNode.gain.setValueAtTime(0, ctx.currentTime);
          gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + duration,
          );

          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + duration);
        });
      } catch {
        // Audio context may not be available
      }
    },
    [config.enabled, config.volume, getAudioContext],
  );

  // Correct answer sound - ascending happy tone
  const playCorrect = useCallback(() => {
    if (!config.enabled) return;

    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Play ascending notes for success
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, now + i * 0.08);

        const volume = config.volume * 0.3;
        gainNode.gain.setValueAtTime(0, now + i * 0.08);
        gainNode.gain.linearRampToValueAtTime(volume, now + i * 0.08 + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          now + i * 0.08 + 0.15,
        );

        oscillator.start(now + i * 0.08);
        oscillator.stop(now + i * 0.08 + 0.15);
      });
    } catch {
      // Audio context may not be available
    }
  }, [config.enabled, config.volume, getAudioContext]);

  // Wrong answer sound - descending tone
  const playWrong = useCallback(() => {
    if (!config.enabled) return;

    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      [350, 250].forEach((freq, i) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(freq, now + i * 0.12);

        const volume = config.volume * 0.15;
        gainNode.gain.setValueAtTime(0, now + i * 0.12);
        gainNode.gain.linearRampToValueAtTime(volume, now + i * 0.12 + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          now + i * 0.12 + 0.15,
        );

        oscillator.start(now + i * 0.12);
        oscillator.stop(now + i * 0.12 + 0.15);
      });
    } catch {
      // Audio context may not be available
    }
  }, [config.enabled, config.volume, getAudioContext]);

  // Click/select sound
  const playClick = useCallback(() => {
    playTone(800, 0.05, 'sine', 0.3);
  }, [playTone]);

  // Game complete/victory sound
  const playComplete = useCallback(() => {
    if (!config.enabled) return;

    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Victory fanfare
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, now + i * 0.12);

        const volume = config.volume * 0.4;
        gainNode.gain.setValueAtTime(0, now + i * 0.12);
        gainNode.gain.linearRampToValueAtTime(volume, now + i * 0.12 + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.3);

        oscillator.start(now + i * 0.12);
        oscillator.stop(now + i * 0.12 + 0.3);
      });
    } catch {
      // Audio context may not be available
    }
  }, [config.enabled, config.volume, getAudioContext]);

  // Countdown warning sound
  const playCountdown = useCallback(() => {
    playTone(440, 0.1, 'sine', 0.4);
  }, [playTone]);

  // Timer tick sound (subtle)
  const playTick = useCallback(() => {
    playTone(1000, 0.02, 'sine', 0.1);
  }, [playTone]);

  // Generic play function
  const play = useCallback(
    (sound: SoundType) => {
      switch (sound) {
        case 'correct':
          playCorrect();
          break;
        case 'wrong':
          playWrong();
          break;
        case 'click':
          playClick();
          break;
        case 'complete':
          playComplete();
          break;
        case 'countdown':
          playCountdown();
          break;
        case 'tick':
          playTick();
          break;
      }
    },
    [playCorrect, playWrong, playClick, playComplete, playCountdown, playTick],
  );

  // Toggle sounds
  const toggleSound = useCallback(() => {
    setConfig((prev) => ({ ...prev, enabled: !prev.enabled }));
  }, []);

  // Set volume
  const setVolume = useCallback((volume: number) => {
    setConfig((prev) => ({
      ...prev,
      volume: Math.max(0, Math.min(1, volume)),
    }));
  }, []);

  return {
    play,
    playCorrect,
    playWrong,
    playClick,
    playComplete,
    playCountdown,
    playTick,
    toggleSound,
    setVolume,
    isEnabled: config.enabled,
    volume: config.volume,
  };
}

export type { SoundType, SoundConfig };

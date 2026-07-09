'use client';

import { useEffect, useCallback, useRef } from 'react';
import {
  onForegroundMessage,
  requestNotificationPermission,
  validateAndRefreshToken,
  processPendingOperations,
} from '@/lib/firebase-messaging';
import { useToast } from '@/hooks/use-toast';

interface NotificationPayload {
  notification?: {
    title?: string;
    body?: string;
    image?: string;
  };
  data?: {
    url?: string;
    channel?: string;
    [key: string]: string | undefined;
  };
}

export function NotificationProvider() {
  const { toast } = useToast();
  const initRef = useRef(false);

  // Play notification sound using Web Audio API
  const playNotificationSound = useCallback(
    async (channel: string = 'updates') => {
      try {
        // Check if user has sound enabled
        const prefsStr = localStorage.getItem('notification-preferences');
        if (prefsStr) {
          const prefs = JSON.parse(prefsStr);
          if (prefs.soundEnabled === false) {
            return; // Sound disabled by user
          }
        }

        // Determine sound based on channel priority
        const soundMap: Record<string, string> = {
          urgent: '/notification-sounds/urgent.mp3',
          updates: '/notification-sounds/default.mp3',
          marketing: '/notification-sounds/default.mp3',
          reminders: '/notification-sounds/reminder.mp3',
          social: '/notification-sounds/default.mp3',
        };

        const soundUrl =
          soundMap[channel] || '/notification-sounds/default.mp3';

        // Use Web Audio API for better browser support
        const audioContext = new (
          window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext: typeof AudioContext;
            }
          ).webkitAudioContext
        )();
        const response = await fetch(soundUrl);

        if (!response.ok) {
          console.warn('Notification sound file not found, skipping sound');
          return;
        }

        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start(0);
      } catch (error) {
        // Silent fail - sound is optional enhancement
        console.warn('Failed to play notification sound:', error);
      }
    },
    [],
  );

  const handleForegroundMessage = useCallback(
    (payload: NotificationPayload) => {
      try {
        const title = payload.notification?.title || 'Sproutern';
        const body =
          payload.notification?.body || 'You have a new notification';
        const url = payload.data?.url;
        const channel = payload.data?.channel || 'updates';

        // Check user preferences
        const prefsStr = localStorage.getItem('notification-preferences');
        if (prefsStr) {
          try {
            const prefs = JSON.parse(prefsStr);

            // Check DND mode
            if (prefs.doNotDisturb?.enabled) {
              console.log('DND mode enabled, suppressing notification');
              return;
            }

            // Check channel preference
            if (!prefs.channels?.[channel]) {
              console.log(
                `Channel ${channel} disabled, suppressing notification`,
              );
              return;
            }
          } catch (e) {
            console.warn('Failed to parse notification preferences:', e);
          }
        }

        // Play notification sound
        playNotificationSound(channel);

        // Show toast notification for foreground messages
        toast({
          title,
          description: body,
          duration: 5000,
          action: url ? (
            <a
              href={url}
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              View
            </a>
          ) : undefined,
        });
      } catch (error) {
        console.error('Error handling foreground notification:', error);
        // Fallback: try to show a basic toast without all features
        try {
          toast({
            title: 'New Notification',
            description: 'You have a new notification',
            duration: 5000,
          });
        } catch (fallbackError) {
          console.error('Fallback toast also failed:', fallbackError);
        }
      }
    },
    [toast, playNotificationSound],
  );

  useEffect(() => {
    // Prevent double initialization in strict mode
    if (initRef.current) return;
    initRef.current = true;

    // Only run on client
    if (typeof window === 'undefined') return;

    let unsubscribe: (() => void) | null = null;

    const initializeNotifications = async () => {
      try {
        // Register the main service worker (handles both PWA and FCM)
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.register(
            '/sw.js',
            {
              scope: '/',
            },
          );
          console.log('Service Worker registered:', registration);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (
                  newWorker.state === 'installed' &&
                  navigator.serviceWorker.controller
                ) {
                  // New service worker available
                  console.log('New Service Worker available');

                  // Notify user about update (optional)
                  if (
                    window.confirm(
                      'A new version is available. Reload to update?',
                    )
                  ) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
        }

        // If permission was already granted, ensure token is valid
        if (Notification.permission === 'granted') {
          await requestNotificationPermission();

          // Validate and refresh token if needed (runs every 7 days)
          await validateAndRefreshToken();

          // Process any failed operations from previous sessions
          await processPendingOperations();
        }

        // Set up foreground message listener
        unsubscribe = await onForegroundMessage(handleForegroundMessage);
      } catch (error) {
        console.error('Failed to initialize notifications:', error);
      }
    };

    initializeNotifications();

    // Handle service worker controller change (new SW activated)
    const handleControllerChange = () => {
      console.log('Service Worker controller changed');
    };

    navigator.serviceWorker?.addEventListener(
      'controllerchange',
      handleControllerChange,
    );

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      navigator.serviceWorker?.removeEventListener(
        'controllerchange',
        handleControllerChange,
      );
    };
  }, [handleForegroundMessage]);

  return null;
}

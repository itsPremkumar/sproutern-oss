'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  requestNotificationPermission,
  isNotificationSupported,
  getNotificationPermissionStatus,
  onForegroundMessage,
} from '@/lib/firebase-messaging';

export interface NotificationState {
  isSupported: boolean;
  permissionStatus: NotificationPermission | 'unsupported';
  fcmToken: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface UseNotificationsReturn extends NotificationState {
  requestPermission: () => Promise<string | null>;
  isEnabled: boolean;
}

export function useNotifications(): UseNotificationsReturn {
  const [state, setState] = useState<NotificationState>({
    isSupported: false,
    permissionStatus: 'default',
    fcmToken: null,
    isLoading: false,
    error: null,
  });

  // Check support and permission on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const supported = isNotificationSupported();
    const permission = getNotificationPermissionStatus();

    setState((prev) => ({
      ...prev,
      isSupported: supported,
      permissionStatus: permission === 'unsupported' ? 'default' : permission,
    }));

    // If already granted, try to get the token
    if (permission === 'granted') {
      requestNotificationPermission().then((token) => {
        if (token) {
          setState((prev) => ({ ...prev, fcmToken: token }));
        }
      });
    }
  }, []);

  const requestPermission = useCallback(async (): Promise<string | null> => {
    if (!state.isSupported) {
      setState((prev) => ({
        ...prev,
        error: 'Notifications are not supported in this browser',
      }));
      return null;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const token = await requestNotificationPermission();

      const newPermission = getNotificationPermissionStatus();
      setState((prev) => ({
        ...prev,
        fcmToken: token,
        permissionStatus:
          newPermission === 'unsupported' ? 'denied' : newPermission,
        isLoading: false,
      }));

      return token;
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to enable notifications';
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
      }));
      return null;
    }
  }, [state.isSupported]);

  return {
    ...state,
    requestPermission,
    isEnabled: state.permissionStatus === 'granted' && !!state.fcmToken,
  };
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Bell,
  CheckCheck,
  Trash2,
  X,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  getNotificationHistory,
  clearNotificationHistory,
  markAllNotificationsRead,
  markNotificationRead,
} from '@/lib/firebase-messaging';
import type { NotificationHistoryItem } from '@/types/notification-types';
import { cn } from '@/lib/utils';

interface NotificationCenterProps {
  className?: string;
}

export function NotificationCenter({ className }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState<NotificationHistoryItem[]>(
    [],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Fetch notifications when popover opens
  const fetchNotifications = useCallback(async () => {
    setIsLoading(true);
    try {
      const history = await getNotificationHistory();
      setNotifications(history);
      setUnreadCount(history.filter((n) => !n.isRead).length);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch and refresh on window focus
  useEffect(() => {
    fetchNotifications();

    const handleFocus = () => {
      fetchNotifications();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [fetchNotifications]);

  // Listen for notification history updates from service worker
  useEffect(() => {
    const handleHistoryUpdate = (event: CustomEvent) => {
      if (event.detail?.history) {
        setNotifications(event.detail.history);
        setUnreadCount(
          event.detail.history.filter((n: NotificationHistoryItem) => !n.isRead)
            .length,
        );
      }
    };

    window.addEventListener(
      'notification-history-updated',
      handleHistoryUpdate as EventListener,
    );
    return () => {
      window.removeEventListener(
        'notification-history-updated',
        handleHistoryUpdate as EventListener,
      );
    };
  }, []);

  // Listen for new notifications (foreground)
  useEffect(() => {
    const handleNotificationClicked = () => {
      fetchNotifications();
    };

    window.addEventListener('notification-clicked', handleNotificationClicked);
    return () => {
      window.removeEventListener(
        'notification-clicked',
        handleNotificationClicked,
      );
    };
  }, [fetchNotifications]);

  const handleMarkAllRead = async () => {
    await markAllNotificationsRead();
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    setUnreadCount(0);
  };

  const handleClearAll = async () => {
    await clearNotificationHistory();
    setNotifications([]);
    setUnreadCount(0);
  };

  const handleNotificationClick = async (
    notification: NotificationHistoryItem,
  ) => {
    if (!notification.isRead) {
      await markNotificationRead(notification.id);
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === notification.id ? { ...n, isRead: true } : n,
        ),
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }

    if (notification.link) {
      window.location.href = notification.link;
    }

    setIsOpen(false);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getChannelColor = (channel?: string) => {
    switch (channel) {
      case 'urgent':
        return 'bg-red-500';
      case 'updates':
        return 'bg-blue-500';
      case 'marketing':
        return 'bg-purple-500';
      case 'reminders':
        return 'bg-amber-500';
      case 'social':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn('relative', className)}
          onClick={() => {
            setIsOpen(true);
            fetchNotifications();
          }}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
          <span className="sr-only">
            {unreadCount > 0
              ? `${unreadCount} unread notifications`
              : 'Notifications'}
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-80 p-0 sm:w-96"
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="font-semibold">Notifications</h3>
          <div className="flex items-center gap-1">
            {notifications.length > 0 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleMarkAllRead}
                  title="Mark all as read"
                >
                  <CheckCheck className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={handleClearAll}
                  title="Clear all"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Notification List */}
        <div className="max-h-[400px] overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="mb-2 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No notifications yet
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70">
                We&apos;ll notify you about important updates
              </p>
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => (
                <button
                  key={notification.id}
                  className={cn(
                    'flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-muted/50',
                    !notification.isRead && 'bg-muted/30',
                  )}
                  onClick={() => handleNotificationClick(notification)}
                >
                  {/* Channel indicator */}
                  <div className="mt-1.5 flex-shrink-0">
                    <div
                      className={cn(
                        'h-2 w-2 rounded-full',
                        getChannelColor(notification.channel),
                      )}
                    />
                  </div>

                  {/* Icon */}
                  {notification.icon && (
                    <div className="flex-shrink-0">
                      <img
                        src={notification.icon}
                        alt=""
                        className="h-10 w-10 rounded-lg object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={cn(
                          'text-sm',
                          !notification.isRead && 'font-semibold',
                        )}
                      >
                        {notification.title}
                      </p>
                      {!notification.isRead && (
                        <span className="flex-shrink-0 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                      {notification.body}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground/70">
                      <span>{formatTime(notification.receivedAt)}</span>
                      {notification.link && (
                        <ExternalLink className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="border-t p-2">
            <p className="text-center text-xs text-muted-foreground">
              Showing last {notifications.length} notifications
            </p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Settings, Bell, BellOff, Volume2, VolumeX, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useNotifications } from '@/hooks/use-notifications';
import {
  subscribeToTopic,
  unsubscribeFromTopic,
} from '@/lib/firebase-messaging';
import {
  NOTIFICATION_CHANNELS,
  DEFAULT_NOTIFICATION_PREFERENCES,
  type NotificationPreferences,
  type NotificationChannel,
} from '@/types/notification-types';
import { cn } from '@/lib/utils';

const PREFERENCES_KEY = 'notification-preferences';

export function NotificationSettings() {
  const { isEnabled, permissionStatus, requestPermission, isLoading } =
    useNotifications();
  const [preferences, setPreferences] = useState<NotificationPreferences>(
    DEFAULT_NOTIFICATION_PREFERENCES,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({ ...DEFAULT_NOTIFICATION_PREFERENCES, ...parsed });
      } catch (e) {
        console.error('Failed to parse notification preferences:', e);
      }
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = (newPrefs: NotificationPreferences) => {
    setPreferences(newPrefs);
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(newPrefs));
  };

  const handleMasterToggle = async (enabled: boolean) => {
    if (enabled && permissionStatus !== 'granted') {
      const token = await requestPermission();
      if (!token) return;
    }
    savePreferences({ ...preferences, enabled });
  };

  const handleChannelToggle = async (
    channel: NotificationChannel,
    enabled: boolean,
  ) => {
    const newPrefs = {
      ...preferences,
      channels: { ...preferences.channels, [channel]: enabled },
    };
    savePreferences(newPrefs);

    // Subscribe/unsubscribe from topic
    if (enabled) {
      await subscribeToTopic(channel);
    } else {
      await unsubscribeFromTopic(channel);
    }
  };

  const handleSoundToggle = (enabled: boolean) => {
    savePreferences({ ...preferences, soundEnabled: enabled });
  };

  const handleVibrationToggle = (enabled: boolean) => {
    savePreferences({ ...preferences, vibrationEnabled: enabled });
  };

  const handleDndToggle = (enabled: boolean) => {
    savePreferences({
      ...preferences,
      doNotDisturb: { ...preferences.doNotDisturb, enabled },
    });
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Notification settings</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Settings
          </DialogTitle>
          <DialogDescription>
            Customize how and when you receive notifications.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Master Toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-medium">
                Push Notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                {isEnabled
                  ? 'Notifications are enabled'
                  : permissionStatus === 'denied'
                    ? 'Blocked by browser'
                    : 'Enable to receive updates'}
              </p>
            </div>
            <Switch
              checked={preferences.enabled && isEnabled}
              onCheckedChange={handleMasterToggle}
              disabled={isLoading || permissionStatus === 'denied'}
            />
          </div>

          {permissionStatus === 'denied' && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
              Notifications are blocked. Please enable them in your browser
              settings.
            </div>
          )}

          <Separator />

          {/* Channel Settings */}
          <div className="space-y-4">
            <h4 className="font-medium">Notification Channels</h4>
            <p className="text-sm text-muted-foreground">
              Choose which types of notifications you want to receive.
            </p>

            <div className="space-y-3">
              {NOTIFICATION_CHANNELS.map((channel) => (
                <div
                  key={channel.id}
                  className={cn(
                    'flex items-center justify-between rounded-lg border p-3 transition-colors',
                    preferences.channels[channel.id]
                      ? 'border-primary/30 bg-primary/5'
                      : 'border-border',
                  )}
                >
                  <div className="space-y-0.5">
                    <Label className="font-medium">{channel.name}</Label>
                    <p className="text-xs text-muted-foreground">
                      {channel.description}
                    </p>
                  </div>
                  <Switch
                    checked={preferences.channels[channel.id]}
                    onCheckedChange={(checked) =>
                      handleChannelToggle(channel.id, checked)
                    }
                    disabled={!preferences.enabled}
                  />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Sound & Vibration */}
          <div className="space-y-4">
            <h4 className="font-medium">Sound & Vibration</h4>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {preferences.soundEnabled ? (
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <VolumeX className="h-4 w-4 text-muted-foreground" />
                )}
                <Label>Notification Sound</Label>
              </div>
              <Switch
                checked={preferences.soundEnabled}
                onCheckedChange={handleSoundToggle}
                disabled={!preferences.enabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <Label>Vibration</Label>
              </div>
              <Switch
                checked={preferences.vibrationEnabled}
                onCheckedChange={handleVibrationToggle}
                disabled={!preferences.enabled}
              />
            </div>
          </div>

          <Separator />

          {/* Do Not Disturb */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-muted-foreground" />
                <div className="space-y-0.5">
                  <Label className="font-medium">Do Not Disturb</Label>
                  <p className="text-xs text-muted-foreground">
                    Silence all notifications
                  </p>
                </div>
              </div>
              <Switch
                checked={preferences.doNotDisturb.enabled}
                onCheckedChange={handleDndToggle}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

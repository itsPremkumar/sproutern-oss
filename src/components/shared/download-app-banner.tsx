'use client';

import { useState, useEffect } from 'react';
import {
  X,
  Download,
  Smartphone,
  Apple,
  Loader2,
  Monitor,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type Platform = 'ios' | 'android' | 'desktop' | 'unknown';

export function DownloadAppBanner() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [platform, setPlatform] = useState<Platform>('unknown');
  const [isStandalone, setIsStandalone] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone;

    setIsStandalone(isInStandaloneMode);

    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice =
      /ipad|iphone|ipod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/.test(userAgent);
    const isMobile = isIOSDevice || isAndroid;

    if (isIOSDevice) {
      setPlatform('ios');
    } else if (isAndroid) {
      setPlatform('android');
    } else if (!isMobile) {
      setPlatform('desktop');
    }

    // Show banner if not installed
    if (!isInStandaloneMode) {
      const dismissed = localStorage.getItem('download-banner-dismissed');
      if (dismissed) {
        const { timestamp } = JSON.parse(dismissed);
        const daysSinceDismissed =
          (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
        // Show again after 7 days
        if (daysSinceDismissed > 7) {
          setShowBanner(true);
        }
      } else {
        setShowBanner(true);
      }
    }

    // Listen for the beforeinstallprompt event
    // ... (rest of useEffect)
  }, []);

  const handleInstall = async () => {
    // ... (keep existing handleInstall)
  };

  const handleCancelInstall = () => {
    setIsInstalling(false);
    setDeferredPrompt(null);
    setShowBanner(false);
    // Persist dismissal for 7 days
    localStorage.setItem(
      'download-banner-dismissed',
      JSON.stringify({ timestamp: Date.now() }),
    );
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setShowInstructions(false);
    // Persist dismissal for 7 days
    localStorage.setItem(
      'download-banner-dismissed',
      JSON.stringify({ timestamp: Date.now() }),
    );
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  // Get platform-specific instructions
  const getInstructions = () => {
    switch (platform) {
      case 'ios':
        return {
          icon: <Apple className="h-4 w-4" />,
          short: 'Share → Add to Home',
          steps: [
            'Tap the Share button (□↑) at the bottom of Safari',
            'Scroll down and tap "Add to Home Screen"',
            'Tap "Add" in the top right corner',
          ],
        };
      case 'android':
        return {
          icon: <Menu className="h-4 w-4" />,
          short: 'Menu → Install App',
          steps: [
            'Tap the menu icon (⋮) in your browser',
            'Tap "Install app" or "Add to Home screen"',
            'Tap "Install" to confirm',
          ],
        };
      case 'desktop':
        return {
          icon: <Monitor className="h-4 w-4" />,
          short: 'Install from browser',
          steps: [
            'Look for the install icon (⊕) in the address bar',
            'Or click Menu (⋮) → "Install Sproutern..."',
            'Click "Install" to add the app to your desktop',
          ],
        };
      default:
        return {
          icon: <Smartphone className="h-4 w-4" />,
          short: 'Add to Home Screen',
          steps: [
            'Open your browser menu',
            'Look for "Install" or "Add to Home screen"',
            'Confirm the installation',
          ],
        };
    }
  };

  const instructions = getInstructions();

  // Get the description text based on platform
  const getDescription = () => {
    if (isInstalling) {
      return 'Installation in progress. This will only take a moment.';
    }
    if (deferredPrompt) {
      return 'Install our app for quick access to all career tools';
    }
    switch (platform) {
      case 'ios':
        return 'Tap Share → Add to Home Screen for the best experience';
      case 'android':
        return 'Tap Menu → Install App for quick access';
      case 'desktop':
        return 'Install the app for quick access from your desktop';
      default:
        return 'Add to your home screen for the best experience';
    }
  };

  // Don't show if already installed or dismissed
  if (isStandalone || !showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white shadow-lg duration-500 animate-in slide-in-from-bottom-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm sm:flex">
                {isInstalling ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : platform === 'desktop' ? (
                  <Monitor className="h-5 w-5" />
                ) : (
                  <Smartphone className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="text-sm font-bold sm:text-base">
                  {isInstalling ? (
                    <>⏳ Installing app, please wait...</>
                  ) : (
                    <>📱 Get Sproutern App</>
                  )}
                </p>
                <p className="hidden text-xs text-white/80 sm:block">
                  {getDescription()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isInstalling ? (
                <>
                  {/* Loading spinner for mobile */}
                  <div className="flex items-center gap-2 sm:hidden">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                  {/* Cancel button during installation */}
                  <Button
                    onClick={handleCancelInstall}
                    size="sm"
                    variant="outline"
                    className="border-white/30 bg-white/10 font-medium text-white hover:bg-white/20"
                  >
                    <X className="mr-1 h-3 w-3" />
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  {/* Single unified Install button for all platforms */}
                  <Button
                    onClick={handleInstall}
                    size="sm"
                    className="bg-white font-bold text-purple-600 shadow-md hover:bg-white/90"
                    disabled={isInstalling}
                  >
                    <Download className="mr-1 h-4 w-4" />
                    <span className="hidden sm:inline">Install Now</span>
                    <span className="sm:hidden">Install</span>
                  </Button>

                  <button
                    onClick={handleDismiss}
                    className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                    aria-label="Dismiss"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Expandable instructions panel */}
          {showInstructions && !deferredPrompt && (
            <div className="border-t border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="mb-2 text-sm font-semibold">
                📋 How to install Sproutern on your{' '}
                {platform === 'desktop' ? 'computer' : 'device'}:
              </p>
              <ol className="list-inside list-decimal space-y-1 text-sm text-white/90">
                {instructions.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <p className="mt-2 text-xs text-white/70">
                💡 Once installed, Sproutern will work offline and launch like a
                native app!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

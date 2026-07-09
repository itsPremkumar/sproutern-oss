'use client';

import { useState, useEffect } from 'react';
import { X, Download, Smartphone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://');

    setIsStandalone(isInStandaloneMode);

    // Check if iOS
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Listen for the beforeinstallprompt event (Android/Desktop Chrome)
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Check if user has dismissed before
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowPrompt(true), 3000); // Show after 3 seconds
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // For iOS, show prompt after delay
    if (isIOSDevice && !isInStandaloneMode) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowPrompt(true), 5000);
      }
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    setIsInstalling(true);
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
    } finally {
      setIsInstalling(false);
      setDeferredPrompt(null);
    }
  };

  const handleCancelInstall = () => {
    setIsInstalling(false);
    setDeferredPrompt(null);
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Don't show if already installed or prompt shouldn't be shown
  if (isStandalone || !showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 duration-300 animate-in slide-in-from-bottom-4 md:left-auto md:right-4 md:max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl dark:border-gray-800 dark:bg-gray-900">
        {/* Gradient accent */}
        <div
          className={`absolute left-0 right-0 top-0 h-1 ${isInstalling ? 'animate-pulse bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500' : 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500'}`}
        />

        {/* Close/Cancel button */}
        <button
          onClick={isInstalling ? handleCancelInstall : handleDismiss}
          className="absolute right-3 top-3 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={isInstalling ? 'Cancel' : 'Dismiss'}
        >
          <X className="h-4 w-4 text-gray-400" />
        </button>

        <div className="flex items-start gap-4">
          {/* App Icon */}
          <div
            className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl shadow-lg ${isInstalling ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-gradient-to-br from-purple-500 to-blue-500'}`}
          >
            {isInstalling ? (
              <Loader2 className="h-7 w-7 animate-spin text-white" />
            ) : (
              <Smartphone className="h-7 w-7 text-white" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {isInstalling
                ? 'Installing Sproutern App...'
                : 'Install Sproutern App'}
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {isInstalling
                ? 'Please wait while we install the app for you.'
                : isIOS
                  ? 'Tap Share → Add to Home Screen'
                  : 'Get quick access to internships & tools'}
            </p>

            {!isIOS && deferredPrompt && !isInstalling && (
              <Button
                onClick={handleInstall}
                size="sm"
                className="mt-3 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-xs text-white hover:from-purple-700 hover:to-blue-700"
                disabled={isInstalling}
              >
                <Download className="mr-1 h-3 w-3" />
                Install App
              </Button>
            )}

            {isInstalling && (
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full animate-pulse rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                    style={{ width: '60%' }}
                  />
                </div>
                <Button
                  onClick={handleCancelInstall}
                  size="sm"
                  variant="ghost"
                  className="h-6 px-2 text-xs text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </Button>
              </div>
            )}

            {isIOS && !isInstalling && (
              <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                <span>Tap</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 6.414V13a1 1 0 11-2 0V6.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z" />
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                <span>then "Add to Home Screen"</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

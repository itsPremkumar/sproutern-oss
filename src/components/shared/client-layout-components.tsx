'use client';

import dynamic from 'next/dynamic';

// Lazy load client-only components that require ssr: false
const InstallPrompt = dynamic(
  () =>
    import('@/components/shared/install-prompt').then((mod) => ({
      default: mod.InstallPrompt,
    })),
  { ssr: false },
);
const ServiceWorkerRegistration = dynamic(
  () =>
    import('@/components/providers/service-worker-registration').then(
      (mod) => ({ default: mod.ServiceWorkerRegistration }),
    ),
  { ssr: false },
);
const NotificationProvider = dynamic(
  () =>
    import('@/components/providers/notification-provider').then((mod) => ({
      default: mod.NotificationProvider,
    })),
  { ssr: false },
);
const NotificationPrompt = dynamic(
  () =>
    import('@/components/shared/notification-prompt').then((mod) => ({
      default: mod.NotificationPrompt,
    })),
  { ssr: false },
);
const EzoicScript = dynamic(
  () =>
    import('@/components/ads/ezoic-script').then((mod) => ({
      default: mod.EzoicScript,
    })),
  { ssr: false },
);
const EzoicLogic = dynamic(
  () =>
    import('@/components/ads/ezoic-logic').then((mod) => ({
      default: mod.EzoicLogic,
    })),
  { ssr: false },
);
const BackToTop = dynamic(
  () =>
    import('@/components/shared/back-to-top').then((mod) => ({
      default: mod.BackToTop,
    })),
  { ssr: false },
);

export function ClientLayoutComponents() {
  return (
    <>
      <EzoicScript />
      <EzoicLogic />
      <InstallPrompt />
      <BackToTop />
      <NotificationPrompt />
      <ServiceWorkerRegistration />
      <NotificationProvider />
    </>
  );
}

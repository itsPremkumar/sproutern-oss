'use client';

import { useEffect, Suspense, useState, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { logPageView, setUserType, setUserProperties } from '@/lib/analytics';
import {
  useAnalyticsTracking,
  useOutboundClickTracking,
  useVisibilityTracking,
} from '@/hooks/useAnalyticsTracking';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);

  // Core page view tracking
  useEffect(() => {
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    logPageView(url);
  }, [pathname, searchParams]);

  // Scroll depth and time on page tracking
  useAnalyticsTracking();

  // Outbound link click tracking
  useOutboundClickTracking();

  // Tab visibility tracking
  useVisibilityTracking();

  // Lazy load Firebase for user property tracking - delayed to not block LCP
  useEffect(() => {
    // Delay Firebase loading by 3 seconds to prioritize LCP
    const timer = setTimeout(() => {
      setFirebaseLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // User property tracking - only after Firebase loads
  useEffect(() => {
    if (!firebaseLoaded) return;

    let unsubscribe: (() => void) | undefined;

    const initFirebaseAnalytics = async () => {
      try {
        // Dynamically import Firebase modules
        const [{ auth, db }, { onAuthStateChanged }, { doc, getDoc }] =
          await Promise.all([
            import('@/lib/firebase'),
            import('firebase/auth'),
            import('firebase/firestore'),
          ]);

        if (!auth || !db) return;

        unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            try {
              const userDocRef = doc(db, 'users', user.uid);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                const userData = userDoc.data();
                const userType = userData.userType as
                  | 'student'
                  | 'startup'
                  | 'admin';

                setUserType(userType);
                setUserProperties({
                  userType: userType,
                  signupDate:
                    userData.createdAt?.toDate?.()?.toISOString?.() ||
                    undefined,
                });
              }
            } catch (error) {
              console.error('[Analytics] Error fetching user data:', error);
            }
          }
        });
      } catch (error) {
        console.error('[Analytics] Error loading Firebase:', error);
      }
    };

    initFirebaseAnalytics();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [firebaseLoaded]);

  return null;
}

export function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}

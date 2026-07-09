// TEMPORARILY DISABLED - Stub export to keep the module valid
export function NotificationPrompt() {
  return null;
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { X, Bell, BellOff, Loader2, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useNotifications } from '@/hooks/use-notifications';

// export function NotificationPrompt() {
//   const {
//     isSupported,
//     permissionStatus,
//     requestPermission,
//     isLoading,
//     isEnabled,
//   } = useNotifications();

//   const [showPrompt, setShowPrompt] = useState(false);
//   const [justEnabled, setJustEnabled] = useState(false);

//   useEffect(() => {
//     // Don't show if not supported or already granted/denied
//     if (
//       !isSupported ||
//       permissionStatus === 'granted' ||
//       permissionStatus === 'denied'
//     ) {
//       return;
//     }

//     // Check if user has dismissed before
//     const dismissed = localStorage.getItem('notification-prompt-dismissed');
//     const dismissedTime = dismissed ? parseInt(dismissed, 10) : 0;
//     const dayInMs = 24 * 60 * 60 * 1000;

//     // Show again after 7 days
//     if (dismissed && Date.now() - dismissedTime < 7 * dayInMs) {
//       return;
//     }

//     // Show prompt after user has been on the site for a while
//     const timer = setTimeout(() => {
//       setShowPrompt(true);
//     }, 30000); // 30 seconds

//     return () => clearTimeout(timer);
//   }, [isSupported, permissionStatus]);

//   const handleEnableNotifications = async () => {
//     const token = await requestPermission();
//     if (token) {
//       setJustEnabled(true);
//       setTimeout(() => {
//         setShowPrompt(false);
//       }, 2000);
//     }
//   };

//   const handleDismiss = () => {
//     setShowPrompt(false);
//     localStorage.setItem(
//       'notification-prompt-dismissed',
//       Date.now().toString(),
//     );
//   };

//   const handleMaybeLater = () => {
//     setShowPrompt(false);
//     // Don't set the dismissed flag, so it shows again on next visit
//   };

//   // Don't render if conditions aren't met
//   if (!isSupported || !showPrompt) return null;

//   // Don't show if already denied by browser
//   if (permissionStatus === 'denied') return null;

//   return (
//     <div className="fixed bottom-4 left-4 right-4 z-50 duration-300 animate-in slide-in-from-bottom-4 md:left-auto md:right-4 md:max-w-sm">
//       <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl dark:border-gray-800 dark:bg-gray-900">
//         {/* Gradient accent */}
//         <div
//           className={`absolute left-0 right-0 top-0 h-1 ${
//             justEnabled
//               ? 'bg-gradient-to-r from-green-500 to-emerald-500'
//               : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500'
//           }`}
//         />

//         {/* Close button */}
//         <button
//           onClick={handleDismiss}
//           className="absolute right-3 top-3 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
//           aria-label="Dismiss"
//         >
//           <X className="h-4 w-4 text-gray-400" />
//         </button>

//         <div className="flex items-start gap-4">
//           {/* Icon */}
//           <div
//             className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl shadow-lg ${
//               justEnabled
//                 ? 'bg-gradient-to-br from-green-500 to-emerald-500'
//                 : 'bg-gradient-to-br from-amber-500 to-orange-500'
//             }`}
//           >
//             {isLoading ? (
//               <Loader2 className="h-7 w-7 animate-spin text-white" />
//             ) : justEnabled ? (
//               <CheckCircle className="h-7 w-7 text-white" />
//             ) : (
//               <Bell className="h-7 w-7 text-white" />
//             )}
//           </div>

//           <div className="min-w-0 flex-1">
//             <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
//               {justEnabled ? 'Notifications Enabled!' : 'Stay Updated'}
//             </h3>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               {justEnabled
//                 ? "You'll receive updates about new opportunities and features."
//                 : 'Get notified about new internships, tools, and career tips.'}
//             </p>

//             {!justEnabled && (
//               <div className="mt-3 flex items-center gap-2">
//                 <Button
//                   onClick={handleEnableNotifications}
//                   size="sm"
//                   className="h-8 bg-gradient-to-r from-amber-500 to-orange-500 text-xs text-white hover:from-amber-600 hover:to-orange-600"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="mr-1 h-3 w-3 animate-spin" />
//                       Enabling...
//                     </>
//                   ) : (
//                     <>
//                       <Bell className="mr-1 h-3 w-3" />
//                       Enable Notifications
//                     </>
//                   )}
//                 </Button>
//                 <Button
//                   onClick={handleMaybeLater}
//                   size="sm"
//                   variant="ghost"
//                   className="h-8 text-xs text-gray-500"
//                   disabled={isLoading}
//                 >
//                   Later
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

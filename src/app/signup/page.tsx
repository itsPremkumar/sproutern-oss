'use client';

import { logSignUp } from '@/lib/analytics';
import { useState, useRef, useEffect } from 'react'; // Import React hooks
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus, Loader2, Eye, EyeOff } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Declare global Firebase config variables (assuming these are injected at build time)
declare const __firebase_config: string;
declare const __app_id: string; // Not used in this specific component, but good to keep if needed elsewhere

// Mock useToast for Canvas environment. In production, replace with a real toast library.
interface ToastOptions {
  title: string;
  description: string;
  variant?: 'default' | 'destructive' | 'success';
}

interface UseToastReturn {
  toast: (options: ToastOptions) => void;
}

const useToast = (): UseToastReturn => ({
  toast: ({ title, description, variant = 'default' }) => {
    console.log(`Toast - ${variant}: ${title} - ${description}`);
    // Using alert for demonstration in Canvas, replace with actual toast in production
    alert(`${title}\n${description}`);
  },
});

import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  Auth,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, Firestore } from 'firebase/firestore';

// Firebase configuration and initialization (MANDATORY for Canvas)
const firebaseConfig = JSON.parse(
  typeof __firebase_config !== 'undefined' ? __firebase_config : '{}',
);

// Initialize Firebase app only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export default function SignUpPage() {
  const router = useRouter();
  const { toast } = useToast();

  // Form states
  const [userType, setUserType] = useState('student');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for password confirmation
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');

  // Loading and OTP-specific states
  const [loading, setLoading] = useState(false); // For overall form submission
  const [isSendingOtp, setIsSendingOtp] = useState(false); // For Send OTP button
  const [otpSent, setOtpSent] = useState(false); // Tracks if an OTP has been successfully sent
  const [otpCooldown, setOtpCooldown] = useState(0); // Cooldown timer in seconds
  const otpTimerRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timer interval

  // Clear OTP timer on component unmount
  useEffect(() => {
    return () => {
      if (otpTimerRef.current) {
        clearInterval(otpTimerRef.current);
      }
    };
  }, []);

  /**
   * Validates the email format using a regex.
   * @param email The email string to validate.
   * @returns True if the email is valid, false otherwise.
   */
  const isValidEmail = (email: string): boolean => {
    // A more robust email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Function to handle sending OTP to the provided email.
   */
  const handleSendOtp = async () => {
    if (!email || !isValidEmail(email)) {
      toast({
        title: 'Input Error',
        description: 'Please enter a valid email address to send OTP.',
        variant: 'destructive',
      });
      return;
    }

    if (otpCooldown > 0) {
      toast({
        title: 'Wait',
        description: `Please wait ${otpCooldown} seconds before sending another OTP.`,
        variant: 'default',
      });
      return;
    }

    setIsSendingOtp(true);
    try {
      // Check if the email is already in use with Firebase Authentication
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        toast({
          title: 'Account Exists',
          description:
            'An account with this email already exists. Please sign in instead.',
          variant: 'destructive',
        });
        setIsSendingOtp(false);
        return;
      }

      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setOtpSent(true);
        setOtpCooldown(60); // Set cooldown for 60 seconds
        otpTimerRef.current = setInterval(() => {
          setOtpCooldown((prev) => {
            if (prev <= 1) {
              if (otpTimerRef.current) clearInterval(otpTimerRef.current);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        toast({
          title: 'OTP Sent',
          description: data.message,
          variant: 'success',
        });
      } else {
        toast({
          title: 'Error Sending OTP',
          description:
            data.message || 'An unknown error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Failed to send OTP:', error);
      let errorMessage =
        'Failed to send OTP. Please check your internet connection and try again.';
      if (error && typeof error === 'object' && 'code' in error) {
        // Handle specific Firebase errors if any occur during fetchSignInMethodsForEmail
        if (error.code === 'auth/network-request-failed') {
          errorMessage =
            'Network error. Please check your internet connection.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'The email address is not valid.';
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSendingOtp(false);
    }
  };

  /**
   * Handles the email sign-up process, including OTP verification and Firebase account creation.
   */
  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Configuration and basic input validation
    if (!auth || !db) {
      toast({
        title: 'Configuration Error',
        description:
          'Firebase is not configured correctly. Please contact support.',
        variant: 'destructive',
      });
      return;
    }

    if (
      !userType ||
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      toast({
        title: 'Input Error',
        description: 'All fields are required.',
        variant: 'destructive',
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: 'Input Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: 'Input Error',
        description: 'Password must be at least 6 characters long.',
        variant: 'destructive',
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: 'Input Error',
        description: 'Passwords do not match.',
        variant: 'destructive',
      });
      return;
    }

    if (!otpSent) {
      toast({
        title: 'OTP Required',
        description:
          'Please send an OTP to your email before creating an account.',
        variant: 'destructive',
      });
      return;
    }

    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast({
        title: 'Input Error',
        description: 'OTP must be a 6-digit number.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      // 1. Verify OTP first by calling the backend API
      const verifyRes = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyRes.ok || !verifyData.success) {
        toast({
          title: 'OTP Verification Failed',
          description:
            verifyData.message ||
            'The OTP is incorrect or expired. Please try again.',
          variant: 'destructive',
        });
        setLoading(false); // Stop loading on OTP failure
        return;
      }

      // 2. If OTP is verified, then create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const userId = user.uid;

      // 3. Update user profile
      await updateProfile(user, {
        displayName: fullName,
      });

      // 4. Store additional user data in Firestore
      await setDoc(doc(db, 'users', userId), {
        fullName,
        email,
        userType,
        createdAt: new Date().toISOString(),
      });

      toast({
        title: 'Success!',
        description:
          'Your account has been created and verified. You are now signed in.',
        variant: 'success',
      });
      logSignUp('email');
      router.push('/profile'); // Redirect to profile page
    } catch (error: any) {
      let errorMessage = 'An unexpected error occurred. Please try again.';
      // Handle specific Firebase authentication errors
      if (error && typeof error === 'object' && 'code' in error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage =
              'This email address is already in use. Please sign in or use a different email.';
            break;
          case 'auth/weak-password':
            errorMessage =
              'The password is too weak. Please use at least 6 characters, including a mix of letters, numbers, and symbols.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'The email address is not valid.';
            break;
          case 'auth/operation-not-allowed':
            errorMessage =
              'Email/password accounts are not enabled. Please contact support.';
            break;
          default:
            errorMessage =
              error.message || 'An unknown authentication error occurred.';
        }
      } else if (error instanceof Error) {
        // Catch-all for other general JavaScript errors
        errorMessage = error.message;
      }
      toast({
        title: 'Sign Up Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-inter flex min-h-screen items-center justify-center bg-gray-100 py-12 dark:bg-gray-900">
      <Card className="mx-auto w-full max-w-sm rounded-lg shadow-lg">
        <CardHeader className="p-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <UserPlus className="h-6 w-6 text-primary" /> Sign Up
          </h2>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <form
            onSubmit={handleEmailSignUp}
            className="grid gap-6"
          >
            {/* User Type Selection */}
            <div className="grid gap-2">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                I am a...
              </Label>
              <RadioGroup
                defaultValue="student"
                name="userType"
                className="grid grid-cols-2 gap-4"
                onValueChange={setUserType}
                value={userType}
              >
                <div>
                  <RadioGroupItem
                    value="student"
                    id="student"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="student"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary-foreground dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                  >
                    Student
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="startup"
                    id="startup"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="startup"
                    className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary-foreground dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                  >
                    Startup
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Full Name Input */}
            <div className="grid gap-2">
              <Label
                htmlFor="full-name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full name
              </Label>
              <Input
                id="full-name"
                name="fullName"
                placeholder="John Doe or Innovate Inc."
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                className="rounded-md border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50"
              />
            </div>

            {/* Email Input */}
            <div className="grid gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // Reset OTP state if email changes after OTP was sent
                  if (otpSent) {
                    setOtpSent(false);
                    setOtpCooldown(0);
                    if (otpTimerRef.current) {
                      clearInterval(otpTimerRef.current);
                    }
                  }
                }}
                autoComplete="email"
                className="rounded-md border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50"
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="grid gap-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="rounded-md border border-gray-300 bg-white pr-10 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Password must be at least 6 characters.
              </p>
            </div>

            {/* Confirm Password Input */}
            <div className="grid gap-2">
              <Label
                htmlFor="confirm-password"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'} // Keep consistent with main password visibility
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                className="rounded-md border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50"
              />
            </div>

            {/* Send OTP Button */}
            <div className="grid gap-2">
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200"
                onClick={handleSendOtp}
                disabled={isSendingOtp || otpCooldown > 0} // Disable if sending or on cooldown
              >
                {isSendingOtp ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending
                    OTP...
                  </>
                ) : otpCooldown > 0 ? (
                  `Resend OTP in ${otpCooldown}s`
                ) : (
                  'Send OTP'
                )}
              </Button>
            </div>

            {/* OTP Input */}
            <div className="grid gap-2">
              <Label
                htmlFor="otp"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                OTP
              </Label>
              <Input
                id="otp"
                type="text"
                name="otp"
                placeholder="123456"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="rounded-md border border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enter the 6-digit code sent to your email.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-lg font-semibold text-primary-foreground shadow-md transition-colors duration-200 hover:bg-primary/90"
              disabled={loading || !otpSent} // Disable if loading or OTP hasn't been sent
            >
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <UserPlus className="mr-2 h-5 w-5" />
              )}
              {loading ? 'Creating Account...' : 'Create an account'}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
            Already have an account?{' '}
            <Link
              href="/signin"
              className="text-primary underline transition-colors duration-200 hover:text-primary/80"
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// "use client";

// import { useState } from "react"; // Import React hooks
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { UserPlus, Loader2, Eye, EyeOff } from "lucide-react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// // Declare global Firebase config variables (assuming these are injected at build time)
// declare const __firebase_config: string;
// declare const __app_id: string; // Not used in this specific component, but good to keep if needed elsewhere

// // Mock useToast for Canvas environment. In production, replace with a real toast library.
// interface ToastOptions {
//   title: string;
//   description: string;
//   variant?: "default" | "destructive" | "success";
// }

// interface UseToastReturn {
//   toast: (options: ToastOptions) => void;
// }

// const useToast = (): UseToastReturn => ({
//   toast: ({ title, description, variant = "default" }) => {
//     console.log(`Toast - ${variant}: ${title} - ${description}`);
//     // Using alert for demonstration in Canvas, replace with actual toast in production
//     alert(`${title}\n${description}`);
//   },
// });

// import { initializeApp, getApps, getApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, updateProfile, Auth, fetchSignInMethodsForEmail } from 'firebase/auth';
// import { getFirestore, doc, setDoc, Firestore } from 'firebase/firestore';

// // Firebase configuration and initialization (MANDATORY for Canvas)
// const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

// // Initialize Firebase app only if it hasn't been initialized already
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// const auth: Auth = getAuth(app);
// const db: Firestore = getFirestore(app);

// export default function SignUpPage() {
//   const router = useRouter();
//   const { toast } = useToast();

//   // Form states
//   const [userType, setUserType] = useState("student");
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Loading state
//   const [loading, setLoading] = useState(false);

//   /**
//    * Validates the email format using a regex.
//    * @param email The email string to validate.
//    * @returns True if the email is valid, false otherwise.
//    */
//   const isValidEmail = (email: string): boolean => {
//     // A more robust email regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   /**
//    * Handles the email sign-up process, creating a Firebase account directly.
//    */
//   const handleEmailSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Configuration and basic input validation
//     if (!auth || !db) {
//       toast({
//         title: "Configuration Error",
//         description: "Firebase is not configured correctly. Please contact support.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!userType || !fullName || !email || !password || !confirmPassword) {
//       toast({
//         title: "Input Error",
//         description: "All fields are required.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!isValidEmail(email)) {
//       toast({
//         title: "Input Error",
//         description: "Please enter a valid email address.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (password.length < 6) {
//       toast({
//         title: "Input Error",
//         description: "Password must be at least 6 characters long.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast({
//         title: "Input Error",
//         description: "Passwords do not match.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       // Check if the email is already in use with Firebase Authentication
//       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//       if (signInMethods.length > 0) {
//         toast({
//           title: "Account Exists",
//           description: "An account with this email already exists. Please sign in instead.",
//           variant: "destructive",
//         });
//         setLoading(false);
//         return;
//       }

//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       const userId = user.uid;

//       // Update user profile
//       await updateProfile(user, {
//         displayName: fullName,
//       });

//       // Store additional user data in Firestore
//       await setDoc(doc(db, "users", userId), {
//         fullName,
//         email,
//         userType,
//         createdAt: new Date().toISOString(),
//       });

//       toast({
//         title: "Success!",
//         description: "Your account has been created. You are now signed in.",
//         variant: "success",
//       });
//       router.push("/profile"); // Redirect to profile page
//     } catch (error: any) {
//       let errorMessage = "An unexpected error occurred. Please try again.";
//       // Handle specific Firebase authentication errors
//       if (error && typeof error === 'object' && 'code' in error) {
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             errorMessage = "This email address is already in use. Please sign in or use a different email.";
//             break;
//           case 'auth/weak-password':
//             errorMessage = "The password is too weak. Please use at least 6 characters, including a mix of letters, numbers, and symbols.";
//             break;
//           case 'auth/invalid-email':
//             errorMessage = "The email address is not valid.";
//             break;
//           case 'auth/operation-not-allowed':
//             errorMessage = "Email/password accounts are not enabled. Please contact support.";
//             break;
//           default:
//             errorMessage = error.message || "An unknown authentication error occurred.";
//         }
//       } else if (error instanceof Error) {
//         // Catch-all for other general JavaScript errors
//         errorMessage = error.message;
//       }
//       toast({
//         title: "Sign Up Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12 font-inter">
//       <Card className="mx-auto max-w-sm w-full rounded-lg shadow-lg">
//         <CardHeader className="p-6">
//           <CardTitle className="text-2xl font-bold flex items-center gap-2">
//             <UserPlus className="h-6 w-6 text-primary" /> Sign Up
//           </CardTitle>
//           <CardDescription className="text-gray-600 dark:text-gray-400">
//             Enter your information to create an account
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="p-6 pt-0">
//           <form onSubmit={handleEmailSignUp} className="grid gap-6">
//             {/* User Type Selection */}
//             <div className="grid gap-2">
//               <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">I am a...</Label>
//               <RadioGroup
//                 defaultValue="student"
//                 name="userType"
//                 className="grid grid-cols-2 gap-4"
//                 onValueChange={setUserType}
//                 value={userType}
//               >
//                 <div>
//                   <RadioGroupItem
//                     value="student"
//                     id="student"
//                     className="peer sr-only"
//                   />
//                   <Label
//                     htmlFor="student"
//                     className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary-foreground transition-colors duration-200"
//                   >
//                     Student
//                   </Label>
//                 </div>
//                 <div>
//                   <RadioGroupItem
//                     value="startup"
//                     id="startup"
//                     className="peer sr-only"
//                   />
//                   <Label
//                     htmlFor="startup"
//                     className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary-foreground transition-colors duration-200"
//                   >
//                     Startup
//                   </Label>
//                 </div>
//               </RadioGroup>
//             </div>

//             {/* Full Name Input */}
//             <div className="grid gap-2">
//               <Label htmlFor="full-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full name</Label>
//               <Input
//                 id="full-name"
//                 name="fullName"
//                 placeholder="John Doe or Innovate Inc."
//                 required
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 autoComplete="name"
//                 className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-primary focus:border-primary"
//               />
//             </div>

//             {/* Email Input */}
//             <div className="grid gap-2">
//               <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="m@example.com"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-primary focus:border-primary"
//               />
//             </div>

//             {/* Password Input with Toggle */}
//             <div className="grid gap-2">
//               <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="new-password"
//                   className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 pr-10 focus:ring-primary focus:border-primary"
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </Button>
//               </div>
//               <p className="text-xs text-gray-500 dark:text-gray-400">Password must be at least 6 characters.</p>
//             </div>

//             {/* Confirm Password Input */}
//             <div className="grid gap-2">
//               <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</Label>
//               <Input
//                 id="confirm-password"
//                 name="confirmPassword"
//                 type={showPassword ? "text" : "password"} // Keep consistent with main password visibility
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 autoComplete="new-password"
//                 className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-primary focus:border-primary"
//               />
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               className="w-full rounded-md py-2 px-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
//               disabled={loading}
//             >
//               {loading ? (
//                 <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//               ) : (
//                 <UserPlus className="mr-2 h-5 w-5" />
//               )}
//               {loading ? "Creating Account..." : "Create an account"}
//             </Button>
//           </form>

//           {/* Sign In Link */}
//           <div className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
//             Already have an account?{" "}
//             <Link href="/signin" className="underline text-primary hover:text-primary/80 transition-colors duration-200">
//               Sign in
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react"; // Import React hooks
// import Link from "next/link";
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
// import {
//   Mail,
//   Loader2,
//   CheckCircle,
//   AlertTriangle,
//   Eye,
//   EyeOff,
// } from "lucide-react";
// import {
//   Alert,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert";

// // --- Mocking for Canvas Environment (Keep these if needed for your setup) ---
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
//     // In a real browser environment, you'd use a UI toast library here.
//     // For Canvas/mocking, alert is used.
//     alert(`${title}\n${description}`);
//   },
// });
// // --- End of Mocking ---

// export default function ForgotPasswordPage() {
//   const { toast } = useToast();
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isSendingOtp, setIsSendingOtp] = useState(false);
//   const [otpCooldown, setOtpCooldown] = useState(0);
//   const otpTimerRef = useRef<NodeJS.Timeout | null>(null);

//   // State to manage the success/error message display after form submission
//   const [formMessage, setFormMessage] = useState<{
//     type: "success" | "error" | null;
//     title: string;
//     description: string;
//   } | null>(null);

//   // Clear OTP timer on component unmount
//   useEffect(() => {
//     return () => {
//       if (otpTimerRef.current) {
//         clearInterval(otpTimerRef.current);
//       }
//     };
//   }, []);

//   /**
//    * Handles sending the OTP to the user's email.
//    * Displays toast messages for success, error, or cooldown.
//    */
//   const handleSendOtp = async () => {
//     setFormMessage(null); // Clear previous form messages
//     if (!email || !email.includes("@")) {
//       toast({
//         title: "Input Error",
//         description: "Please enter a valid email address.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (otpCooldown > 0) {
//       toast({
//         title: "Wait",
//         description: `Please wait ${otpCooldown} seconds before sending another OTP.`,
//         variant: "default",
//       });
//       return;
//     }

//     setIsSendingOtp(true);
//     try {
//       const res = await fetch("/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       // Check if the response is JSON before trying to parse it
//       const contentType = res.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new Error("Received non-JSON response from server. Check backend API endpoint.");
//       }

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setOtpSent(true);
//         setOtpCooldown(60); // Set cooldown for 60 seconds
//         // Start cooldown timer
//         otpTimerRef.current = setInterval(() => {
//           setOtpCooldown((prev) => {
//             if (prev <= 1) {
//               if (otpTimerRef.current) clearInterval(otpTimerRef.current);
//               return 0;
//             }
//             return prev - 1;
//           });
//         }, 1000);
//         toast({
//           title: "OTP Sent",
//           description: data.message,
//           variant: "success",
//         });
//       } else {
//         // If res.ok is false or data.success is false, it's an API-defined error
//         toast({
//           title: "Error Sending OTP",
//           description: data.message || "An unknown error occurred.",
//           variant: "destructive",
//         });
//       }
//     } catch (error: any) {
//       let errorMessage = "Failed to send OTP. Please check your network and try again.";
//       if (error instanceof Error) {
//         errorMessage = `Failed to send OTP: ${error.message}`;
//       }
//       toast({
//         title: "Network Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setIsSendingOtp(false);
//     }
//   };

//   /**
//    * Handles the complete password reset flow:
//    * 1. Validates user input.
//    * 2. Verifies the OTP via the backend.
//    * 3. Sends the new password to a secure backend endpoint for updating.
//    */
//   const handlePasswordReset = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormMessage(null); // Clear previous form messages

//     // Basic client-side validation
//     if (!email || !otp || !newPassword || !confirmPassword) {
//       setFormMessage({
//         type: "error",
//         title: "Input Error",
//         description: "All fields are required.",
//       });
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setFormMessage({
//         type: "error",
//         title: "Password Mismatch",
//         description: "The new passwords do not match.",
//       });
//       return;
//     }

//     if (newPassword.length < 6) {
//       setFormMessage({
//         type: "error",
//         title: "Weak Password",
//         description: "Password must be at least 6 characters long.",
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       // 1. Verify OTP by calling the backend API.
//       const verifyRes = await fetch("/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const verifyContentType = verifyRes.headers.get("content-type");
//       if (!verifyContentType || !verifyContentType.includes("application/json")) {
//         throw new Error("Received non-JSON response during OTP verification. Check backend API endpoint.");
//       }
//       const verifyData = await verifyRes.json();

//       if (!verifyRes.ok || !verifyData.success) {
//         setFormMessage({
//           type: "error",
//           title: "OTP Verification Failed",
//           description: verifyData.message || "Please check your OTP.",
//         });
//         setLoading(false);
//         return;
//       }

//       // 2. If OTP is verified, call the backend to reset the password.
//       const resetRes = await fetch("/api/auth/reset-password-with-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp, newPassword }),
//       });

//       const resetContentType = resetRes.headers.get("content-type");
//       if (!resetContentType || !resetContentType.includes("application/json")) {
//         throw new Error("Received non-JSON response during password reset. Check backend API endpoint.");
//       }
//       const resetData = await resetRes.json();

//       if (!resetRes.ok || !resetData.success) {
//         setFormMessage({
//           type: "error",
//           title: "Password Reset Failed",
//           description:
//             resetData.message || "An error occurred while resetting your password.",
//         });
//         setLoading(false);
//         return;
//       }

//       // 3. If password reset is successful, show success message and clear form.
//       setFormMessage({
//         type: "success",
//         title: "Password Updated!",
//         description:
//           "Your password has been successfully reset. You can now sign in with your new password.",
//       });

//       // Clear the form after successful password reset
//       setEmail("");
//       setNewPassword("");
//       setConfirmPassword("");
//       setOtp("");
//       setOtpSent(false);
//       setOtpCooldown(0);
//       if (otpTimerRef.current) {
//         clearInterval(otpTimerRef.current);
//       }
//     } catch (error: any) {
//       let errorMessage = "An unexpected error occurred during password reset. Please try again.";
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       }
//       setFormMessage({
//         type: "error",
//         title: "Process Error",
//         description: errorMessage,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-secondary py-12 font-inter">
//       <Card className="mx-auto max-w-sm w-full rounded-lg shadow-lg">
//         <CardHeader className="p-6">
//           <CardTitle className="text-2xl font-bold flex items-center gap-2">
//             <Mail className="h-6 w-6 text-primary" /> Forgot Password
//           </CardTitle>
//           <CardDescription className="text-gray-600 dark:text-gray-400">
//             Enter your email to receive an OTP and then set a new password.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="p-6 pt-0">
//           {/* Display form-wide messages (success/error) */}
//           {formMessage && (
//             <Alert
//               variant={formMessage.type === "success" ? "default" : "destructive"}
//               className="mb-4 rounded-md"
//             >
//               {formMessage.type === "success" ? (
//                 <CheckCircle className="h-4 w-4" />
//               ) : (
//                 <AlertTriangle className="h-4 w-4" />
//               )}
//               <AlertTitle>{formMessage.title}</AlertTitle>
//               <AlertDescription>{formMessage.description}</AlertDescription>
//             </Alert>
//           )}

//           <form onSubmit={handlePasswordReset} className="grid gap-4">
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
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   // Reset OTP state if email changes after OTP was sent
//                   if (otpSent) {
//                     setOtpSent(false);
//                     setOtpCooldown(0);
//                     if (otpTimerRef.current) {
//                       clearInterval(otpTimerRef.current);
//                     }
//                   }
//                   setFormMessage(null); // Clear messages on input change
//                 }}
//                 className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-primary focus:border-primary"
//               />
//             </div>

//             {/* Send OTP Button */}
//             <div className="grid gap-2">
//               <Button
//                 type="button"
//                 variant="outline"
//                 className="w-full rounded-md py-2 px-4 text-sm font-medium transition-colors duration-200"
//                 onClick={handleSendOtp}
//                 disabled={isSendingOtp || otpCooldown > 0}
//               >
//                 {isSendingOtp ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending
//                     OTP...
//                   </>
//                 ) : otpCooldown > 0 ? (
//                   `Resend OTP in ${otpCooldown}s`
//                 ) : (
//                   <>
//                     <Mail className="mr-2 h-4 w-4" /> Send OTP
//                   </>
//                 )}
//               </Button>
//             </div>

//             {/* OTP Input */}
//             <div className="grid gap-2">
//               <Label htmlFor="otp" className="text-sm font-medium text-gray-700 dark:text-gray-300">OTP</Label>
//               <Input
//                 id="otp"
//                 type="text"
//                 name="otp"
//                 placeholder="123456"
//                 required
//                 value={otp}
//                 onChange={(e) => {
//                   setOtp(e.target.value);
//                   setFormMessage(null); // Clear messages on input change
//                 }}
//                 className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-primary focus:border-primary"
//               />
//             </div>

//             {/* New Password Input with Toggle */}
//             <div className="grid gap-2">
//               <Label htmlFor="new-password" className="text-sm font-medium text-gray-700 dark:text-gray-300">New Password</Label>
//               <div className="relative">
//                 <Input
//                   id="new-password"
//                   name="newPassword"
//                   type={showNewPassword ? "text" : "password"}
//                   required
//                   value={newPassword}
//                   onChange={(e) => {
//                     setNewPassword(e.target.value);
//                     setFormMessage(null); // Clear messages on input change
//                   }}
//                   className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 pr-10 focus:ring-primary focus:border-primary"
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
//                   onClick={() => setShowNewPassword((prev) => !prev)}
//                 >
//                   {showNewPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                 </Button>
//               </div>
//             </div>

//             {/* Confirm Password Input with Toggle */}
//             <div className="grid gap-2">
//               <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</Label>
//               <div className="relative">
//                 <Input
//                   id="confirm-password"
//                   name="confirmPassword"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => {
//                     setConfirmPassword(e.target.value);
//                     setFormMessage(null); // Clear messages on input change
//                   }}
//                   className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 pr-10 focus:ring-primary focus:border-primary"
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                 </Button>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               className="w-full rounded-md py-2 px-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
//               disabled={loading || !otpSent} // Disable if loading or OTP hasn't been sent
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Resetting...
//                 </>
//               ) : (
//                 <>
//                   <Mail className="mr-2 h-5 w-5" /> Reset Password
//                 </>
//               )}
//             </Button>
//           </form>

//           <div className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
//             Remembered your password?{" "}
//             <Link href="/signin" className="underline text-primary hover:text-primary/80 transition-colors duration-200">
//               Sign in
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Import the initialized auth instance

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Please check your inbox.');
    } catch (err: any) {
      // Handle common Firebase errors
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email address.');
      } else {
        setError(
          'Failed to send password reset email. Please try again later.',
        );
      }
      console.error('Password reset error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600">
          Enter your email address and we will send you a link to reset your
          password.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="sr-only text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              disabled={loading}
            />
          </div>

          {message && <p className="text-sm text-green-600">{message}</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

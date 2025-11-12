
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
          <CardDescription>
            {isSubmitted 
              ? "Check your email for reset instructions."
              : "Enter your email to receive a password reset link."
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <p>If an account exists for <span className="font-semibold">{email}</span>, you will receive an email with instructions on how to reset your password.</p>
              <Button asChild className="w-full">
                <Link href="/login">Back to Login</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
               <div className="text-center text-sm">
                 <Link href="/login" className="underline">
                    Back to Login
                 </Link>
               </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

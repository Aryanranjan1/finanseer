
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChromeIcon } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('user@yourbroker.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (email === 'user@yourbroker.com' && password === 'password') {
      // The middleware will handle the redirection to dashboard.yourbroker.com
      router.push('/app/overview'); 
    } else {
      setError("Failed to login. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    // In a real app, this would trigger Google sign-in. For now, just redirects.
    router.push('/app/overview');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="user@yourbroker.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="flex items-center justify-between text-sm">
                <Link href="/forgot-password" passHref className="underline">
                  Forgot password?
                </Link>
              </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <Separator className="my-6" />

          <div className="space-y-4">
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
              <ChromeIcon className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
           <div className="mt-4 text-center text-sm">
            Admin?{' '}
            <Link href="/admin/login" className="underline">
              Admin login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

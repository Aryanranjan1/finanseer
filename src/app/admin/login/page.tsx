
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@yourbroker.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // In a real app, you'd verify the user is an admin.
    if (email === 'admin@yourbroker.com' && password === 'password') {
      // The middleware will handle redirection to admin.yourbroker.com
      router.push('/admin'); 
    } else {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Access the SnabbX administration panel.</CardDescription>
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
                placeholder="admin@yourbroker.com"
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
           <div className="mt-4 text-center text-sm">
            Not an admin?{' '}
            <Link href="/login" className="underline">
              User login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

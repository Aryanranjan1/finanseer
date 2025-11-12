
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would clear session cookies or tokens here.
    const timer = setTimeout(() => {
      router.push('/login');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="w-full max-w-md mx-4 text-center">
        <CardHeader>
          <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center">
            <LogOut className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold mt-4">You've been logged out</CardTitle>
          <CardDescription>Thank you for using Finanseer. You will be redirected to the login page shortly.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/login">Login Again</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

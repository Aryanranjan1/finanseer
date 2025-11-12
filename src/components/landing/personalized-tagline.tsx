'use client';

import { useState, useTransition } from 'react';
import { Sparkles } from 'lucide-react';
import { getNewTagline } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function PersonalizedTagline({ initialTagline }: { initialTagline: string }) {
  const [tagline, setTagline] = useState(initialTagline);
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    startTransition(async () => {
      const newTagline = await getNewTagline();
      setTagline(newTagline);
    });
  };

  return (
    <div className="relative">
      <div className="min-h-[72px] md:min-h-[84px] lg:min-h-[96px] flex items-center justify-center">
        {isPending ? (
          <div className="w-full space-y-2">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-12 w-1/2 mx-auto" />
          </div>
        ) : (
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {tagline}
          </h1>
        )}
      </div>
      <div className="absolute -top-4 -right-4 md:top-0 md:right-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleGenerate}
          disabled={isPending}
          className="text-accent rounded-full hover:bg-white/10 hover:text-accent"
          aria-label="Generate new tagline"
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

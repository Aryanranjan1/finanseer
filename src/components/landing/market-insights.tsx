import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function MarketInsights() {
  const marketInsightsImage = PlaceHolderImages.find(img => img.id === 'market-insights');
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            {marketInsightsImage && (
                <Image
                    src={marketInsightsImage.imageUrl}
                    alt={marketInsightsImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={marketInsightsImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stay Ahead with Market Insights</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empower your trading decisions with our expert analysis, daily news, and comprehensive educational resources. From beginner guides to advanced strategies, our education hub has everything you need to succeed.
            </p>
            <Button size="lg" className="mt-8">
              Explore Education Hub <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

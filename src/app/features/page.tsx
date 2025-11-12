
'use client';

import Image from 'next/image';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { featuresPageData } from '@/lib/page-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Cta } from '@/components/landing/cta';

const { hero, features } = featuresPageData;

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-secondary/50">
             <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">{hero.headline}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">{hero.subheadline}</p>
             </div>
        </section>

        {/* Features List */}
        <section className="py-16 md:py-24">
            <div className="container space-y-24">
                {features.map((feature, index) => {
                    const featureImage = PlaceHolderImages.find(img => img.id === feature.imageId);
                    return (
                        <div key={feature.id} id={feature.id} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={cn("relative aspect-video rounded-xl overflow-hidden", index % 2 !== 0 && "md:order-last")}>
                                {featureImage && (
                                    <Image
                                        src={featureImage.imageUrl}
                                        alt={featureImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={featureImage.imageHint}
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                                <p className="mt-4 text-lg text-muted-foreground">{feature.description}</p>
                                <ul className="mt-6 space-y-2">
                                    {feature.points.map(point => (
                                        <li key={point} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-500" />
                                            <span className="text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>

        <Cta />

      </main>
      <Footer />
    </div>
  );
}

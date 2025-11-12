
'use client';

import Image from 'next/image';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { aboutPageData } from '@/lib/page-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const { hero, story, team, cta } = aboutPageData;

export default function AboutPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === hero.imageId);
    const storyImage = PlaceHolderImages.find(img => img.id === story.imageId);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 text-center text-white">
             {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                />
             )}
             <div className="absolute inset-0 bg-black/60"></div>
             <div className="container relative">
                <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">{hero.headline}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/80">{hero.subheadline}</p>
             </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                         {storyImage && (
                            <Image
                                src={storyImage.imageUrl}
                                alt={storyImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={storyImage.imageHint}
                            />
                         )}
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">{story.headline}</h2>
                        <p className="mt-4 text-lg text-muted-foreground">{story.content}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">{team.headline}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.members.map((member) => {
                        const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
                        return (
                             <Card key={member.name} className="text-center">
                                <CardContent className="p-6">
                                    <Avatar className="h-24 w-24 mx-auto mb-4">
                                        <AvatarImage src={memberImage?.imageUrl} alt={member.name} data-ai-hint={memberImage?.imageHint} />
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-primary">{member.role}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold">{cta.headline}</h2>
                <p className="mt-2 text-lg text-muted-foreground">{cta.subheadline}</p>
                <Button size="lg" className="mt-6">{cta.cta}</Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

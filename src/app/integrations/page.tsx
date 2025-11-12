
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { integrationsPageData } from '@/lib/page-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cta } from '@/components/landing/cta';
import Image from 'next/image';

const { headline, subheadline, categories } = integrationsPageData;

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 text-center bg-secondary/50">
             <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">{headline}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">{subheadline}</p>
             </div>
        </section>

        {/* Integrations List */}
        <section className="py-16 md:py-24">
            <div className="container space-y-16">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.integrations.map((integration) => (
                                <Card key={integration.name}>
                                    <CardHeader className="flex-row items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-lg">
                                            {/* In a real app, you'd use next/image with imported logos */}
                                            <div className="w-8 h-8 relative">
                                                 <Image src={`/logos/${integration.logo}`} alt={`${integration.name} logo`} fill className="object-contain" />
                                            </div>
                                        </div>
                                        <CardTitle>{integration.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{integration.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <Cta />

      </main>
      <Footer />
    </div>
  );
}

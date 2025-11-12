
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { insightsData } from '@/lib/page-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const { posts } = insightsData;

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 text-center bg-secondary/50">
             <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold">Insights & Analysis</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                    Stay ahead of the market with AI-driven insights, expert analysis, and the latest financial news.
                </p>
             </div>
        </section>

        {/* Blog Post Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const postImage = PlaceHolderImages.find(img => img.id === post.imageId);
                return (
                  <Card key={post.slug} className="flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video rounded-t-lg overflow-hidden">
                        {postImage && (
                          <Image
                            src={postImage.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            data-ai-hint={postImage.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <div className="mb-2">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="mr-2 mb-2">{tag}</Badge>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold hover:text-primary transition-colors">
                        <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">{post.author} • {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="mt-4 text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={`/insights/${post.slug}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            {/* Pagination would go here in a real app */}
            <div className="flex justify-center mt-12">
                <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


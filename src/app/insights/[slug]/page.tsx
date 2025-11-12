
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { insightsData } from '@/lib/page-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const { posts } = insightsData;

// This function would typically fetch data from a CMS
const getPostBySlug = (slug: string) => {
    return posts.find(p => p.slug === slug);
}
const getRelatedPosts = (currentSlug: string) => {
    return posts.filter(p => p.slug !== currentSlug).slice(0, 2);
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(img => img.id === post.imageId);
  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container py-8">
            <Button asChild variant="ghost">
                <Link href="/insights"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights</Link>
            </Button>
        </div>

        {/* Article Hero */}
        <div className="relative h-96">
            {postImage && (
                <Image
                    src={postImage.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={postImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="relative container h-full flex flex-col justify-end text-white pb-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
                    <p className="mt-4 text-lg text-white/80">
                        By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="mt-4">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="mr-2 mb-2 bg-white/20 text-white border-none">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Article Content */}
        <article className="py-16 md:py-24">
            <div className="container">
                <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
                    <p>{post.excerpt}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                    </p>
                    <figure>
                        <Image src="https://picsum.photos/seed/article-inline/800/400" alt="Inline image" width={800} height={400} className="rounded-lg" data-ai-hint="data analysis" />
                        <figcaption>A placeholder image representing data analysis.</figcaption>
                    </figure>
                    <h2>A Deeper Dive into the Topic</h2>
                    <p>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. 
                    </p>
                    <ul>
                        <li>Key takeaway one: Lorem ipsum dolor sit amet.</li>
                        <li>Key takeaway two: Consectetur adipiscing elit.</li>
                        <li>Key takeaway three: Integer nec odio praesent.</li>
                    </ul>
                     <p>
                        Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
                    </p>
                </div>
            </div>
        </article>
        
        {/* Related Posts */}
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Insights</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {relatedPosts.map(related => {
                        const relatedImage = PlaceHolderImages.find(img => img.id === related.imageId);
                        return (
                             <Card key={related.slug}>
                                <CardContent className="p-6">
                                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                        {relatedImage && <Image src={relatedImage.imageUrl} alt={related.title} fill className="object-cover" data-ai-hint={relatedImage.imageHint} />}
                                    </div>
                                    <h3 className="text-xl font-bold hover:text-primary">
                                        <Link href={`/insights/${related.slug}`}>{related.title}</Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

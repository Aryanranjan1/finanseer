
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ChevronLeft, ChevronRight, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Community() {
  const communityImage = PlaceHolderImages.find(img => img.id === 'community-main');
  const onlineActivitiesImage = PlaceHolderImages.find(img => img.id === 'online-activities');
  const telegramAvatar = PlaceHolderImages.find(img => img.id === 'testimonial-2');
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], ['50px', '0px', '0px', '-50px']);


  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity, scale, y }}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                JOIN THE <span className="text-green-600">COMMUNITY</span>
                </h2>
            </div>
            <p className="text-muted-foreground text-lg">
                Connect and grow with thousands of enthusiasts and professionals in the Forex trading industry.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
            <div className="relative rounded-xl overflow-hidden min-h-[400px]">
                {communityImage && (
                    <Image
                        src={communityImage.imageUrl}
                        alt={communityImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={communityImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white">
                    <div className="absolute top-4 right-4 flex space-x-2">
                        <Button size="icon" variant="outline" className="rounded-full bg-white/20 border-white/30 hover:bg-white/30">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full bg-white/20 border-white/30 hover:bg-white/30">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-3xl font-bold">Trade with confidence</h3>
                        <Button variant="link" className="text-white p-0 h-auto mt-4">
                            Past events
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h3 className="text-3xl font-bold leading-tight">
                    We participate in Forex expos and organize special events to engage with our trading community in person.
                </h3>
            </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 flex flex-col">
                <CardContent className="p-0 flex-grow">
                    <h4 className="text-xl font-bold mb-4">Join our Telegram</h4>
                    <p className="text-muted-foreground mb-6 text-sm">"Keep up with the freshest trade ideas and discuss your challenges in our active community."</p>
                    <div className="flex items-center gap-3">
                        {telegramAvatar && (
                             <Avatar className="h-10 w-10">
                                <AvatarImage src={telegramAvatar.imageUrl} alt="Analyst" data-ai-hint={telegramAvatar.imageHint}/>
                                <AvatarFallback>{telegramAvatar.id.charAt(0)}</AvatarFallback>
                            </Avatar>
                        )}
                        <div>
                            <p className="font-semibold text-sm">Adeola-Freeman</p>
                            <p className="text-xs text-muted-foreground">SnabbX analyst</p>
                        </div>
                    </div>
                </CardContent>
                <Button variant="outline" className="w-fit mt-8 justify-between">Join now <ArrowRight /></Button>
            </Card>

            <Card className="p-8 flex flex-col justify-center">
                <CardContent className="p-0">
                    <h4 className="text-xl font-bold mb-4">Connect with traders on our social media.</h4>
                    <p className="text-muted-foreground mb-6">
                        Network <span className='font-bold text-foreground'>online</span> and stay on top of updates, economic events, and trading trends.
                    </p>
                    <div className="flex space-x-3">
                        <Button size="icon" variant="outline" className="rounded-full text-muted-foreground"><Instagram className="h-5 w-5" /></Button>
                        <Button size="icon" variant="outline" className="rounded-full text-muted-foreground"><Facebook className="h-5 w-5" /></Button>
                        <Button size="icon" variant="outline" className="rounded-full text-muted-foreground"><Youtube className="h-5 w-5" /></Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="relative overflow-hidden rounded-xl text-white flex flex-col justify-between p-8 min-h-[300px]">
                 {onlineActivitiesImage && (
                    <Image
                        src={onlineActivitiesImage.imageUrl}
                        alt={onlineActivitiesImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={onlineActivitiesImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex flex-col h-full">
                    <div className="text-xs font-semibold space-x-2">
                        <span>Webinars</span>
                        <span>•</span>
                        <span>Live streams</span>
                    </div>
                    <h4 className="text-xl font-bold mt-4">JOIN OUR ONLINE ACTIVITIES WITH SNABBX ANALYSTS</h4>
                    <div className="mt-auto">
                        <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 justify-between">Watch live streams <ArrowRight /></Button>
                    </div>
                </div>
            </Card>
        </div>

      </div>
    </motion.section>
  );
}

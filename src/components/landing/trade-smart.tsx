
'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { tradeSmartData } from '@/lib/page-data';
import Link from 'next/link';

const { headline, subheadline, cards } = tradeSmartData;
const literacyCard = cards.find(c => c.id === 'literacy');
const portfolioCard = cards.find(c => c.id === 'portfolio');
const informedCard = cards.find(c => c.id === 'informed');

export function TradeSmart() {
    const educateImage = literacyCard ? PlaceHolderImages.find(img => img.id === literacyCard.imageId) : undefined;
    const informedImage = informedCard ? PlaceHolderImages.find(img => img.id === informedCard.imageId) : undefined;
    
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 1, 1, 0]);
    
    // Animation for the main card (sliding from left)
    const xLeft = useTransform(scrollYProgress, [0.1, 0.5], ['-100px', '0px']);
    const opacityLeft = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    // Animation for the top-right card (sliding from right)
    const xRight = useTransform(scrollYProgress, [0.2, 0.6], ['100px', '0px']);
    const opacityRight = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

    // Animation for the bottom-right card (sliding from bottom)
    const yBottom = useTransform(scrollYProgress, [0.3, 0.7], ['100px', '0px']);
    const opacityBottom = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);


  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity }}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                {headline.normal} <span className="text-green-600">{headline.highlight}</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              {subheadline}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              style={{ x: xLeft, opacity: opacityLeft }}
              className="flex"
            >
              {literacyCard && (
                <Card className="lg:col-span-1 relative overflow-hidden rounded-xl text-white flex flex-col justify-between p-8 w-full">
                  {educateImage && (
                      <Image
                          src={educateImage.imageUrl}
                          alt={educateImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={educateImage.imageHint}
                      />
                  )}
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">{literacyCard.title}</h3>
                    <p className="max-w-md">{literacyCard.description}</p>
                  </div>
                  <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
                    {literacyCard.buttons.map(button => (
                        <Button key={button.text} variant="outline" className="bg-white/90 text-black hover:bg-white justify-between" asChild>
                            <Link href={button.href}>{button.text} <ArrowRight /></Link>
                        </Button>
                    ))}
                  </div>
                </Card>
              )}
            </motion.div>

            <div className="grid gap-8">
              <motion.div
                  style={{ x: xRight, opacity: opacityRight }}
              >
                  {portfolioCard && (
                    <Card className="bg-secondary/50 p-8 rounded-xl">
                    <h3 className="text-3xl font-bold mb-4">{portfolioCard.title}</h3>
                    <p className="text-muted-foreground mb-6">
                        {portfolioCard.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {portfolioCard.buttons.map(button => (
                             <Button key={button.text} variant="outline" className="bg-white hover:bg-gray-100 justify-between" asChild>
                                <Link href={button.href}>{button.text} <ArrowRight /></Link>
                             </Button>
                        ))}
                    </div>
                    </Card>
                  )}
              </motion.div>
              <motion.div
                  style={{ y: yBottom, opacity: opacityBottom }}
              >
                  {informedCard && (
                    <Card className="bg-secondary/50 p-8 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-2 items-end h-full">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">{informedCard.title}</h3>
                                <p className="text-muted-foreground mb-6">
                                    {informedCard.description}
                                </p>
                                <Button variant="outline" className="bg-white hover:bg-gray-100 justify-between" asChild>
                                    <Link href={informedCard.buttons[0].href}>{informedCard.buttons[0].text} <ArrowRight /></Link>
                                </Button>
                            </div>
                            <div className="relative w-full h-full">
                                {informedImage && (
                                    <Image
                                        src={informedImage.imageUrl}
                                        alt={informedImage.description}
                                        width={200}
                                        height={200}
                                        className="absolute -bottom-8 -right-8 z-0 opacity-80 object-contain"
                                        data-ai-hint={informedImage.imageHint}
                                    />
                                )}
                            </div>
                        </div>
                    </Card>
                  )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

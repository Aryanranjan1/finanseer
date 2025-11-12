
'use client';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { newsAndAnalyticsData } from "@/lib/page-data";
import Link from "next/link";

const { headline, cta, tabs } = newsAndAnalyticsData;

const marketInsightsTab = tabs.find(t => t.trigger === 'market-insights');
const newsItems = (marketInsightsTab?.content as any)?.news || [];
const investmentIdeas = (marketInsightsTab?.content as any)?.investmentIdeas;

const NewsItem = ({ item, scrollYProgress, index }: { item: (typeof newsItems)[0], scrollYProgress: any, index: number }) => {
    const image = PlaceHolderImages.find(i => i.id === item.image_id);
    const y = useTransform(scrollYProgress, [0.1 + index * 0.05, 0.4 + index * 0.05], ['50px', '0px']);
    const opacity = useTransform(scrollYProgress, [0.1 + index * 0.05, 0.4 + index * 0.05], [0, 1]);

    return (
        <motion.div style={{ y, opacity }} className="flex items-start gap-4">
            {image && (
                <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <Image src={image.imageUrl} alt={item.title} fill className="object-cover" data-ai-hint={image.imageHint} />
                </div>
            )}
            <div>
                <a href="#" className="font-semibold hover:text-green-500 transition-colors">{item.title}</a>
                <p className="text-sm text-gray-400 mt-1">{item.author}</p>
            </div>
        </motion.div>
    )
};

const TradeIdeaItem = ({ item, scrollYProgress, index }: { item: (typeof investmentIdeas.items)[0], scrollYProgress: any, index: number }) => {
    const avatar = PlaceHolderImages.find(i => i.id === item.avatar_id);
    const y = useTransform(scrollYProgress, [0.1 + index * 0.05, 0.4 + index * 0.05], ['50px', '0px']);
    const opacity = useTransform(scrollYProgress, [0.1 + index * 0.05, 0.4 + index * 0.05], [0, 1]);

    return (
        <motion.div style={{ y, opacity }} className="flex items-start gap-4">
            {avatar && (
                 <Image src={avatar.imageUrl} alt={item.author} width={40} height={40} className="rounded-full" data-ai-hint={avatar.imageHint} />
            )}
            <div>
                <a href="#" className="font-semibold hover:text-green-500 transition-colors">{item.title}</a>
                <p className="text-sm text-gray-400 mt-1">{item.author}</p>
            </div>
        </motion.div>
    )
};

export function NewsAndAnalytics() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0.8, 1], ['0px', '-50px']);

  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity, scale, y }}
      className="py-16 md:py-24 bg-black text-white"
    >
      <div className="container">
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{headline}</h2>
            <Button variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800" asChild>
                <Link href="/insights">{cta} <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>

        <Tabs defaultValue={tabs[0].trigger} className="w-full">
          <TabsList className="bg-gray-900 border border-gray-800">
            {tabs.map(tab => <TabsTrigger key={tab.trigger} value={tab.trigger}>{tab.label}</TabsTrigger>)}
          </TabsList>

          {tabs.map(tab => (
            <TabsContent key={tab.trigger} value={tab.trigger} className="mt-8">
                {tab.trigger === 'market-insights' ? (
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {newsItems.map((item, index) => <NewsItem key={item.title} item={item} scrollYProgress={scrollYProgress} index={index} />)}
                        </div>
                         <div className="space-y-8">
                            <h3 className="font-bold text-xl">{investmentIdeas.title}</h3>
                            {investmentIdeas.items.map((item, index) => <TradeIdeaItem key={item.title} item={item} scrollYProgress={scrollYProgress} index={index + newsItems.length} />)}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-400">{(tab.content as any).placeholder}</p>
                    </div>
                )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.section>
  );
}

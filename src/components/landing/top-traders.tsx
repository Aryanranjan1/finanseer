
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Medal } from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { topTradersData } from "@/lib/page-data";

const { headline, subheadline, tabs, cta } = topTradersData;

const InsightCard = ({ insight }: { insight: { name: string, monthlyReturn: string, topAsset: string, topAssetReturn: string, icon: React.ElementType | null } }) => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 text-white p-4 rounded-xl">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-zinc-700/80 text-zinc-300 px-2 py-1 rounded-md flex items-center gap-1.5">
                {insight.name}
                {insight.icon && <insight.icon className="w-3 h-3 text-yellow-400" />}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-end text-left">
            <div>
                <p className="text-xs text-zinc-400 mb-1">Monthly Return</p>
                <p className="text-2xl font-bold text-green-500">{insight.monthlyReturn}</p>
            </div>
             <div>
                <p className="text-xs text-zinc-400 mb-1">Top Performing Asset</p>
                <p className="text-sm font-semibold">{insight.topAsset} <span className="text-green-500">{insight.topAssetReturn}</span></p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function TopTraders() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity, scale }}
      className="relative py-16 md:py-24 bg-[#070a0b] text-white"
    >
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase" dangerouslySetInnerHTML={{ __html: `${headline.normal} <br /> <span class="text-green-500">${headline.highlight}</span>`}}></h2>
          <p className="mt-4 text-lg text-gray-300">
            {subheadline}
          </p>
        </div>

        <Tabs defaultValue={tabs[0].trigger} className="w-full max-w-4xl mx-auto">
          <TabsList className="bg-zinc-800/50 border border-zinc-700 rounded-full mx-auto flex w-fit">
            {tabs.map(tab => (
                 <TabsTrigger key={tab.trigger} value={tab.trigger} className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black">{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          
          {tabs.map(tab => (
            <TabsContent key={tab.trigger} value={tab.trigger} className="mt-8">
                {tab.content && tab.content.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(tab.content as any[]).map(insight => <InsightCard key={insight.name} insight={insight} />)}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-zinc-400">Content for {tab.label} will be displayed here.</p>
                    </div>
                )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
            <Button variant="link" className="text-white hover:text-green-500">
                {cta} <ArrowRight className="ml-2" />
            </Button>
        </div>
      </div>
    </motion.section>
  );
}

    
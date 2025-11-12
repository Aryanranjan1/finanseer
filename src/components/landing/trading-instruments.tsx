
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { tradingInstrumentsData } from "@/lib/page-data";

const { headline, subheadline, categories } = tradingInstrumentsData;

const InstrumentCard = ({ instrument }: { instrument: (typeof categories.popular)[0] }) => {
  const isPositive = instrument.change >= 0;
  return (
    <Card className="bg-card/50">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{instrument.icon}</div>
          <div>
            <p className="font-bold">{instrument.name}</p>
            <p className="text-sm text-muted-foreground">{instrument.price}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>{instrument.change.toFixed(2)}%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export function TradingInstruments() {
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
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-5xl font-bold tracking-tight">{headline}</h2>
          <p className="mt-4 text-muted-foreground">
            {subheadline}
          </p>
        </div>
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 max-w-2xl mx-auto">
            {Object.keys(categories).map(category => (
                <TabsTrigger key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</TabsTrigger>
            ))}
          </TabsList>
          
          <div className="mt-8">
            {Object.entries(categories).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map(item => <InstrumentCard key={item.name} instrument={item} />)}
                    </div>
                </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}

    
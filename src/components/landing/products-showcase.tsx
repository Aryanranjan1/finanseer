
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { productsShowcaseData } from "@/lib/page-data";

const { headline, subheadline, products } = productsShowcaseData;

export function ProductsShowcase() {
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
      className="py-16 md:py-24 bg-secondary/50"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{headline}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {subheadline}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="p-8 group hover:bg-background transition-all">
              <CardContent className="p-0">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <product.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <a href={product.href} className="font-semibold text-primary inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

    

'use client';
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { ctaData } from "@/lib/page-data";

const { headline, cta1, cta2, imageId } = ctaData;

export function Cta() {
    const ctaImage = PlaceHolderImages.find(img => img.id === imageId);
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
            className="relative py-24 md:py-32 text-white"
        >
            {ctaImage && (
                <Image
                    src={ctaImage.imageUrl}
                    alt={ctaImage.description}
                    fill
                    className="object-cover object-center"
                    data-ai-hint={ctaImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="relative inline-block">
                        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-yellow-400/20"></span>
                        <span className="relative">{headline.line1}</span>
                    </span>
                    <br />
                    {headline.line2}
                </h2>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                        {cta1}
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white rounded-full px-8 bg-transparent">
                        {cta2}
                    </Button>
                </div>
            </div>
        </motion.section>
    );
}

    
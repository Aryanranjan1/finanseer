
'use client';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { whyChooseUsData } from "@/lib/page-data";

const { headline, subheadline, features, images } = whyChooseUsData;

export function WhyChooseUs() {
    const bgImage = PlaceHolderImages.find(img => img.id === images.backgroundId);
    const cubeImage = PlaceHolderImages.find(img => img.id === images.cubeId);
    
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start end', 'end start'],
    });

  return (
    <motion.section 
      ref={targetRef}
      className="relative py-16 md:py-24 bg-black text-white overflow-hidden"
    >
        {bgImage && (
            <Image 
                src={bgImage.imageUrl}
                alt={bgImage.description}
                fill
                className="object-cover opacity-40"
                data-ai-hint={bgImage.imageHint}
            />
        )}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative min-h-[300px] lg:min-h-[500px] flex flex-col justify-between">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{headline.normal} <br /> <span className="text-green-500">{headline.highlight}</span></h2>
                    <p className="mt-4 text-lg text-gray-300">
                        {subheadline}
                    </p>
                </div>
                 {cubeImage && (
                    <div className="relative mt-24 h-[400px] w-full max-w-[400px]">
                        <Image
                            src={cubeImage.imageUrl}
                            alt={cubeImage.description}
                            fill
                            className="object-contain"
                            data-ai-hint={cubeImage.imageHint}
                        />
                    </div>
                 )}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                    const y = useTransform(scrollYProgress, [0.1 + index * 0.05, 0.4 + index * 0.05, 0.8, 1], ['50px', '0px', '0px', '-50px']);
                    const opacity = useTransform(scrollYProgress, [0.1 + index * 0.05, 0.4 + index * 0.05, 0.8, 1], [0, 1, 1, 0]);

                    return (
                        <motion.div 
                            key={index}
                            style={{ y, opacity }}
                            className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-6 flex items-start gap-4"
                        >
                            <feature.icon className="w-8 h-8 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold">{feature.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
      </div>
    </motion.section>
  );
}

    
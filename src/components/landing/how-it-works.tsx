
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { howItWorksSteps } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(howItWorksSteps[0]?.id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(currentTabId => {
        const currentIndex = howItWorksSteps.findIndex(tab => tab.id === currentTabId);
        const nextIndex = (currentIndex + 1) % howItWorksSteps.length;
        return howItWorksSteps[nextIndex].id;
      });
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const activeStep = howItWorksSteps.find(step => step.id === activeTab);
  const activeImageData = PlaceHolderImages.find(img => img.id === activeStep?.imageId);


  return (
    <div className={cn("w-full max-w-4xl mx-auto flex flex-col items-center gap-y-4")}>
      <div className="flex gap-2 flex-wrap bg-black/20 backdrop-blur-sm p-2 rounded-xl">
        {howItWorksSteps.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm md:text-base font-medium rounded-lg text-primary-foreground/80 outline-none transition-colors"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white/20 rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="relative bg-black/20 backdrop-blur-sm rounded-xl w-full min-h-[300px] h-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-6">
            <div className="relative w-full h-60 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeImageData && (
                    <motion.div
                      key={activeImageData.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeImageData.imageUrl}
                        alt={activeImageData.description}
                        fill
                        className="object-cover"
                        data-ai-hint={activeImageData.imageHint}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
            <div className="relative min-h-[150px]">
                <AnimatePresence mode="wait">
                {activeStep && (
                    <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-y-2 text-left text-primary-foreground"
                    >
                    <h3 className="text-2xl font-bold">{activeStep.content.title}</h3>
                    <p className="text-base text-primary-foreground/80">{activeStep.content.description}</p>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
      </div>
    </div>
  );
};

export function HowItWorks() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['100px', '0px', '0px', '-100px']);

    return (
        <motion.section 
          ref={targetRef}
          style={{ opacity, x }}
          className="py-16 md:py-24 green-gradient-bg text-white"
        >
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get Started in 3 Simple Steps</h2>
              <p className="mt-4 text-lg text-white/80">
                Connecting your finances with Finanseer is fast, easy, and secure.
              </p>
            </div>
            <AnimatedTabs />
          </div>
        </motion.section>
      );
}

    
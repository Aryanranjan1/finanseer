
"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { testimonialsData } from '@/lib/page-data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const { headline, subheadline } = testimonialsData;

const testimonialItems = testimonialsData.testimonials.map((t, i) => {
    const avatar = PlaceHolderImages.find(img => img.id === t.avatarId);
    return {
        tempId: i,
        testimonial: t.quote,
        by: `${t.name}${t.role ? `, ${t.role}` : ''}`,
        imgSrc: avatar?.imageUrl || `https://picsum.photos/seed/t${i}/100/100`
    };
});

const SQRT_5000 = Math.sqrt(5000);

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonialItems[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-green-600 text-white border-green-600" 
          : "z-0 bg-zinc-800 text-zinc-50 border-zinc-700 hover:border-green-600/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-zinc-700"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #18181b"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-white" : "text-zinc-50"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-zinc-400"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonialItems);

  const handleMove = useCallback((steps: number) => {
    setTestimonialsList(currentList => {
      const newList = [...currentList];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return newList;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return newList;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [handleMove]);


  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
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
      className="py-16 md:py-24 bg-[#18181b]"
    >
      <div className="container">
        <div className='text-center text-white mb-12 max-w-2xl mx-auto'>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{headline}</h2>
            <p className="mt-4 text-lg text-white/80">
            {subheadline}
            </p>
        </div>
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                ? index - (testimonialsList.length + 1) / 2
                : index - testimonialsList.length / 2;
                return (
                <TestimonialCard
                    key={testimonial.tempId}
                    testimonial={testimonial}
                    handleMove={handleMove}
                    position={position}
                    cardSize={cardSize}
                />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                onClick={() => handleMove(-1)}
                className={cn(
                    "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                    "bg-zinc-800 text-zinc-50 border-2 border-zinc-700 hover:bg-green-600 hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
                aria-label="Previous testimonial"
                >
                <ChevronLeft />
                </button>
                <button
                onClick={() => handleMove(1)}
                className={cn(
                    "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                    "bg-zinc-800 text-zinc-50 border-2 border-zinc-700 hover:bg-green-600 hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
                aria-label="Next testimonial"
                >
                <ChevronRight />
                </button>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

    
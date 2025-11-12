
'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { pricingPlans, featureCategories } from '@/lib/data';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { OpenAccountDialog } from './open-account-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { motion, useScroll, useTransform } from 'framer-motion';

export function AccountComparison() {
  const [isYearly, setIsYearly] = useState(false);
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-2">Plans for Every Investor</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your financial journey.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={cn("font-medium", !isYearly ? "text-primary" : "text-muted-foreground")}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle between monthly and yearly pricing"
          />
          <span className={cn("font-medium", isYearly ? "text-primary" : "text-muted-foreground")}>Yearly</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8 text-center">
          {pricingPlans.map((plan) => (
            <div key={plan.id}>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                <span className="text-muted-foreground">/mo</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <OpenAccountDialog>
                <DialogTrigger asChild>
                  <Button className="mt-6 w-full md:w-auto">Start with {plan.name}</Button>
                </DialogTrigger>
              </OpenAccountDialog>
            </div>
          ))}
        </div>

        {/* Features Table */}
        <div className="max-w-5xl mx-auto">
          {featureCategories.map((category) => (
            <div key={category.name} className="mb-8">
              <h4 className="text-lg font-semibold mb-4">{category.name}</h4>
              <div className="border border-border rounded-lg overflow-hidden">
                {category.features.map((feature, idx) => (
                  <div key={feature.name} className={cn(
                    "grid grid-cols-4 items-center p-4",
                    idx % 2 === 0 ? "bg-secondary/50" : "bg-background"
                  )}>
                    <div className="col-span-1 text-sm font-medium">{feature.name}</div>
                    {pricingPlans.map((plan) => {
                        const planFeature = plan.features[category.name]?.[feature.name];
                        return (
                            <div key={plan.id} className="col-span-1 text-center text-sm">
                                {typeof planFeature === 'boolean' ? (
                                    planFeature ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                ) : (
                                    <span className="text-foreground">{planFeature}</span>
                                )}
                            </div>
                        )
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
            {pricingPlans.map((plan) => (
                 <div key={plan.id} className="text-center">
                    <OpenAccountDialog>
                        <DialogTrigger asChild>
                            <Button className="w-full md:w-auto">Get started</Button>
                        </DialogTrigger>
                    </OpenAccountDialog>
                 </div>
            ))}
        </div>

      </div>
    </motion.section>
  );
}

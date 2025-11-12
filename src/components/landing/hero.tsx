
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CustomShape } from './custom-shape';
import { heroData } from '@/lib/page-data';

const { headline, subheadline, cta1, cta2, userStats, phoneMock } = heroData;

const TransactionItem = ({
  icon: Icon,
  name,
  amount,
  bgColor,
  textColor,
}: {
  icon: React.ElementType;
  name: string;
  amount: string;
  bgColor: string;
  textColor: string;
}) => (
  <div className="flex items-center justify-between transition-transform duration-300 hover:scale-105">
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-full ${bgColor}`}>
        <Icon className={`w-5 h-5 ${textColor}`} />
      </div>
      <p className="font-medium text-sm">{name}</p>
    </div>
    <p className="font-semibold text-sm">{amount}</p>
  </div>
);

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '-10%']);


  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity, scale, y }}
      className="relative w-full overflow-hidden bg-background"
    >
      <div className="absolute inset-0 gradient-bg z-0"></div>
      <div className="relative z-10">
        <div className="container pt-24 pb-16 md:pt-28 md:pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary whitespace-pre-line">
                        {headline}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                        {subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="px-8">
                        {cta1}
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 bg-transparent">
                        {cta2}
                        <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
                        <div className="flex -space-x-2">
                            <Avatar className="border-2 border-white">
                                <AvatarImage src={PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageUrl} alt="User 1"/>
                                <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                                <AvatarImage src={PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageUrl} alt="User 2"/>
                                <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                                <AvatarImage src={PlaceHolderImages.find(img => img.id === 'testimonial-3')?.imageUrl} alt="User 3"/>
                                <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <p className="font-bold">{userStats.count} {userStats.label}</p>
                            <p className="text-sm text-muted-foreground">{userStats.sublabel}</p>
                        </div>
                    </div>
                    </div>
                    <div className="relative block">
                    <div 
                        className="relative mx-auto w-[320px] h-[640px] bg-slate-800 rounded-[40px] border-[10px] border-black shadow-2xl top-[50px]"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl"></div>
                        <div className="w-full h-full bg-white rounded-[30px] overflow-hidden p-4">
                        <div className="space-y-4">
                            <Card className="bg-green-50/50 transition-transform duration-300 hover:scale-105 hover:shadow-lg mt-9">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                <div>
                                    <p className="text-xs text-green-700 font-medium">{phoneMock.netWorth.title}</p>
                                    <p className="text-lg font-bold text-green-900">{phoneMock.netWorth.value}</p>
                                </div>
                                <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="h-24 -mx-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                        data={phoneMock.chartData}
                                        margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                                        >
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <Tooltip
                                            cursor={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '3 3' }}
                                            content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                return (
                                                <div className="bg-white/80 backdrop-blur-sm p-2 rounded-md border border-gray-200 shadow-sm">
                                                    <p className="text-xs font-bold text-gray-700">{`${payload[0].payload.month} Net Worth`}</p>
                                                    <p className="text-sm font-semibold text-green-800">{`$${payload[0].value}`}</p>
                                                </div>
                                                );
                                            }
                                            return null;
                                            }}
                                        />
                                        <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                            </Card>
                            
                            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <CardContent className="p-4">
                                <p className="text-xs text-muted-foreground">{phoneMock.totalIncome.title}</p>
                                <p className="text-2xl font-bold">{phoneMock.totalIncome.value}</p>
                            </CardContent>
                            </Card>
                            
                            <div className="flex items-center justify-between pt-2">
                                <h3 className="font-bold">{phoneMock.transactions.title}</h3>
                                <Button variant="ghost" size="sm">{phoneMock.transactions.cta}</Button>
                            </div>

                            <div className="space-y-3">
                            {phoneMock.transactions.items.map((item, index) => (
                                <TransactionItem key={index} {...item}/>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <CustomShape />
      </div>
    </motion.section>
  );
}

    
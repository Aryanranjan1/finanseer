
// This file is now deprecated. Please use src/lib/page-data.ts for all page content.

import { PlaceHolderImages } from './placeholder-images';
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, BarChart, Users, Zap, UserCheck, Banknote, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const whySnabbxFeatures = [
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'Access powerful tools and lightning-fast execution on popular platforms like MT5.',
  },
  {
    icon: ShieldCheck,
    title: 'Unmatched Security',
    description: 'Your funds are protected by strict regulatory oversight and advanced encryption.',
  },
  {
    icon: Users,
    title: 'Client-First Support',
    description: 'Our dedicated, multilingual support team is available 24/7 to provide expert guidance.',
  },
  {
    icon: BarChart,
    title: 'Transparent Pricing',
    description: 'We offer tight spreads and low commissions with no hidden fees, so you always know what you\'re paying.',
  },
];

const TabContent = ({ title, description, imageId, imageHint }: { title: string, description: string, imageId: string, imageHint: string }) => {
    const imageData = PlaceHolderImages.find(img => img.id === imageId);
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center text-primary-foreground">
             {imageData && (
                <div className="relative w-full h-60 rounded-lg overflow-hidden">
                    <Image
                        src={imageData.imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        data-ai-hint={imageHint}
                    />
                </div>
             )}
            <div className="flex flex-col gap-y-2 text-left">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-base text-primary-foreground/80">{description}</p>
            </div>
        </div>
    );
};

interface HowItWorksStep {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    content: React.ReactNode;
}

export const howItWorksSteps: HowItWorksStep[] = [
    {
        id: 'register',
        icon: UserCheck,
        title: 'Register',
        description: 'Complete our simple and secure registration form in minutes.',
        content: <TabContent 
            title="Secure and Simple Registration"
            description="Our streamlined registration process is designed for your convenience. Fill out a few basic details, verify your identity, and you'll be ready to fund your account in no time. We use top-tier security to protect your information every step of the way."
            imageId="register-step"
            imageHint="secure form"
        />
    },
    {
        id: 'fund',
        icon: Banknote,
        title: 'Fund',
        description: 'Deposit funds into your account using a variety of payment methods.',
        content: <TabContent
            title="Flexible Funding Options"
            description="We offer a wide range of secure and convenient payment methods to fund your account. Choose from credit/debit cards, bank transfers, or popular e-wallets. Your funds are instantly credited so you can start trading without delay."
            imageId="fund-step"
            imageHint="payment options"
        />
    },
    {
        id: 'trade',
        icon: TrendingUp,
        title: 'Trade',
        description: 'Start trading on our platform with access to global markets.',
        content: <TabContent
            title="Access Global Markets"
            description="Dive into the world of trading with our powerful and intuitive platform. Access a wide range of markets including Forex, commodities, and indices. Utilize advanced charting tools, real-time data, and expert analysis to make informed decisions."
            imageId="trade-step"
            imageHint="trading chart"
        />
    },
];


const originalTestimonials = [
  {
    id: '1',
    name: 'Sarah J.',
    role: 'Full-time Trader',
    quote: 'SnabbX has transformed my trading experience. The platform is intuitive, and the execution speed is unmatched. Highly recommended!',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael B.',
    role: 'Financial Analyst',
    quote: 'As a professional, I need a broker I can trust. SnabbX provides the security and advanced tools I need to succeed.',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
    rating: 5,
  },
  {
    id: '3',
    name: 'Jessica L.',
    role: 'Part-time Investor',
    quote: 'The customer support is fantastic. They helped me get set up and answered all my questions promptly. Great for beginners!',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
    rating: 5,
  },
  {
    id: '4',
    name: 'Alex, CEO at TechCorp',
    role: '',
    quote: "My favorite solution in the market. We work 5x faster with SnabbX.",
    avatar: { imageUrl: "https://picsum.photos/seed/t4/100/100" },
    rating: 5,
  },
  {
    id: '5',
    name: 'Dan, CTO at SecureNet',
    role: '',
    quote: "I'm confident my data is safe with SnabbX. I can't say that about other providers.",
    avatar: { imageUrl: "https://picsum.photos/seed/t5/100/100" },
    rating: 5,
  },
  {
    id: '6',
    name: 'Stephanie, COO at InnovateCo',
    role: '',
    quote: "I know it's cliche, but we were lost before we found SnabbX. Can't thank you guys enough!",
    avatar: { imageUrl: "https://picsum.photos/seed/t6/100/100" },
    rating: 5,
  },
];


export const testimonials = originalTestimonials.map((t, i) => ({
    tempId: i,
    testimonial: t.quote,
    by: `${t.name}${t.role ? `, ${t.role}` : ''}`,
    imgSrc: t.avatar?.imageUrl || `https://picsum.photos/seed/t${i}/100/100`
}));


export const trustStats = [
    {
        value: 1.2,
        suffix: 'M+',
        label: 'Total Clients',
    },
    {
        value: 250,
        suffix: 'B+',
        label: 'Trading Volume (USD)',
    },
    {
        value: 99.8,
        suffix: '%',
        label: 'Uptime',
    },
    {
        value: 10,
        suffix: '+',
        label: 'Years of Experience',
    }
];

// This file is now deprecated in favor of data.tsx.
// It is kept for backwards compatibility.
export const accountTypes = [];

    
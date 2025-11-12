
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

interface HowItWorksStep {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    imageId: string;
    imageHint: string;
    content: {
        title: string;
        description: string;
    }
}

export const howItWorksSteps: HowItWorksStep[] = [
    {
        id: 'register',
        icon: UserCheck,
        title: 'Connect',
        description: 'Complete our simple and secure form in minutes.',
        imageId: "register-step",
        imageHint: "secure form",
        content: {
            title: "Secure and Simple Connection",
            description: "Our streamlined connection process is designed for your convenience. Securely link your financial accounts using Plaid. We use top-tier security to protect your information every step of the way."
        }
    },
    {
        id: 'fund',
        icon: Banknote,
        title: 'Analyze',
        description: 'Finanseer analyzes your complete financial picture.',
        imageId: "fund-step",
        imageHint: "payment options",
        content: {
            title: "Holistic Financial Analysis",
            description: "Once connected, our AI gets to work, categorizing transactions, identifying trends, and creating a unified view of your assets and liabilities. See your entire financial world in one place."
        }
    },
    {
        id: 'trade',
        icon: TrendingUp,
        title: 'Grow',
        description: 'Receive AI-powered insights to grow your wealth.',
        imageId: "trade-step",
        imageHint: "trading chart",
        content: {
            title: "Access AI-Driven Insights",
            description: "Dive into a world of intelligent finance. Get personalized insights, predictive analytics on market trends, and actionable recommendations to help you save smarter and grow your wealth."
        }
    },
];


const originalTestimonials = [
  {
    id: '1',
    name: 'Sarah J.',
    role: 'Tech Professional',
    quote: 'Finanseer has transformed my financial planning. The AI insights are intuitive, and the automated tracking is a game-changer. Highly recommended!',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael B.',
    role: 'Financial Analyst',
    quote: 'As a professional, I need a tool I can trust. Finanseer provides the powerful analytics and data security I need to manage my own portfolio.',
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
    quote: "My favorite solution in the market. We work 5x faster with Finanseer.",
    avatar: { imageUrl: "https://picsum.photos/seed/t4/100/100" },
    rating: 5,
  },
  {
    id: '5',
    name: 'Dan, CTO at SecureNet',
    role: '',
    quote: "I'm confident my data is safe with Finanseer. I can't say that about other providers.",
    avatar: { imageUrl: "https://picsum.photos/seed/t5/100/100" },
    rating: 5,
  },
  {
    id: '6',
    name: 'Stephanie, COO at InnovateCo',
    role: '',
    quote: "I know it's cliche, but we were lost before we found Finanseer. Can't thank you guys enough!",
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
        value: 50,
        suffix: 'k+',
        label: 'Happy Users',
    },
    {
        value: 10,
        suffix: 'M+',
        label: 'Data Points Analyzed Daily',
    },
    {
        value: 99.9,
        suffix: '%',
        label: 'Uptime',
    },
    {
        value: 5,
        suffix: '+',
        label: 'Years of AI Development',
    }
];

export const pricingPlans = [
    {
        id: 'standard',
        name: 'Basic',
        price: { monthly: 0, yearly: 0 },
        description: 'Perfect for getting started with smart finance.',
        features: {
            "Core Features": {
                "Platform Access": "Web, Mobile",
                "Connected Accounts": 2,
                "Basic Insights": true,
                "Email Support": true,
            },
            "Advanced Tools": {
                "Advanced AI Insights": false,
                "API Access": false,
                "Dedicated Support": false,
            }
        },
    },
    {
        id: 'pro',
        name: 'Pro',
        price: { monthly: 15, yearly: 150 },
        description: 'Advanced features for serious investors.',
        features: {
            "Core Features": {
                "Platform Access": "Web, Mobile, Desktop",
                "Connected Accounts": 10,
                "Basic Insights": true,
                "Email Support": true,
            },
            "Advanced Tools": {
                "Advanced AI Insights": true,
                "API Access": true,
                "Dedicated Support": false,
            }
        },
    },
    {
        id: 'vip',
        name: 'Enterprise',
        price: { monthly: 40, yearly: 400 },
        description: 'Premium features for power users and teams.',
        features: {
            "Core Features": {
                "Platform Access": "Web, Mobile, Desktop",
                "Connected Accounts": "Unlimited",
                "Basic Insights": true,
                "Email Support": true,
            },
            "Advanced Tools": {
                "Advanced AI Insights": true,
                "API Access": true,
                "Dedicated Support": true,
            }
        },
    }
];

export const featureCategories = [
    {
        name: "Core Features",
        features: [
            { name: "Platform Access", description: "Access to our apps." },
            { name: "Connected Accounts", description: "Number of financial accounts you can link." },
            { name: "Basic Insights", description: "Standard AI-powered insights." },
            { name: "Email Support", description: "Access to email support." },
        ]
    },
    {
        name: "Advanced Tools",
        features: [
            { name: "Advanced AI Insights", description: "Pro-level analytics and predictive modeling." },
            { name: "API Access", description: "Access our data API for custom solutions." },
            { name: "Dedicated Support", description: "A dedicated client success manager." },
        ]
    }
];

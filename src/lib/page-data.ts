
// src/lib/page-data.ts

import { BrainCircuit, Globe, Landmark, TrendingUp, Users, Shield, Lock, Cpu, CheckCircle, Medal, LayoutDashboard, Wallet, Briefcase, Lightbulb, BarChart3, Target, Receipt, FileText, BookOpen, MessageSquare, Bell, CreditCard, Settings, LifeBuoy, Users2, Ticket, Mail, FileText as FileTextIcon, Tag, Bot, Puzzle, Webhook, Database, Gem, Banknote, Percent, ShieldCheck as ShieldCheckIcon, Download } from 'lucide-react';

export const navigationData = {
  links: [
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Integrations", href: "/integrations"},
    { title: "Insights", href: "/insights" },
    { title: "Contact", href: "/contact" },
  ],
};

export const heroData = {
  headline: "Reimagine money,\n intelligently.",
  subheadline: "Automatically track expenses, analyze your portfolio, and get AI-powered insights to grow your wealth. Your AI money mentor is here.",
  cta1: "Get Started Free",
  cta2: "See a Demo",
  userStats: {
    count: "50k+",
    label: "Users",
    sublabel: "Join the financial intelligence revolution",
  },
  phoneMock: {
    chartData: [
      { month: 'Mar', value: 3500 },
      { month: 'Apr', value: 4200 },
      { month: 'May', value: 5100 },
      { month: 'Jun', value: 4800 },
    ],
    netWorth: {
        title: "Net Worth Growth",
        value: "$5,100"
    },
    totalIncome: {
        title: "Total Income",
        value: "$23,643.00"
    },
    transactions: {
        title: "Transaction History",
        cta: "See All",
        items: [
            { icon: Users, name: "Recurring Deposit", amount: "+$1,200.00", bgColor: "bg-blue-100", textColor: "text-blue-600"},
            { icon: Shield, name: "Investment Return", amount: "+$320.12", bgColor: "bg-purple-100", textColor: "text-purple-600"},
            { icon: TrendingUp, name: "Stock Dividend", amount: "+$55.50", bgColor: "bg-green-100", textColor: "text-green-600"},
            { icon: Users, name: "Monthly Subscription", amount: "-$25.00", bgColor: "bg-red-100", textColor: "text-red-600"},
        ]
    }
  },
  partners: [
    { name: 'Plaid' },
    { name: 'Alpha Vantage' },
    { name: 'OpenAI' },
    { name: 'Stripe' },
    { name: 'Google AI' },
  ],
};

export const tradeSmartData = {
    headline: {
        normal: "BE SMART.",
        highlight: "MANAGE SMARTER."
    },
    subheadline: "We know managing money can feel complex. Finanseer simplifies it with intelligent automation and AI-powered insights.",
    cards: [
        {
            id: 'literacy',
            title: "Build Your Financial Literacy",
            description: "Our approach to sharpening your financial skills is unique. Educational content is tailored by market experts for investors of any level.",
            buttons: [
                { text: "Investing for Beginners", href: "/learn" },
                { text: "Advanced Strategies", href: "/learn" },
                { text: "Wealth Tutorials", href: "/learn" },
                { text: "Finanseer Blog", href: "/insights" },
            ],
            imageId: "educate-yourself",
        },
        {
            id: 'portfolio',
            title: "Refine Your Portfolio",
            description: "Stay ahead in the market with our comprehensive analytics: daily AI-briefings, technical analysis, real-time alerts, and more.",
            buttons: [
                { text: "Market Insights", href: "/features" },
                { text: "AI-Generated Ideas", href: "/features" },
            ],
        },
        {
            id: 'informed',
            title: "Stay Informed 24/7",
            description: "Receive daily AI-powered analytics with essential news, investment ideas, and expert insights from Finanseer.",
            buttons: [
                { text: "Learn more", href: "/features" },
            ],
            imageId: "stay-informed"
        }
    ]
}


export const testimonialsData = {
    headline: "Loved by Modern Investors",
    subheadline: "Hear what our users are saying about their journey to financial clarity with Finanseer.",
    testimonials: [
      {
        id: '1',
        name: 'Sarah J.',
        role: 'Tech Professional',
        quote: 'Finanseer has transformed my financial planning. The AI insights are intuitive, and the automated tracking is a game-changer. Highly recommended!',
        avatarId: 'testimonial-1',
      },
      {
        id: '2',
        name: 'Michael B.',
        role: 'Financial Analyst',
        quote: 'As a professional, I need a tool I can trust. Finanseer provides the powerful analytics and data security I need to manage my own portfolio.',
        avatarId: 'testimonial-2',
      },
      {
        id: '3',
        name: 'Jessica L.',
        role: 'Part-time Investor',
        quote: 'The customer support is fantastic. They helped me get set up and answered all my questions promptly. Great for beginners!',
        avatarId: 'testimonial-3',
      },
      {
        id: '4',
        name: 'Alex, CEO at TechCorp',
        role: '',
        quote: "My favorite solution in the market. We work 5x faster with Finanseer.",
        avatarId: 'testimonial-4'
      },
      {
        id: '5',
        name: 'Dan, CTO at SecureNet',
        role: '',
        quote: "I'm confident my data is safe with Finanseer. I can't say that about other providers.",
        avatarId: 'testimonial-5'
      },
      {
        id: '6',
        name: 'Stephanie, COO at InnovateCo',
        role: '',
        quote: "I know it's cliche, but we were lost before we found Finanseer. Can't thank you guys enough!",
        avatarId: 'testimonial-6'
      },
    ]
};

export const productsShowcaseData = {
  headline: "Your AI Financial Assistant",
  subheadline: "Explore a wide range of intelligent tools and find your next opportunity for growth.",
  products: [
    {
      icon: BrainCircuit,
      name: "AI-Powered Insights",
      description: "Get predictive analytics and personalized recommendations to optimize your portfolio.",
      href: "/features#ai-insights"
    },
    {
      icon: Landmark,
      name: "Automated Tracking",
      description: "Connect all your accounts in one place for a complete, real-time view of your net worth.",
      href: "/features#tracking"
    },
    {
      icon: Globe,
      name: "Global Trend Analysis",
      description: "Monitor global economic events and market data that impact your investments.",
      href: "/features#trends"
    },
  ]
};

export const tradingInstrumentsData = {
    headline: "550,000+ ASSETS MONITORED",
    subheadline: "AI-powered analysis across stocks, ETFs, crypto, and more. Real-time data, zero latency.",
    categories: {
        popular: [
            { name: "S&P 500", price: "5,433.74", change: -0.15, icon: "📈" },
            { name: "Apple Inc.", price: "214.29", change: 0.05, icon: "🍏" },
            { name: "Gold", price: "2320.50", change: 0.25, icon: "🥇" },
            { name: "Bitcoin", price: "67,500", change: 2.50, icon: "₿" },
        ],
        stocks: [
            { name: "NVIDIA Corp.", price: "135.58", change: -1.25, icon: "💻" },
            { name: "Tesla, Inc.", price: "182.47", change: -0.80, icon: "🚗" },
        ],
        etfs: [
            { name: "SPDR S&P 500", price: "542.78", change: -0.50, icon: "📈" },
            { name: "Invesco QQQ", price: "477.89", change: -0.80, icon: "📉" },
        ],
        crypto: [
            { name: "BTCUSD", price: "67500", change: 2.5, icon: "₿" },
            { name: "ETHUSD", price: "3500", change: 1.8, icon: "Ξ" },
        ],
        commodities: [
            { name: "Gold", price: "2320.50", change: 0.25, icon: "🥇" },
            { name: "Crude Oil", price: "78.50", change: 1.15, icon: "🛢️" },
        ],
    }
};

export const topTradersData = {
    headline: {
        normal: "Perform like",
        highlight: "the best AI portfolios"
    },
    subheadline: "Get inspired by top-performing AI-driven strategies and their returns to become the next leaderboard champion.",
    tabs: [
        {
            trigger: "top-portfolios",
            label: "Top Portfolios",
            content: [
                { name: "AI Portfolio 1", monthlyReturn: "+18.72%", topAsset: "NVIDIA", topAssetReturn: "+13.09%", icon: Medal },
                { name: "AI Portfolio 2", monthlyReturn: "+9.74%", topAsset: "Bitcoin", topAssetReturn: "+9.74%", icon: Medal },
                { name: "AI Portfolio 3", monthlyReturn: "+9.47%", topAsset: "Gold", topAssetReturn: "+9.47%", icon: Medal },
                { name: "AI Portfolio 4", monthlyReturn: "+5.46%", topAsset: "S&P 500 ETF", topAssetReturn: "+5.46%", icon: null },
                { name: "AI Portfolio 5", monthlyReturn: "+5.10%", topAsset: "Ethereum", topAssetReturn: "+5.10%", icon: null },
                { name: "AI Portfolio 6", monthlyReturn: "+2.37%", topAsset: "Apple Inc.", topAssetReturn: "+2.04%", icon: null },
            ]
        },
        {
            trigger: "most-profitable",
            label: "Most Profitable Insights",
            content: [] // Placeholder for more content
        }
    ],
    cta: "Explore Full Leaderboard"
};

export const whyChooseUsData = {
    headline: {
        normal: "BE CONFIDENT.",
        highlight: "BE SECURE"
    },
    subheadline: "Manage your finances with a platform that ensures the highest security and privacy standards for your peace of mind.",
    features: [
        { icon: Lock, title: "BANK-GRADE SECURITY", description: "Finanseer uses AES-256 encryption and secure connections to protect your data." },
        { icon: Shield, title: "YOUR FINANCIAL DATA IS SAFE AND PRIVATE", description: "Privacy-first design, SSL encryption, and segregated data storage." },
        { icon: Cpu, title: "POWERED BY ADVANCED AI", description: "Our insights are generated by leading large language models and financial APIs." },
        { icon: CheckCircle, title: "AI TRANSPARENCY COMMITMENT", description: "We believe in clear, explainable AI, so you understand the 'why' behind every insight." },
        { icon: CheckCircle, title: "TRUSTED BY THOUSANDS", description: "Join a growing community of users taking control of their financial future." },
    ],
    images: {
        backgroundId: 'green-rocks',
        cubeId: 'fbs-cube'
    }
};

export const newsAndAnalyticsData = {
    headline: "AI INSIGHTS & ANALYTICS",
    cta: "Go to Insights",
    tabs: [
        {
            trigger: "market-insights",
            label: "Market Insights",
            content: {
                news: [
                    { 
                        title: "AI Analysis on Gold: The US session might change everything!",
                        author: "Finanseer AI",
                        image_id: "news-1"
                    },
                    { 
                        title: "Market Insight: Are Tech Stocks Overvalued? An AI Perspective.",
                        author: "Finanseer AI",
                        image_id: "news-2"
                    },
                    { 
                        title: "USD/CHF fundamental and technical analysis – FOMC market briefing",
                        author: "Finanseer AI",
                        image_id: "news-3"
                    }
                ],
                investmentIdeas: {
                    title: "Top Investment Ideas",
                    items: [
                        { 
                            title: "AI Signal: Bullish Opportunity in CAD/CHF?",
                            author: "Mahmoud Narrated",
                            avatar_id: "trader-1"
                        },
                        { 
                            title: "AI Alert: Potential Reversal in EUR/USD",
                            author: "Ali Al-Sayed",
                            avatar_id: "trader-2"
                        },
                        { 
                            title: "AI Pattern Recognition: AUD/JPY reversal pattern forming",
                            author: "Omar Khaled",
                            avatar_id: "trader-3"
                        },
                    ]
                }
            }
        },
        {
            trigger: "product-updates",
            label: "Product Updates",
            content: { placeholder: "Product updates will be displayed here." }
        },
        {
            trigger: "finanseer-blog",
            label: "Finanseer Blog",
            content: { placeholder: "The Finanseer blog will be displayed here." }
        }
    ]
};

export const ctaData = {
    headline: {
        line1: "YOU FOCUS ON YOUR GOALS.",
        line2: "WE'LL HANDLE THE INSIGHTS."
    },
    cta1: "Get Started Free",
    cta2: "Take a Tour",
    imageId: 'cta-background'
};

export const footerData = {
    logo: "Finanseer",
    slogan: "The future of personal finance. Secure, intelligent, and automated.",
    socials: [
        { name: "Twitter", href: "#", icon: "Twitter" },
        { name: "Facebook", href: "#", icon: "Facebook" },
        { name: "Linkedin", href: "#", icon: "Linkedin" },
    ],
    links: {
        "Quick Links": [
            { text: "About Us", href: "/about" },
            { text: "Features", href: "/features" },
            { text: "Pricing", href: "/pricing" },
            { text: "Contact Us", href: "/contact" },
            { text: "FAQs", href: "/faqs" },
        ],
        "Legal": [
            { text: "Terms of Service", href: "/terms" },
            { text: "Privacy Policy", href: "/privacy" },
            { text: "AI Transparency", href: "/ai-transparency" },
        ]
    },
    newsletter: {
        headline: "Subscribe to our Newsletter",
        description: "Get the latest financial insights and product updates from Finanseer.",
        cta: "Subscribe"
    },
    copyright: `© ${new Date().getFullYear()} Finanseer. All rights reserved.`,
    disclaimer: "Finanseer uses bank-grade encryption and AI transparency principles to protect your data. We believe privacy and financial foresight go hand in hand. All investments involve risk."
};

// =================================================================
// PUBLIC PAGES DATA
// =================================================================

export const aboutPageData = {
    hero: {
        headline: "We're on a mission to make financial intelligence accessible to everyone.",
        subheadline: "Finanseer was founded by a team of technologists, financial experts, and AI researchers who believe that powerful financial tools shouldn't be reserved for the ultra-wealthy. We're democratizing wealth management through intelligent, automated technology.",
        imageId: "about-hero"
    },
    story: {
        headline: "Our Story",
        content: "It all started with a simple question: 'Why is managing money so complicated?' In a world of self-driving cars and AI assistants, personal finance felt stuck in the past. We saw an opportunity to build a platform that could not only track finances but provide proactive, intelligent guidance. After years of research and development, Finanseer was born—a true financial co-pilot designed for the modern investor.",
        imageId: "about-story"
    },
    team: {
        headline: "Meet the Leadership",
        members: [
            { name: "John Doe", role: "CEO & Co-Founder", imageId: "testimonial-1" },
            { name: "Jane Smith", role: "CTO & Co-Founder", imageId: "testimonial-2" },
            { name: "Michael B.", role: "Head of AI Research", imageId: "testimonial-3" },
            { name: "Sarah J.", role: "Head of Product", imageId: "testimonial-4" },
        ]
    },
    cta: {
        headline: "Join us on our mission.",
        subheadline: "We're always looking for passionate people to join our team.",
        cta: "View Open Positions"
    }
}

export const featuresPageData = {
    hero: {
        headline: "All the Tools You Need to Grow",
        subheadline: "From automated tracking to predictive AI, Finanseer provides a comprehensive suite of tools to help you manage and grow your wealth.",
    },
    features: [
        {
            id: "ai-insights",
            title: "AI-Powered Insights",
            description: "Go beyond simple tracking. Our AI analyzes your spending habits, investment patterns, and market trends to provide personalized, actionable recommendations. Get alerts on potential opportunities and risks before they happen.",
            points: ["Predictive cash flow analysis", "Personalized savings recommendations", "Market sentiment analysis", "Risk assessment alerts"],
            imageId: "feature-ai"
        },
        {
            id: "tracking",
            title: "Automated Portfolio Tracking",
            description: "Connect all your accounts—checking, savings, credit cards, investments, and crypto—for a single, unified view of your net worth. Finanseer automatically categorizes transactions and updates your portfolio in real-time.",
            points: ["Connect thousands of institutions via Plaid", "Real-time net worth calculation", "Automatic transaction categorization", "Crypto and investment tracking"],
            imageId: "feature-portfolio"
        },
        {
            id: "trends",
            title: "Global Trend Analysis",
            description: "Stay ahead of the curve. Finanseer monitors macroeconomic indicators, news sentiment, and market data to show you how global events could impact your portfolio. Make informed decisions based on data, not just headlines.",
            points: ["Macroeconomic indicator tracking", "Real-time news sentiment analysis", "Industry and sector trend reports", "Correlation analysis with your portfolio"],
            imageId: "feature-trends"
        }
    ]
}

export const integrationsPageData = {
    headline: "Connect Your Financial World",
    subheadline: "Finanseer integrates with the tools and services you already use to provide a seamless financial experience.",
    categories: [
        {
            title: "Data & Accounts",
            integrations: [
                { name: "Plaid", description: "Securely connect over 12,000 financial institutions.", logo: "plaid.svg" },
                { name: "Alpha Vantage", description: "Real-time and historical stock, ETF, and crypto data.", logo: "alphavantage.svg" },
                { name: "CoinGecko", description: "Comprehensive cryptocurrency market data.", logo: "coingecko.svg" }
            ]
        },
        {
            title: "AI & Machine Learning",
            integrations: [
                { name: "Google AI", description: "Powered by Gemini for advanced reasoning and analysis.", logo: "google-ai.svg" },
                { name: "OpenAI", description: "Leveraging state-of-the-art models for natural language insights.", logo: "openai.svg" }
            ]
        },
        {
            title: "Payments & Commerce",
            integrations: [
                { name: "Stripe", description: "Integrate payments for your own financial products or services.", logo: "stripe.svg" }
            ]
        }
    ]
}

export const insightsData = {
    posts: [
        {
            slug: "ai-in-investing-the-new-frontier",
            title: "AI in Investing: The New Frontier",
            excerpt: "Artificial intelligence is no longer science fiction; it's a powerful tool that's reshaping how we invest. Explore the ways AI is changing the game for retail and institutional investors alike.",
            author: "Jane Smith",
            date: "2024-10-26",
            tags: ["AI", "Investing", "Technology"],
            imageId: "insights-1"
        },
        {
            slug: "demystifying-portfolio-diversification",
            title: "Demystifying Portfolio Diversification",
            excerpt: "You've heard 'don't put all your eggs in one basket.' But what does that really mean for your investment portfolio? We break down the core principles of diversification.",
            author: "John Doe",
            date: "2024-10-22",
            tags: ["Investing", "Strategy", "Portfolio"],
            imageId: "insights-2"
        },
        {
            slug: "macro-trends-to-watch-in-q4",
            title: "Macro Trends to Watch in Q4 2024",
            excerpt: "As we head into the final quarter of the year, several key macroeconomic indicators could signal major shifts in the market. Here's what our AI is watching.",
            author: "Finanseer AI",
            date: "2024-10-18",
            tags: ["Markets", "Economics", "AI"],
            imageId: "insights-3"
        }
    ]
}

// =================================================================
// USER DASHBOARD DATA
// =================================================================

export const dashboardNavItems = [
    {
        title: "Dashboard",
        items: [
            { title: "Overview", href: "/app/overview", icon: LayoutDashboard },
            { title: "Finance", href: "/app/finance", icon: Wallet },
            { title: "Portfolio", href: "/app/portfolio", icon: Briefcase },
            { title: "AI Insights", href: "/app/insights", icon: Lightbulb, badge: 3 },
            { title: "Market Trends", href: "/app/market", icon: BarChart3 },
            { title: "Goals", href: "/app/goals", icon: Target },
        ]
    },
    {
        title: "Manage",
        items: [
            { title: "Transactions", href: "/app/transactions", icon: Receipt },
            { title: "Reports", href: "/app/reports", icon: FileText },
            { title: "Learn", href: "/app/learn", icon: BookOpen },
            { title: "Community", href: "/app/community", icon: MessageSquare },
        ]
    },
    {
        title: "Account",
        items: [
            { title: "Notifications", href: "/app/notifications", icon: Bell, badge: 5 },
            { title: "Billing", href: "/app/billing", icon: CreditCard },
            { title: "Settings", href: "/app/settings", icon: Settings },
            { title: "Support", href: "/app/support", icon: LifeBuoy },
        ]
    }
];

export const dashboardOverviewData = {
    netWorth: {
        current: 125630.50,
        change: 1250.75,
        period: "this month",
        chartData: [
            { date: '2024-05-01', value: 110000 },
            { date: '2024-05-05', value: 112500 },
            { date: '2024-05-10', value: 115000 },
            { date: '2024-05-15', value: 118000 },
            { date: '2024-05-20', value: 120500 },
            { date: '2024-05-25', value: 123000 },
            { date: '2024-05-30', value: 125630 },
        ]
    },
    aiSummary: "Your portfolio is well-diversified, but your allocation to international stocks is slightly below the recommended target. Consider increasing your position in VXUS. Your emergency fund is fully funded. Well done.",
    recentActivity: [
        { id: '1', type: "Dividend", description: "Dividend from AAPL", amount: 15.50, date: "2024-05-28" },
        { id: '2', type: "Buy", description: "Purchased 10 shares of VTI", amount: -2500.00, date: "2024-05-25" },
        { id: '3', type: "Deposit", description: "Paycheck deposit", amount: 3500.00, date: "2024-05-24" },
    ],
    quickActions: [
        { label: "Add Transaction", href: "/app/finance#add" },
        { label: "Transfer Funds", href: "#" },
        { label: "See Full Report", href: "/app/reports" },
    ]
};

// =================================================================
// ADMIN DASHBOARD DATA
// =================================================================

export const adminNavItems = [
    {
        title: "Dashboard & Analytics",
        items: [
            { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
            { title: "Analytics", href: "/admin/analytics", icon: BarChart3 },
        ]
    },
    {
        title: "User & CRM",
        items: [
            { title: "Users", href: "/admin/users", icon: Users2 },
            { title: "Support Tickets", href: "/admin/tickets", icon: Ticket },
            { title: "Email Campaigns", href: "/admin/emails", icon: Mail },
        ]
    },
    {
        title: "CMS",
        items: [
            { title: "Posts", href: "/admin/content/posts", icon: FileTextIcon },
            { title: "Categories", href: "/admin/content/categories", icon: Tag },
            { title: "Review AI Content", href: "/admin/content/review", icon: CheckCircle },
        ]
    },
     {
        title: "AI Management",
        items: [
            { title: "AI Logs", href: "/admin/ai/logs", icon: Bot },
            { title: "Prompts", href: "/admin/ai/prompts", icon: FileTextIcon },
            { title: "Models", href: "/admin/ai/models", icon: Cpu },
            { title: "Generated Insights", href: "/admin/ai/insights", icon: Lightbulb },
        ]
    },
    {
        title: "System",
        items: [
            { title: "Integrations", href: "/admin/integrations", icon: Puzzle },
            { title: "Webhooks", href: "/admin/webhooks", icon: Webhook },
            { title: "Data Feeds", href: "/admin/feeds", icon: Database },
            { title: "App Settings", href: "/admin/settings", icon: Settings },
            { title: "Security", href: "/admin/security", icon: ShieldCheckIcon },
            { title: "Backups", href: "/admin/backups", icon: Download },
        ]
    },
    {
        title: "Billing",
        items: [
            { title: "Plans", href: "/admin/plans", icon: Gem },
            { title: "Transactions", href: "/admin/transactions", icon: Banknote },
            { title: "Promo Codes", href: "/admin/promo", icon: Percent },
        ]
    }
];


export const adminDashboardData = {
    kpis: [
        { title: "Total Users", value: "52,345", change: "+12.5%", changeType: 'positive' as const },
        { title: "Monthly Revenue", value: "$12,450", change: "+5.2%", changeType: 'positive' as const },
        { title: "AI Tasks Processed", value: "1,234,567", change: "+20.1%", changeType: 'positive' as const },
        { title: "Open Tickets", value: "23", change: "-2", changeType: 'negative' as const }
    ],
    userGrowthChart: {
        data: [
            { month: 'Jan', users: 3000 },
            { month: 'Feb', users: 3500 },
            { month: 'Mar', users: 4200 },
            { month: 'Apr', users: 5100 },
            { month: 'May', users: 6200 },
            { month: 'Jun', users: 7800 },
        ],
        total: 7800
    },
    revenueChart: {
        data: [
            { month: 'Jan', revenue: 8000 },
            { month: 'Feb', revenue: 8500 },
            { month: 'Mar', revenue: 9200 },
            { month: 'Apr', revenue: 10100 },
            { month: 'May', revenue: 11200 },
            { month: 'Jun', revenue: 12450 },
        ],
        total: 12450
    },
    recentSignups: [
        { name: "Olivia Martin", email: "olivia.martin@email.com", date: "2024-06-01" },
        { name: "Jackson Lee", email: "jackson.lee@email.com", date: "2024-06-01" },
        { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", date: "2024-05-31" },
        { name: "William Kim", email: "will@email.com", date: "2024-05-31" },
        { name: "Sofia Davis", email: "sofia.davis@email.com", date: "2024-05-30" },
    ]
}
    

    

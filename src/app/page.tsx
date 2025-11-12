
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Footer } from "@/components/landing/footer";
import { HowItWorks } from "@/components/landing/how-it-works";
import { AccountComparison } from "@/components/landing/account-comparison";
import { TradeSmart } from "@/components/landing/trade-smart";
import { StaggerTestimonials } from "@/components/landing/stagger-testimonials";
import { ProductsShowcase } from "@/components/landing/products-showcase";
import { TradingInstruments } from "@/components/landing/trading-instruments";
import { TopTraders } from "@/components/landing/top-traders";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TradeSmart />
        <HowItWorks />
        <StaggerTestimonials />
        <ProductsShowcase />
        <TradingInstruments />
        <TopTraders />
        <WhyChooseUs />
        <AccountComparison />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

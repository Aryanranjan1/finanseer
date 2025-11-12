
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { AccountComparison } from '@/components/landing/account-comparison';
import { Cta } from '@/components/landing/cta';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="pt-12">
            <AccountComparison />
        </div>
        <Cta />
      </main>
      <Footer />
    </div>
  );
}


import { heroData } from '@/lib/page-data';

const partners = heroData.partners.map(p => {
    switch (p.name) {
        case 'Plaid':
            return { name: p.name, logo: (
                <svg width="90" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#1f2937">Plaid</text>
                </svg>
            )};
        case 'Alpha Vantage':
            return { name: p.name, logo: (
                <svg width="150" height="24" viewBox="0 0 150 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1f2937">Alpha Vantage</text>
                </svg>
            )};
        case 'OpenAI':
            return { name: p.name, logo: (
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1f2937">OpenAI</text>
                </svg>
            )};
        case 'Stripe':
            return { name: p.name, logo: (
                <svg width="80" height="32" viewBox="0 0 80 32" fill="#635bff" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#1f2937">Stripe</text>
                </svg>
            )};
        case 'Google AI':
             return { name: p.name, logo: (
                <svg width="110" height="24" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1f2937">Google AI</text>
                </svg>
            )};
        default:
            return { name: p.name, logo: <span>{p.name}</span> };
    }
});


export function CustomShape() {
  return (
    <div
      className="absolute bottom-0 left-0 w-full"
      style={{
        height: '20%', // Covers 20% of the parent container
        clipPath: 'polygon(31% 26%, 69% 28%, 77% 0, 100% 0, 100% 100%, 0 99%, 0 0, 24% 0)',
      }}
    >
      <div 
        className="w-full h-full p-px"
        style={{
          background: 'linear-gradient(to right, transparent, #10B981, transparent)',
        }}
      >
        <div 
          className="w-full h-full bg-white flex items-center justify-center" 
          style={{
            clipPath: 'polygon(31% 26%, 69% 28%, 77% 0, 100% 0, 100% 100%, 0 99%, 0 0, 24% 0)',
          }}
        >
          <div className="container mx-auto px-4 mt-[32px]">
             <div className="flex items-center justify-around flex-wrap gap-4">
               <p className="text-sm text-muted-foreground mr-4 hidden md:block">Powered by leading AI & data APIs:</p>
              {partners.map((partner) => (
                <div key={partner.name} className="text-primary font-bold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    
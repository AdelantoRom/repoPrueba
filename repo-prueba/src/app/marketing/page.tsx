import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Marketing from './Marketing';
import MarketingCards from "@/app/marketing/MarketingCards";
import MarketingForm from "@/app/marketing/MarketingForm";
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <div className="flex flex-col relative">
      <SubNavBar />
      <main>
        <Marketing />
        <div className="-mt-120">
          <MarketingCards />
        </div>
        <div>
          <MarketingForm />
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

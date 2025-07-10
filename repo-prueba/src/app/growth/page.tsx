import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Growth from './Growth';
import GrowthCards from "@/app/growth/GrowthCards";
import GrowthForm from "@/app/growth/GrowthForm";
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <div className="flex flex-col relative">
      <SubNavBar />
      <main>
        <Growth/>
        <div className="-mt-120">
          <GrowthCards />
        </div>
        <div>
          <GrowthForm />
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

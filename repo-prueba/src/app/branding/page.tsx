import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Branding from './Branding';
import BrandingCards from "@/app/branding/BrandingCards";
import BrandingForm from "@/app/branding/BrandingForm";
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <div className="flex flex-col relative">
      <SubNavBar />
      <main>
        <Branding />
        <div className="-mt-120">
          <BrandingCards />
        </div>
        <div>
          <BrandingForm />
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

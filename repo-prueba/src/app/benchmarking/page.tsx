import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Benchmarking from './Benchmarking';
import BenchmarkingCards from "@/app/benchmarking/BenchmarkingCards";
import BenchmarkingForm from './BenchmarkingForm';
import Footer from '@/components/Footer/Footer';


export default function Page() {
  return (
    <div className="flex flex-col relative">
      <SubNavBar />
      <main>
        <Benchmarking />
        <div className="-mt-120">
          <BenchmarkingCards />
        </div> 
        <div>
          <BenchmarkingForm/>
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

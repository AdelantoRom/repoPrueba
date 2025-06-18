import React from 'react';
import Navbar from '@/components/NavBar/NavBar';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Benchmarking from './Benchmarking';
import BenchmarkingTarjetas from "@/app/benchmarking/BenchmarkingTarjetas";
import BenchmarkingForm from "@/app/benchmarking/BenchmarkingForm";
import Footer from '@/components/Footer/Footer';


export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SubNavBar />
      <main>
        <Benchmarking />
        <div className="-mt-135">
    <BenchmarkingTarjetas />
</div>
        <div className="-mb-80">
<BenchmarkingForm />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}


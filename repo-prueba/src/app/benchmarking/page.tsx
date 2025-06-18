import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavBar/NavBar';
import SubNavBar from "@/app/benchmarking/SubNavBar";
import Analisis from  "@/app/benchmarking/Analisis";

import Footer from '@/components/Footer/Footer';


export default function page() {
  return (
    <div>
    <Navbar />
    <SubNavBar />

<div className="flex flex-col ml-[140px] mt-[255px] pt-[100px] space-y-2">
  <div>
    <h2 className="font-bold text-[64px] leading-[120px] text-[#D81FB9]">Benchmarking</h2>
  <p className="font-light italic text-[36px] leading-[48px] text-[#000000]">
    Descubre y proyecta tu valor único.
  </p>

  </div>
  

   
<div className="flex flex-wrap gap-8 mt-10">
  <div className="relative w-full h-[800px]">
  <Image
    src="/Ellipse 1.png"
    alt="Ellipse"
    width={23}
    height={23}
    className="object-contain absolute -mt-[161px] ml-[760px]"
  />
</div>

  <Image
    src="/Line 7.png"
    alt="Line"
    width={565}
    height={2}
    className="object-contain absolute -mt-[151px] ml-[760px]"
  /> 
  <Image
    src="/Image 6.png"
    alt="Image 6"
    width={790}
    height={790}
    className="object-contain absolute -mt-[556px] ml-[860px]" 
  />
</div>
 <Image
  src="/Benchmarking.png"
  alt="Benchmarking"
  width={135}
  height={135}
  className="object-contain absolute ml-[700px]"
  style={{ transform: 'translateY(300px)' }}
/>

  <Analisis />
</div>




      <Footer />
    </div>
  )
}

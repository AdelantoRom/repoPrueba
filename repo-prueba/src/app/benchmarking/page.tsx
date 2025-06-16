import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavBar/NavBar';
import SubNavBar from "@/app/benchmarking/SubNavBar";
import Formulario2 from "@/app/benchmarking/Formulario2";
import Footer from '@/components/Footer/Footer';


export default function page() {
  return (
    <div>
    <Navbar />
    <SubNavBar />

<div className="flex flex-col ml-[140px] mt-[40px] pt-[100px] space-y-2">
  <h2 className="font-bold text-[64px] leading-[120px] text-[#D81FB9]">Benchmarking</h2>
  <p className="font-light italic text-[36px] leading-[48px] text-[#000000]">
    Descubre y proyecta tu valor único.
  </p>

   
<div className="flex flex-wrap gap-8 mt-10">
  <Image
    src="/Ellipse 1.png"
    alt="Ellipse"
    width={300}
    height={300}
    className="object-contain"
  />
  <Image
    src="/Line 7.png"
    alt="Line"
    width={300}
    height={300}
    className="object-contain"
  />
  <Image
    src="/Image 6.png"
    alt="Image 6"
    width={803}
    height={803}
    className="object-contain -mt-[520px]" 
  />
</div>
  
</div>

<Formulario2 /> 
      <Footer />
    </div>
  )
}

import React from "react";
import Image from "next/image";

export default function Benchmarking() {
  return (

    <div className="relative w-full">
      <div className="relative flex flex-col ml-[137px] pt-[100px] max-2xl:pt-[50px] max-xl:pt-[20px] max-lg:ml-[80px] max-xl:ml-[90px]">

        <div>
          <h2 className="mt-[265px] font-bold text-[64px] leading-[120px] text-[#D81FB9] max-2xl:text-[48px] ">
            Benchmarking
          </h2>
          <p className="font-light italic text-[36px] leading-[48px] mt-[1px] -ml-[1px] text-[#000000] max-2xl:text-[24px]">
            Descubre y proyecta tu valor único.
          </p>
        </div>


        <div className="relative w-full h-[550px] mt-4">
          <Image
            src="/Trama Servicios Desktop.png"
            alt="Ellipse"
            width={1050}
            height={1050}
            className="absolute top-[-575px] left-[41.2vw] max-2xl:w-[899px] max-2xl:top-[-505px] max-2xl:left-[590px] max-xl:left-[41.3vw] max-lg:w-[699px] max-lg:top-[-405px] max-lg:left-[40.2vw]"
          />
        </div>

        {/* Icono Benchmarking */}
        <div className="relative h-[100px] mt-[79px] -ml-[2px]">
          <Image
            src="/Benchmarking.png"
            alt="Benchmarking"
            width={141}
            height={141}
            className="absolute top-[-570px] left-[39.4vw] max-2xl:w-[120px] max-2xl:left-[560px] max-lg:left-[36.6vw] max-xl:left-[38.8vw]"
          />
        </div>
      </div>
    </div>
  );
}

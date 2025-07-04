import React from "react";
import Image from "next/image";

export default function Data() {
  return (

    <div className="relative w-full">
      <div className="relative flex flex-col pt-[100px] max-2xl:pt-[50px] max-xl:pt-[20px]">

        <div className="ml-[154px] mt-[215px] max-2xl:ml-[150px] max-lg:ml-[20px] ">
          <h2 className="font-bold text-[64px] leading-[64px] text-[#D81FB9] max-2xl:text-[48px] max-lg:text-[40px]">
            Data + IA
          </h2>
          <p className="font-light italic text-[24px] leading-[28px] w-[550px] max-xl:w-[350px] -ml-[1px] text-[#000000] max-2xl:text-[24px] mt-6 max-lg:text-[18px]">
            Dirige tu expansión con información clave y
            conocimiento predictivo.
          </p>
        </div>

        <div className="relative w-full h-[550px] -mt-3">
          <Image
            src="/Trama Servicios Desktop.png"
            alt="Ellipse"
            width={1050}
            height={1050}
            className="absolute top-[-506px] left-1/2 -translate-x-[25px] max-lg:-translate-x-[18px] max-2xl:w-[899px] max-2xl:top-[-455px] max-xl:top-[-455px] max-lg:w-[699px] max-lg:top-[-375px]"
          />
        </div>

        <div className="relative h-[100px] mt-[179px] max-lg:mt-[50px]">
          <Image
            src="/Data+IA.png"
            alt="Data+IA"
            width={141}
            height={141}
            className="absolute top-[-570px] left-1/2 transform -translate-x-1/2 max-2xl:w-[120px] max-2xl:top-[-520px] max-lg:top-[-480px]"
          />
        </div>
      </div>
    </div>
  );
}

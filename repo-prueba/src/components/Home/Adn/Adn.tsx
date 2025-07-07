//RESPONSIVE CORREGIDO 2XL//
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Botones from '@/components/BotonesInteractivos/Botones';

export default function Adn() {
  return (
    <div className="bg-[url('/gradiente1.png')] bg-cover w-full  text-white flex flex-col items-center pt-[40px] 2xl:pt-[131px]">

      <div className="text-center tracking-normal leading-[40px] mt-[40px] lg:leading-[70px] lg:mt-[60px] 2xl:leading-[120px] 2xl:mt-[64px]">
        <h1 className="text-[40px] font-medium w-[336px] lg:text-[70px] lg:w-[899px] mx-auto 2xl:text-[64px] 2xl:leading-[64px] 2xl:w-[1219px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Rombux/ADN:
        </h1>
        <h2 className="text-[40px] font-normal mt-[2px] w-[336px] lg:text-[70px] lg:w-[899px] mx-auto 2xl:text-[64px] 2xl:leading-[64px] 2xl:font-light 2xl:mt-[2px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          orientado a resultados
        </h2>
      </div>

      <p className="text-[20px] font-medium text-center leading-[24px] mt-[20px] mb-[40px] w-[336px] 
        lg:text-[32px] lg:leading-[42px] lg:w-[910px] lg:mt-[34px] 
        2xl:text-[24px] 2xl:leading-[28px] 2xl:font-normal 2xl:w-[1049px] 2xl:h-[56px] 2xl:mt-[30px] 2xl:mb-[10px]">
        Somos un grupo de profesionales especializados en escalar
        empresas y startups, unidos bajo una misma cultura: lograr el
        liderazgo desde una sólida propuesta de valor.
      </p>

      <div className="mb-[40px] 2xl:mb-0 2xl:mt-5">
        <Link href="/about_us">
          <button
            type="submit"
            className="bg-[#D81FB9] text-white font-semibold text-[24px] h-[60px] w-[192px] 
            lg:text-[24px] lg:font-semibold lg:h-[60px] lg:w-[176px]
            2xl:text-[18px] 2xl:leading-[28px] 2xl:font-bold 2xl:h-[46px] 2xl:w-[180px] 
            rounded-[50px] shadow-2xl mx-auto block"
          >
            Conócenos
          </button>
        </Link>
      </div>

      <div className="relative w-full 2xl:mt-[64px] 2xl:mb-96">
        <div className="absolute top-18 left-84 max-lg:-left-40 max-lg:-bottom-59 max-xl:-left-20 max-xl:bottom-9 max-md:-left-10 max-md:-bottom-35 max-sm:hidden z-0 w-[30vw] max-w-[360px] h-[30vw] max-h-[360px] lg:w-[35vw] lg:h-[35vw] max-lg:w-[45vw] max-lg:h-[45vw] max-2xl:left-60">
          <Image
            src="/Trama esfera negra.png"
            fill
            alt=""
            className="object-contain animate-spin [animation-direction:reverse] [animation-duration:150s]"
          />
          <Image
            src="/Trama-esfera-fucsia.png"
            fill
            alt=""
            className="object-contain absolute top-0 left-0 animate-spin [animation-duration:150s]"
          />
        </div>
        <div className="absolute -top-[55px] right-97 max-xl:-right-10 max-lg:-right-20 max-lg:top-[-10px] max-sm:hidden z-0 w-[7vw] max-w-[200px] max-h-[200px] max-lg:w-[30vw] max-lg:h-[30vw] 2xl:w-[20vw] 2xl:h-[20vw]">
          <Image
            src="/Trama esfera negra.png"
            fill
            alt=""
            className="object-contain animate-spin [animation-duration:150s]"
          />
          <Image
            src="/Trama-esfera-fucsia.png"
            fill
            alt=""
            className="object-contain absolute top-0 left-0 animate-spin [animation-direction:reverse] [animation-duration:150s]"
          />
        </div>
      </div>

      <div className="pt-[40px] pb-[60px] 2xl:pt-[70px] 2xl:pb-[95px]">
        <p className="mt-[24px] text-[38px] font-normal leading-[40px] text-center w-[336px]
          lg:text-[36px] lg:leading-[36px] lg:font-normal lg:w-[276px] lg:h-[37px]
          2xl:text-[48px] 2xl:leading-[48px] 2xl:w-[446px] 2xl:h-[59px]">
          ¿Conectamos?
        </p>
      </div>
      <div className='mb-26'>
        <Botones />
      </div>
    </div>
  );
}
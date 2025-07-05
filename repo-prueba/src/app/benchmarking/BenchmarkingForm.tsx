import React from "react";
import Image from "next/image";
import FormSections from "@/components/FormSections/FormSections";
import Botones from "@/components/BotonesInteractivos/Botones";

export default function BenchmarkingForm() {
  return (
    <section
      className="relative w-full bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/Gradiente-Home-5.png')" }}
    >

      <div className="mt-[175px] w-[1393px]  flex flex-col items-center justify-center ml-4 mb-9">
        <h2 className="font-bold text-[64px] leading-[64px] text-center text-white">
          Benchmarking:
        </h2>
        <p className="font-light text-[64px] leading-[64px] text-center text-white">
          orientado a resultados
        </p>
      </div>


      <div className="w-[1145px] flex items-center justify-center ml-6">
        <h3 className="text-[24px] leading-[28px] text-center text-white">
          Somos un grupo de profesionales especializados en escalar
          empresas y startups, unidos bajo una misma cultura: lograr el
          liderazgo desde una sólida propuesta de valor.
        </h3>
      </div>


      <div className="mt-[132px] relative ml-[15px] max-lg:mt-[100px]">
        <Image
          src="/Group-155.png"
          alt="Decoración Benchmarking"
          width={563}
          height={130}
          unoptimized
          className="max-lg:w-[479px]"
        />
        <Image
          src="/logoin.png"
          alt="Logo In"
          width={35}
          height={35}
          className="absolute top-[81px] left-[109px] max-lg:top-[70px] max-lg:left-[90px] max-lg:w-[30px] max-lg:h-[30px]"
        />
      </div>

      <div className="absolute top-[688px] left-[1389px] z-0">
        <Image
          src="/Trama-esfera-fucsia.png"
          alt="Trama fucsia pequeña"
          width={251}
          height={251}
          className="rotate-180"
        />
      </div>
      <div className="absolute top-[814px] left-[286px] z-0">
        <Image
          src="/Trama-esfera-fucsia.png"
          alt="Trama fucsia grande"
          width={459}
          height={459}
          className="rotate-180"
        />
      </div>

      <FormSections/>

      <div className="mb-21 mt-34">
        <Botones/>
      </div>
    </section >
  );
}


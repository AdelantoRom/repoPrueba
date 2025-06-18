import React from "react";
import Image from "next/image";

export default function Benchmarking() {
  return (
    // ⬇️ CONTENEDOR QUE BLOQUEA ESPACIO Y AÍSLA LOS ELEMENTOS ABSOLUTOS
    <div className="relative w-full"> 
      <div className="relative flex flex-col ml-[140px] pt-[100px] space-y-8">
        {/* Título */}
        <div>
          <h2 className="mt-64  font-bold text-[64px] leading-[120px] text-[#D81FB9]">
            Branding
          </h2>
          <p className="font-light italic text-[36px] leading-[48px] text-[#000000]">
            Construye una marca con impulso y<br />
            reputación.
          </p>
        </div>

        {/* Sección visual con imágenes */}
        <div className="relative w-full h-[550px] mt-4">
          <Image
            src="/Ellipse 1.png"
            alt="Ellipse"
            width={23}
            height={23}
            className="absolute top-[-155px] left-[760px]"
          />
          <Image
            src="/Line 7.png"
            alt="Line"
            width={565}
            height={2}
            className="absolute top-[-145px] left-[760px]"
          />
          <Image
            src="/Image 6.png"
            alt="Image 6"
            width={750}
            height={750}
            className="absolute top-[-530px] left-[900px]"
          />
        </div>

        {/* Icono Branding */}
        <div className="relative h-[100px] mt-[50px]">
          <Image
            src="/Branding.png"
            alt="Branding"
            width={135}
            height={135}
            className="absolute top-[-570px] left-[700px]"
          />
        </div>
      </div>
    </div>
  );
}

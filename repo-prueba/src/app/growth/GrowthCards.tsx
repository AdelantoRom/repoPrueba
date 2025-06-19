import React from "react";

export default function GrowthCards() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto px-[143px] py-20">
      {/* Título */}
      <div className="mb-24 text-center">
        <h1 className="font-light text-black text-[112px] leading-[120px]">
          Crecimiento y <br />
          posicionamiento de mercado
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
        {/* Tarjeta 1 */}
        <div
          className="mt-[60px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "381px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Expansión inteligente y 
            <br />
           sostenible. Diseñamos e
            <br />
            implementamos estrategias
            <br />
            para expandir tu cuota de
            <br />
            mercado y consolidar tu 
            <br />
           posición de liderazgo.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="mt-[60px] mb-[80px] relative -top-[40px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12
          "
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "434px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
           Growth Strategy - Growth
            <br />
           Loops y Optimización de 
            <br />
            Funnels. Embudos de
            <br />
            consversión inteligentes y 
            <br />
           loops de crecimiento que
            <br />
            activan y retienen a tus
            <br />
            usuarios.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="mt-[60px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "382px" }}
        >
          <p className="font-medium text-[29px] leading-[42px] text-left">
            Optimización continua. Nos
            <br />
            enfocamos en identificación
            <br />
           de oportunidades de
            <br />
            crecimiento escalables y en la 
            <br />
           mejora constante de tu 
            <br />
           presencia en el mercado.
            </p>
        </div>
      </div>
    </div>
  );
}

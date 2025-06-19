import React from "react";

export default function BenchmarkingCards() {
  return (
    <div className="relative w-[1585px] mx-auto px-8 py-20">
      {/* Título */}
      <div className="mb-24 text-center">
        <h1 className="font-light text-black text-[112px] leading-[120px]">
          Análisis del negocio y <br />
          propuesta de valor diferencial
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {/* Tarjeta 1 */}
        <div
          className="relative top-[40px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '388px' }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            ¿Dónde estás y a dónde
            <br />
            puedas llegar? Estudiamos
            <br />
            tu posición en el mercado e
            <br />
            identificamos oportunidades
            <br />
            mediante un benchmarking
            <br />
            estratégico.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="relative top-[70px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-14 pb-10"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '341px' }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            El valor clave de tu empresa.
            <br />
            Definimos lo que hace única
            <br />
            a tu oferta frente a la
            <br />
            competencia y preferente
            <br />
            para el público consumidor.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '474px' }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Inteligencia competitiva.
            <br />
            Transformamos ese valor
            <br />
            distintivo en un diseño
            <br />
            atractivo, una comunicación
            <br />
            impactante y una estrategia
            <br />
            sólida para asegurar tu
            <br />
            liderazgo en el espacio
            <br />
            virtual.
          </p>
        </div>
      </div>
    </div>
  );
}


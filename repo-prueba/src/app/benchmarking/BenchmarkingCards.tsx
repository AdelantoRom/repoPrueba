import React from "react";

export default function BenchmarkingCards() {
  return (
    <div>
      {/* Título */}
      <div className="mb-2 text-center mt-[2px]">
        <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px]">
          Análisis del negocio y <br className="max-2xl:hidden max-xl:inline " /> propuesta de<br className="max-xl:hidden"/>
          valor diferencial
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-3 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px]">

        <div
          className="relative top-[40px] w-[427px] h-[218px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '218px' }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[3px] pt-4 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            ¿Dónde estás y a dónde puedes llegar? Estudiamos tu posición en el mercado e identificamos oportunidades mediante un benchmarking estratégico.
          </p>
        </div>

        <div
          className="relative top-[55px] left-1 w-[427px] h-[189px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '189px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-4 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            El valor clave de tu empresa. Definimos lo que hace única a tu oferta frente a la competencia y preferente para el público consumidor.
          </p>
        </div>

        <div
          className="bg-cover bg-center w-[427px] h-[243px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[25px] max-xl:w-[300px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '243px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-9 max-w-[351px] max-xl:max-w-[239px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-6 max-lg:text-[16px] max-lg:max-w-[200px] ">
            Inteligencia competitiva. Transformamos ese valor distintivo en un diseño atractivo, una comunicación impactante y una estrategia sólida para asegurar tu liderazgo en el espacio virtual.
          </p>

        </div>
      </div>
    </div>
  );
}


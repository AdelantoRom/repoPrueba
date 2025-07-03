import React from "react";

export default function BenchmarkingCards() {
  return (
    <div>
      {/* Título */}
      <div className="mb-24 text-center mt-[2px]">
        <h1 className="font-light text-black text-[80px] leading-[120px] max-2xl:text-[67px] max-2xl:leading-[70px]">
          Análisis del negocio y <br />
          propuesta de valor diferencial
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-3 pt-[51px] mx-auto mb-[167px] justify-items-center">
        
        <div
          className="relative top-[40px] w-[427px] h-[218px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center  pt-6"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '218px' }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[6px] pt-5">
            ¿Dónde estás y a dónde puedes
            <br />
            llegar? Estudiamos tu posición en el
            <br />
            mercado e identificamos
            <br />
            oportunidades mediante un
            <br />
            benchmarking estratégico.
          </p>
        </div>

        <div
          className="relative top-[63px] left-1 w-[427px] h-[189px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 max-2xl:w-[380px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '189px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-4">
            El valor clave de tu empresa.
            <br />
            Definimos lo que hace única a tu
            <br />
            oferta frente a la competencia y 
            <br />
            preferente para el público consumidor.
          </p>
        </div>

        <div
          className="bg-cover bg-center w-[427px] h-[243px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] -mt-[2px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '243px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-8">
            Inteligencia competitiva.<br />
            Transformamos ese valor distintivo en <br />
            un diseño atractivo, una<br />
            comunicación impactante y una<br />
            estrategia sólida para asegurar tu<br />
            liderazgo en el espacio virtual.
          </p>
        </div>
      </div>
    </div>
  );
}


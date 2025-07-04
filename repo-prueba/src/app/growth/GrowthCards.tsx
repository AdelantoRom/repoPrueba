import React from "react";

export default function GrowthCards() {
  return (
    <div>
      {/* Título */}
      <div className="mb-24 text-center -mt-[140px] ml-[15px]">
        <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px]">
          Crecimiento y <br />
          posicionamiento de mercado
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-3 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px]">
        {/* Tarjeta 1 */}
        <div
          className="relative top-[40px] w-[427px] h-[228px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '218px' }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[6px] pt-5 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            Expansión inteligente y sostenible. Diseñamos e implementamos estrategias para expandir tu cuota de mercado y consolidar tu posición de liderazgo.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="relative top-[30px] left-1 w-[427px] h-[243px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '243px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-4 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            Growth Strategy - Growth Loops y Optimización de Funnels. Embudos de conversión inteligentes y loops de crecimiento que activan y retienen a tus usuarios.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center w-[427px] h-[243px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[25px] max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '253px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-9 max-w-[351px] max-xl:max-w-[259px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-6 max-lg:text-[16px] max-lg:max-w-[200px] ">
            Optimización continua. Nos enfocamos en identificación de oportunidades de crecimiento escalables y en la mejora constante de tu presencia en el mercado.
          </p>
        </div>
      </div>
    </div>
  );
}

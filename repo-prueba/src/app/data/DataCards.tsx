import React from "react";

export default function DataCards() {
  return (
    <div>
      {/* Título */}
      <div className="mb-24 text-center -mt-[140px] ml-[15px]">
        <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px]">
          Información estratégica para <br />
          la toma de decisiones
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-3 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px]">
        {/* Tarjeta 1 */}
        <div
          className="relative top-[35px] w-[427px] h-[213px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px] max-lg:h-[220px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '220px' }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[6px] pt-5 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            Los datos son las claves de tu crecimiento. Implementamos una cultura data-driven para optimizar tu posicionamiento y potenciar tus capacidades.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="relative top-[30px] left-1 w-[427px] h-[233px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '233px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-6 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            Decisiones basadas en insights. Transformamos los datos en conocimientos de valor accionables, que te permiten tomar decisiones informadas y con alto impacto.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center w-[427px] h-[273px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[7px] max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '293px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-8 max-w-[351px] max-xl:max-w-[259px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-6 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-3 ">
            El poder de la IA en tu empresa. Aplicamos IA para automatizar procesos, optimizar campañas,
            predecir comportamientos y personalizar la experiencia de tus consumidores, logrando una performance superior que te coloca a la vanguardia.
          </p>
        </div>
      </div>
    </div>
  );
}


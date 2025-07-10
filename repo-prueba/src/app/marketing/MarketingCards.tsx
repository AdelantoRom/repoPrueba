import React from "react";

export default function BrandingCards() {
  return (
    <div>
      {/* Título */}
      <div className="mb-24 text-center -mt-[140px] ml-[15px]">
        <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px]">
          Estrategias de conexión y<br />
          adquisición de clientes
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-3 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px]">
        {/* Tarjeta 1 */}
        <div
          className="relative top-[50px] w-[427px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '188px' }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[6px] py-10 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-4">
            Programas de conversión y performance para adquirir y fidelizar clientes, mediante automatización y CRM.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="relative top-[30px] left-1 w-[427px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '218px' }}
        >
          <p className="text-[20px] leading-[28px] text-left py-10 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            Campañas de alto impacto y contenido estratégico, desde SEO y SEM hasta marketing de contenidos con un ROI medible, tests A/B y dinámicas de iteración rápida.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center w-[427px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[29px] max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '218px' }}
        >
          <p className="text-[20px] leading-[28px] text-left py-10 max-w-[351px] max-xl:max-w-[259px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-6 max-lg:text-[16px] max-lg:max-w-[200px] ">
            Estrategias 360° y ejecución multicanal a la medida de cada negocio. Combinando Paid Media, Redes Sociales, Mailing, Retención, Data Analytics, Growth Marketing.
          </p>
        </div>
      </div>
    </div>
  );
}

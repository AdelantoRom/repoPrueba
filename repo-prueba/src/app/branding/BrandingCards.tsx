import React from "react";

export default function BrandingCards() {
  return (
    <div>
      <div className="mb-24 text-center -mt-[152px] ml-[15px]">
        <h1 className="font-light text-black text-[80px] leading-[80px] max-2xl:text-[67px] max-2xl:leading-[70px] max-lg:text-[36px]">
          Desarrollo de identidad e<br />
          imagen de producto
        </h1>
      </div>


      <div className="grid grid-cols-3 pt-[51px] w-fit mx-auto mb-[167px] justify-items-center max-lg:pt-[15px]">
        {/* Tarjeta 1 */}
        <div
          className="relative top-[40px] w-[427px] h-[228px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '218px' }}
        >
          <p className="text-[20px] leading-[28px] text-left -ml-[6px] pt-5 max-w-[351px] max-xl:max-w-[239px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            La identidad digital, tu mayor activo. Diseñamos e instalamos tu marca en el ámbito virtual apelando a los diferenciales de tu propuesta de valor.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="relative top-[30px] left-1 w-[427px] h-[243px] bg-cover bg-center text-white rounded-[28px] overflow-hidden flex items-start justify-center pt-6 max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '243px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-4 max-w-[357px] max-xl:max-w-[246px] max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-3 max-lg:text-[16px] max-lg:max-w-[200px] max-lg:pt-0">
            Identidades y narrativas que conectan con tu audiencia. Generamos impacto positivo y una sólida reputación, percepción de confianza y lealtad hacia tu empresa y oferta en el mercado.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center w-[427px] h-[243px] text-white rounded-[29px] overflow-hidden flex items-start justify-center  ml-[22px] mt-[30px] max-xl:w-[292px] max-lg:max-w-[230px]"
          style={{ backgroundImage: "url('/gradiente-desktop.png')", height: '243px' }}
        >
          <p className="text-[20px] leading-[28px] text-left pt-[39px] max-w-[351px] max-xl:max-w-[259px] mx-auto max-xl:text-[18px] max-xl:leading-[25px] max-xl:pt-6 max-lg:text-[16px] max-lg:max-w-[200px] ">
            Tu presencia online, sólida y eficiente Construimos tus activos digitales en base a los criterios de tu marca, la experiencia del usuario, interfaces atractivas y capacidades tecnológicas avanzadas.
          </p>
        </div>
      </div>
    </div>
  );
}


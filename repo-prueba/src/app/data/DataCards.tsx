import React from "react";

export default function DataCards() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto pt-[135px]">
      {/* Título */}
      <div className="mb-24 text-center -mt-[140px] ml-[15px]">
        <h1 className="font-light text-black text-[120px] leading-[120px]">
          Información estratégica para <br />
          la toma de decisiones
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 px-[137px] mb-[88px]">
        {/* Tarjeta 1 */}
        <div
          className="relative top-[40px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '381px' }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Los datos son las claves de
            <br />
            tu crecimiento.
            <br />
            Implementamos una cultura
            <br />
            data-driven para optimizar
            <br />
            tu posicionamiento y
            <br />
            potenciar tus capacidades.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="mt-[-50px] relative top-[70px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-14 pb-10"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '434px' }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Decisiones basadas en
            <br />
            insights. Transformamos los
            <br />
            datos en conocimientos de
            <br />
            valor accionables, que te
            <br />
            permiten tomar decisiones
            <br />
            informadas y con alto
            <br />
            impacto.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="mt-[-35px] mb-[50px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '569px' }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            El poder de la IA en tu
            <br />
            empresa. Aplicamos IA para
            <br />
            automatizar procesos,
            <br />
            optimizar campañas,
            <br />
            predecir comportamientos y
            <br />
            personalizar la experiencia
            <br />
            de tus consumidores,
            <br />
            logrando una performance
            <br />
            superior que te coloca a la
            <br />
            vanguardia.
          </p>
        </div>
      </div>
    </div>
  );
}


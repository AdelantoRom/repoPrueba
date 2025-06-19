import React from "react";

export default function BrandingCards() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto px-[143px] py-20">
      {/* Título */}
      <div className="mb-24 text-center">
        <h1 className="font-light text-black text-[112px] leading-[120px]">
          Estrategias de conexión y<br />
         adquisición de clientes
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-[120px]">
        {/* Tarjeta 1 */}
        <div
          className="mt-[60px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "287px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Programas de conversión y
            <br />
            performance para adquirir y
            <br />
           fidelizar clientes, mediante
            <br />
           automatización y CRM.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-14"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "434px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
           Campañas de alto impacto
            <br />
           y contenido estratégico,
            <br />
           desde SEO y SEM hasta
            <br />
           marketing de contenidos,
            <br />
          con un ROI medible, tests
            <br />
            A/B y dinámicas de
            <br />
           iteración rápida.
           </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="mt-[20px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "383px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
           Estrategias 360° y ejecución
            <br />
           multicanal a la medida de
            <br />
            cada negocio. Combinando
            <br />
            Paid Media, Redes Sociales,
            <br />
           Mailing, Retención, Data
            <br />
           Analytics, Growth Marketing.
            </p>
        </div>
      </div>
    </div>
  );
}

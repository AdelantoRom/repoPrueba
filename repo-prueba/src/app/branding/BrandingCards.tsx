import React from "react";

export default function BrandingCards() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto px-[143px] py-20">
      {/* Título */}
      <div className="mb-24 text-center">
        <h1 className="font-light text-black text-[112px] leading-[120px]">
          Desarrollo de identidad e<br />
          imagen del producto
        </h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
        {/* Tarjeta 1 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "388px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            La identidad digital, tu
            <br />
            mayor activo. Diseñamos e
            <br />
            instalamos tu marca en el
            <br />
            ámbito virtual apelando a los
            <br />
            diferenciales de tu 
            <br />
            propuesta de valor.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-14"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "480px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Identidades y narrativas que
            <br />
            conectan con tu audiencia.
            <br />
            Generamos impacto
            <br />
            positivo y una sólida
            <br />
            reputación, percepción de
            <br />
            confianza y lealtad hacia tu
            <br />
            empresa y oferta en el
            <br />
            mercado.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-center justify-center px-10 py-12"
          style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: "480px" }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Tu presencia online, sólida y
            <br />
            eficiente. Construimos tus
            <br />
            activos digitales en base a 
            <br />
            los criterios de tu marca, la
            <br />
            experiencia del usuario, 
            <br />
            interfaces atractivas y
            <br />
            capacidades tecnológicas
            <br />
            avanzadas.
          </p>
        </div>
      </div>
    </div>
  );
}


// import React from "react";

// export default function BrandingCards() {
//   return (
//     <div className="relative w-[1585px] mx-auto px-8 py-20">
//       {/* Título */}
//       <div className="mb-24 text-center">
//         <h1 className="font-light text-black text-[112px] leading-[120px]">
//           Desarrollo de identidad e<br />
//           imagen del producto
//         </h1>
//       </div>

//       {/* Grid container */}
//       <div className="grid grid-cols-3 gap-x-8 gap-y-10">
//         {/* Tarjeta 1 */}
//         <div
//           className="relative top-[40px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10"
//           style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '388px' }}
//         >
//           <p className="font-medium text-[30px] leading-[42px] text-left">
//             La identidad digital, tu
//             <br />
//             mayor activo. Diseñamos e
//             <br />
//             instalamos tu marca en el
//             <br />
//             ámbito virtual apelando a los
//             <br />
//             diferenciales de tu 
//             <br />
//             propuesta de valor.
//           </p>
//         </div>

//         {/* Tarjeta 2 */}
//         <div
//           className="relative top-[40px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-14 pb-30"
//           style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '480px' }}
//         >
//           <p className="font-medium text-[30px] leading-[42px] text-left">
//             Identidades y narrativas que
//             <br />
//             conectan con tu audiencia.
//             <br />
//             Generamos impacto
//             <br />
//             positivo y una sólida
//             <br />
//             reputación, percepción de
//             <br />
//             confianza y lealtad hacia tu
//             <br />
//             empresa y oferta en el
//             <br /> 
//             mercado.
//           </p>
//         </div>

//         {/* Tarjeta 3 */}
//         <div
//           className="relative top-[40px] bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10"
//           style={{ backgroundImage: "url('/Gradiente-Home-2.png')", height: '4px' }}
//         >
//           <p className="font-medium text-[30px] leading-[42px] text-left">
//            Tu presencia online, sólida y
//             <br />
//             eficiente. Construimos tus
//             <br />
//             activos digitales en base a 
//             <br />
//             los criterios de tu marca, la
//             <br />
//             experiencia del usuario, 
//             <br />
//             interfaces atractivas y
//             <br />
//             capacidades tecnológicas
//             <br />
//             avanzadas.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


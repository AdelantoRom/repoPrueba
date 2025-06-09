export default function Soluciones() {
  return (
    <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white">
      <div className="flex items-start justify-between px-0 pt-[120px] pb-[40px]">
        
        {/* Columna de texto + formulario */}
        <div className="w-1/2 pl-[143px] pr-8 flex flex-col justify-start space-y-12">
          
          {/* Títulos */}
          <div className="flex flex-col">
            <h2 className="text-[32px] font-medium leading-[36px] text-white mb-10">
              Soluciones Digitales de Negocios
            </h2>
            <h1 className="text-[126px] font-normal leading-[132px] text-white">
              Potenciamos tu Empresa en la Era Digital
            </h1>
          </div>

          {/* Formulario */}
          <div className="flex flex-col space-y-10">
            <h3 className="text-2xl text-white mt-4">
              ¡Anótate ahora y participa de un sorteo con <br /> importantes beneficios para tu próxima campaña!
            </h3>

          <div className="flex items-end">
  {/* Campo de Email */}
  <div className="relative" style={{ width: '439px' }}>
  <label className="block text-white text-[24px] leading-[32px] mb-[6px]">
    Email
  </label>
  <input
    type="email"
    placeholder=""
    className="w-full bg-transparent border-b-[1px] border-white text-white focus:outline-none focus:border-[#00CED1] text-[24px] leading-[32px]"
  />
</div>

  {/* Botón */}
  <button
    className="bg-white text-[#19B7CC] font-bold text-[22px] leading-[32px] px-4 py-1 rounded"
    style={{ minWidth: "64px", height: "40px" }}
  >
    Enviar
  </button>
</div>


          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-1/2 flex justify-end items-start">
          <img
            src="/potenciamos.png"
            alt="Potenciamos"
            className="h-full max-h-[1600px] w-auto object-contain -mt-50"
          />
        </div>
      </div>

 <div className="px-[143px] py-20 flex justify-between items-start">
  {/* Columna izquierda con h3 y h4 */}
  <div className="flex flex-col space-y-6 w-1/2 max-w-[629px]">
    <h3 className="text-[32px] leading-[40px] font-medium">
      Transformación Digital
    </h3>
    <h4 className="text-[24px] leading-[40px] font-normal">
      En un entorno que evoluciona aceleradamente, la <br />
      transformación digital permite a las empresas adaptarse <br />
      rápidamente a las demandas del mercado. <strong>Rombux es tu <br />
      socio estratégico en el mundo online</strong>, ofreciéndote <br />
      soluciones integrales y personalizadas para impulsar tu <br />
      crecimiento y consolidar tu posición.
    </h4>
  </div>

  {/* Columna derecha con h2 */}
  <div className="w-1/2 flex justify-end -mt-18">
    <h2 className="text-[120px] leading-[120px] font-normal text-right max-w-[829px]">
      Impulsando tus Negocios al Futuro
    </h2>
  </div>
</div>


    </div>
  );
}


// export default function Soluciones() {
//   return (
//     <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white">
//       <div className="flex items-start justify-between px-0 pt-[120px] pb-[40px]">
//         {/* Columna de texto + formulario */}
//         <div className="w-1/2 pl-[143px] pr-8 flex flex-col justify-start space-y-12 pt-10">
//           {/* Títulos */}
//           <div className="flex flex-col">
//   <h2 className="text-[32px] font-medium leading-[36px] text-white -mt-0 mb-14">

//     Soluciones Digitales de Negocios
//   </h2>
//   <h1 className="text-[126px] font-normal leading-[132px] text-white">
//     Potenciamos tu Empresa en la Era Digital
//   </h1>
// </div>



//           {/* Formulario */}
//           <div className="flex flex-col space-y-6">
//             <h3 className="text-2xl font-semibold text-white">
//               ¡Anótate ahora y participa de un sorteo con <br /> importantes beneficios para tu próxima campaña!
//             </h3>

//             <div className="flex max-w-md items-end space-x-4 border-b border-white pb-0">
//               <div className="relative w-full">
//                 <input
//                   type="email"
//                   placeholder=" "
//                   className="w-full bg-transparent border-none border-b-2 border-white text-white placeholder-transparent focus:outline-none focus:border-[#00CED1] peer text-2xl"
//                 />
//                 <label className="absolute left-0 -top-7 text-white text-2xl transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl peer-focus:-top-7 peer-focus:text-2xl peer-focus:text-[#00CED1]">
//                   Email
//                 </label>
//               </div>

//               <button className="bg-white border-none text-[#00CED1] font-medium text-2xl px-6 pb-1">
//                 Enviar
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Imagen a la derecha */}
//         <div className="w-1/2 flex justify-end items-stretch pt-10">
//   <img
//     src="/potenciamos.png"
//     alt="Potenciamos"
//     className="h-full w-auto object-contain"
//   />
// </div>

//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function Soluciones() {
//   return (
//     <div className="flex items-start justify-between px-[100px] pt-[20px] pb-[40px] min-h-screen">
//       {/* Columna de texto + formulario */}
//       <div className="w-1/2 pr-8 flex flex-col justify-start space-y-12 pt-10">
//         {/* Títulos */}
//         <div>
//           <h2 className="text-[32px] font-medium leading-[36px] text-white mb-4">
//             Soluciones Digitales de Negocios
//           </h2>
//           <h1 className="text-[126px] font-normal leading-[132px] text-white">
//             Potenciamos tu Empresa en la Era Digital
//           </h1>
//         </div>

//      {/* Formulario */}
// <div className="flex flex-col space-y-6">
//   <h3 className="text-2xl font-semibold text-white">
//     ¡Anótate ahora y participa de un sorteo con <br /> importantes beneficios para tu próxima campaña!
//   </h3>

//   <div className="flex max-w-md items-end space-x-4 border-b border-white pb-0">
//     <div className="relative w-full">
//       <input
//         type="email"
//         placeholder=" "
//         className="w-full bg-transparent border-none border-b-2 border-white text-white placeholder-transparent focus:outline-none focus:border-[#00CED1] peer text-2xl"
//       />
//       <label className="absolute left-0 -top-7 text-white text-2xl transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-2xl peer-focus:-top-7 peer-focus:text-2xl peer-focus:text-[#00CED1]">
//         Email
//       </label>
//     </div>

//     <button className="bg-white border-none text-[#00CED1] font-medium text-xl px-4 pb-1">
//       Enviar
//     </button>
//   </div>
// </div>



//       </div>

//       {/* Imagen a la derecha */}
//       <div className="w-1/2 flex justify-end items-start pt-10">
//         <img
//           src="/potenciamos.png"
//           alt="Potenciamos"
//           className="w-full max-w-[1000px] h-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// }


// "use client";

// import React from 'react';

// export default function Soluciones() {
//   return (
//     <div className="flex items-start justify-between px-[100px] pt-[20px] pb-[40px] min-h-screen">
//       {/* Columna de texto */}
//       <div className="w-1/2 pr-8">
//         <h2 className="text-[32px] font-medium leading-[36px] mb-12 text-white">
//           Soluciones Digitales de Negocios
//         </h2>
//         <h1 className="text-[124px] font-normal leading-[140px] text-white">
//           Potenciamos tu Empresa en la Era Digital
//         </h1>
//       </div>

//       {/* Imagen a la derecha */}
//       <div className="w-1/2 flex justify-end">
//         <img
//           src="/potenciamos.png"
//           alt="Potenciamos"
//           className="w-[100%] max-w-[900px] h-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function Soluciones() {
//   return (
//     <div className="flex items-center justify-between px-[137px] pt-[40px] pb-[60px]">
//       {/* Columna de texto */}
//       <div className="w-1/2">
//         <h2 className="text-[32px] font-medium leading-[30px] mb-4 text-white">
//           Soluciones Digitales de Negocios
//         </h2>
//         <h1 className="text-[120px] font-normal leading-[120px] text-white">
//           Potenciamos tu Empresa en la Era Digital
//         </h1>
//       </div>

//       {/* Imagen a la derecha */}
//       <div className="w-1/2 flex justify-end">
//         <img
//           src="/potenciamos.png"
//           alt="Potenciamos"
//           className="w-[90%] max-w-none h-auto"
//         />
//       </div>
//     </div>
//   );
// }


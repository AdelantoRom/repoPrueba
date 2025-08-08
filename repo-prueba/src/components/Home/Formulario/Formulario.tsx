import React from "react";
import Image from "next/image";

export default function Formulario() {
  return (
    <div className="flex flex-col items-center pt-[115px] gap-[40px] ml-[10px]
                    lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[100px] lg:gap-[60px]
                    2xl:ml-[290px] 2xl:pt-[192px]">
      {/* Columna izquierda */}
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-black text-[40px] leading-[40px] w-[332px] font-light 
                       lg:text-[70px] lg:leading-[70px] lg:w-[677px] lg:font-light
                       2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[1100px] 2xl:font-normal
                       mb-[20px] lg:mb-[40px] 2xl:mb-[94px]">
          Te acompañamos en tu desarrollo digital
        </h1>

        <h2 className="text-[#D81FB9] text-[24px] leading-[60px] font-medium w-[336px] text-left mt-[20px]
                       lg:text-left lg:text-[48px] lg:leading-[60px] lg:mt-[75px]
                       2xl:text-[48px] 2xl:leading-[48px]">
          Contáctanos
        </h2>

        <form className="mt-[29px] flex flex-col space-y-[25px] items-center lg:items-start">
          {["Nombre y Apellido*", "Email*", "Teléfono*", "Empresa*"].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              className="w-full max-w-[336px] h-[41px] border border-[#707070] rounded-[5px] text-[#4B4B4B]
                         text-[16px] leading-[24px] font-medium 
                         placeholder:text-gray-600 bg-white pl-[16px]
                         lg:max-w-none lg:w-[610px] lg:h-[60px] lg:text-[18px] lg:leading-[32px]
                         2xl:w-[638px] 2xl:h-[48px] 2xl:text-[16px]"

                        
            />
          ))}
  {/* Área/s de servicios requeridos */}
        <div className="w-full max-w-[336px] lg:max-w-none lg:w-[610px] 2xl:w-[638px]
                h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-6 space-y-8 bg-white
                mt-8 max-sm:space-y-6 max-sm:pl-3 max-sm:mt-2 max-sm:pt-[15px]">

            <p className="text-[16px] font-medium text-black mb-[26px] leading-[24px] tracking-normal max-sm:text-[18px]">
              Área/s de servicios requeridos*
            </p>
            {[
              { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
              { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
              { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
              { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
              { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
            ].map(({ bold, rest }, idx) => (
              <label key={idx} className="flex items-start space-x-[27px] text-[16px] text-black -mt-[2px] max-sm:leading-[16px] max-sm:space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] border-2 border-gray-400 rounded-md appearance-none bg-white max-sm:w-[23px] max-sm:h-[23px]
                             checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-lg
                             checked:after:flex checked:after:items-center checked:after:justify-center
                             checked:after:w-full checked:after:h-full"
                />
                <span className='max-sm:text-[14px] max-sm:w-[262px]'>
                  <strong className="font-semibold">{bold}</strong>
                  {rest}
                </span>
              </label>
            ))}
          </div>

          {/* Textarea */}
          <div className="w-full max-w-[336px] lg:max-w-none border border-[#707070] rounded-[5px] bg-white
                          lg:w-[610px] lg:h-[222px] 2xl:w-[638px] 2xl:h-[212px]">
            <textarea
              id="mensaje"
              name="mensaje"
              required
              className="w-full h-[113px] pl-[16px] pt-[16px] text-[18px] leading-[18px] font-semibold text-[#707070]
                         placeholder:text-[#707070] resize-none focus:outline-none bg-transparent
                         lg:text-[18px] lg:leading-[32px] lg:font-semibold"
              placeholder="¿Por qué tema nos consultas?*"
            />
          </div>

          {/* Botón enviar */}
          <div className="w-full max-w-[336px] flex justify-center lg:justify-start lg:max-w-none lg:w-[610px] 2xl:w-[638px]">
            <button
              type="submit"
              className="bg-[#D81FB9] text-white text-[24px] font-semibold h-[48px] w-[192px]
                         rounded-[56px] mt-[16px] mb-[60px] lg:w-[254px] lg:h-[64px] lg:text-[28px] lg:mt-[30px] lg:mb-[120px] 
                         2xl:w-[186px] 2xl:h-[46px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:font-bold 2xl:mb-[200px]">
              Enviar
            </button>
          </div>
        </form>
      </div>

    <div className="relative hidden md:block
                md:w-[350px] md:h-[350px] md:ml-[0px] md:mt-[40px]
                lg:w-[400px] lg:h-[400px] lg:ml-[-120px] lg:mt-[170px]
                xl:w-[600px] xl:h-[600px] xl:ml-[-250px]
                2xl:w-[700px] 2xl:h-[700px] 2xl:ml-[-350px]">
  
  {/* Imagen principal */}
  <Image
    src="/grupoesfera+halo.png"
    alt="Grupo Formulario"
    width={800}
    height={800}
    className="absolute md:top-[38%] md:left-[65%]
               lg:top-[55%] lg:left-[62%]
               transform -translate-x-[60%] -translate-y-1/2
               object-cover rounded-full
               md:w-[300px] md:h-[300px]
               lg:w-[375px] lg:h-[375px]
               2xl:w-[680px] 2xl:h-[680px]"
  />

  {/* Trama/red celeste */}
  <Image
    src="/Trama esfera celeste.png"
    alt="Trama Formulario"
    width={720}
    height={720}
    className="absolute md:top-[38%] md:left-[63%]
               lg:top-[55%] lg:left-[60%]
               transform -translate-x-[60%] -translate-y-1/2
               pointer-events-none
               animate-spin [animation-direction:reverse] [animation-duration:120s]
               md:w-[250px] md:h-[250px]
               lg:w-[275px] lg:h-[275px]
               2xl:w-[500px] 2xl:h-[500px]"
  />
</div>




    </div>
  );
}



// import React from "react";
// import Image from "next/image";

// export default function Formulario() {
//   return (
//     <div className="flex flex-col items-center pt-[115px] gap-[40px] ml-[10px]
//                     lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[100px] lg:gap-[60px]
//                     2xl:ml-[290px] 2xl:pt-[192px]">
//       {/* Columna izquierda */}
//       <div className="flex flex-col items-center lg:items-start">
//         <h1 className="text-black text-[40px] leading-[40px] w-[332px] font-light 
//                        lg:text-[70px] lg:leading-[70px] lg:w-[677px] lg:font-light
//                        2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[1100px] 2xl:font-normal
//                        mb-[20px] lg:mb-[40px] 2xl:mb-[94px]">
//           Te acompañamos en tu desarrollo digital
//         </h1>

//         <h2 className="text-[#D81FB9] text-[24px] leading-[60px] font-normal w-[336px] text-left mt-[20px]
//                        lg:text-left lg:text-[48px] lg:leading-[60px] lg:mt-[75px]
//                        2xl:text-[48px] 2xl:leading-[48px]">
//           Contáctanos
//         </h2>

//         <form className="mt-[29px] flex flex-col space-y-[25px] items-center lg:items-start">
//           {['Nombre*', 'Apellido*', 'Email*', 'Teléfono*', 'Empresa*'].map((placeholder, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={placeholder}
//               className="w-full max-w-[336px] h-[41px] border border-[#707070] rounded-[5px]
//                          text-[18px] leading-[18px] font-semibold text-[#707070] 
//                          placeholder:text-[#707070] bg-white pl-[16px]
//                          lg:max-w-none lg:w-[610px] lg:h-[60px] lg:text-[18px] lg:leading-[32px]
//                          2xl:w-[638px] 2xl:h-[48px]"
//             />
//           ))}

//           {/* Área/s de servicios requeridos */}
//           <div className="w-full max-w-[336px] lg:max-w-none border border-[#707070] rounded-[5px] bg-white
//                           lg:w-[610px] 2xl:w-[638px] py-[16px]">
//             <p className="text-[18px] leading-[18px] font-semibold text-[#707070] mb-[16px] pl-[16px]">
//               Área/s de servicios requeridos*
//             </p>
//             <div className="flex flex-col gap-y-[12px] px-[16px]">
//               {[
//                 { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
//                 { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
//                 { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
//                 { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
//                 { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
//               ].map(({ bold, rest }, idx) => (
//                 <label key={idx} className="flex items-center gap-x-[16px] text-[#707070]">
//                   <input
//                     type="checkbox"
//                     className="w-[23px] h-[23px] rounded-[5px] border-2 border-[#707070] appearance-none bg-white
//                                flex items-center justify-center relative
//                                checked:bg-[#D81FB9] checked:after:content-['✔'] checked:after:text-white checked:after:text-[14px]
//                                checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] 
//                                checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
//                   />
//                   <div className="leading-[16px] text-[14px] flex-1">
//                     <strong className="font-semibold">{bold}</strong>
//                     <span className="font-normal">{rest}</span>
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Textarea */}
//           <div className="w-full max-w-[336px] lg:max-w-none border border-[#707070] rounded-[5px] bg-white
//                           lg:w-[610px] lg:h-[222px] 2xl:w-[638px] 2xl:h-[212px]">
//             <textarea
//               id="mensaje"
//               name="mensaje"
//               required
//               className="w-full h-[113px] pl-[16px] pt-[16px] text-[18px] leading-[18px] font-semibold text-[#707070]
//                          placeholder:text-[#707070] resize-none focus:outline-none bg-transparent
//                          lg:text-[18px] lg:leading-[32px] lg:font-semibold"
//               placeholder="¿Por qué tema nos consultas?*"
//             />
//           </div>

//           {/* Botón enviar */}
//           <div className="w-full max-w-[336px] flex justify-center lg:justify-start lg:max-w-none lg:w-[610px] 2xl:w-[638px]">
//             <button
//               type="submit"
//               className="bg-[#D81FB9] text-white text-[24px] font-semibold h-[48px] w-[192px]
//                          rounded-[56px] mt-[16px] mb-[60px] lg:w-[254px] lg:h-[64px] lg:text-[28px] lg:mt-[30px] lg:mb-[120px] 
//                          2xl:w-[186px] 2xl:h-[46px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:font-bold 2xl:mb-[200px]">
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>

//     <div className="relative hidden md:block
//                 md:w-[350px] md:h-[350px] md:ml-[0px] md:mt-[40px]
//                 lg:w-[400px] lg:h-[400px] lg:ml-[-120px] lg:mt-[170px]
//                 xl:w-[600px] xl:h-[600px] xl:ml-[-250px]
//                 2xl:w-[700px] 2xl:h-[700px] 2xl:ml-[-350px]">
  
//   {/* Imagen principal */}
//   <Image
//     src="/grupoesfera+halo.png"
//     alt="Grupo Formulario"
//     width={800}
//     height={800}
//     className="absolute md:top-[38%] md:left-[60%]
//                lg:top-[70%] lg:left-[50%]
//                transform -translate-x-[60%] -translate-y-1/2
//                object-cover rounded-full
//                md:w-[300px] md:h-[300px]
//                lg:w-[375px] lg:h-[375px]
//                2xl:w-[680px] 2xl:h-[680px]"
//   />

//   {/* Trama/red celeste */}
//   <Image
//     src="/Trama esfera celeste.png"
//     alt="Trama Formulario"
//     width={720}
//     height={720}
//     className="absolute md:top-[38%] md:left-[58%]
//                lg:top-[70%] lg:left-[48%]
//                transform -translate-x-[60%] -translate-y-1/2
//                pointer-events-none
//                animate-spin [animation-direction:reverse] [animation-duration:120s]
//                md:w-[250px] md:h-[250px]
//                lg:w-[275px] lg:h-[275px]
//                2xl:w-[500px] 2xl:h-[500px]"
//   />
// </div>




//     </div>
//   );
// }



// import React from "react";
// import Image from "next/image";

// export default function Formulario() {
//   return (
//     <div className="flex flex-col items-center pt-[40px] lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[100px] gap-[40px] lg:gap-[60px] 2xl:ml-[290px] 2xl:pt-[192px]">
//       {/* Columna izquierda */}
//       <div>
//         <h1
//           className="text-black text-[40px] leading-[40px] w-[332px]
//           lg:text-[70px] lg:leading-[70px] lg:w-[677px] lg:font-light
//           2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[1100px] 2xl:font-normal
//           mb-[30px] lg:mb-[40px] 2xl:mb-[94px]"
//         >
//           Te acompañamos en tu desarrollo digital
//         </h1>

//         <h2
//           className="text-[#D81FB9] text-[24px] leading-[29px] font-medium w-[351px] mt-[20px]
//           lg:text-[48px] lg:leading-[60px] lg:font-normal lg:mt-[75px]
//           2xl:text-[48px] 2xl:leading-[48px]  2xl:font-normal"
//         >
//           Contáctanos
//         </h2>

//         <form className="mt-[29px] flex flex-col space-y-[25px]">
//           {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map(
//             (placeholder, idx) => (
//               <input
//                 key={idx}
//                 type="text"
//                 placeholder={placeholder}
//                 className="w-[638px] h-[48px] border border-[#707070] rounded-[5px] text-[16px] leading-[24px] font-medium 
//                 text-[#707070] placeholder:text-[#707070] bg-white pl-[24px]
//                 lg:w-[610px] lg:text-[18px] lg:leading-[32px] lg:font-semibold"
//               />
//             )
//           )}

//           <div className="w-[638px] lg:w-[610px] border border-[#707070] rounded-[5px] bg-white p-[20px]">
//             <p
//               className="text-[16px] font-medium text-[#707070] mb-[16px] leading-[24px]
//               lg:text-[18px] lg:leading-[28px] lg:font-semibold"
//             >
//               Área/s de servicios requeridos*
//             </p>

//             <div className="flex flex-col gap-y-[4px]">
//               {[
//                 {
//                   bold: "Benchmarking",
//                   rest: " / Investigación de mercado y propuesta de valor.",
//                 },
//                 {
//                   bold: "Branding",
//                   rest: " / Identidad, presencia digital, reputación.",
//                 },
//                 {
//                   bold: "Marketing Digital",
//                   rest: " / Conexión y adquisición de clientes.",
//                 },
//                 {
//                   bold: "Growth",
//                   rest: " / Crecimiento y posicionamiento de mercado.",
//                 },
//                 {
//                   bold: "Data + IA",
//                   rest: " / Información clave y automatización de procesos.",
//                 },
//               ].map(({ bold, rest }, idx) => (
//                 <label
//                   key={idx}
//                   className="flex items-start space-x-[16px] text-[16px] text-[#707070] leading-tight lg:text-[18px] lg:leading-[26px]"
//                 >
//                   <input
//                     type="checkbox"
//                     className="w-[20px] h-[20px] border border-[#707070] rounded-md appearance-none bg-white
//             checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-base
//             checked:after:flex checked:after:items-center checked:after:justify-center
//             checked:after:w-full checked:after:h-full"
//                   />
//                   <span>
//                     <strong className="font-semibold">{bold}</strong>
//                     {rest}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="w-[638px] lg:w-[610px] border border-[#707070] rounded-[5px] bg-white p-[20px]">
//   <textarea
//     id="mensaje"
//     name="mensaje"
//     required
//     className="w-full h-[150px] pl-0 pt-0 text-[16px] leading-[24px] font-medium text-[#707070] placeholder:text-[#707070]
//       resize-none focus:outline-none bg-transparent
//       lg:text-[18px] lg:leading-[32px] lg:font-semibold"
//     placeholder="¿Por qué tema nos consultas?*"
//   />
// </div>


//           <div className="w-[638px] flex justify-start">
//             <button
//               type="submit"
//               className="bg-[#D81FB9] text-white text-[18px] font-semibold h-[46px] w-[186px] rounded-[50px] mt-[29px] mb-[198px]"
//             >
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>

// {/* Esfera */}
// <div
//   className="relative hidden lg:block
//              lg:w-[275px] lg:h-[275px] lg:ml-[-80px] lg:mt-[250px]
//              2xl:w-[520px] 2xl:h-[520px] 2xl:ml-[-320px] 2xl:mt-[230px]">
  
//   {/* Imagen principal: personas */}
//   <Image
//     src="/grupoesfera+halo.png"
//     alt="Grupo Formulario"
//     width={800}
//     height={800}
//     className="absolute top-1/2 left-1/2 z-0
//                transform -translate-x-1/2 -translate-y-1/2
//                object-cover rounded-full
//                lg:w-[375px] lg:h-[375px]       
//                2xl:w-[680px] 2xl:h-[680px]"     
//   />

//   {/* Trama/red celeste */}
//   <Image
//     src="/Trama esfera celeste.png"
//     alt="Trama Formulario"
//     width={720}
//     height={720}
//     className="absolute top-1/2 left-1/2 z-10
//                transform -translate-x-1/2 -translate-y-1/2
//                pointer-events-none
//                animate-spin [animation-direction:reverse] [animation-duration:120s]
//                lg:w-[275px] lg:h-[275px]
//                2xl:w-[500px] 2xl:h-[500px]"
//   />
// </div>


//     </div>
//   );
// }


// import React from "react";
// import Image from "next/image";


// export default function Formulario() {
//   return (
//     <div className="flex ml-[140px] mt-[40px] pt-[100px] gap-[60px]">
//       {/* Columna izquierda */}
//       <div>
//         <h1 className="text-black text-[110px] w-[1192px] leading-[120px] font-light mb-[120px]">
//           Te acompañamos en
//           <br />
//           tu desarrollo digital
//         </h1>

//         <h2 className="text-[#D81FB9] text-[60px] w-[351px] font-normal leading-[60px] mt-[30px]">
//           Contáctanos
//         </h2>

//         <form className="mt-[40px] flex flex-col space-y-6 pb-[86px]">
//           {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={placeholder}
//               className="w-[884px] h-[78px] border rounded-[5px] px-4 font-bold text-[28px] leading-[32px] tracking-normal placeholder:text-gray-500 text-[#4B4B4B]"
//               style={{ borderColor: "#70707070" }}
//             />
//           ))}

//           <div
//             className="w-[884px] border rounded-[5px] p-6 space-y-4"
//             style={{ borderColor: "#70707070" }}
//           >
//             <p className="text-[28px] font-semibold text-[#4B4B4B] mb-2 py-[30px] leading-[28px] tracking-normal">
//               Área/s de servicios requeridos*
//             </p>

//             {[
//               { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
//               { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
//               { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
//               { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
//               { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
//             ].map(({ bold, rest }, idx) => (
//               <label
//                 key={idx}
//                 className="flex items-start space-x-3 text-[24px] text-[#4B4B4B]"
//               >
//                 <input
//                   type="checkbox"
//                   className="mt-[3px] w-5 h-5 accent-[#D81FB9]"
//                 />
//                 <span>
//                   <strong className="font-semibold">{bold}</strong>
//                   {rest}
//                 </span>
//               </label>
//             ))}
//           </div>
// <div
//   className="w-[884px] h-[270px] border rounded-[5px] p-6"
//   style={{ borderColor: "#70707070" }}
// >
//   <label htmlFor="mensaje" className=" block text-sm mb-2">
//   </label>
//   <textarea
//     id="mensaje"
//     name="mensaje"
//     required
//     className="w-full h-full p-2 text-[28px] font-bold  placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
//     placeholder="Mensaje*"
//   />
// </div>


//           <button
//             type="submit"
//             className="bg-[#D81FB9] text-white text-[32px] font-bold h-[78px] w-[250px] rounded-[50px] mt-[12px] mb-[40px]"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>

     
// <div className="relative w-[500px] h-[500px] mt-[450px] ml-[-270px]">
//   <Image
//     src="/Grupo 1 esfera.png"
//     alt="Grupo Formulario"
//     fill
//     className="object-cover"
//   />
// </div>

     
//     </div>
//   );
// }

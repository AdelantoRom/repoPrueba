import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-[1100px]:flex-row min-[1100px]:gap-6 2xl:ml-[140px] 2xl:mt-[132px] 2xl:pt-[100px] 2xl:gap-[60px]">
    
      <div className="px-4 min-[768px]:px-8 lg:ml-[80px] 2xl:ml-0">
        <h1 className="text-black font-light text-[40px] leading-[40px] w-[332px] mt-40 mb-10 
                      min-[768px]:text-[54px] min-[768px]:leading-[54px] min-[768px]:w-[500px] min-[768px]:mt-52
                      lg:text-[70px] lg:leading-[70px] lg:w-[610px] lg:mt-60
                      2xl:text-[120px] 2xl:leading-[120px] 2xl:w-[1192px] 2xl:mb-[110px] 2xl:mt-[130px]">
          Iniciemos tu<br />liderazgo digital
        </h1>

        <h2 className="text-[#D81FB9] text-[24px] leading-[24px] w-[141px] mt-16 mb-10
                      min-[768px]:text-[36px] min-[768px]:leading-[36px] min-[768px]:w-[250px]
                      lg:text-[48px] lg:leading-[48px] lg:w-[351px] lg:mt-16 
                      2xl:text-[60px] 2xl:leading-[60px] 2xl:w-[351px] 2xl:mt-[30px]">
          Contáctanos
        </h2>

         <form className="mt-[30px] min-[768px]:mt-[36px] lg:mt-[40px] flex flex-col space-y-6 pb-[60px] 2xl:pb-[86px]">

          {[
            "Nombre*", "Apellido*", "Email*", "Empresa*"
          ].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              className="w-[336px] h-[41px] text-[16px] font-bold leading-[20px] px-4 rounded-[5px] border
                placeholder:text-gray-500 text-[#4B4B4B]
                min-[768px]:w-[440px] min-[768px]:h-[50px] min-[768px]:text-[18px] min-[768px]:leading-[22px]
                lg:w-[610px] lg:h-[60px] lg:text-[20px] lg:leading-[24px]
                2xl:w-[884px] 2xl:h-[78px] 2xl:text-[28px] 2xl:leading-[32px]"
              style={{ borderColor: "#70707070" }}
            />
          ))}

          <div
            className="w-[336px] min-h-[259px] border rounded-[5px] p-4 space-y-4
              min-[768px]:w-[440px] min-[768px]:min-h-[260px] min-[768px]:p-5
              lg:w-[610px] lg:min-h-[239px] lg:p-6
              2xl:w-[884px] 2xl:p-6"
            style={{ borderColor: "#70707070" }}
          >
            <p className="text-[16px] font-semibold text-[#4B4B4B] leading-[20px] py-2
              min-[768px]:text-[18px] min-[768px]:leading-[22px] min-[768px]:py-[18px]
              lg:text-[20px] lg:leading-[24px] lg:py-[20px]
              2xl:text-[28px] 2xl:leading-[28px] 2xl:py-[30px]">
              Área/s de servicios requeridos*
            </p>

            {[
              { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
              { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
              { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
              { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
              { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
            ].map(({ bold, rest }, idx) => (
              <label
                key={idx}
                className="flex items-start space-x-2 text-[14px] text-[#4B4B4B]
                  min-[768px]:text-[16px] lg:text-[18px] 2xl:text-[24px]"
              >
                <input
                  type="checkbox"
                  className="mt-[3px] w-4 h-4 accent-[#D81FB9]
                    min-[768px]:w-[16px] min-[768px]:h-[16px]
                    lg:w-[18px] lg:h-[18px]
                    2xl:w-5 2xl:h-5"
                />
                <span>
                  <strong className="font-semibold">{bold}</strong>
                  {rest}
                </span>
              </label>
            ))}
          </div>

          <div
            className="w-[336px] h-[113px] border rounded-[5px] p-4
              min-[768px]:w-[440px] min-[768px]:h-[180px]
              lg:w-[610px] lg:h-[222px]
              2xl:w-[884px] 2xl:h-[270px] 2xl:p-6"
            style={{ borderColor: "#70707070" }}
          >
            <textarea
              id="mensaje"
              name="mensaje"
              required
              className="w-full h-full resize-none text-[16px] font-bold bg-transparent
                placeholder:text-gray-500 text-[#4B4B4B] focus:outline-none
                min-[768px]:text-[18px]
                lg:text-[20px] lg:leading-[24px]
                2xl:text-[28px] 2xl:leading-[32px]"
              placeholder="Mensaje*"
            />
          </div>

          <button
            type="submit"
            className="bg-[#D81FB9] text-white text-[20px] font-bold h-[48px] w-[192px] rounded-[50px] mx-auto
              min-[768px]:text-[24px] min-[768px]:h-[58px] min-[768px]:w-[210px]
              lg:mx-0 lg:h-[64px] lg:w-[254px] lg:text-[28px] lg:font-semibold
              2xl:h-[78px] 2xl:w-[250px] 2xl:text-[32px] 2xl:font-bold mt-[12px] mb-[40px]"
          >
            Enviar
          </button>
        </form>
      </div>

      <div className="px-4 mt-10 flex flex-col items-start min-[1100px]:mt-[400px] min-[768px]:mt-[240px] lg:mt-120 2xl:mt-[520px] 2xl:ml-[-270px] 2xl:space-y-6 lg:ml-[-8px] ">
        <div className="hidden min-[1100px]:block relative w-[300px] h-[300px] min-[768px]:w-[320px] min-[768px]:h-[320px] lg:w-[330px] lg:h-[330px] 2xl:w-[545px] 2xl:h-[545px]">
          <Image
            src="/Grupo 1 esfera.png"
            alt="Grupo Formulario"
            fill
            className="object-contain relative z-10"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden z-20
                          w-[340px] h-[340px] min-[768px]:w-[360px] min-[768px]:h-[360px] lg:w-[360px] lg:h-[360px] 2xl:w-[600px] 2xl:h-[600px]">
            <Image
              src="/Trama esfera celeste.png"
              alt="Trama Formulario"
              fill
              className="object-contain animate-spin [animation-direction:reverse] [animation-duration:150s]"
            />
          </div>
        </div>

        <div className="mt-[-24px] min-[768px]:mt-[60px] lg:mt-[120px] 2xl:ml-[101px] 2xl:mt-[200px]">
          <a href="mailto:info@rombux.com">
            <p className="text-[20px] font-semibold leading-[32px] cursor-pointer mt-[-24px] mb-12
                          min-[768px]:text-[24px] min-[768px]:mb-10
                          2xl:text-[28px] 2xl:mt-0 2xl:mb-[71px]">
              <span className="text-[#707070]">Email:</span>{' '}
              <span className="text-[#D81FB9]">info@rombux.com</span>
            </p>
          </a>

          <div className="w-[200px] text-[#707070] leading-[32px] 2xl:w-auto">
            <p className="text-[20px] font-semibold mt-4 mb-6 min-[768px]:text-[24px] 2xl:text-[28px] 2xl:mt-16">
              Oficina:
            </p>
            <p className="text-[20px] font-normal mb-12 min-[768px]:text-[22px] 2xl:text-[24px] 2xl:mb-16 2xl:font-normal">
              Lezica 4363,<br />
              Ciudad de Buenos Aires<br />
              (1202AAI) Argentina
            </p>
          </div>

          <div className="hidden lg:block 2xl:block mt-10 2xl:mt-[101px]">
            <Image src="/logoin.png" alt="Logo institucional" width={57} height={57} />
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="flex flex-col min-[1100px]:flex-row min-[1100px]:gap-6 2xl:ml-[140px] 2xl:mt-[132px] 2xl:pt-[100px] 2xl:gap-[60px]">
    
//       <div className="px-4 lg:ml-[80px] 2xl:ml-0">
//         <h1 className="text-black font-light text-[40px] leading-[40px] w-[332px] mt-40 mb-10 
//                       lg:text-[70px] lg:leading-[70px] lg:w-[610px] lg:mt-60
//                       2xl:text-[120px] 2xl:leading-[120px] 2xl:w-[1192px] 2xl:mb-[110px] 2xl:mt-[130px]">
//           Iniciemos tu<br />liderazgo digital
//         </h1>

//         <h2 className="text-[#D81FB9] text-[24px] leading-[24px] w-[141px] mt-16 mb-10
//                       lg:text-[48px] lg:leading-[48px] lg:w-[351px] lg:mt-16 
//                       2xl:text-[60px] 2xl:leading-[60px] 2xl:w-[351px] 2xl:mt-[30px]">
//           Contáctanos
//         </h2>

//          <form className="mt-[30px] lg:mt-[40px] flex flex-col space-y-6 pb-[60px] 2xl:pb-[86px]">

        
//           {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={placeholder}

//               className="w-[336px] h-[41px] text-[16px] font-bold leading-[20px] px-4 rounded-[5px] border
//                 placeholder:text-gray-500 text-[#4B4B4B]
//                 lg:w-[610px] lg:h-[60px] lg:text-[20px] lg:leading-[24px]
//                 2xl:w-[884px] 2xl:h-[78px] 2xl:text-[28px] 2xl:leading-[32px]"
//               style={{ borderColor: "#70707070" }}
//             />
//           ))}

//           <div
//             className="w-[336px] min-h-[259px] border rounded-[5px] p-4 space-y-4
//               lg:w-[610px] lg:min-h-[239px] lg:p-6
//               2xl:w-[884px] 2xl:p-6"
//             style={{ borderColor: "#70707070" }}
//           >
//             <p className="text-[16px] font-semibold text-[#4B4B4B] leading-[20px] py-2
//               lg:text-[20px] lg:leading-[24px] lg:py-[20px]
//               2xl:text-[28px] 2xl:leading-[28px] 2xl:py-[30px]">


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

//                 className="flex items-start space-x-2 text-[14px] text-[#4B4B4B]
//                   lg:text-[18px] 2xl:text-[24px]"
//               >
//                 <input
//                   type="checkbox"
//                   className="mt-[3px] w-4 h-4 accent-[#D81FB9]
//                     lg:w-[18px] lg:h-[18px]
//                     2xl:w-5 2xl:h-5"

//                 />

//                 <span>
//                   <strong className="font-semibold">{bold}</strong>
//                   {rest}
//                 </span>
//               </label>
//             ))}
//           </div>


 
//           <div
//             className="w-[336px] h-[113px] border rounded-[5px] p-4
//               lg:w-[610px] lg:h-[222px]
//               2xl:w-[884px] 2xl:h-[270px] 2xl:p-6"
//             style={{ borderColor: "#70707070" }}
//           >

//             <textarea
//               id="mensaje"
//               name="mensaje"
//               required

//               className="w-full h-full resize-none text-[16px] font-bold bg-transparent
//                 placeholder:text-gray-500 text-[#4B4B4B] focus:outline-none
//                 lg:text-[20px] lg:leading-[24px]
//                 2xl:text-[28px] 2xl:leading-[32px]"

//               placeholder="Mensaje*"
//             />
//           </div>


//           <button
//             type="submit"

//             className="bg-[#D81FB9] text-white text-[20px] font-bold h-[48px] w-[192px] rounded-[50px] mx-auto
//               lg:mx-0 lg:h-[64px] lg:w-[254px] lg:text-[28px] lg:font-semibold
//               2xl:h-[78px] 2xl:w-[250px] 2xl:text-[32px] 2xl:font-bold mt-[12px] mb-[40px]"

//           >
//             Enviar
//           </button>
//         </form>
//       </div>

//       <div className="px-4 mt-10 flex flex-col items-start min-[1100px]:mt-[400px] lg:mt-120 2xl:mt-[520px] 2xl:ml-[-270px] 2xl:space-y-6 lg:ml-[-8px] ">
//         <div className="hidden min-[1100px]:block relative w-[300px] h-[300px] lg:w-[330px] lg:h-[330px] 2xl:w-[545px] 2xl:h-[545px]">
//           <Image
//             src="/Grupo 1 esfera.png"
//             alt="Grupo Formulario"
//             fill
//             className="object-contain relative z-10"
//           />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden z-20
//                           w-[340px] h-[340px] lg:w-[360px] lg:h-[360px] 2xl:w-[600px] 2xl:h-[600px]">
//             <Image
//               src="/Trama esfera celeste.png"
//               alt="Trama Formulario"
//               fill
//               className="object-contain animate-spin [animation-direction:reverse] [animation-duration:150s]"
//             />
//           </div>
//         </div>

    
//         <div className="mt-[-24px] lg:mt-[120px] 2xl:ml-[101px] 2xl:mt-[200px]">
//           <a href="mailto:info@rombux.com">
//             <p className="text-[20px] font-semibold leading-[32px] cursor-pointer mt-[-24px] mb-12
//                           2xl:text-[28px] 2xl:mt-0 2xl:mb-[71px]">
//               <span className="text-[#707070]">Email:</span>{' '}
//               <span className="text-[#D81FB9]">info@rombux.com</span>
//             </p>
//           </a>

//           <div className="w-[200px] text-[#707070] leading-[32px] 2xl:w-auto">
//             <p className="text-[20px] font-semibold mt-4 mb-6 2xl:text-[28px] 2xl:mt-16">
//               Oficina:
//             </p>
//             <p className="text-[20px] font-normal mb-12 2xl:text-[24px] 2xl:mb-16 2xl:font-normal">
//               Lezica 4363,<br />
//               Ciudad de Buenos Aires<br />
//               (1202AAI) Argentina
//             </p>
//           </div>

//           <div className="hidden lg:block 2xl:block mt-10 2xl:mt-[101px]">
//             <Image src="/logoin.png" alt="Logo institucional" width={57} height={57} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="flex flex-col min-[1100px]:flex-row min-[1100px]:gap-10 2xl:ml-[140px] 2xl:mt-[132px] 2xl:pt-[100px] 2xl:gap-[60px]">
//       {/* LADO IZQUIERDO: Título + Formulario */}
//       <div className="px-4 lg:ml-[80px] 2xl:ml-0">
//         <h1 className="text-black font-light text-[40px] leading-[40px] w-[332px] mt-40 mb-10 
//                       lg:text-[70px] lg:leading-[70px] lg:w-[677px] lg:mt-60
//                       2xl:text-[120px] 2xl:leading-[120px] 2xl:w-[1192px] 2xl:mb-[110px] 2xl:mt-[130px]">
//           Iniciemos tu<br />liderazgo digital
//         </h1>

//         <h2 className="text-[#D81FB9] text-[24px] leading-[24px] w-[141px] mt-16 mb-10
//                       lg:text-[48px] lg:leading-[48px] lg:w-[351px] lg:mt-16 
//                       2xl:text-[60px] 2xl:leading-[60px] 2xl:w-[351px] 2xl:mt-[30px]">
//           Contáctanos
//         </h2>

//         <form className="flex flex-col space-y-4 pb-10 2xl:space-y-[42px] 2xl:mt-[29px] 2xl:pb-[86px]">
//           {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={placeholder}
//               className="w-[336px] h-[41px] pl-[16px] text-[18px] font-semibold text-[#4B4B4B] border border-[#707070] rounded-[5px] placeholder:text-gray-500
//                          lg:w-[610px] lg:h-[60px] lg:text-[22px]           
//                          2xl:w-[884px] 2xl:h-[78px] 2xl:text-[28px] 2xl:pl-[32px]"
//             />
//           ))}

//           <div className="w-[336px] min-h-[259px] bg-white border border-[#707070] rounded-[5px] pt-[20px] px-[16px] space-y-3 mb-4 pb-4
//                           lg:w-[610px] lg:h-[239px] 
//                           2xl:w-[884px] 2xl:min-h-[340px] 2xl:pt-[26px] 2xl:pl-8 2xl:space-y-4">
//             <p className="text-[18px] font-semibold text-gray-500 mb-2 
//                           lg:text-[22px]
//                           2xl:text-[28px] 2xl:mb-[26px]">
//               Área/s de servicios requeridos*
//             </p>
//             {[
//               { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
//               { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
//               { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
//               { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
//               { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
//             ].map(({ bold, rest }, idx, arr) => {
//               const isLast = idx === arr.length - 1;
//               return (
//                 <label
//                   key={idx}
//                   className={`flex items-start space-x-4 text-[14px] text-gray-500 lg:text-[18px] 2xl:text-[24px] 2xl:space-x-[47px] ${
//                     isLast ? "mb-[30px] lg:mb-[30px] 2xl:mb-[35px]" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     className="w-[20px] h-[20px] border-2 border-gray-500 rounded-md appearance-none bg-white checked:bg-[#D81FB9] 
//                                2xl:w-[38px] 2xl:h-[35px]"
//                   />
//                   <span>
//                     <strong className="font-semibold">{bold}</strong>{rest}
//                   </span>
//                 </label>
//               );
//             })}
//           </div>

//           <div className="w-[336px] h-[113px] border border-[#707070] rounded-[5px] p-2 bg-white 
//                           lg:w-[610px] lg:h-[222px] lg:p-2
//                           2xl:w-[884px] 2xl:h-[270px] 2xl:p-4">
//             <textarea
//               id="mensaje"
//               name="mensaje"
//               required
//               className="w-full h-full text-[18px] font-semibold text-[#4B4B4B] placeholder:text-gray-500 resize-none bg-transparent focus:outline-none
//                          lg:text-[22px] lg:pt-2 lg:pl-2 2xl:text-[28px] 2xl:pt-[3px] 2xl:pl-4"
//               placeholder="Mensaje*"
//             />
//           </div>

//           <button
//             type="submit"
//             className="mx-auto lg:mx-0 2xl:mx-0 w-[192px] h-[48px] text-[24px] font-semibold text-white bg-[#D81FB9] rounded-[56px] mt-6
//                        2xl:w-[306px] 2xl:h-[78px] lg:text-[28px] 2xl:text-[32px] 2xl:mt-[23px] 2xl:mb-[169px]">
//             Enviar
//           </button>
//         </form>
//       </div>

//       {/* LADO DERECHO: Imagen + Información */}
//       <div className="px-4 mt-10 flex flex-col items-start min-[1100px]:mt-[400px] 2xl:mt-[450px] 2xl:ml-[-270px] 2xl:space-y-6 lg:ml-[-8px]">
//         {/* Imagen Esfera para tablet y desktop */}
//         <div className="hidden min-[1100px]:block relative w-[360px] h-[360px] 2xl:w-[545px] 2xl:h-[545px]">
//           {/* Esfera base */}
//           <Image
//             src="/Grupo 1 esfera.png"
//             alt="Grupo Formulario"
//             fill
//             className="object-contain relative z-10"
//           />
//           {/* Trama/red centrada, circular y un poco más grande */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden z-20
//                           w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px]">
//             <Image
//               src="/Trama esfera celeste.png"
//               alt="Trama Formulario"
//               fill
//               className="object-contain animate-spin [animation-direction:reverse] [animation-duration:150s]"
//             />
//           </div>
//         </div>

//         {/* Información de contacto */}
//         <div className="mt-8 lg:mt-[120px] 2xl:ml-[101px] 2xl:mt-[340px]">
//           <a href="mailto:info@rombux.com">
//             <p className="text-[20px] font-semibold leading-[32px] mb-6 cursor-pointer mt-0
//                           2xl:text-[28px] 2xl:mt-0 2xl:mb-[71px]">
//               <span className="text-[#707070]">Email:</span>{' '}
//               <span className="text-[#D81FB9]">info@rombux.com</span>
//             </p>
//           </a>

//           <div className="w-[200px] text-[#707070] leading-[32px] 2xl:w-auto">
//             <p className="text-[20px] font-semibold mt-4 mb-3 2xl:text-[28px] 2xl:mt-16">
//               Oficina:
//             </p>
//             <p className="text-[20px] font-normal mb-6 2xl:text-[24px] 2xl:mb-16 2xl:font-normal">
//               Lezica 4363,<br />
//               Ciudad de Buenos Aires<br />
//               (1202AAI) Argentina
//             </p>
//           </div>

//           <div className="hidden 2xl:block mt-10 2xl:mt-[101px]">
//             <Image src="/logoin.png" alt="Logo institucional" width={57} height={57} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//RESPONSIVE DESKTOP FIRST//
// import React from "react";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="flex flex-col xl:flex-row xl:ml-[140px] xl:mt-[132px] xl:pt-[100px] xl:gap-[60px]">
//       <div className="px-4">
//         <h1 className="text-black font-light text-[120px] leading-[120px] w-[1192px] mb-[110px] mt-[130px]
//                        lg:text-[72px] lg:leading-[80px] lg:w-[700px] lg:mb-[60px] lg:mt-[100px]
//                        max-md:text-[40px] max-md:leading-[40px] max-md:w-[332px] max-md:mt-40 max-md:mb-10">
//           Iniciemos tu<br />liderazgo digital
//         </h1>

//         <h2 className="text-[#D81FB9] text-[60px] leading-[60px] w-[351px] mt-[30px]
//                        lg:text-[36px] lg:leading-[40px] lg:w-[240px] lg:mt-[20px]
//                        max-md:text-[24px] max-md:leading-[24px] max-md:w-[141px] max-md:mt-12 max-md:mb-10">
//           Contáctanos
//         </h2>

//         <form className="flex flex-col space-y-[42px] mt-[29px] pb-[86px]
//                          lg:space-y-[28px] lg:pb-[60px]
//                          max-md:space-y-4 max-md:pb-10">
//           {[
//             "Nombre*",
//             "Apellido*",
//             "Email*",
//             "Empresa*",
//           ].map((placeholder, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={placeholder}
//               className="w-[884px] h-[78px] pl-[32px] text-[28px] font-semibold text-[#4B4B4B] border border-[#707070] rounded-[5px] placeholder:text-gray-500
//                          lg:w-[600px] lg:h-[60px] lg:text-[22px] lg:pl-[24px]
//                          max-md:w-[336px] max-md:h-[41px] max-md:pl-[16px] max-md:text-[18px]"
//             />
//           ))}

//           <div className="w-[884px] min-h-[340px] bg-white border border-[#707070] rounded-[5px] pt-[26px] pl-8 space-y-4 mb-[30px] pb-4
//                           lg:w-[600px] lg:min-h-[280px] lg:pt-[22px] lg:pl-6 lg:space-y-3
//                           max-md:w-[336px] max-md:min-h-[259px] max-md:pt-[20px] max-md:px-[16px] max-md:space-y-3 max-md:mb-4">
//             <p className="text-[28px] font-semibold text-gray-500 mb-[26px] 
//                           lg:text-[22px] lg:mb-[18px]
//                           max-md:text-[18px] max-md:mb-2">
//               Área/s de servicios requeridos*
//             </p>

//             {[
//               { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
//               { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
//               { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
//               { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
//               { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
//             ].map(({ bold, rest }, idx, arr) => {
//               const isLast = idx === arr.length - 1;
//               return (
//                 <label
//                   key={idx}
//                   className={`flex items-start space-x-[47px] text-[24px] text-gray-500 ${
//                     isLast ? "mb-[35px]" : ""
//                   } lg:text-[18px] lg:space-x-6 lg:mb-[20px]
//                      max-md:text-[14px] max-md:space-x-4 max-md:mb-0`}
//                 >
//                   <input
//                     type="checkbox"
//                     className="w-[38px] h-[35px] border-2 border-gray-500 rounded-md appearance-none bg-white checked:bg-[#D81FB9] 
//                                lg:w-[28px] lg:h-[28px]
//                                max-md:w-[20px] max-md:h-[20px]"
//                   />
//                   <span>
//                     <strong className="font-semibold">{bold}</strong>{rest}
//                   </span>
//                 </label>
//               );
//             })}
//           </div>

//           <div className="w-[884px] h-[270px] border border-[#707070] rounded-[5px] p-4 bg-white
//                           lg:w-[600px] lg:h-[200px] lg:p-3
//                           max-md:w-[336px] max-md:h-[113px] max-md:p-2">
//             <textarea
//               id="mensaje"
//               name="mensaje"
//               required
//               className="w-full h-full text-[28px] font-semibold text-[#4B4B4B] placeholder:text-gray-500 resize-none bg-transparent focus:outline-none
//                          lg:text-[20px]
//                          max-md:text-[18px] max-md:pt-0 max-md:pl-0"
//               placeholder="Mensaje*"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-[306px] h-[78px] text-[32px] font-semibold text-white bg-[#D81FB9] rounded-[56px] mt-[23px] mb-[169px]
//                        lg:w-[240px] lg:h-[60px] lg:text-[24px] lg:mb-[80px]
//                        max-md:w-[192px] max-md:h-[48px] max-md:text-[24px] max-md:mt-6 max-md:mb-0 max-md:mx-auto xl:mx-0">
//             Enviar
//           </button>
//         </form>
//       </div>

//       <div className="px-4 mt-[450px] ml-[-270px] space-y-6 
//                       lg:mt-[300px] lg:ml-[-150px]
//                       max-md:mt-10 max-md:ml-0 max-md:space-y-0">
//         <div className="hidden xl:block relative w-[545px] h-[545px] mt-[108px] ml-[109px]">
//           <Image
//             src="/Grupo 1 esfera.png"
//             alt="Grupo Formulario"
//             width={545}
//             height={545}
//           />
//           <Image
//             src="/Trama esfera celeste.png"
//             alt="Trama Formulario"
//             width={615}
//             height={615}
//             className="absolute top-[-35px] left-[-35px] pointer-events-none animate-spin [animation-direction:reverse] [animation-duration:150s]"
//           />
//         </div>

//         <div className="ml-[101px] mt-[340px] lg:ml-[60px] lg:mt-[240px] max-md:ml-0 max-md:mt-8">
//           <a href="mailto:info@rombux.com">
//             <p className="text-[28px] font-semibold leading-[32px] mb-[71px] cursor-pointer 
//                           lg:text-[20px] lg:mb-[40px]
//                           max-md:text-[20px] max-md:mb-6">
//               <span className="text-[#707070]">Email:</span>{' '}
//               <span className="text-[#D81FB9]">info@rombux.com</span>
//             </p>
//           </a>

//           <div className="text-[#707070] leading-[32px]">
//             <p className="text-[28px] font-semibold mt-16 mb-3 lg:text-[20px] lg:mt-10 max-md:text-[20px] max-md:mt-4">
//               Oficina:
//             </p>
//             <p className="text-[24px] font-normal mb-16 lg:text-[18px] lg:mb-[40px] max-md:text-[20px] max-md:mb-6">
//               Lezica 4363,<br />
//               Ciudad de Buenos Aires<br />
//               (1202AAI) Argentina
//             </p>
//           </div>

//           <div className="hidden xl:block mt-[101px]">
//             <Image src="/logoin.png" alt="Logo institucional" width={57} height={57} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React from "react";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="flex ml-[140px] mt-[132px] pt-[100px] gap-[60px]">

//       <div>
//         <h1 className="text-black text-[120px] w-[1192px] leading-[120px] font-light mb-[110px] mt-[130px]">
//           Iniciemos tu
//           <br />
//           liderazgo digital
//         </h1>

//         <h2 className="text-[#D81FB9] text-[60px] w-[351px] font-normal leading-[60px] mt-[30px]">
//           Contáctanos
//         </h2>

//         <form className="mt-[29px] flex flex-col space-y-[42px] pb-[86px]">
//           {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={placeholder}
//               className="w-[884px] h-[78px] border-[1px] border-[#707070] rounded-[5px] pl-[32px] font-semibold text-[28px] leading-[32px] tracking-normal placeholder:text-gray-500 text-[#4B4B4B]"

//             />
//           ))}

//           <div className="w-[884px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-8 space-y-4 bg-white">
//             <p className="text-[28px] font-semibold text-gray-500 mb-[26px]  leading-[28px] tracking-normal">
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
//                 className="flex items-start space-x-[47px] text-[24px]   text-gray-500 -mt-[2px]"
//               >
//                 <input
//                   type="checkbox"
//                   className=" w-[38px] h-[35px] border-2 border-gray-500 rounded-md appearance-none bg-white checked:bg-[#D81FB9]"
//                 />

//                 <span>
//                   <strong className="font-semibold">{bold}</strong>
//                   {rest}
//                 </span>
//               </label>
//             ))}
//           </div>
//           <div className="w-[884px] h-[270px] border border-[#707070] rounded-[5px] p-4 bg-white">
//             <textarea
//               id="mensaje"
//               name="mensaje"
//               required
//               className="w-full h-full pl-4 pt-[3px] text-[28px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
//               placeholder="Mensaje*"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-[#D81FB9] text-white text-[32px] font-semibold h-[78px] w-[306px] rounded-[50px] mt-[23px] mb-[169px]"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>

//       <div className="flex flex-col items-start mt-[450px] ml-[-270px] space-y-6">

//         <div className="relative w-[650px] mt-[108px] ml-[109px] overflow-visible">
//           <Image
//             src="/Grupo 1 esfera.png"
//             alt="Grupo Formulario"
//             width={545}
//             height={545}

//           />
//           <Image
//             src="/Trama esfera celeste.png"
//             alt="Trama Formulario"
//             width={615}
//             height={615}
//             className="absolute top-[-35px] left-[-35px] pointer-events-none animate-spin [animation-direction:reverse] [animation-duration:150s]"
//           />
//         </div>

//         <div className="ml-[101px] mt-[51px]">
//           <a href="mailto:info@rombux.com">
//             <p className="text-[28px] font-semibold leading-[32px] mt-[100px] ml-[0px] mb-[71px] cursor-pointer">
//               <span className="text-[#707070]">Email:</span>{' '}
//               <span className="text-[#D81FB9]">info@rombux.com</span>
//             </p>
//           </a>



//           <div className="text-[#707070]  leading-[32px]">
//             <p className="text-[28px] font-semibold mb-[34px]">Oficina:</p>
//             <p className="text-[24px] font-normal ">
//               Lezica 4363,<br />
//               Ciudad de Buenos Aires<br />
//               (1202AAI) Argentina
//             </p>
//           </div>

//           <div className="mt-[101px] ">
//             <Image src="/logoin.png" alt="Logo institucional" width={57} height={57} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

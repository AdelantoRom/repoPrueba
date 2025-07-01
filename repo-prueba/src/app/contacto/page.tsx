import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col 2xl:flex-row 2xl:ml-[140px] 2xl:mt-[132px] 2xl:pt-[100px] 2xl:gap-[60px]">
      <div className="px-4">
        <h1 className="text-black font-light text-[40px] leading-[40px] w-[332px] mt-40 mb-10 
                       2xl:text-[120px] 2xl:leading-[120px] 2xl:w-[1192px] 2xl:mb-[110px] 2xl:mt-[130px]">
          Iniciemos tu<br />liderazgo digital
        </h1>

        <h2 className="text-[#D81FB9] text-[24px] leading-[24px] w-[141px] mt-12 mb-10
                       2xl:text-[60px] 2xl:leading-[60px] 2xl:w-[351px] 2xl:mt-[30px]">
          Contáctanos
        </h2>

        <form className="flex flex-col space-y-4 pb-10 2xl:space-y-[42px] 2xl:mt-[29px] 2xl:pb-[86px]">
          {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              className="w-[336px] h-[41px] pl-[16px] text-[18px] font-semibold text-[#4B4B4B] border border-[#707070] rounded-[5px] placeholder:text-gray-500
                         2xl:w-[884px] 2xl:h-[78px] 2xl:text-[28px] 2xl:pl-[32px]"
            />
          ))}

          <div className="w-[336px] min-h-[259px] bg-white border border-[#707070] rounded-[5px] pt-[20px] px-[16px] space-y-3 mb-4 pb-4
                          2xl:w-[884px] 2xl:min-h-[340px] 2xl:pt-[26px] 2xl:pl-8 2xl:space-y-4">
            <p className="text-[18px] font-semibold text-gray-500 mb-2 
                          2xl:text-[28px] 2xl:mb-[26px]">
              Área/s de servicios requeridos*
            </p>
           {[
  { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
  { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
  { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
  { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
  { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
].map(({ bold, rest }, idx, arr) => {
  const isLast = idx === arr.length - 1;
  return (
    <label
      key={idx}
      className={`flex items-start space-x-4 text-[14px] text-gray-500 2xl:text-[24px] 2xl:space-x-[47px] ${
        isLast ? "mb-[30px] 2xl:mb-[35px]" : ""
      }`}
    >
      <input
        type="checkbox"
        className="w-[20px] h-[20px] border-2 border-gray-500 rounded-md appearance-none bg-white checked:bg-[#D81FB9] 
                   2xl:w-[38px] 2xl:h-[35px]"
      />
      <span>
        <strong className="font-semibold">{bold}</strong>{rest}
      </span>
    </label>
  );
})}

          </div>

          <div className="w-[336px] h-[113px] border border-[#707070] rounded-[5px] p-2 bg-white 
                          2xl:w-[884px] 2xl:h-[270px] 2xl:p-4">
            <textarea
              id="mensaje"
              name="mensaje"
              required
              className="w-full h-full text-[18px] font-semibold text-[#4B4B4B] placeholder:text-gray-500 resize-none bg-transparent focus:outline-none
                         2xl:text-[28px] 2xl:pt-[3px] 2xl:pl-4"
              placeholder="Mensaje*"
            />
          </div>

          <button
  type="submit"
  className="mx-auto 2xl:mx-0 w-[192px] h-[48px] text-[24px] font-semibold text-white bg-[#D81FB9] rounded-[56px] mt-6
             2xl:w-[306px] 2xl:h-[78px] 2xl:text-[32px] 2xl:mt-[23px] 2xl:mb-[169px]">
  Enviar
</button>

        </form>
      </div>

      <div className="px-4 mt-10 flex flex-col items-start 2xl:mt-[450px] 2xl:ml-[-270px] 2xl:space-y-6">
        {/* Imagenes Esfera */}
        <div className="hidden 2xl:block relative w-[336px] h-[336px] 2xl:w-[650px] 2xl:mt-[108px] 2xl:ml-[109px]">
          <Image
            src="/Grupo 1 esfera.png"
            alt="Grupo Formulario"
            width={336}
            height={336}
            className="2xl:w-[545px] 2xl:h-[545px]"
          />
          <Image
            src="/Trama esfera celeste.png"
            alt="Trama Formulario"
            width={336}
            height={336}
            className="absolute top-[-15px] left-[-15px] pointer-events-none animate-spin [animation-direction:reverse] [animation-duration:150s] 
                       2xl:w-[615px] 2xl:h-[615px] 2xl:top-[-35px] 2xl:left-[-35px]"
          />
        </div>

        <div className="mt-8 2xl:ml-[101px] 2xl:mt-[340px]">
          <a href="mailto:info@rombux.com">
            <p className="text-[20px] font-semibold leading-[32px] mb-6 cursor-pointer mt-0
                          2xl:text-[28px] 2xl:mt-0 2xl:mb-[71px]">
              <span className="text-[#707070]">Email:</span>{' '}
              <span className="text-[#D81FB9]">info@rombux.com</span>
            </p>
          </a>

          <div className="w-[200px] text-[#707070] leading-[32px] 2xl:w-auto">
            <p className="text-[20px] font-semibold mt-4 mb-3 2xl:text-[28px] 2xl:mt-16">
              Oficina:
            </p>
            <p className="text-[20px] font-normal mb-6 2xl:text-[24px] 2xl:mb-16 2xl:font-normal">
              Lezica 4363,<br />
              Ciudad de Buenos Aires<br />
              (1202AAI) Argentina
            </p>
          </div>

          <div className="hidden 2xl:block mt-10 2xl:mt-[101px]">
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

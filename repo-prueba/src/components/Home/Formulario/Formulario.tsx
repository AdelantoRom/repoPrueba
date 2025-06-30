import React from "react";
import Image from "next/image";

export default function Formulario() {
  return (

    <div className="flex flex-col items-center pt-[40px] lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[100px] 2xl:ml-[140px] gap-[40px] lg:gap-[60px]">
      {/* Columna izquierda */}
      <div>
        <h1 className="text-black text-[40px] leading-[40px] font-light w-[332px]
          lg:text-[48px] lg:leading-[53px] lg:w-[500px]
          2xl:text-[110px] 2xl:leading-[120px] 2xl:w-[1100px]
          mb-[30px] lg:mb-[40px] 2xl:mb-[120px]">
          Te acompañamos en tu desarrollo digital

        </h1>

        <h2 className="text-[#D81FB9] text-[24px] leading-[29px] font-medium w-[351px]
          lg:text-[48px] lg:leading-[53px] lg:font-medium
          2xl:text-[60px] 2xl:leading-[60px] 2xl:font-normal
          mt-[20px] lg:mt-[30px]">
          Contáctanos
        </h2>
        <form className="mt-[30px] lg:mt-[40px] flex flex-col space-y-6 pb-[60px] 2xl:pb-[86px]">

        
          {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}

              className="w-[336px] h-[41px] text-[16px] font-bold leading-[20px] px-4 rounded-[5px] border
                placeholder:text-gray-500 text-[#4B4B4B]
                lg:w-[610px] lg:h-[60px] lg:text-[20px] lg:leading-[24px]
                2xl:w-[884px] 2xl:h-[78px] 2xl:text-[28px] 2xl:leading-[32px]"
              style={{ borderColor: "#70707070" }}
            />
          ))}

          {/* Área de servicios */}
          <div
            className="w-[336px] min-h-[259px] border rounded-[5px] p-4 space-y-4
              lg:w-[610px] lg:min-h-[239px] lg:p-6
              2xl:w-[884px] 2xl:p-6"
            style={{ borderColor: "#70707070" }}
          >
            <p className="text-[16px] font-semibold text-[#4B4B4B] leading-[20px] py-2
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
                  lg:text-[18px] 2xl:text-[24px]"
              >
                <input
                  type="checkbox"
                  className="mt-[3px] w-4 h-4 accent-[#D81FB9]
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


          {/* Mensaje */}
          <div
            className="w-[336px] h-[113px] border rounded-[5px] p-4
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
                lg:text-[20px] lg:leading-[24px]
                2xl:text-[28px] 2xl:leading-[32px]"

              placeholder="Mensaje*"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"

            className="bg-[#D81FB9] text-white text-[20px] font-bold h-[48px] w-[192px] rounded-[50px] mx-auto
              lg:mx-0 lg:h-[64px] lg:w-[254px] lg:text-[28px] lg:font-semibold
              2xl:h-[78px] 2xl:w-[250px] 2xl:text-[32px] 2xl:font-bold mt-[12px] mb-[40px]"

          >
            Enviar
          </button>
        </form>
      </div>

<div
  className="relative hidden lg:block
    lg:w-[400px] lg:h-[400px] lg:ml-[20px] 
    2xl:w-[600px] 2xl:h-[600px] 2xl:ml-[-180px]"
>
  {/* Esfera - más pequeña y detrás */}
  <Image
    src="/Grupo 1 esfera.png"
    alt="Grupo Formulario"
    width={400}
    height={400}
    className="absolute top-[45%] lg:top-[87%] 2xl:top-[112%] left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-full
      lg:w-[300px] lg:h-[300px]
      2xl:w-[500px] 2xl:h-[500px]"
  />

  {/* Trama celeste - más grande y al frente */}
  <Image
    src="/Trama esfera celeste.png"
    alt="Trama Formulario"
    width={550}
    height={550}
    className="absolute top-[45%] lg:top-[87%] 2xl:top-[112%] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2
      pointer-events-none animate-spin [animation-direction:reverse] [animation-duration:150s]"
  />
</div>



    </div>
  );
}


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

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        
        <div className="flex flex-col pt-[100px] gap-[40px] lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[180px] lg:gap-[60px] xl:ml-[110px] 2xl:ml-[15%] 2xl:pt-[260px]">

          {/* Left Column */}
          <div className="w-full lg:basis-[60%] lg:flex-grow 2xl:basis-[70%] 2xl:max-w-none px-4">
            
            {/* h1 y h2 agrupados */}
            
           <div className="flex flex-col space-y-[30px] lg:space-y-[100px]">
  <h1 className="mt-[40px] lg:mt-[4px] w-full break-words text-[#000000] font-light text-[32px] leading-[36px] lg:text-[70px] lg:leading-[70px] lg:font-light 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal">
  <span>Iniciemos tu</span>
  <span className="block lg:inline"> liderazgo digital</span>
</h1>

  <h2 className="text-[#D81FB9] text-[24px] leading-[24px] font-normal w-fit lg:w-[351px] lg:text-[48px] lg:leading-[53px] lg:font-normal 2xl:text-[48px] 2xl:leading-[48px] 2xl:font-normal">
    Contáctanos
  </h2>
</div>

            {/* Formulario */}
            <form className="mt-[22px] flex flex-col space-y-[20px]">
              {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map((placeholder, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={placeholder}
                  className="w-full h-[48px] border border-[#707070] placeholder:text-gray-600 text-[#4B4B4B] rounded-[5px] font-medium text-[16px] leading-[24px] bg-white pl-[24px] lg:w-[605px] lg:h-[60px] 2xl:w-[638px] 2xl:h-[48px] 2xl:mb-[30px]"
                />
              ))}

        {/* Checkbox Area */}
<div className="w-full min-h-[340px] border border-[#707070] rounded-[5px] pt-[18px] pl-6 pb-6 lg:space-y-8 space-y-6 bg-white lg:min-h-[280px] 2xl:min-h-[344px] lg:w-[605px] 2xl:w-[638px] 2xl:mt-[30px]">

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
    <label
      key={idx}
      className="flex items-start gap-[27px] text-[16px] text-black -mt-[2px] max-sm:leading-[16px] max-sm:gap-[15px]"
    >
      <input
        type="checkbox"
        className="w-[25px] h-[25px] border-2 border-gray-400 rounded-md appearance-none bg-white max-sm:w-[23px] max-sm:h-[23px]
        checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-lg
        checked:after:flex checked:after:items-center checked:after:justify-center
        checked:after:w-full checked:after:h-full"
      />
      <span className="max-sm:text-[14px] max-sm:w-[262px]">
        <strong className="font-semibold">{bold}</strong>
        {rest}
      </span>
    </label>
  ))}
</div>

            

              {/* Textarea */}
              <div className="w-full h-[113px] border border-[#707070] rounded-[5px] p-3 bg-white mt-0 lg:w-[605px] lg:h-[222px] 2xl:w-[638px] 2xl:h-[212px] 2xl:mt-[40px]">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  className="w-full h-full pl-3 pt-1 text-[14px] leading-[36px] font-semibold placeholder:text-[#707070] text-[#707070] resize-none focus:outline-none bg-transparent lg:font-semibold lg:text-[22px] lg:leading-[36px] 2xl:font-bold 2xl:text-[18px] 2xl:leading-[28px]"
                  placeholder="¿Por qué tema nos consultas?*"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-start -mb-4 lg:w-[605px] lg:mb-12 2xl:w-[638px] 2xl:mb-[70px]">
                <button
                  type="submit"
                  className="bg-[#D81FB9] text-white text-[24px] leading-[32px] font-semibold w-[192px] h-[48px] rounded-[50px] mt-[29px] mb-0 text-center"
                  style={{ textAlign: 'center' }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          {/* Right Column */}
          
<div className="flex flex-col flex-shrink-0 relative mt-[60px] lg:mt-[100px] lg:translate-x-[-50px] lg:translate-y-[50px] xl:translate-x-[120px] 2xl:translate-x-[200px]">

  <div className="hidden lg:block relative lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px] 2xl:w-[550px] 2xl:h-[550px] lg:ml-[20px] 2xl:ml-[-70%]">

  <div className="absolute top-0 left-0 w-full h-full transform translate-x-[-4%] translate-y-[-12%] xl:translate-x-[-6%] xl:translate-y-[-10%] 2xl:translate-x-[-8%] 2xl:translate-y-[-25%]">

      {/* Trama celeste */}
      <Image
        src="/Trama esfera celeste.png"
        alt="Trama Formulario"
        width={450}
        height={450}
        className="absolute top-[95%] 2xl:top-[90%] left-[60%] z-20 transform -translate-x-[60%] -translate-y-1/2 w-[260px] h-[260px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] animate-spin [animation-direction:reverse] [animation-duration:120s]"
      />

      {/* Esfera + halo */}
      <Image
        src="/grupoesfera+halo.png"
        alt="Grupo Formulario"
        width={600}
        height={600}
        className="absolute top-[95%] 2xl:top-[90%] left-[60%] z-10 transform -translate-x-[60%] -translate-y-1/2 object-contain scale-[1.1] 2xl:scale-[1.2]"
      />

    </div>
  </div>

           {/* Email / Oficina - Mobile */}
<div className="block lg:hidden w-full max-w-[640px] px-4 mt-10">
  <a href="mailto:info@rombux.com">
    <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[4px] mb-6">
      <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
    </p>
  </a>

  <div className="w-full text-[#707070]">
    <h3 className="text-[20px] leading-[28px] font-semibold mb-6">Oficina:</h3>
    <p className="text-[18px] leading-[28px] font-normal mb-[50px]">
      Lezica 4363,<br />
      Ciudad de Buenos Aires<br />
      (1202AAI) Argentina
    </p>
  </div>
</div>

{/* Email / Oficina - Tablet & Desktop */}
<div className="hidden lg:flex absolute w-full max-w-[640px] px-4 flex-col items-start top-[100%] translate-y-[370px] xl:translate-y-[180px] 2xl:translate-y-[280px] lg:ml-[50px] xl:ml-[-110px] 2xl:ml-[-350px] lg:px-0">
  <a href="mailto:info@rombux.com">
    <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12 2xl:text-[24px] 2xl:font-normal 2xl:leading-[28px]">
      <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
    </p>
  </a>

  <div className="w-full text-[#707070]">
    <h3 className="text-[20px] leading-[28px] font-semibold mb-4 2xl:font-bold 2xl:text-[24px] 2xl:leading-[28px]">Oficina:</h3>
    <p className="text-[18px] leading-[28px] font-normal">
      Lezica 4363,<br />
      Ciudad de Buenos Aires<br />
      (1202AAI) Argentina
    </p>
  </div>

  <div className="mt-10">
    <Image
      src="/logoin.png"
      alt="Logo institucional"
      width={46}
      height={46}
    />
  </div>
</div>

          </div>

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}


// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer/Footer";

// export default function Page() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">
        
//         <div className="flex flex-col pt-[100px] gap-[40px] lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[180px] lg:gap-[60px] xl:ml-[110px] 2xl:ml-[15%] 2xl:pt-[260px]">

//           {/* Left Column */}
//           <div className="w-full lg:basis-[60%] lg:flex-grow 2xl:basis-[70%] 2xl:max-w-none px-4">
            
//             {/* h1 y h2 agrupados */}
            
//            <div className="flex flex-col space-y-[30px] lg:space-y-[100px]">
//   <h1 className="mt-[40px] lg:mt-[4px] w-full break-words text-black font-light text-[32px] leading-[36px] lg:text-[70px] lg:leading-[70px] lg:font-light 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal">
//   <span>Iniciemos tu</span>
//   <span className="block lg:inline"> liderazgo digital</span>
// </h1>


//   <h2 className="text-[#D81FB9] text-[24px] leading-[24px] font-normal w-fit lg:w-[351px] lg:text-[48px] lg:leading-[53px] lg:font-normal 2xl:text-[48px] 2xl:leading-[48px] 2xl:font-normal">
//     Contáctanos
//   </h2>
// </div>


//             {/* Formulario */}
//             <form className="mt-[22px] flex flex-col space-y-[20px]">
//               {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map((placeholder, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={placeholder}
//                   className="w-full h-[41px] border border-[#707070] text-[#4B4B4B] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] lg:w-[605px] lg:h-[60px] 2xl:w-[638px] 2xl:h-[48px] 2xl:mb-[30px] lg:font-semibold lg:text-[22px] lg:leading-[32px]"
//                 />
//               ))}

//           {/* Checkbox Area */}
// <div className="w-full border border-[#707070] rounded-[5px] pt-[18px] pl-6 space-y-4 lg:space-y-2 2xl:space-y-6 bg-white h-[340px] lg:h-[280px] 2xl:h-[344px] lg:w-[605px] 2xl:w-[638px] 2xl:mt-[30px]">
//   <p className="text-[18px] leading-[36px] font-semibold text-[#4B4B4B] mb-[10px] lg:font-semibold lg:text-[22px] lg:leading-[36px] 2xl:font-bold 2xl:text-[18px] 2xl:leading-[28px] 2xl:mb-[30px]">
//     Área/s de servicios requeridos*
//   </p>
//   {[
//     { bold: 'Benchmarking', rest: ' / Investigación de mercado y propuesta de valor.' },
//     { bold: 'Branding', rest: ' / Identidad, presencia digital, reputación.' },
//     { bold: 'Marketing Digital', rest: ' / Conexión y adquisición de clientes.' },
//     { bold: 'Growth', rest: ' / Crecimiento y posicionamiento de mercado.' },
//     { bold: 'Data + IA', rest: ' / Información clave y automatización de procesos.' },
//   ].map(({ bold, rest }, idx) => (
//     <label key={idx} className="flex items-start space-x-[18px] text-[14px] leading-[16px] text-[#4B4B4B] lg:text-[18px] lg:leading-[32px] 2xl:font-normal 2xl:text-[18px] 2xl:leading-[28px]">
//       <input
//         type="checkbox"
//         className="
//           w-[23px] h-[23px] border-2 border-[#707070] rounded-[5px] appearance-none bg-white
//           checked:bg-[#D81FB9] checked:border-[#D81FB9]
//           checked:after:content-['✔'] checked:after:text-white checked:after:text-[14px]
//           checked:after:flex checked:after:items-center checked:after:justify-center
//           lg:w-[24px] lg:h-[23px]
//           2xl:w-[24px] 2xl:h-[24px]
//           focus-visible:ring-2 focus-visible:ring-[#D81FB9]
//         "
//       />
//       <span>
//         <strong className="lg:font-semibold">{bold}</strong>
//         <span className="lg:font-normal">{rest}</span>
//       </span>
//     </label>
//   ))}
// </div>



//               {/* Textarea */}
//               <div className="w-full h-[113px] border border-[#707070] rounded-[5px] p-3 bg-white mt-0 lg:w-[605px] lg:h-[222px] 2xl:w-[638px] 2xl:h-[212px] 2xl:mt-[40px]">
//                 <textarea
//                   id="mensaje"
//                   name="mensaje"
//                   required
//                   className="w-full h-full pl-3 pt-1 text-[14px] leading-[36px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent lg:font-semibold lg:text-[22px] lg:leading-[36px] 2xl:font-bold 2xl:text-[18px] 2xl:leading-[28px]"
//                   placeholder="¿Por qué tema nos consultas?*"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="w-full flex justify-start -mb-4 lg:w-[605px] lg:mb-12 2xl:w-[638px] 2xl:mb-[70px]">
//                 <button
//                   type="submit"
//                   className="bg-[#D81FB9] text-white text-[24px] leading-[32px] font-semibold w-[192px] h-[48px] rounded-[50px] mt-[29px] mb-0 text-center"
//                   style={{ textAlign: 'center' }}
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Column */}
          
// <div className="flex flex-col flex-shrink-0 relative mt-[60px] lg:mt-[100px] lg:translate-x-[-50px] lg:translate-y-[50px] xl:translate-x-[120px] 2xl:translate-x-[200px]">

//   <div className="hidden lg:block relative lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px] 2xl:w-[550px] 2xl:h-[550px] lg:ml-[20px] 2xl:ml-[-70%]">

//   <div className="absolute top-0 left-0 w-full h-full transform translate-x-[-4%] translate-y-[-12%] xl:translate-x-[-6%] xl:translate-y-[-10%] 2xl:translate-x-[-8%] 2xl:translate-y-[-25%]">


//       {/* Trama celeste */}
//       <Image
//         src="/Trama esfera celeste.png"
//         alt="Trama Formulario"
//         width={450}
//         height={450}
//         className="absolute top-[95%] 2xl:top-[90%] left-[60%] z-20 transform -translate-x-[60%] -translate-y-1/2 w-[260px] h-[260px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] animate-spin [animation-direction:reverse] [animation-duration:120s]"
//       />

//       {/* Esfera + halo */}
//       <Image
//         src="/grupoesfera+halo.png"
//         alt="Grupo Formulario"
//         width={600}
//         height={600}
//         className="absolute top-[95%] 2xl:top-[90%] left-[60%] z-10 transform -translate-x-[60%] -translate-y-1/2 object-contain scale-[1.1] 2xl:scale-[1.2]"
//       />

//     </div>
//   </div>


//            {/* Email / Oficina - Mobile */}
// <div className="block lg:hidden w-full max-w-[640px] px-4 mt-10">
//   <a href="mailto:info@rombux.com">
//     <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[4px] mb-6">
//       <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
//     </p>
//   </a>

//   <div className="w-full text-[#707070]">
//     <h3 className="text-[20px] leading-[28px] font-semibold mb-6">Oficina:</h3>
//     <p className="text-[18px] leading-[28px] font-normal mb-[50px]">
//       Lezica 4363,<br />
//       Ciudad de Buenos Aires<br />
//       (1202AAI) Argentina
//     </p>
//   </div>

  
// </div>

// {/* Email / Oficina - Tablet & Desktop */}
// <div className="hidden lg:flex absolute w-full max-w-[640px] px-4 flex-col items-start top-[100%] translate-y-[370px] xl:translate-y-[180px] 2xl:translate-y-[280px] lg:ml-[50px] xl:ml-[-110px] 2xl:ml-[-350px] lg:px-0">






//   <a href="mailto:info@rombux.com">
//     <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12 2xl:text-[24px] 2xl:font-normal 2xl:leading-[28px]">
//       <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
//     </p>
//   </a>

//   <div className="w-full text-[#707070]">
//     <h3 className="text-[20px] leading-[28px] font-semibold mb-4 2xl:font-bold 2xl:text-[24px] 2xl:leading-[28px]">Oficina:</h3>
//     <p className="text-[18px] leading-[28px] font-normal">
//       Lezica 4363,<br />
//       Ciudad de Buenos Aires<br />
//       (1202AAI) Argentina
//     </p>
//   </div>


//   <div className="mt-10">
//     <Image
//       src="/logoin.png"
//       alt="Logo institucional"
//       width={46}
//       height={46}
//     />
//   </div>
// </div>

//           </div>

//         </div>
//       </main>

//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }


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
  <h1 className="mt-[40px] lg:mt-[4px] w-full break-words text-black font-light text-[32px] leading-[36px] lg:text-[70px] lg:leading-[70px] lg:font-light 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal">
  <span>Iniciemos tu</span>
  <span className="block lg:inline"> liderazgo digital</span>
</h1>


  <h2 className="text-[#D81FB9] text-[24px] leading-[24px] font-normal w-fit lg:w-[351px] lg:text-[48px] lg:leading-[53px] lg:font-normal 2xl:text-[48px] 2xl:leading-[48px] 2xl:font-normal">
    Contáctanos
  </h2>
</div>


            {/* Formulario */}
            <form className="mt-[22px] flex flex-col space-y-[18px]">
              {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map((placeholder, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={placeholder}
                  className="w-full h-[41px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] lg:w-[605px] 2xl:w-[638px]"
                />
              ))}

              {/* Checkbox Area */}
              <div className="w-full border border-[#707070] rounded-[5px] pt-[18px] pl-6 space-y-4 bg-white h-[320px] lg:h-[280px] 2xl:h-[265px] lg:w-[605px] 2xl:w-[638px]">
                <p className="text-[18px] leading-[36px] font-semibold text-[#4B4B4B] mb-[10px]">
                  Área/s de servicios requeridos*
                </p>
                {[
                  { bold: 'Benchmarking', rest: ' / Investigación de mercado y propuesta de valor.' },
                  { bold: 'Branding', rest: ' / Identidad, presencia digital, reputación.' },
                  { bold: 'Marketing Digital', rest: ' / Conexión y adquisición de clientes.' },
                  { bold: 'Growth', rest: ' / Crecimiento y posicionamiento de mercado.' },
                  { bold: 'Data + IA', rest: ' / Información clave y automatización de procesos.' },
                ].map(({ bold, rest }, idx) => (
                  <label key={idx} className="flex items-start space-x-[20px] text-[14px] leading-[16px] text-[#4B4B4B]">
                    <input
                      type="checkbox"
                      className="
                        w-[23px] h-[23px] border-2 border-[#707070] rounded-[5px] appearance-none bg-white
                        checked:bg-[#D81FB9] checked:border-[#D81FB9]
                        checked:after:content-['✔'] checked:after:text-white checked:after:text-[14px]
                        checked:after:flex checked:after:items-center checked:after:justify-center
                        lg:w-[24px] lg:h-[23px]
                        2xl:w-[24px] 2xl:h-[24px]
                        focus-visible:ring-2 focus-visible:ring-[#D81FB9]
                      "
                    />
                    <span>
                      <strong>{bold}</strong>{rest}
                    </span>
                  </label>
                ))}
              </div>

              {/* Textarea */}
              <div className="w-full h-[113px] border border-[#707070] rounded-[5px] p-3 bg-white mt-0 lg:w-[605px] lg:h-[212px] 2xl:w-[638px]">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  className="w-full h-full pl-3 pt-3 text-[14px] leading-[36px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
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
          <div className="flex flex-col flex-shrink-0 relative lg:translate-x-[-50px] xl:translate-x-[120px] 2xl:translate-x-[200px]">

            <div className="hidden lg:block relative lg:w-[400px] lg:h-[400px] lg:ml-[20px] xl:w-[700px] 2xl:h-[700px] 2xl:ml-[-65%] -translate-y-[40px] lg:translate-y-[55px] xl:-translate-y-[100px] 2xl:-translate-y-[120px]">
            <Image
  src="/grupoesfera+halo.png"
  alt="Grupo Formulario"
  width={700}
  height={700}
  className="absolute top-[90%] 2xl:top-[85%] 2xl:left-[75%] z-0 transform -translate-x-[65%] -translate-y-1/2 object-cover rounded-full w-[680px] h-[680px]"
/>

<Image
  src="/Trama esfera celeste.png"
  alt="Trama Formulario"
  width={505}
  height={505}
  className="absolute top-[90%] 2xl:top-[85%] 2xl:left-[73%] z-10 transform -translate-x-[65%] -translate-y-1/2 w-[520px] h-[520px] animate-spin [animation-direction:reverse] [animation-duration:120s]"
/>


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
<div className="hidden lg:flex absolute w-full max-w-[640px] px-4 flex-col items-start top-[100%] translate-y-[340px] xl:translate-y-[100px] 2xl:translate-y-[150px] lg:ml-8 xl:ml-[100px] 2xl:ml-[-150px] lg:px-0">
  <a href="mailto:info@rombux.com">
    <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12">
      <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
    </p>
  </a>

  <div className="w-full text-[#707070]">
    <h3 className="text-[20px] leading-[28px] font-semibold mb-4">Oficina:</h3>
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
//             <h1 className="w-full break-words text-black font-light text-[32px] leading-[36px] mt-[50px] mb-[30px] lg:text-[70px] lg:leading-[70px] lg:mb-[40px] lg:font-light lg:mt-[12px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-semibold 2xl:mb-[94px] 2xl:mt-[10px]">
//               Iniciemos tu liderazgo <br className="hidden 2xl:block" />
//               digital
//             </h1>

//             <h2 className="text-[#D81FB9] text-[24px] leading-[24px] font-semibold w-fit mt-[20px] lg:w-[351px] lg:text-[48px] lg:leading-[53px] lg:font-normal lg:mt-[50px] 2xl:text-[48px] 2xl:leading-[48px] 2xl:font-normal">
//               Contáctanos
//             </h2>

//             <form className="mt-[22px] flex flex-col space-y-[18px]">
//               {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map((placeholder, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={placeholder}
//                   className="w-full h-[41px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] lg:w-[605px] 2xl:w-[638px]"
//                 />
//               ))}

//               {/* Checkbox Area */}
//               <div className="w-full border border-[#707070] rounded-[5px] pt-[18px] pl-6 space-y-4 bg-white h-[320px] lg:h-[280px] 2xl:h-[265px] lg:w-[605px] 2xl:w-[638px]">
//                 <p className="text-[18px] leading-[36px] font-semibold text-[#4B4B4B] mb-[10px]">
//                   Área/s de servicios requeridos*
//                 </p>
//                 {[
//                   { bold: 'Benchmarking', rest: ' / Investigación de mercado y propuesta de valor.' },
//                   { bold: 'Branding', rest: ' / Identidad, presencia digital, reputación.' },
//                   { bold: 'Marketing Digital', rest: ' / Conexión y adquisición de clientes.' },
//                   { bold: 'Growth', rest: ' / Crecimiento y posicionamiento de mercado.' },
//                   { bold: 'Data + IA', rest: ' / Información clave y automatización de procesos.' },
//                 ].map(({ bold, rest }, idx) => (
//                   <label key={idx} className="flex items-start space-x-[20px] text-[14px] leading-[16px] text-[#4B4B4B]">
//                     <input
//                       type="checkbox"
//                       className="
//                         w-[23px] h-[23px] border-2 border-[#707070] rounded-[5px] appearance-none bg-white
//                         checked:bg-[#D81FB9] checked:border-[#D81FB9]
//                         checked:after:content-['✔'] checked:after:text-white checked:after:text-[14px]
//                         checked:after:flex checked:after:items-center checked:after:justify-center
//                         lg:w-[24px] lg:h-[23px]
//                         2xl:w-[24px] 2xl:h-[24px]
//                         focus-visible:ring-2 focus-visible:ring-[#D81FB9]
//                       "
//                     />
//                     <span>
//                       <strong>{bold}</strong>{rest}
//                     </span>
//                   </label>
//                 ))}
//               </div>

//               {/* Textarea */}
//               <div className="w-full h-[113px] border border-[#707070] rounded-[5px] p-3 bg-white mt-0 lg:w-[605px] lg:h-[212px] 2xl:w-[638px]">
//                 <textarea
//                   id="mensaje"
//                   name="mensaje"
//                   required
//                   className="w-full h-full pl-3 pt-3 text-[14px] leading-[36px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
//                   placeholder="¿Por qué tema nos consultas?*"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="w-full flex justify-start mb-4 lg:w-[605px] 2xl:w-[638px] 2xl:mb-12">
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
//           <div className="flex flex-col flex-shrink-0 relative lg:translate-x-[-20px] xl:translate-x-[120px] 2xl:translate-x-[200px]">

//             <div className="hidden lg:block relative lg:w-[400px] lg:h-[400px] lg:ml-[20px] xl:w-[700px] 2xl:h-[700px] 2xl:ml-[-65%] -translate-y-[40px] lg:-translate-y-[15px] xl:-translate-y-[100px] 2xl:-translate-y-[120px]">
//               <Image
//                 src="/grupoesfera+halo.png"
//                 alt="Grupo Formulario"
//                 width={700}
//                 height={700}
//                 className="absolute top-[45%] lg:top-[87%] lg:left-[45%] xl:left-[55%] 2xl:top-[69%] 2xl:left-[75%] z-0 transform -translate-x-[65%] -translate-y-1/2 object-cover rounded-full lg:w-[360px] lg:h-[320px] xl:h-[450px] xl:w-[450px] 2xl:w-[680px] 2xl:h-[680px]"
//               />
//               <Image
//                 src="/Trama esfera celeste.png"
//                 alt="Trama Formulario"
//                 width={505}
//                 height={505}
//                 className="absolute top-[45%] lg:top-[87%] lg:left-[43%] xl:left-[53%] 2xl:top-[69%] 2xl:left-[73%] z-10 transform -translate-x-[65%] -translate-y-1/2 xl:h-[350px] xl:w-[350px] 2xl:w-[520px] 2xl:h-[520px] lg:w-[300px] lg:h-[300px] animate-spin [animation-direction:reverse] [animation-duration:120s]"
//               />
//             </div>

//             {/* Email / Oficina Block */}
//             <div className="absolute w-full max-w-[640px] px-4 flex flex-col items-start top-[100%] translate-y-[-40px] lg:translate-y-[250px] xl:translate-y-[100px] 2xl:translate-y-[150px] lg:ml-8 xl:ml-[100px] 2xl:ml-[-150px] lg:px-0">

//               <a href="mailto:info@rombux.com">
//                 <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12">
//                   <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
//                 </p>
//               </a>

//               <div className="w-full text-[#707070]">
//                 <h3 className="text-[20px] leading-[28px] font-semibold mb-4">Oficina:</h3>
//                 <p className="text-[18px] leading-[28px] font-normal">
//                   Lezica 4363,<br />
//                   Ciudad de Buenos Aires<br />
//                   (1202AAI) Argentina
//                 </p>
//               </div>

//               <div className="hidden lg:block mt-10">
//                 <Image
//                   src="/logoin.png"
//                   alt="Logo institucional"
//                   width={46}
//                   height={46}
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </main>

//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }



// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer/Footer";

// export default function Page() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Main Content */}
//       <main className="flex-grow">
//         <div className="flex flex-col pt-[100px] gap-[40px] lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[180px] lg:gap-[60px] xl:ml-[110px] 2xl:ml-[15%] 2xl:pt-[260px]">

//           {/* Left Column */}
//           <div className="w-full max-w-[640px] lg:w-[500px] 2xl:w-[1100px] px-4">
//             <h1 className="text-black font-light text-[32px] leading-[36px] w-full mt-[50px] mb-[30px] lg:text-[48px] lg:leading-[53px] lg:mb-[40px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:mb-[94px]">
//               Iniciemos tu <br className="2xl:hidden" />
//               <span className="hidden 2xl:inline"> </span>
//               liderazgo digital
//             </h1>

//             <h2 className="text-[#D81FB9] text-[24px] leading-[24px] font-semibold w-fit mt-[20px] lg:w-[351px] lg:text-[48px] lg:leading-[53px] lg:mt-[30px] 2xl:text-[48px] 2xl:leading-[48px] 2xl:font-normal">
//               Contáctanos
//             </h2>

//             <form className="mt-[22px] flex flex-col space-y-[18px]">
//               {['Nombre y Apellido*', 'Email*', 'Telefono*', 'Empresa*'].map((placeholder, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={placeholder}
//                   className="w-full h-[41px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] lg:w-[605px] 2xl:w-[638px]"
//                 />
//               ))}

//               {/* Checkbox Area */}
//               <div className="w-full border border-[#707070] rounded-[5px] pt-[18px] pl-6 space-y-4 bg-white h-[320px] lg:h-[340px]">
//                 <p className="text-[18px] leading-[36px] font-semibold text-[#4B4B4B] mb-[10px]">
//                   Área/s de servicios requeridos*
//                 </p>
//                 {[
//                   { bold: 'Benchmarking', rest: ' / Investigación de mercado y propuesta de valor.' },
//                   { bold: 'Branding', rest: ' / Identidad, presencia digital, reputación.' },
//                   { bold: 'Marketing Digital', rest: ' / Conexión y adquisición de clientes.' },
//                   { bold: 'Growth', rest: ' / Crecimiento y posicionamiento de mercado.' },
//                   { bold: 'Data + IA', rest: ' / Información clave y automatización de procesos.' },
//                 ].map(({ bold, rest }, idx) => (
//                   <label key={idx} className="flex items-start space-x-[20px] text-[14px] leading-[16px] text-[#4B4B4B]">
//                     <input
//                       type="checkbox"
//                       className="
//                         w-[23px] h-[23px] border-2 border-[#707070] rounded-[5px] appearance-none bg-white
//                         checked:bg-[#D81FB9] checked:border-[#D81FB9]
//                         checked:after:content-['✔'] checked:after:text-white checked:after:text-[14px]
//                         checked:after:flex checked:after:items-center checked:after:justify-center
//                         lg:w-[24px] lg:h-[23px]
//                         2xl:w-[24px] 2xl:h-[24px]
//                         focus-visible:ring-2 focus-visible:ring-[#D81FB9]
//                       "
//                     />
//                     <span>
//                       <strong>{bold}</strong>{rest}
//                     </span>
//                   </label>
//                 ))}
//               </div>

//               {/* Textarea */}
//               <div className="w-full h-[113px] border border-[#707070] rounded-[5px] p-3 bg-white mt-0 lg:w-[605px] lg:h-[212px] 2xl:w-[638px]">
//                 <textarea
//                   id="mensaje"
//                   name="mensaje"
//                   required
//                   className="w-full h-full pl-3 pt-3 text-[14px] leading-[36px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
//                   placeholder="¿Por qué tema nos consultas?*"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="w-full flex justify-center lg:w-[605px] 2xl:w-[638px]">
//                 <button
//                   type="submit"
//                   className="bg-[#D81FB9] text-white text-[24px] leading-[32px] font-semibold w-[192px] h-[48px] rounded-[50px] mt-[29px] mb-0 text-center"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col">
//             <div className="hidden lg:block relative lg:w-[400px] lg:h-[400px] lg:ml-[20px] xl:w-[700px] 2xl:h-[700px] 2xl:ml-[-41%]">
//               <Image
//                 src="/grupoesfera+halo.png"
//                 alt="Grupo Formulario"
//                 width={700}
//                 height={700}
//                 className="absolute top-[45%] lg:top-[87%] lg:left-[49%] xl:left-[58%] 2xl:top-[69%] 2xl:left-[50%] z-0 transform -translate-x-[65%] -translate-y-1/2 object-cover rounded-full lg:w-[360px] lg:h-[320px] xl:h-[450px] xl:w-[450px] 2xl:w-[680px] 2xl:h-[680px]"
//               />
//               <Image
//                 src="/Trama esfera celeste.png"
//                 alt="Trama Formulario"
//                 width={505}
//                 height={505}
//                 className="absolute top-[45%] lg:top-[87%] lg:left-[47%] xl:left-[56%] 2xl:top-[69%] 2xl:left-[47%] z-10 transform -translate-x-[65%] -translate-y-1/2 xl:h-[350px] xl:w-[350px] 2xl:w-[520px] 2xl:h-[520px] lg:w-[300px] lg:h-[300px] animate-spin [animation-direction:reverse] [animation-duration:120s]"
//               />
//             </div>

//             <div className="mt-0 w-full max-w-[640px] mb-14 px-4 flex flex-col items-start lg:mt-[405px] lg:-ml-[18px] xl:ml-[100px] 2xl:-ml-[229px] 2xl:mt-[240px] lg:px-0">
//               <a href="mailto:info@rombux.com">
//                 <p className="text-[20px] leading-[32px] font-semibold cursor-pointer mt-[20px] mb-12">
//                   <span className="text-[#707070]">Email:</span> <span className="text-[#D81FB9]">info@rombux.com</span>
//                 </p>
//               </a>

//               <div className="w-full text-[#707070]">
//                 <h3 className="text-[20px] leading-[28px] font-semibold mb-4">Oficina:</h3>
//                 <p className="text-[18px] leading-[28px] font-normal">
//                   Lezica 4363,<br />
//                   Ciudad de Buenos Aires<br />
//                   (1202AAI) Argentina
//                 </p>
//               </div>

//               <div className="hidden lg:block mt-10">
//                 <Image
//                   src="/logoin.png"
//                   alt="Logo institucional"
//                   width={46}
//                   height={46}
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </main>

//       {/* Footer */}
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }


// import React from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer/Footer";

// export default function Page() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Contenido principal */}
//       <main className="flex-grow">
//         <div className="flex flex-col items-center pt-[40px] md:pt-[140px] lg:flex-row lg:items-start lg:ml-[60px] lg:pt-[180px] gap-[40px] xl:ml-[110px] lg:gap-[60px] 2xl:ml-[15%] 2xl:pt-[260px]">
//           {/* Columna izquierda */}
//           <div>
//             <h1 className="text-black text-[40px] leading-[40px] w-[332px] lg:text-[48px] lg:leading-[53px] lg:w-[500px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[1100px] mb-[30px] lg:mb-[40px] 2xl:mb-[94px]">
//               Iniciemos tu liderazgo <br />digital
//             </h1>

//             <h2 className="text-[#D81FB9] text-[24px] leading-[29px] font-medium w-[351px] lg:text-[48px] lg:leading-[53px] 2xl:text-[48px] 2xl:leading-[48px] mt-[20px] lg:mt-[30px] 2xl:font-normal">
//               Contáctanos
//             </h2>

//             <form className="mt-[29px] flex flex-col space-y-[25px]">
//               {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map(
//                 (placeholder, idx) => (
//                   <input
//                     key={idx}
//                     type="text"
//                     placeholder={placeholder}
//                     className="w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px] max-xl:w-[605px]"
//                   />
//                 )
//               )}

//               <div className="w-[638px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-6 space-y-8 bg-white mt-8 max-xl:w-[605px]">
//                 <p className="text-[16px] font-medium text-black mb-[26px] leading-[24px] tracking-normal">
//                   Área/s de servicios requeridos*
//                 </p>
//                 {[
//                   {
//                     bold: "Benchmarking",
//                     rest: " / Investigación de mercado y propuesta de valor.",
//                   },
//                   {
//                     bold: "Branding",
//                     rest: " / Identidad, presencia digital, reputación.",
//                   },
//                   {
//                     bold: "Marketing Digital",
//                     rest: " / Conexión y adquisición de clientes.",
//                   },
//                   {
//                     bold: "Growth",
//                     rest: " / Crecimiento y posicionamiento de mercado.",
//                   },
//                   {
//                     bold: "Data + IA",
//                     rest: " / Información clave y automatización de procesos.",
//                   },
//                 ].map(({ bold, rest }, idx) => (
//                   <label
//                     key={idx}
//                     className="flex items-start space-x-[27px] text-[16px] text-black -mt-[2px]"
//                   >
//                     <input
//                       type="checkbox"
//                       className="w-[25px] h-[25px] border-1 border-black rounded-md appearance-none bg-white
//                       checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-lg
//                       checked:after:flex checked:after:items-center checked:after:justify-center
//                       checked:after:w-full checked:after:h-full"
//                     />
//                     <span>
//                       <strong className="font-semibold">{bold}</strong>
//                       {rest}
//                     </span>
//                   </label>
//                 ))}
//               </div>

//               <div className="w-[638px] max-xl:w-[605px] h-[212px] border border-[#707070] rounded-[5px] p-3 bg-white mt-8">
//                 <textarea
//                   id="mensaje"
//                   name="mensaje"
//                   required
//                   className="w-full h-full pl-3 pt-3 text-[16px] font-bold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
//                   placeholder="¿Por qué tema nos consultas?*"
//                 />
//               </div>

//               <div className="w-[638px] flex justify-start">
//                 <button
//                   type="submit"
//                   className="bg-[#D81FB9] text-white text-[18px] font-semibold h-[46px] w-[186px] rounded-[50px] mt-[29px] mb-[100px]"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Columna derecha */}
//           <div className="flex flex-col">
//             <div className="relative hidden lg:block g:w-[400px] lg:h-[400px] lg:w-[400px] lg:ml-[20px] xl:w-[700px] 2xl:h-[700px] 2xl:ml-[-41%]">
//               <Image
//                 src="/grupoesfera+halo.png"
//                 alt="Grupo Formulario"
//                 width={700}
//                 height={700}
//                 className="absolute top-[45%] lg:top-[87%] lg:left-[49%] xl:left-[58%] 2xl:top-[69%] 2xl:left-[50%] z-0 transform -translate-x-[65%] -translate-y-1/2 object-cover rounded-full lg:mr-5 lg:w-[360px] lg:h-[320px]  xl:h-[450px] xl:w-[450px] 2xl:w-[680px] 2xl:h-[680px] custom-ml"
//               />
//               <Image
//                 src="/Trama esfera celeste.png"
//                 alt="Trama Formulario"
//                 width={505}
//                 height={505}
//                 className="absolute top-[45%] lg:top-[87%] lg:left-[47%] xl:left-[56%] 2xl:top-[69%] 2xl:left-[47%] z-10 transform -translate-x-[65%] -translate-y-1/2 xl:h-[350px] xl:w-[350px] 2xl:w-[520px] 2xl:h-[520px] lg:w-[300px] lg:h-[300px] pointer-events-none animate-spin [animation-direction:reverse] [animation-duration:120s] custom-ml"
//               />
//             </div>

//             <div className="mt-[-24px] min-[768px]:mt-[60px] lg:mt-[405px] lg:-ml-[18px] xl:ml-[100px] 2xl:-ml-[229px] 2xl:mt-[240px]">
//               <a href="mailto:info@rombux.com">
//                 <p className="text-[20px] font-normal leading-[28px] cursor-pointer mt-[-24px] mb-12 min-[768px]:text-[24px] min-[768px]:mb-10 2xl:text-[24px] 2xl:mt-0 2xl:mb-[71px]">
//                   <span className="text-[#707070]">Email:</span>{" "}
//                   <span className="text-[#D81FB9]">info@rombux.com</span>
//                 </p>
//               </a>

//               <div className="w-[200px] text-[#707070] leading-[32px] 2xl:w-auto">
//                 <h3 className="text-[24px] font-bold mt-4 mb-6 min-[768px]:text-[24px] 2xl:text-[24px] 2xl:-mt-5">
//                   Oficina:
//                 </h3>
//                 <p className="text-[20px] font-normal mb-12 min-[768px]:text-[22px] 2xl:text-[24px] 2xl:mb-16 2xl:font-normal 2xl:leading-[28px]">
//                   Lezica 4363,
//                   <br />
//                   Ciudad de Buenos Aires
//                   <br />
//                   (1202AAI) Argentina
//                 </p>
//               </div>

//               <div className="hidden lg:block 2xl:block mt-10 2xl:mt-[68px]">
//                 <Image
//                   src="/logoin.png"
//                   alt="Logo institucional"
//                   width={46}
//                   height={46}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer al fondo siempre */}
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

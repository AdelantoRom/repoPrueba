import HeroSection from './components/HeroSection';
import FormularioEmail from "./components/FormularioEmail"
import TransformacionDigital from './components/TransformacionDigital';
import ClientesLogos from './components/ClientesLogos';

export default function Soluciones() {
  return (
    <div
      className="
        bg-[url('/gradiente-mobile.png')]
        lg:bg-[url('/gradiente-desktop.png')]
        bg-no-repeat bg-top bg-cover
        w-full min-h-screen text-white pt-[140px] pb-[40px]
        lg:pt-[200px] 2xl:pt-[260px]
      "
    >
      <HeroSection />

      <div className="pl-4 pr-2 lg:pl-[30px] lg:pr-8 2xl:pl-[40px] w-full lg:max-w-[650px] 2xl:-ml-10 2xl:mr-auto mb-6">
        <FormularioEmail />
      </div>

      <div className="px-4 lg:px-24 lg:-mr-6 mt-0 2xl:px-[138px] 2xl:-mt-32 py-20 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        <div className="mt-6 lg:w-1/2 flex justify-end lg:justify-start order-1 lg:order-2">
          <h2 className="text-right text-[40px] leading-[42px] lg:text-[70px] lg:leading-[72px] 2xl:text-[120px] 2xl:leading-[120px] max-w-full lg:max-w-[829px]">
            Impulsando tus Negocios al Futuro
          </h2>
        </div>
        <TransformacionDigital />
      </div>

      <ClientesLogos />
    </div>
  );
}


// import Image from 'next/image';

// export default function Soluciones() {
//   return (
    
//    <div
//   className="
//     bg-[url('/gradiente-mobile.png')]
//     lg:bg-[url('/gradiente-desktop.png')]
//     bg-no-repeat bg-top bg-cover
//     w-full min-h-screen text-white pt-[140px] pb-[40px]
//     lg:pt-[200px] 2xl:pt-[260px]
//   "
// >

   
//       <div className="w-full text-white">
//         <div className="flex flex-col lg:flex-row items-start justify-between px-4 lg:ml-2 2xl:px-[138px] pt-6 lg:pt-[96px] pb-[40px] relative">
//           {/* Imagen primero en mobile */}
//           <div className="w-full lg:hidden mb-10 mt-2 flex justify-center">
//             <div className="relative w-[250px] h-[250px] -mt-12">
//               <Image
//                 src="/mujer-esfera.png"
//                 alt="Mujer con esfera"
//                 fill
//                 className="object-contain z-10"
//                 unoptimized
//               />
//               <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 z-20 animate-spin [animation-direction:reverse] [animation-duration:150s]">
//                 <Image
//                   src="/redfucsia.png"
//                   alt="Red giratoria"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>

      
//           <div className="pl-4 pr-2 lg:pl-[72px] lg:pr-8 2xl:pl-[40px] flex flex-col justify-start space-y-12 w-full lg:max-w-[650px] 2xl:-ml-10 2xl:mr-auto">
//             <div className="flex flex-col w-full lg:w-[962px] h-auto">
//               <h2 className="text-[20px] lg:text-[32px] leading-[28px] lg:leading-[36px] text-white mb-6 lg:-mt-20 lg:mb-10">
//                 Soluciones Digitales de Negocios
//               </h2>
//               <h1 className="text-[40px] lg:text-[70px] lg:mt-4 2xl:text-[120px] leading-[44px] lg:leading-[70px] 2xl:leading-[120px] text-white mt-3 font-normal">
//                 Potenciamos<br />tu Empresa<br />en la Era Digital
//               </h1>
//             </div>
//             <div className="flex flex-col">
//               <h3 className="text-[18px] lg:text-[22px] font-normal leading-[24px] text-white lg:mt-4 max-w-[550px]">
//                 ¡Anótate ahora y participa de un sorteo con
//                 <br className="hidden lg:block" />
//                 importantes beneficios para tu próxima campaña!
//               </h3>
//               <div className="flex flex-col space-y-2 mt-4 max-w-[337px] lg:max-w-[501px]">
//                 <div className="relative w-full">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full bg-transparent border rounded-md border-white text-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[18px] lg:text-[22px] leading-[32px] py-1 lg:py-2 pl-4 h-[32px] lg:h-[46px] 2xl:h-[46px]"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-white text-[18px] lg:text-[22px] 2xl:text-[24px] font-bold h-[32px] lg:h-[38px] 2xl:h-[46px] w-[115px] lg:w-[152px] 2xl:w-[186px] rounded-[50px] mt-10 mx-auto lg:mx-0"
//                   style={{ color: '#19B7CC' }}
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </div>
//           </div>


//           {/* Imagen en tablet y desktop */}

//           <div className="hidden lg:block mr-[40px] lg:-mt-16 2xl:mr-32 2xl:-mt-10">
//             <div className="relative lg:w-[350px] lg:h-[350px] 2xl:w-[683px] 2xl:h-[683px] overflow-visible translate-x-6 2xl:translate-x-10">
//               <Image
//                 src="/mujer-esfera.png"
//                 alt="Mujer con esfera"
//                 fill
//                 className="object-contain z-10"
//                 unoptimized
//               />
          
//               <div className="absolute top-1/2 left-1/2 lg:w-[400px] lg:h-[400px] 2xl:w-[723px] 2xl:h-[723px] -translate-x-1/2 -translate-y-1/2 z-20 animate-spin [animation-direction:reverse] [animation-duration:150s]">
//                 <Image
//                   src="/redfucsia.png"
//                   alt="Red giratoria"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

 
//         <div className="px-4 -mt-[34px] lg:px-24 lg:-mr-6 lg:mt-4 2xl:px-[138px] 2xl:mt-[55px] py-20 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
//           <div className="mt-6 lg:w-1/2 flex justify-end lg:justify-start order-1 lg:order-2">
//             <h2 className="text-right text-[40px] leading-[42px] lg:text-[70px] lg:leading-[72px] 2xl:text-[120px] 2xl:leading-[120px] max-w-full lg:max-w-[829px]">
//               Impulsando tus Negocios al Futuro
//             </h2>
//           </div>
    
//     <div className="flex flex-col w-full lg:w-[440px] h-[227px] max-w-full lg:max-w-[629px] 2xl:w-[629px] 2xl:h-[283px] order-2 lg:order-1 space-y-4 2xl:space-y-6 2xl:mt-[70px]
// ">
//   <h3 className="hidden lg:block text-[24px] leading-[32px] lg:mb-2 lg:mt-4 font-medium 2xl:text-[32px] 2xl:leading-[40px]">
//     Transformación Digital
//   </h3>

//   {/* Mobile y tablet */}
//   <p className="text-[18px] leading-[25px] text-right font-normal lg:text-left lg:text-[20px] lg:leading-[25px] 2xl:hidden">
//     <span className="hidden lg:inline">
//       En un entorno que evoluciona aceleradamente,<br />
//       la transformación digital permite a las empresas adaptarse rápidamente a las demandas del mercado.
//     </span>
//     <strong>
//       Rombux es tu socio estratégico en el<br className="lg:hidden" /> mundo online,
//     </strong>{' '}
//     ofreciéndote soluciones<br className="block lg:hidden" />
//     personalizadas e integrales para <br className="block lg:hidden" />
//     impulsar tu crecimiento y consolidar tu <br className="block lg:hidden" />
//     posición.
//   </p>

//   {/* Solo para desktop 2xl */}
//   <p className="hidden 2xl:block text-[24px] leading-[40px] font-normal text-left">
//     En un entorno que evoluciona aceleradamente, la transformación digital permite a las empresas adaptarse rápidamente a las demandas del mercado.<strong> Rombux es tu socio estratégico en el mundo online,</strong> ofreciéndote soluciones integrales y personalizadas para impulsar tu crecimiento y consolidar tu posición.
//   </p>
// </div>


//         </div>

       
//         <div className="w-full relative px-4 md:px-8 lg:px-20 2xl:px-[120px] 2xl:pt-6 max-w-[1920px] mx-auto">
//           <div
//   className="
//     grid grid-cols-4 justify-items-center gap-x-4 gap-y-6
//     relative -top-[100px] -mb-[100px]
//     lg:relative lg:top-0 lg:mb-4 lg:mt-10  lg:ml-4
//     2xl:mb-10 2xl:mt-16
//     lg:flex lg:flex-nowrap lg:justify-center lg:items-center lg:gap-x-12 lg:gap-y-14
//     2xl:flex 2xl:justify-between 2xl:gap-x-26
//   "
// >

//     <div className="relative w-[50px] h-[31px] lg:w-[73px] lg:h-[45px] 2xl:w-[250px] 2xl:h-[75px]">
//       <Image src="/HP blanco.png" alt="Imagen HP" fill className="object-contain" />
//     </div>

//     <div className="relative w-[83px] h-[13px] lg:w-[120px] lg:h-[19px] 2xl:w-[216px] 2xl:h-[33px]">
//       <Image src="/DowAgro.png" alt="Imagen Dow Agro" fill className="object-contain" />
//     </div>

//     <div className="relative w-[47px] h-[41px] lg:w-[68px] lg:h-[60px] 2xl:w-[122px] 2xl:h-[101px]">
//       <Image src="/SuperPollo blanco.png" alt="Imagen Super Pollo" fill className="object-contain" />
//     </div>

//     <div className="relative w-[38px] h-[27px] lg:w-[56px] lg:h-[40px] 2xl:w-[100px] 2xl:h-[68px]">
//       <Image src="/Amarula blanco.png" alt="Imagen Amarula" fill className="object-contain" />
//     </div>

//     <div className="relative w-[47px] h-[33px] lg:w-[68px] lg:h-[48px] 2xl:w-[122px] 2xl:h-[81px]">
//       <Image src="/Granix blanco.png" alt="Imagen Granix" fill className="object-contain" />
//     </div>

//     <div className="relative w-[47px] h-[15px] lg:w-[68px] lg:h-[21px] 2xl:w-[121px] 2xl:h-[36px]">
//       <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" fill className="object-contain" />
//     </div>

//     <div className="relative w-[59px] h-[21px] lg:w-[85px] lg:h-[31px] 2xl:w-[152px] 2xl:h-[53px]">
//       <Image src="/Advanta blanco.png" alt="Imagen Advanta" fill className="object-contain" />
//     </div>

//     <div className="relative w-[23px] h-[23px] lg:w-[33px] lg:h-[34px] 2xl:w-[59px] 2xl:h-[58px]">
//       <Image src="/Bi blanco.png" alt="Imagen Bi" fill className="object-contain" />
//     </div>

//   </div>
// </div>
// </div>
// </div>
//     );
// }





// import Image from 'next/image';

// export default function Soluciones() {
//   return (
//     <div className="w-full min-h-screen text-white">
//       <div className="flex items-start justify-between px-0 pt-[96px] pb-[40px] relative">
//         {/* Columna de texto + formulario */}
//         <div className=" pl-[138px] pr-8 flex flex-col justify-start space-y-12 ">
//           {/* Títulos */}
//           <div className="flex flex-col w-[962px] h-[360px] ">
//             <h2 className="text-[32px] font-medium leading-[36px] text-white mb-10">
//               Soluciones Digitales de Negocios
//             </h2>
//             <h1 className="text-[120px] font-normal leading-[120px] text-white mt-3">
//               Potenciamos<br />tu Empresa<br />en la Era Digital
//             </h1>
//           </div>

//           {/* Formulario */}
//           <div className="flex flex-col">
//             <h3 className="text-[22px] text-white mt-28 leading-[24px]">
//               ¡Anótate ahora y participa de un sorteo con <br /> importantes beneficios para tu próxima campaña!
//             </h3>

//             <div className="flex flex-col space-y-2 mt-7 max-w-[501px] ">
//               {/* Campo de Email */}
//               <div className="relative w-full">
//                 <div className="w-full">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full bg-transparent border rounded-md border-white text-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[24px] leading-[32px] py-2 pl-4 h-[46px]"
//                   />
//                 </div>

//               </div>


//               {/* Botón */}
//               <button
//                 type="submit"
//                 className="bg-white text-[24px] font-bold h-[46px] w-[186px] rounded-[50px] mt-13"
//                 style={{ color: "#19B7CC" }}
//               >
//                 Enviar
//               </button>
//             </div>
//           </div>

//         </div>

//         <div className='mr-[90px] -mt-10'>
//           <div className="relative w-[683px] h-[683px]  overflow-visible">
//             {/* Mujer con esfera */}
//             <Image
//               src="/mujer-esfera.png"
//               alt="Mujer con esfera"
//               fill
//               className="object-contain z-10"
//               unoptimized
//             />
          
//             {/* Red giratoria más grande encima */}
//             <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] -translate-x-1/2 -translate-y-1/2 z-20  animate-spin [animation-direction:reverse] [animation-duration:150s]">
//               <Image
//                 src="/redfucsia.png"
//                 alt="Red giratoria"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//       </div>

//       <div className="px-[138px] mt-55 py-20 flex justify-between items-start">

//         <div className="flex flex-col space-y-6 w-1/2 max-w-[629px] mt-17">
//           <h3 className="text-[32px] leading-[40px] font-medium mb-0">Transformación Digital</h3>
//           <h4 className="text-[24px] leading-[40px]">
//             En un entorno que evoluciona aceleradamente, la <br />
//             transformación digital permite a las empresas adaptarse <br />
//             rápidamente a las demandas del mercado.{' '}
//             <strong>
//               Rombux es tu <br />
//               socio estratégico en el mundo online
//             </strong>
//             , ofreciéndote <br />
//             soluciones integrales y personalizadas para impulsar tu <br />
//             crecimiento y consolidar tu posición.
//           </h4>
//         </div>


//         <div className="w-1/2 flex justify-end">
//           <h2 className="text-[120px] leading-[120px] text-right max-w-[829px]">
//             Impulsando tus Negocios al Futuro
//           </h2>
//         </div>
//       </div>

//       <div className="w-full relative px-[125px] pb-20 pt-10">
//         <div className="flex flex-wrap justify-center items-center gap-x-22 gap-y-32 mb-12">
//           <Image src="/HP blanco.png" alt="Imagen Ho" width={130} height={76} className="object-contain" />
//           <Image src="/DowAgro.png" alt="Imagen Dow Agro" width={216} height={33} className="object-contain" />
//           <Image src="/SuperPollo blanco.png" alt="Imagen SuperPollo" width={122} height={101} className="object-contain" />
//           <Image src="/Amarula blanco.png" alt="Imagen Amarula" width={100} height={68} className="object-contain" />
//           <Image src="/Granix blanco.png" alt="Imagen Granix" width={122} height={81} className="object-contain" />
//           <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" width={121} height={36} className="object-contain" />
//           <Image src="/Advanta blanco.png" alt="Imagen Advanta" width={152} height={53} className="object-contain" />
//           <Image src="/Bi blanco.png" alt="Imagen Bi" width={59} height={58} className="object-contain" />
//         </div>
//       </div>

//     </div>
//   );
// }

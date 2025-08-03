import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full  flex max-md:flex-col-reverse items-start lg:items-center justify-between relative md:ml-16 lg:ml-0 xl:ml-12 2xl:ml-0 sm:-translate-y-10 lg:translate-y-0">
      {/* Bloque de texto */}
      <div className="
        lg:order-1 max-lg:h-[240px] justify-end flex flex-col lg:space-y-0 2xl:space-y-12 2xl:mt-[12px]
        w-[338px] h-[30px]
        max-lg:mt-[60px]  pl-7
        md:pl-5  lg:translate-x-[-20px] lg:w-[520px] 2xl:translate-x-0
        2xl:-ml-[25px] 2xl:w-[575px] max-sm:-translate-y-14 lg:translate-y-40 2xl:-translate-y-50
        ">
        <h2 className="text-[20px] leading-[20px] font-normal mb-[34px] lg:text-[32px] lg:leading-[30px] lg:mb-[50px] 2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-[48px]">
          Soluciones Digitales de Negocios
        </h2>
        <h1 className="
            font-normal 
            drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
            text-[40px] leading-[40px] w-[288px]
            lg:text-[70px] lg:leading-[70px] lg:w-[503px]
            2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[942px]
        ">
          Potenciamos<br />tu Empresa<br />en la Era Digital
        </h1>
        
      </div>
      <div className="lg:order-2 translate-y-10 lg:translate-y-15 xl:translate-y-30 w-full lg:justify-end flex items-center justify-center md:justify-end md:mr-16 lg:mr-0 mb-0 2xl:translate-x-[110px] 2xl:translate-y-[-260px]">
          
          <div className="relative  w-[360px] h-[370px] sm:w-[460px] sm:h-[411px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px]  2xl:w-[1005px] 2xl:h-[1005px] mt-2 2xl:mt-[-10px] custom-image ">
            
            {/* Imagen base */}
            <Image
              src="/womanesfera+halo.png"
              alt="Mujer con esfera"
              fill
              className="object-contain max-sm:scale-120 "
              unoptimized
            />
  
            {/* Red giratoria */}
            <div className="
              absolute inset-0 m-auto z-30
              sm:w-full sm:h-[336px]
              lg:w-[386px] lg:h-[386px]
              xl:w-[556px] xl:h-[556px]
              2xl:w-[756px] 2xl:h-[756px] 
              animate-spin  custom-red
              [animation-direction:reverse] [animation-duration:120s]
            ">
              <Image
                src="/redfucsia.png"
                alt="Red giratoria"
                fill
                className="object-contain max-sm:scale-95 "
                priority
              />
            </div>
          </div>
        </div>

    </div>
  );
}


// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="w-full flex flex-col lg:flex-row items-start justify-between relative">
//       {/* Imagen con red (orden 1 en mobile, 2 en desktop) */}
//       <div className="order-1 lg:order-2 w-full flex justify-center lg:block mb-0 lg:mb-0">
//         <div className="relative overflow-visible 
//         translate-x-4 translate-y-4
//           lg:-translate-x-10 lg:-translate-y-26
//           2xl:translate-x-26 2xl:-translate-y-40">
          
//           {/* Imagen base */}
//           <div className="w-[390px] h-[390px] lg:w-[540px] lg:h-[540px] 2xl:w-[1005px] 2xl:h-[1005px]">
//             <Image
//               src="/womanesfera+halo.png"
//               alt="Mujer con esfera"
//               fill
//               className="object-contain lg:z-6 2xl:z-10"
//               unoptimized
//             />
//           </div>

//           {/* Red giratoria */}
//           <div className="
//             absolute top-1/2 left-1/2 z-30 
//             -translate-x-1/2 -translate-y-1/2 
//             w-[256px] h-[256px]
//             lg:w-[406px] lg:h-[406px] 
//             2xl:w-[756px] 2xl:h-[756px]
//             animate-spin 
//             [animation-direction:reverse] [animation-duration:120s]
//             max-[1060px]:translate-x-[-110px] max-[1060px]:translate-y-[-205px]
//           ">
//             <Image
//               src="/redfucsia.png"
//               alt="Red giratoria"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bloque de texto (orden 2 en mobile, 1 en desktop) */}
//      <div
//   className="
//     order-2 lg:order-1 flex flex-col justify-start lg:space-y-12 2xl:space-y-12 2xl:mt-[12px]
//     w-[338px] h-[30px]
//     mt-[2px] lg:-mt-[10px] 
//     pl-6 lg:translate-x-[-20px] lg:w-[520px] 2xl:translate-x-0
//     2xl:-ml-[25px] 2xl:w-[575px]
//   "
// >
//   <h2 className="text-[20px] leading-[20px] font-normal mb-[34px] lg:text-[32px] lg:leading-[30px] lg:mb-[50px] 2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-[38px]">
//     Soluciones Digitales de Negocios
//   </h2>
//   <h1
//     className="
//       font-normal 
//       drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
//       text-[40px] leading-[40px] w-[288px]
//       lg:text-[70px] lg:leading-[70px] lg:w-[503px]
//       2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[942px]
//     "
//   >
//     Potenciamos<br />tu Empresa<br />en la Era Digital
//   </h1>
// </div>

//     </div>
//   );
// }


// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="w-full flex flex-row items-start justify-between relative">
//       {/* Bloque de texto */}
//       <div className="flex flex-col justify-start lg:space-y-12 2xl:space-y-12 2xl:mt-[12px] 2xl:-ml-[5px]">
//         <h2 className="
//           lg:text-[32px] lg:leading-[30px] 
//           2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-[50px]">
//           Soluciones Digitales de Negocios
//         </h2>
//         <h1 className="
//           font-normal 
//           drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
//           text-[42px] leading-[48px] w-[300px]
//           lg:text-[70px] lg:leading-[70px] lg:w-[503px]
//           2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[740px]
//         ">
//           Potenciamos<br />tu Empresa<br />en la Era Digital
//         </h1>
//       </div>

//       {/* Imagen con red */}
//       <div className="order-1 lg:order-2 w-full flex justify-center lg:block">
//         <div className="relative overflow-visible 
//           lg:-translate-x-6 lg:-translate-y-26 
//           xl:-translate-x-19  
//           2xl:-translate-x-18 2xl:-translate-y-43">
          
//           {/* Imagen base */}
          
//                     <div className=" w-[300px] h-[300px] lg:w-[540px] lg:h-[540px] 2xl:w-[1005px] 2xl:h-[1005px] custom-image ">
//             <Image
//               src="/womanesfera+halo.png"
//               alt="Mujer con esfera"
//               fill
//               className="object-contain lg:z-6 2xl:z-10"
//               unoptimized
//             />
//           </div>

//           {/* Red giratoria */}
//           <div className="
//             absolute top-1/2 left-1/2 z-20 
//             -translate-x-1/2 -translate-y-1/2 
//             w-[200px] h-[200px]
//             lg:w-[406px] lg:h-[406px] 
//             2xl:w-[756px] 2xl:h-[756px]
//             animate-spin 
//             [animation-direction:reverse] [animation-duration:120s]
//             max-[1060px]:translate-x-[-110px] max-[1060px]:translate-y-[-205px]
//           ">
//             <Image
//               src="/redfucsia.png"
//               alt="Red giratoria"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <div className="w-full text-white">
//     <div className="flex flex-col lg:flex-row items-start justify-between px-4 lg:ml-2 2xl:px-[138px] pt-6 lg:pt-[64px] pb-[40px] relative">

//         {/* Imagen primero en mobile */}
//         <div className="w-full lg:hidden mb-10 mt-2 flex justify-center">
//           <div className="relative w-[250px] h-[250px] -mt-12">
//             <Image
//               src="/mujer-esfera.png"
//               alt="Mujer con esfera"
//               fill
//               className="object-contain z-10"
//               unoptimized
//             />
//             <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 z-20 animate-spin [animation-direction:reverse] [animation-duration:150s]">
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

//         <div className="pl-4 pr-2 lg:pl-[72px] lg:pr-8  2xl:pl-[40px] flex flex-col justify-start space-y-12 w-full lg:max-w-[650px] 2xl:-ml-10 2xl:mr-auto">
//           <div className="flex flex-col w-full lg:w-[962px] h-auto">
//             <h2 className="text-[20px] lg:text-[32px] leading-[28px] lg:leading-[36px] text-white mb-6 lg:-mt-20 lg:mb-10">
//               Soluciones Digitales de Negocios
//             </h2>
//             <h1 className="text-[40px] lg:text-[70px] lg:mt-4 2xl:text-[120px] leading-[44px] lg:leading-[70px] 2xl:leading-[120px] text-white mt-3 font-normal">
//               Potenciamos<br />tu Empresa<br />en la Era Digital
//             </h1>
//           </div>
//         </div>

//         {/* Imagen en tablet y desktop */}
//         <div className="hidden lg:block mr-[40px] lg:-mt-16 2xl:mr-32 2xl:-mt-10">
//           <div className="relative lg:w-[350px] lg:h-[350px] 2xl:w-[683px] 2xl:h-[683px] overflow-visible translate-x-6 2xl:translate-x-10">
//             <Image
//               src="/mujer-esfera.png"
//               alt="Mujer con esfera"
//               fill
//               className="object-contain z-10"
//               unoptimized
//             />
//             <div className="absolute top-1/2 left-1/2 lg:w-[400px] lg:h-[400px] 2xl:w-[723px] 2xl:h-[723px] -translate-x-1/2 -translate-y-1/2 z-20 animate-spin [animation-direction:reverse] [animation-duration:150s]">
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
//     </div>
//   );
// }

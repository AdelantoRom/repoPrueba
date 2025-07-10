import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-row items-start justify-between relative">

      {/* Texto */}
      <div className="flex flex-col justify-start lg:space-y-12 2xl:space-y-12 2xl:mt-[10px] 2xl:-ml-[5px]">
        <h2 className="
        lg:text-[32px] lg:leading-[30px] 
        2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-[50px]">
          Soluciones Digitales de Negocios
        </h2>
      <h1 className="
  font-normal 
  drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
  text-[42px] leading-[48px] w-[300px]
  lg:text-[70px] lg:leading-[70px] lg:w-[503px]
  2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[740px]
">
  Potenciamos<br />tu Empresa<br />en la Era Digital
</h1>

      </div>

 <div className="relative overflow-visible 
  lg:-translate-x-6 lg:-translate-y-26 
  2xl:-translate-x-16 2xl:-translate-y-43">
        <div className="lg:w-[540px] lg:h-[540px] 2xl:w-[1005px] 2xl:h-[1005px] ">
          <Image
            src="/womanesfera+halo.png"
            alt="Mujer con esfera"
            fill
            className="object-contain lg:z-6 2xl:z-10"
            unoptimized
          />
        </div>
       <div className="
  absolute top-1/2 left-1/2 z-20 
  -translate-x-1/2 -translate-y-1/2 
  w-[200px] h-[200px]
  lg:w-[406px] lg:h-[406px] 
  2xl:w-[756px] 2xl:h-[756px]
  animate-spin 
  [animation-direction:reverse] [animation-duration:150s]
">
  <Image
    src="/redfucsia.png"
    alt="Red giratoria"
    fill
    className="object-contain"
    priority
  />
</div>

      </div>

    </div>
  );
}



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

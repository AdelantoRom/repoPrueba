//RESPONSIVE CORREGIDO 2XL//
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Botones from '@/components/BotonesInteractivos/Botones';

export default function Adn() {
  return (
    <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white flex flex-col items-center pt-[40px] 2xl:pt-[196px]">


      <div className="text-center tracking-normal leading-[40px] mt-[40px] lg:leading-[70px] lg:mt-[60px] 2xl:leading-[120px] 2xl:mt-[64px]">
        <h1 className="text-[40px] font-medium w-[336px] lg:text-[70px] lg:w-[899px] mx-auto 2xl:text-[120px] 2xl:leading-[120px] 2xl:w-[1219px]">
          Rombux/ADN:
        </h1>
        <h2 className="text-[40px] font-normal mt-[2px] w-[336px] lg:text-[70px] lg:w-[899px] mx-auto 2xl:text-[120px] 2xl:leading-[120px] 2xl:font-light 2xl:mt-[2px]">
          orientado a resultados
        </h2>
      </div>


      <p className="text-[20px] font-medium text-center leading-[24px] mt-[20px] mb-[40px] w-[336px] 
        lg:text-[32px] lg:leading-[42px] lg:w-[910px] lg:mt-[34px] 
        2xl:text-[40px] 2xl:leading-[48px] 2xl:font-medium 2xl:w-[1165px] 2xl:h-[144px] 2xl:mt-[30px] 2xl:mb-[64px]">
        Somos un grupo de profesionales especializados en escalar<br />
        empresas y startups, unidos bajo una misma cultura: lograr el<br />
        liderazgo desde una sólida propuesta de valor.
      </p>


      <div className="mb-[40px] 2xl:mb-0">
        <Link href="/about_us">
          <button
            type="submit"
            className="bg-[#D81FB9] text-white font-semibold text-[24px] h-[60px] w-[192px] 
            lg:text-[24px] lg:font-semibold lg:h-[60px] lg:w-[176px] lg:mt-6
            2xl:text-[32px] 2xl:font-bold 2xl:h-[72px] 2xl:w-[306px] 
            rounded-[50px] shadow-2xl mx-auto block"
          >
            Conócenos
          </button>
        </Link>
      </div>


      <div className="relative w-full h-[296px] lg:h-[296px] 2xl:h-[691px] mb-[40px] 2xl:mt-[64px]">
        <Image
          src="/group182.png"
          alt="Esfera Izquierda"
          width={296}
          height={296}
          className="absolute left-[-60px] top-[60%] -translate-y-1/2 object-contain 
            lg:left-0 lg:top-[100px] lg:translate-y-0 lg:w-[296px] lg:h-[296px]
            2xl:top-[150px] 2xl:left-0 2xl:w-[541px] 2xl:h-[541px]"
        />
        <Image
          src="/group182.png"
          alt="Esfera Derecha"
          width={125}
          height={125}
          className="absolute right-[-40px] top-0 object-contain 
            lg:w-[164px] lg:h-[164px]
            2xl:top-0 2xl:right-0 2xl:w-[299px] 2xl:h-[299px]"
        />
      </div>


      <div className="pt-[40px] pb-[40px] 2xl:pt-[70px] 2xl:pb-[55px]">
        <p className="mt-[24px] text-[38px] font-normal leading-[40px] text-center w-[336px]
          lg:text-[36px] lg:leading-[36px] lg:font-normal lg:w-[276px] lg:h-[37px]
          2xl:text-[64px] 2xl:leading-[64px] 2xl:w-[446px] 2xl:h-[59px]">
          ¿Conectamos?
        </p>
      </div>
      <Botones/>
    </div>
  );
}


// "use client";

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Adn() {
//   return (
//     <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white flex flex-col items-center pt-[40px] 2xl:pt-[196px]">

//       {/* Título */}
//       <div className="text-center tracking-normal leading-[40px] mt-[40px] lg:leading-[70px] lg:mt-[60px] 2xl:leading-[120px] 2xl:mt-[64px]">
//         <h1 className="text-[40px] font-medium w-[336px] lg:text-[70px] lg:w-[899px] lg:font-medium mx-auto 2xl:text-[120px] 2xl:w-[1219px]">
//           Rombux/ADN:
//         </h1>
//         <h2 className="text-[40px] font-normal mt-[2px] w-[336px] lg:text-[70px] lg:w-[899px] mx-auto 2xl:text-[120px] 2xl:w-[1219px]">
//           orientado a resultados
//         </h2>
//       </div>

//       {/* Texto descriptivo */}
//       <p className="text-[20px] font-medium text-center leading-[24px] mt-[20px] mb-[40px] w-[336px]
//         lg:text-[32px] lg:leading-[42px] lg:w-[910px] lg:mt-[34px]
//         2xl:text-[40px] 2xl:leading-[48px] 2xl:w-[1400px] 2xl:mt-[30px] 2xl:mb-[64px]">
//         Somos un grupo de profesionales especializados en escalar<br />
//         empresas y startups, unidos bajo una misma cultura: lograr el<br />
//         liderazgo desde una sólida propuesta de valor.
//       </p>

//       {/* Botón */}
//       <div className="mb-[40px] 2xl:mb-0">
//         <Link href="/about_us">
//           <button
//             type="submit"
//             className="bg-[#D81FB9] text-white font-semibold text-[24px] h-[60px] w-[192px]
//             lg:text-[24px] lg:font-semibold lg:h-[60px] lg:w-[176px] lg:mt-6
//             2xl:text-[32px] 2xl:font-bold 2xl:h-[72px] 2xl:w-[306px]
//             rounded-[50px] shadow-2xl mx-auto block"
//           >
//             Conócenos
//           </button>
//         </Link>
//       </div>

//       {/* Esferas */}
//       <div className="relative w-full h-[296px] lg:h-[296px] 2xl:h-[691px] mb-[40px] 2xl:mt-[64px]">
//         <Image
//           src="/group182.png"
//           alt="Esfera Izquierda"

//           width={296}
//           height={296}
//           className="absolute left-[-60px] top-[60%] -translate-y-1/2 object-contain
//             lg:left-0 lg:top-[100px] lg:translate-y-0 lg:w-[296px] lg:h-[296px]
//             2xl:top-[120px] 2xl:w-[541px] 2xl:h-[541px]"

//         />
//         <Image
//           src="/group182.png"
//           alt="Esfera Derecha"
//           width={125}
//           height={125}
//           className="absolute right-[-40px] top-0 object-contain
//             lg:w-[164px] lg:h-[164px]
//             2xl:w-[299px] 2xl:h-[299px]"

//         />
//       </div>

//       {/* ¿Conectamos? */}
//       <div className="pt-[40px] pb-[40px] 2xl:pt-[70px] 2xl:pb-[55px]">
//         <p className="mt-[24px] text-[38px] font-normal leading-[40px] text-center w-[336px]
//           lg:text-[36px] lg:leading-[36px] lg:font-normal lg:w-[276px] lg:h-[37px]
//           2xl:text-[64px] 2xl:leading-[64px] 2xl:w-[446px]">
//           ¿Conectamos?
//         </p>
//       </div>

//       {/* Iconos de contacto */}
//       <div className="flex flex-col items-center gap-y-[56px] w-[336px] mt-10 mb-[40px]
//         lg:flex-row lg:justify-center lg:gap-[80px] lg:w-[910px]
//         2xl:gap-[120px] 2xl:w-[1235px] 2xl:ml-5 2xl:mt-[64px] 2xl:mb-[80px]">

//        {/* Calendly */}
// <div className="flex flex-col items-center">
//   <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className="rounded-lg mb-4" />
//   <div className="lg:w-[120px] 2xl:w-[140px]">
//     <p className="text-white text-[18px] font-medium leading-[24px] text-center
//       lg:text-[20px] 2xl:text-[24px]">
//       Agendamos<br />una reunión
//     </p>
//   </div>
// </div>


//         {/* Mensaje */}
//         <div className="flex flex-col items-center">
//           <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className="rounded-lg" />
//           <p className="mt-4 text-white text-[18px] font-medium leading-[24px] text-center
//             lg:text-[20px] lg:font-medium lg:w-[120px]
//             2xl:text-[24px] 2xl:w-[132px]">
//             Envíanos un mensaje
//           </p>
//         </div>

//         {/* Chat IA */}
//         <div className="flex flex-col items-center">
//           <Image src="/Chat.gif" alt="Chat" width={64} height={64} className="rounded-lg" />
//           <p className="mt-4 text-white text-[18px] font-medium leading-[24px] text-center
//             lg:text-[20px] lg:font-medium lg:w-[160px]
//             2xl:text-[24px] 2xl:w-[203px]">
//             Chatea con Romy, nuestro agente IA
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client"

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Adn() {
//   return (
//     <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white flex flex-col items-center pt-[196px]">


//       <div className="w-[1219px] h-[221px] mx-auto mt-[64px] text-center tracking-normal leading-[120px] ">
//         <h1 className="text-[120px] leading-[120px] font-medium text-shadow-md">Rombux/ADN:</h1>
//         <h2 className="text-[120px] leading-[120px] font-light mt-[2px]">orientado a resultados</h2>
//       </div>


//       <p className="text-[40px] font-medium text-center w-[1165px] h-[144px]  mt-[30px] mb-[64px] leading-[48px]">
//         Somos un grupo de profesionales especializados en escalar<br />
//         empresas y startups, unidos bajo una misma cultura: lograr el<br />
//         liderazgo desde una sólida propuesta de valor.
//       </p>


//       <div className="relative w-[1708px] h-[691px] mx-auto">
//         <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 ">
//           <Link href="/about_us">
//             <button
//               type="submit"
//               className="bg-[#D81FB9] text-white text-[32px] font-bold h-[72px] w-[306px] rounded-[50px] shadow-2xl cursor-pointer"
//             >
//               Conócenos
//             </button>
//           </Link>
//         </div>
//         <Image
//           src="/group182.png"
//           alt="Esfera Izquierda"
//           width={541}
//           height={541}
//           className="absolute top-[150px] left-0 object-contain"
//         />
//         <Image
//           src="/group182.png"
//           alt="Esfera Derecha"
//           width={299}
//           height={299}
//           className="absolute top-0 right-0 object-contain"
//         />
//       </div>
//       <div className="pt-[70px] pb-[55px]">
//         <p className="text-[64px] leading-[64px] font-normal w-[446px] h-[59px] mx-auto text-center">
//           ¿Conectamos?
//         </p>
//       </div>

//       <div className="w-full flex justify-center mt-[64px] mb-[80px] ml-5">
//         <div className="w-[1235px] flex justify-between items-start">

//           <div className="flex flex-col items-center">
//             <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className='rounded-lg' />
//             <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
//               Agenda una reunión
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className='rounded-lg' />
//             <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
//               Envíanos un mensaje
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <Image src="/Chat.gif" alt="Chat" width={64} height={64} className='rounded-lg' />
//             <div className="mt-[24px] w-[203px] text-center text-white text-[24px] leading-[24px]">
//               Chatea con Romy, nuestro agente IA
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

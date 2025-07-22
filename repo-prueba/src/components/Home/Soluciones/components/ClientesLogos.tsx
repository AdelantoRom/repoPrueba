import Image from 'next/image';

export default function ClientesLogos() {
  return (
    <div className="w-full flex justify-center pt-6">
      {/* MOBILE */}
      
      <div className="grid grid-cols-4 place-items-center gap-y-4 gap-x-2 mt-6 w-full px-0 lg:hidden border-amber-500">
        <div className="relative w-[52px] h-[27px]">
          <Image src="/HP blanco.png" alt="HP" fill className="object-contain" />
        </div>
        <div className="relative w-[83px] h-[12px]">
          <Image src="/DowAgro blanco.png" alt="Dow Agro" fill className="object-contain" />
        </div>
        <div className="relative w-[35px] h-[28px]">
          <Image src="/Group.png" alt="Super Pollo" fill className="object-contain" />
        </div>
        <div className="relative w-[41px] h-[28px]">
          <Image src="/Amarula blanco.png" alt="Amarula" fill className="object-contain" />
        </div>
        <div className="relative w-[47px] h-[13px]">
          <Image src="/The Clinic blanco.png" alt="The Clinic" fill className="object-contain" />
        </div>
        <div className="relative w-[49px] h-[27px]">
          <Image src="/Granix.png" alt="Granix" fill className="object-contain" />
        </div>
        <div className="relative w-[61px] h-[21px]">
          <Image src="/Advanta blanco.png" alt="Advanta" fill className="object-contain" />
        </div>
        <div className="relative w-[28px] h-[28px]">
          <Image src="/Bi blanco.png" alt="Bi" fill className="object-contain" />
        </div>
      </div>
        {/* TABLET & DESKTOP: desde lg+ */}
      <div
        className="
          hidden lg:flex flex-row items-center justify-center
          w-[919px] h-[60px] gap-x-14 -mt-10 mb-6 pl-8
          lg:mb-6
          2xl:w-[1645px] 2xl:h-[56px] 2xl:gap-x-30 2xl:mt-44 2xl:mb-16 2xl:-ml-[10px]
        "
      >
        <div className="relative w-[73px] h-[45px] 2xl:w-[96px] 2xl:h-[56px]">
          <Image src="/HP blanco.png" alt="HP" fill className="object-contain" />
        </div>
        <div className="relative w-[121px] h-[19px] 2xl:w-[167px] 2xl:h-[25px]">
          <Image src="/DowAgro blanco.png" alt="Dow Agro" fill className="object-contain" />
        </div>
        <div className="relative w-[68px] h-[60px] 2xl:w-[71px] 2xl:h-[56px]">
          <Image src="/Group.png" alt="Super Pollo" fill className="object-contain" />
        </div>
        <div className="relative w-[56px] h-[40px] 2xl:w-[82px] 2xl:h-[56px]">
          <Image src="/Amarula blanco.png" alt="Amarula" fill className="object-contain" />
        </div>
        <div className="relative w-[68px] h-[48px] 2xl:w-[100px] 2xl:h-[55px]">
          <Image src="/Granix.png" alt="Granix" fill className="object-contain" />
        </div>
        <div className="relative w-[68px] h-[21px] 2xl:w-[109px] 2xl:h-[32px]">
          <Image src="/The Clinic blanco.png" alt="The Clinic" fill className="object-contain" />
        </div>
        <div className="relative w-[85px] h-[31px] 2xl:w-[116px] 2xl:h-[40px]">
          <Image src="/Advanta blanco.png" alt="Advanta" fill className="object-contain" />
        </div>
        <div className="relative w-[33px] h-[34px] 2xl:w-[41px] 2xl:h-[40px]">
          <Image src="/Bi blanco.png" alt="Bi" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}


// import Image from 'next/image';

// export default function ClientesLogos() {
//   return (

//     <div className="w-full flex justify-center pt-6 px-4">
//       <div
//         className="
//           flex flex-row items-center justify-center
//           w-[338px] h-[70px]
//           lg:w-[919px] lg:h-[60px] lg:gap-x-14 lg:-mt-10 lg:mb-6 lg:ml-16
//           2xl:w-[1645px] 2xl:h-[56px] 2xl:gap-x-30 2xl:mt-44 2xl:mb-16 2xl:-ml-[10px]
//         "
//       >
//         <div className="relative w-[52px] h-[27px] lg:w-[73px] lg:h-[45px] 2xl:w-[96px] 2xl:h-[56px]">

//           <Image src="/HP blanco.png" alt="Imagen HP" fill className="object-contain" />
//         </div>
//         <div className="relative w-[83px] h-[12px] lg:w-[121px] lg:h-[19px] 2xl:w-[167px] 2xl:h-[25px]">
//           <Image src="/DowAgro blanco.png" alt="Imagen Dow Agro" fill className="object-contain" />
//         </div>
//         <div className="relative w-[35px] h-[28px] lg:w-[68px] lg:h-[60px] 2xl:w-[71px] 2xl:h-[56px]">
//           <Image src="/Group.png" alt="Imagen Super Pollo" fill className="object-contain" />
//         </div>
//         <div className="relative w-[41px] h-[28px] lg:w-[56px] lg:h-[40px] 2xl:w-[82px] 2xl:h-[56px]">
//           <Image src="/Amarula blanco.png" alt="Imagen Amarula" fill className="object-contain" />
//         </div>
//         <div className="relative w-[47px] h-[13px] lg:w-[68px] lg:h-[48px] 2xl:w-[100px] 2xl:h-[55px]">
//           <Image src="/Granix.png" alt="Imagen Granix" fill className="object-contain" />
//         </div>
//         <div className="relative w-[49px] h-[27px] lg:w-[68px] lg:h-[21px] 2xl:w-[109px] 2xl:h-[32px]">
//           <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" fill className="object-contain" />
//         </div>
//         <div className="relative w-[61px] h-[21px] lg:w-[85px] lg:h-[31px] 2xl:w-[116px] 2xl:h-[40px]">
//           <Image src="/Advanta blanco.png" alt="Imagen Advanta" fill className="object-contain" />
//         </div>
//         <div className="relative w-[24px] h-[24px] lg:w-[33px] lg:h-[34px] 2xl:w-[41px] 2xl:h-[40px]">
//           <Image src="/Bi blanco.png" alt="Imagen Bi" fill className="object-contain" />
//         </div>
//       </div>
//     </div>
//   );
// }

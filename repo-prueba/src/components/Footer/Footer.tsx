import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* 2XL - Desktop grande */}
<div className="hidden 2xl:flex w-full h-[277px] bg-[#060114] items-center">
  <div className="max-w-[1920px] w-full mx-auto flex justify-between items-center px-[300px]">

    {/* Logo + Soluciones */}
    <Link href="/" className="flex flex-col">
      <Image
        src="/Logo Rombux fucsia.png"
        alt="Logo Footer"
        width={212}
        height={34}
      />
      <Image
        className="-mt-5"
        src="/footersoluciones.png"
        alt="Soluciones"
        width={215}
        height={24}
      />
    </Link>

    {/* Texto centrado */}
    <div className="text-[12px] leading-[20px] text-white text-center w-[793px]">
      <p>
        © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
        <Link href="/tyc" className="hover:underline">
          Términos y Condiciones.
        </Link>{" "}
        <Link href="/politicas" className="hover:underline">
          Políticas de Privacidad y Protección de Datos Personales
        </Link>
        .
      </p>
    </div>

    {/* Logo IN */}
    <div>
      <Image src="/logoin.png" alt="Logo IN" width={32} height={32} />
    </div>
  </div>
</div>


      {/* LG - Tablet / Laptop */}
      <div className="hidden lg:flex 2xl:hidden relative w-full h-[232px] bg-[#060114] px-6 pt-6 pb-14">
        <div className="max-w-[944px] mx-auto flex flex-col w-full h-full">
          <div className="flex justify-between items-start w-full px-3">
            <Link href="/">
              <div className="flex flex-col mt-6 mb-2">
                <Image
                  src="/Logo Rombux fucsia.png"
                  alt="Logo Rombux Tablet"
                  width={244}
                  height={52}
                  priority
                />
                <Image
                  src="/footersoluciones.png"
                  alt="Soluciones"
                  width={245}
                  height={27}
                  className="-mt-6 mb-8"
                  priority
                />
              </div>
            </Link>

            <div className="mt-12">
              <Image
                src="/logoin.png"
                alt="Logo IN Tablet"
                width={40}
                height={40}
                priority
              />
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[50px] w-[944px] h-[18px] text-[14px] leading-[18px] text-white text-center">
            <p className="w-full h-full leading-inherit">
              © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
              <Link href="/tyc" className="hover:underline">
                Términos y Condiciones.
              </Link>{" "}
              <Link href="/politicas" className="hover:underline">
                Políticas de Privacidad y Protección de Datos Personales
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden relative w-full h-[240px] bg-[#060114] px-4 py-6">
        <div className="max-w-[393px] mx-auto">
          <div className="flex justify-between items-center mb-2">
            <Link href="/">
              <Image
                src="/Logo Rombux fucsia.png"
                alt="Logo Footer Mobile"
                width={171}
                height={41}
              />
            </Link>
            <div className="mr-2">
              <Image
                src="/logoin.png"
                alt="Logo IN Mobile"
                width={30}
                height={30}
              />
            </div>
          </div>

          <div
            className="w-[336px] text-[10px] text-white mt-12 leading-tight"
            style={{ lineHeight: "12px" }}
          >
            <p>
              © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
              <Link href="/tyc" className="hover:underline">
                Términos y Condiciones.
              </Link>{" "}
              <Link href="/politicas" className="hover:underline">
                Políticas de Privacidad y Protección de Datos Personales
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <>
//       <div className="hidden 2xl:block relative w-full h-[277px] bg-[#060114]">
//         <div className="max-w-[1920px] mx-auto relative h-full">

//           <Link href="/">
//             <div className="absolute left-[300px] bottom-[100px] flex flex-col">
//               <Image
//                 src="/Logo Rombux fucsia.png"
//                 alt="Logo Footer"
//                 width={212}
//                 height={34}
//               />
//               <Image
//                 className="-mt-5"
//                 src="/footersoluciones.png"
//                 alt="Soluciones"
//                 width={215}
//                 height={24}
//               />
//             </div>
//           </Link>

//           <div
//             className="absolute bottom-[110px] lg:text-[14px] lg:leading-[18px] 2xl:text-[12px] 2xl:leading-[20px] text-white text-center lg:h-[18px] lg:w-[944px] 2xl:h-[20px] 2xl:w-[793px]"
//             style={{ left: 'calc(50% + 80px)', transform: 'translateX(-50%)' }}
//           >
//             <p>
//               © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
//               <Link href="/tyc" className="hover:underline">
//                 Términos y Condiciones.
//               </Link>{" "}
//               <Link href="/politicas" className="hover:underline">
//                 Políticas de Privacidad y Protección de Datos Personales
//               </Link>
//               .
//             </p>
//           </div>

//           <div className="absolute right-[270px] bottom-[110px]">
//             <Image src="/logoin.png" alt="Logo IN" width={32} height={32} />
//           </div>
//         </div>
//       </div>

//       <div className="hidden lg:flex 2xl:hidden relative w-full h-[277px]  bg-[#060114] px-6 pt-6 pb-14">
//         <div className="max-w-[793px] mx-auto flex flex-col w-full h-full">
//           <div className="flex justify-between items-start w-full ml-12">
//             <Link href="/">
//               <div className="flex flex-col mt-6 mb-2">
//                 <Image
//                   src="/Logo Rombux fucsia.png"
//                   alt="Logo Rombux Tablet"
//                   width={244}
//                   height={52}
//                   priority
//                 />
//                 <Image
//                   src="/footersoluciones.png"
//                   alt="Soluciones"
//                   width={245}
//                   height={27}
//                   className="-mt-6 mb-8"
//                   priority
//                 />
//               </div>
//             </Link>

//             <div className="mt-12 mr-24">
//               <Image
//                 src="/logoin.png"
//                 alt="Logo IN Tablet"
//                 width={40}
//                 height={40}
//                 priority
//               />
//             </div>
//           </div>

//           <div className="w-[944px] text-[12px] text-white mt-8 leading-none text-center mx-auto">
//             <p>
//               © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
//               <Link href="/tyc" className="hover:underline">
//                 Términos y Condiciones.
//               </Link>{" "}
//               <Link href="/politicas" className="hover:underline">
//                 Políticas de Privacidad y Protección de Datos Personales
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>


//       <div className="block lg:hidden relative w-full h-[240px] bg-[#060114] px-4 py-6">
//         <div className="max-w-[393px] mx-auto">
//           <div className="flex justify-between items-center mb-2">
//             <Link href="/">
//               <Image
//                 src="/Logo Rombux fucsia.png"
//                 alt="Logo Footer Mobile"
//                 width={171}
//                 height={41}
//               />
//             </Link>
//             <div className="mr-2">
//               <Image
//                 src="/logoin.png"
//                 alt="Logo IN Mobile"
//                 width={30}
//                 height={30}
//               />
//             </div>
//           </div>

//           <div
//             className="w-[336px] text-[10px] text-white mt-12 leading-tight"
//             style={{ lineHeight: "12px" }}
//           >
//             <p>
//               © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
//               <Link href="/tyc" className="hover:underline">
//                 Términos y Condiciones.
//               </Link>{" "}
//               <Link href="/politicas" className="hover:underline">
//                 Políticas de Privacidad y Protección de Datos Personales
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <>
//       <div className="hidden 2xl:block relative w-full h-[277px] bg-[#060114]">
//         <div className="max-w-[1920px] mx-auto relative h-full">

//           <Link href="/">
//             <div className="absolute left-[300px] bottom-[100px] flex flex-col">
//               <Image
//                 src="/Logo Rombux fucsia.png"
//                 alt="Logo Footer"
//                 width={212}
//                 height={34}
//               />
//               <Image
//                 className="-mt-5"
//                 src="/footersoluciones.png"
//                 alt="Soluciones"
//                 width={215}
//                 height={24}
//               />
//             </div>
//           </Link>

//           <div
//             className="absolute bottom-[110px] lg:text-[14px] lg:leading-[18px] 2xl:text-[12px] 2xl:leading-[20px] text-white text-center lg:h-[18px] lg:w-[944px] 2xl:h-[20px] 2xl:w-[793px]"
//             style={{ left: 'calc(50% + 80px)', transform: 'translateX(-50%)' }}
//           >
//             <p>
//               © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
//               <Link href="/tyc" className="hover:underline">
//                 Términos y Condiciones.
//               </Link>{" "}
//               <Link href="/politicas" className="hover:underline">
//                 Políticas de Privacidad y Protección de Datos Personales
//               </Link>
//               .
//             </p>
//           </div>

//           <div className="absolute right-[270px] bottom-[110px]">
//             <Image src="/logoin.png" alt="Logo IN" width={32} height={32} />
//           </div>
//         </div>
//       </div>

//       <div className="hidden lg:flex 2xl:hidden relative w-full h-[277px]  bg-[#060114] px-6 pt-6 pb-14">
//         <div className="max-w-[793px] mx-auto flex flex-col w-full h-full">
//           <div className="flex justify-between items-start w-full ml-12">
//             <Link href="/">
//               <div className="flex flex-col mt-6 mb-2">
//                 <Image
//                   src="/Logo Rombux fucsia.png"
//                   alt="Logo Rombux Tablet"
//                   width={244}
//                   height={52}
//                   priority
//                 />
//                 <Image
//                   src="/footersoluciones.png"
//                   alt="Soluciones"
//                   width={245}
//                   height={27}
//                   className="-mt-6 mb-8"
//                   priority
//                 />
//               </div>
//             </Link>

//             <div className="mt-12 mr-24">
//               <Image
//                 src="/logoin.png"
//                 alt="Logo IN Tablet"
//                 width={40}
//                 height={40}
//                 priority
//               />
//             </div>
//           </div>

//           <div className="w-[944px] text-[12px] text-white mt-8 leading-none text-center mx-auto">
//             <p>
//               © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
//               <Link href="/tyc" className="hover:underline">
//                 Términos y Condiciones.
//               </Link>{" "}
//               <Link href="/politicas" className="hover:underline">
//                 Políticas de Privacidad y Protección de Datos Personales
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>


//       <div className="block lg:hidden relative w-full h-[240px] bg-[#060114] px-4 py-6">
//         <div className="max-w-[393px] mx-auto">
//           <div className="flex justify-between items-center mb-2">
//             <Link href="/">
//               <Image
//                 src="/Logo Rombux fucsia.png"
//                 alt="Logo Footer Mobile"
//                 width={171}
//                 height={41}
//               />
//             </Link>
//             <div className="mr-2">
//               <Image
//                 src="/logoin.png"
//                 alt="Logo IN Mobile"
//                 width={30}
//                 height={30}
//               />
//             </div>
//           </div>

//           <div
//             className="w-[336px] text-[10px] text-white mt-12 leading-tight"
//             style={{ lineHeight: "12px" }}
//           >
//             <p>
//               © 2024 Rombus Global SAS. Todos los derechos reservados.{" "}
//               <Link href="/tyc" className="hover:underline">
//                 Términos y Condiciones.
//               </Link>{" "}
//               <Link href="/politicas" className="hover:underline">
//                 Políticas de Privacidad y Protección de Datos Personales
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
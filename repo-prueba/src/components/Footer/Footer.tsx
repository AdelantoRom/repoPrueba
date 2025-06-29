import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
     {/* FOOTER DESKTOP (2xl) */}
<div className="hidden 2xl:block relative w-full h-[277px] bg-no-repeat bg-cover bg-center bg-[url('/footer.png')]">
  <div className="max-w-[1920px] mx-auto relative h-full">

    {/* Logo izquierdo */}
    <Link href="/">
      <div className="absolute left-[139px] bottom-[109px] flex flex-col">
        <Image
          src="/Logo Rombux fucsia.png"
          alt="Logo Footer"
          width={245}
          height={39}
        />
        <Image
          className="-mt-5"
          src="/footersoluciones.png"
          alt="Soluciones"
          width={245}
          height={28}
        />
      </div>
    </Link>

    {/* Contenedor de texto de 1255px exacto */}
    <div
      className="absolute bottom-[110px] text-[16px] text-white text-center h-[27px] w-[1255px]"
      style={{ left: 'calc(50% + 80px)', transform: 'translateX(-50%)' }}
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

    {/* Logo IN derecho */}
    <div className="absolute right-[141px] bottom-[110px]">
      <Image src="/logoin.png" alt="Logo IN" width={40} height={40} />
    </div>
  </div>
</div>


     {/* FOOTER TABLET (lg) */}
<div className="hidden lg:flex 2xl:hidden relative w-full h-[277px] bg-no-repeat bg-cover bg-center bg-[url('/footer.png')] px-6 pt-6 pb-14">
  <div className="max-w-[1083px] mx-auto flex flex-col w-full h-full">
    {/* Logo + soluciones izquierda | logoin derecha */}
    <div className="flex justify-between items-start w-full ml-12">
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

      {/* Logo IN con margen derecho */}
      <div className="mt-12 mr-24">
        <Image
          src="/logoin.png"
          alt="Logo IN Tablet"
          width={40}
          height={40}
          priority
        />
      </div>
    </div>

    {/* Texto derechos */}
    <div className="w-[944px] text-[14px] text-white mt-8 leading-none text-center mx-auto">
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

      {/* FOOTER MOBILE */}
      <div className="block lg:hidden relative w-full h-[240px] bg-no-repeat bg-cover bg-center bg-[url('/footer.png')] px-4 py-6">
        <div className="max-w-[393px] mx-auto">
          {/* Logo + logo IN */}
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

          {/* Texto derechos */}
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



// import Image from 'next/image';
// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <div className="relative w-[1920px] h-[277px] bg-no-repeat bg-[length:100%_100%] bg-[url('/footer.png')] mx-auto">
      
//       {/* Bloque izquierdo (logo + soluciones) */}
//       <Link href="/">
//       <div className="absolute left-[139px] bottom-[109px] flex flex-col">
//         <Image src="/Logo Rombux fucsia.png" alt="Logo Footer" width={245} height={39} />
//         <Image className="-mt-5" src="/footersoluciones.png" alt="Soluciones" width={245} height={28} />
//       </div>
//       </Link>

//       {/* Imagen derechos centrada horizontalmente */}
//       <div className="absolute left-268 bottom-[109px] -translate-x-1/2 text-[18px] w-[1255px]">
//         <p>© 2024 Rombus Global SAS. Todos los derechos reservados. <a href="/tyc" className='hover:underline'>Términos y Condiciones.</a> <a href="/politicas" className='hover:underline'>Políticas de Privacidad y Protección de Datos Personales</a>.</p>
//       </div>

//       {/* logoin.png (derecha) */}
//       <div className="absolute right-[141px] bottom-[110px]">
//         <Image src="/logoin.png" alt="Logo IN" width={40} height={40} />
//       </div>
//     </div>
//   );
// }


// import Image from 'next/image';

// export default function Footer() {
//   return (
//     <div className="relative w-full h-[277px] bg-no-repeat bg-[length:100%_100%] bg-[url('/footer.png')]">

//       {/* Bloque izquierdo (logo + soluciones) más cerca del centro */}
//     <div className="absolute left-[180px] top-[40%] -translate-y-1/2 flex flex-col space-y-2">

     
//   <Image src="/logofooter.png" alt="Logo Footer" width={245} height={39} />
//   <Image src="/footersoluciones.png" alt="Soluciones" width={245} height={28} />
// </div>


//       {/* Imagen derechos centrada */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//         <Image src="/footerderechos.png" alt="Derechos" width={1255} height={28} />
//       </div>

//       {/* logoin.png (esquina derecha con margen) */}
//       <div className="absolute right-[180px] bottom-[125px]">
//         <Image src="/logoin.png" alt="Logo IN" width={90} height={90} />
//       </div>

//     </div>
//   );
// }

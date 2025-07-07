import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="hidden 2xl:block relative w-full h-[277px] bg-[#060114]">
        <div className="max-w-[1920px] mx-auto relative h-full">

          <Link href="/">
            <div className="absolute left-[260px] bottom-[109px] flex flex-col">
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

          <div
            className="absolute bottom-[110px] text-[12px] text-white text-center h-[27px] w-[793px]"
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

          <div className="absolute right-[270px] bottom-[110px]">
            <Image src="/logoin.png" alt="Logo IN" width={40} height={40} />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex 2xl:hidden relative w-full h-[277px]  bg-[#060114] px-6 pt-6 pb-14">
        <div className="max-w-[793px] mx-auto flex flex-col w-full h-full">
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

          <div className="w-[944px] text-[12px] text-white mt-8 leading-none text-center mx-auto">
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
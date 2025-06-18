import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between h-[150px] px-[143px] bg-[url('/gradiente2.png')] bg-cover bg-no-repeat bg-top">
      <Image
        src="/logo.png"
        alt="Logo Rombux"
        width={240} 
        height={39}
      />

      <div className="flex items-center space-x-20 text-white text-[32px] leading-[24px] font-normal font-sans">
        <Link href="#servicios">Servicios</Link>
        <Link href="#casos">Casos</Link>
        <Link href="#contacto">Contacto</Link>
      </div>
    </nav>
  );
}

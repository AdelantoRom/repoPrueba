'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[url('/gradiente2.png')] bg-cover bg-no-repeat bg-top flex items-center justify-between px-4 lg:px-10 2xl:px-[143px] h-[94px] 2xl:h-[96px]">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/Vector.png"
          alt="Logo Rombux"
          width={212}
          height={34}
          className="ml-4 lg:ml-16 2xl:ml-37 w-[141px] h-[23px] 2xl:w-[212px] 2xl:h-[34px]"
        />
      </Link>

      {/* Links visibles en tablet y desktop */}
      <div className="hidden lg:flex gap-24 lg:mr-10 2xl:gap-[150px] 2xl:mr-25 text-white font-medium 2xl:text-[20px]">

        <Link href="/benchmarking">Servicios</Link>
        <Link href="/#casos">Casos</Link>
        <Link href="/contacto">Contacto</Link>
      </div>

      {/* Botón hamburguesa solo en mobile */}
      <button className="lg:hidden text-black" onClick={toggleMenu}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Menú desplegable solo en mobile */}
      {isOpen && (
        <div className="absolute top-[94px] left-0 w-full bg-white text-black flex flex-col px-6 py-4 lg:hidden z-50 shadow-md text-[24px] leading-tight">
          {/* Servicios */}
          <div className="w-full">Servicios</div>
          <hr className="my-3 border-gray-300" />

          <Link href="/benchmarking" onClick={toggleMenu}>• Benchmarking</Link>
          <hr className="my-3 border-gray-300" />

          <Link href="/branding" onClick={toggleMenu}>• Branding</Link>
          <hr className="my-3 border-gray-300" />

          <Link href="/marketing-digital" onClick={toggleMenu}>• Marketing Digital</Link>
          <hr className="my-3 border-gray-300" />

          <Link href="/growth" onClick={toggleMenu}>• Growth</Link>
          <hr className="my-3 border-gray-300" />

          <Link href="/data-ia" onClick={toggleMenu}>• Data + IA</Link>
          <hr className="my-3 border-gray-300" />

          {/* Casos */}
          <Link href="/#casos" onClick={toggleMenu}>Casos</Link>
          <hr className="my-3 border-gray-300" />

          {/* Contacto */}
          <Link href="/contacto" onClick={toggleMenu}>Contacto</Link>
          <hr className="my-3 border-gray-300" />
        </div>
      )}
    </nav>
  )
}




// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-50 flex items-center justify-between h-[150px] px-[143px] bg-[url('/gradiente2.png')] bg-cover bg-no-repeat bg-top">
//       <Link href="/">
//         <Image
//           src="/logo.png"
//           alt="Logo Rombux"
//           width={240}
//           height={39}

//         />
//       </Link>
//       <div className="flex items-center text-white text-[32px] leading-[24px] font-normal gap-[90px] ">
//         <Link href="/benchmarking" className="mr-2">Servicios</Link>
//         <Link href="/#casos" className="-mr-2">Casos</Link>
//         <Link href="/contacto">Contacto</Link>
//       </div>
//     </nav>
//   );
// }

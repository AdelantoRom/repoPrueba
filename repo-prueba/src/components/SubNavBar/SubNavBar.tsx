'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ← 1. Importar hook

export default function SubNavBar() {
  const pathname = usePathname(); // ← 2. Obtener ruta actual

  const items = [
    { label: 'Benchmarking', path: '/benchmarking' },
    { label: 'Branding', path: '/branding' },
    { label: 'Marketing Digital', path: '/marketing' },
    { label: 'Growth', path: '/growth' },
    { label: 'Data + IA', path: '/data' },
  ];

  return (
    <nav className="fixed top-[150px] w-full bg-[#FDF4FB] z-40 border-b border-black">
      <div className="flex ml-[65px] px-20 py-4 flex-wrap gap-x-52 gap-y-4">
        {items.map(({ label, path }) => {
          const isActive = pathname === path; 
          return (
            <Link
              key={label}
              href={path}
              className={`text-[#000000] text-[24px] leading-[24px] transition-all ${
                isActive ? 'font-bold' : 'font-normal'
              } hover:font-bold`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


// 'use client';

// import Link from 'next/link';

// export default function SubNavBar() {
//   const items = [
//     { label: 'Benchmarking', path: '/benchmarking' },
//     { label: 'Branding', path: '/branding' },
//     { label: 'Marketing Digital', path: '/marketing' },
//     { label: 'Growth', path: '/growth' },
//     { label: 'Data + IA', path: '/data' },
//   ];

//   return (
//     <nav className="fixed top-[150px] w-full bg-[#FDF4FB] z-40 border-b border-black">
//       <div className="flex ml-[65px] px-20 py-4 flex-wrap gap-x-52 gap-y-4">
//         {items.map(({ label, path }) => (
//           <Link
//             key={label}
//             href={path}
//             className="text-[#000000] font-normal text-[24px] leading-[24px] hover:font-bold transition-all"
//           >
//             {label}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNavBar() {
  const pathname = usePathname();

  const items = [
    { label: 'Benchmarking', path: '/benchmarking' },
    { label: 'Branding', path: '/branding' },
    { label: 'Marketing Digital', path: '/marketing' },
    { label: 'Growth', path: '/growth' },
    { label: 'Data + IA', path: '/data' },
  ];

  return (
    <nav className="fixed top-[94px] w-full bg-[#FDF4FB] z-40 border-b border-black h-[56px]">
      <div className="flex justify-between ml-[69px] px-55 py-4 gap-y-4 mr-[54px] max-lg:px-0 mt-[2px]">
        {items.map(({ label, path }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={label}
              href={path}
              className="text-[#000000] text-[20px] leading-[24px] transition-all"
            >
              <span className="relative inline-block">
                <span className={`absolute left-0 top-0 w-full transition-all ${isActive ? 'font-bold' : 'font-normal'} hover:font-bold`}>
                  {label}
                </span>
                <span className="invisible font-bold">{label}</span>
              </span>
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

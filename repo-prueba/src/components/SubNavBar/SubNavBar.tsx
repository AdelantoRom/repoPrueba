'use client';

import Link from 'next/link';

export default function SubNavBar() {
  const items = [
    { label: 'Benchmarking', path: '/benchmarking' },
    { label: 'Branding', path: '/branding' },
    { label: 'Marketing Digital', path: '/marketing' },
    { label: 'Growth', path: '/growth' },
    { label: 'Data + IA', path: '/data' },
  ];

  return (
    <nav className="fixed top-[150px] w-full bg-[#FDF4FB] z-40 border-b border-black">
      <div className="flex justify-around w-full py-4 pr-6">

        {items.map(({ label, path }) => (
          <Link
            key={label}
            href={path}
            className="text-[#000000] font-normal text-[24px] leading-[24px] hover:font-bold transition-all"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

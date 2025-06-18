'use client';

export default function SubNavBar() {
  const items = [
    'Benchmarking',
    'Branding',
    'Marketing Digital',
    'Growth',
    'Data + IA',
  ];

  return (
    <nav className="fixed top-[0px] w-full bg-[#FDF4FB] mt-[160px] z-40  border-b border-black">
      <div className="flex ml-[65px] px-20 py-4  flex-wrap gap-x-52 gap-y-4">
        {items.map((label) => (
          <button
            key={label}
            className="text-[#000000] font-normal text-[24px] leading-[24px] hover:font-bold transition-all"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

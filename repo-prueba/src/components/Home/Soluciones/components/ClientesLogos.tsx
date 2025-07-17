import Image from 'next/image';

export default function ClientesLogos() {
  return (

    <div className="w-full flex justify-center pt-6 px-4">
      <div
        className="
          flex flex-row items-center justify-center
          lg:w-[919px] lg:h-[60px] lg:gap-x-14 lg:-mt-10 lg:mb-6 lg:ml-16
          2xl:w-[1645px] 2xl:h-[56px] 2xl:gap-x-30 2xl:mt-44 2xl:mb-16 2xl:-ml-[10px]
        "
      >
        <div className="relative lg:w-[73px] lg:h-[45px] 2xl:w-[96px] 2xl:h-[56px]">

          <Image src="/image 48.png" alt="Imagen HP" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[121px] lg:h-[19px] 2xl:w-[167px] 2xl:h-[25px]">
          <Image src="/DowAgro.png" alt="Imagen Dow Agro" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[68px] lg:h-[60px] 2xl:w-[71px] 2xl:h-[56px]">
          <Image src="/Group.png" alt="Imagen Super Pollo" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[56px] lg:h-[40px] 2xl:w-[82px] 2xl:h-[56px]">
          <Image src="/Amarula blanco.png" alt="Imagen Amarula" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[68px] lg:h-[48px] 2xl:w-[100px] 2xl:h-[55px]">
          <Image src="/Granix.png" alt="Imagen Granix" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[68px] lg:h-[21px] 2xl:w-[109px] 2xl:h-[32px]">
          <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[85px] lg:h-[31px] 2xl:w-[116px] 2xl:h-[40px]">
          <Image src="/Advanta blanco.png" alt="Imagen Advanta" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[33px] lg:h-[34px] 2xl:w-[41px] 2xl:h-[40px]">
          <Image src="/Bi blanco.png" alt="Imagen Bi" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

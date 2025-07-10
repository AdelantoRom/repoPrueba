import Image from 'next/image';

export default function ClientesLogos() {
  return (

    <div className="w-full flex justify-center pt-6 px-4">
      <div
        className="
          flex flex-row items-center justify-between
          lg:w-[919px] lg:h-[60px] lg:gap-x-2 lg:-mt-10 lg:mb-6 lg:ml-16
          2xl:w-[1645px] 2xl:h-[101px] 2xl:gap-x-6 2xl:mt-34 2xl:mb-22 2xl:ml-20
        "
      >
        <div className="relative lg:w-[73px] lg:h-[45px] 2xl:w-[130px] 2xl:h-[76px]">

          <Image src="/HP blanco.png" alt="Imagen HP" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[121px] lg:h-[19px] 2xl:w-[216px] 2xl:h-[33px]">
          <Image src="/DowAgro.png" alt="Imagen Dow Agro" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[68px] lg:h-[60px] 2xl:w-[122px] 2xl:h-[101px]">
          <Image src="/SuperPollo blanco.png" alt="Imagen Super Pollo" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[56px] lg:h-[40px] 2xl:w-[100px] 2xl:h-[68px]">
          <Image src="/Amarula blanco.png" alt="Imagen Amarula" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[68px] lg:h-[48px] 2xl:w-[122px] 2xl:h-[81px]">
          <Image src="/Granix blanco.png" alt="Imagen Granix" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[68px] lg:h-[21px] 2xl:w-[121px] 2xl:h-[36px]">
          <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[85px] lg:h-[31px] 2xl:w-[152px] 2xl:h-[53px]">
          <Image src="/Advanta blanco.png" alt="Imagen Advanta" fill className="object-contain" />
        </div>
        <div className="relative lg:w-[33px] lg:h-[34px] 2xl:w-[59px] 2xl:h-[58px]">
          <Image src="/Bi blanco.png" alt="Imagen Bi" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

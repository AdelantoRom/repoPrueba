import Image from 'next/image';

export default function ClientesLogos() {
  return (
    <div className="w-full relative px-4 md:px-8 lg:px-20 2xl:px-[120px] 2xl:pt-6 max-w-[1920px] mx-auto">
      <div
        className="
          grid grid-cols-4 justify-items-center gap-x-4 gap-y-6
          relative -top-[100px] -mb-[100px]
          lg:relative lg:top-0 lg:mb-4 lg:mt-10  lg:ml-4
          2xl:mb-10 2xl:mt-16
          lg:flex lg:flex-nowrap lg:justify-center lg:items-center lg:gap-x-12 lg:gap-y-14
          2xl:flex 2xl:justify-between 2xl:gap-x-26
        "
      >
        <div className="relative w-[50px] h-[31px] lg:w-[73px] lg:h-[45px] 2xl:w-[250px] 2xl:h-[75px]">
          <Image src="/HP blanco.png" alt="Imagen HP" fill className="object-contain" />
        </div>
        <div className="relative w-[83px] h-[13px] lg:w-[120px] lg:h-[19px] 2xl:w-[216px] 2xl:h-[33px]">
          <Image src="/DowAgro.png" alt="Imagen Dow Agro" fill className="object-contain" />
        </div>
        <div className="relative w-[47px] h-[41px] lg:w-[68px] lg:h-[60px] 2xl:w-[122px] 2xl:h-[101px]">
          <Image src="/SuperPollo blanco.png" alt="Imagen Super Pollo" fill className="object-contain" />
        </div>
        <div className="relative w-[38px] h-[27px] lg:w-[56px] lg:h-[40px] 2xl:w-[100px] 2xl:h-[68px]">
          <Image src="/Amarula blanco.png" alt="Imagen Amarula" fill className="object-contain" />
        </div>
        <div className="relative w-[47px] h-[33px] lg:w-[68px] lg:h-[48px] 2xl:w-[122px] 2xl:h-[81px]">
          <Image src="/Granix blanco.png" alt="Imagen Granix" fill className="object-contain" />
        </div>
        <div className="relative w-[47px] h-[15px] lg:w-[68px] lg:h-[21px] 2xl:w-[121px] 2xl:h-[36px]">
          <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" fill className="object-contain" />
        </div>
        <div className="relative w-[59px] h-[21px] lg:w-[85px] lg:h-[31px] 2xl:w-[152px] 2xl:h-[53px]">
          <Image src="/Advanta blanco.png" alt="Imagen Advanta" fill className="object-contain" />
        </div>
        <div className="relative w-[23px] h-[23px] lg:w-[33px] lg:h-[34px] 2xl:w-[59px] 2xl:h-[58px]">
          <Image src="/Bi blanco.png" alt="Imagen Bi" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

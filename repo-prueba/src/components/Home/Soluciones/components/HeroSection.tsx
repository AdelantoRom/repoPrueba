import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-row items-start justify-between relative">
      {/* Bloque de texto */}
      <div className="flex flex-col justify-start lg:space-y-12 2xl:space-y-12 2xl:mt-[12px] 2xl:-ml-[5px]">
        <h2 className="
          lg:text-[32px] lg:leading-[30px] 
          2xl:text-[32px] 2xl:leading-[36px] 2xl:mb-[50px]">
          Soluciones Digitales de Negocios
        </h2>
        <h1 className="
          font-normal 
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
          text-[42px] leading-[48px] w-[300px]
          lg:text-[70px] lg:leading-[70px] lg:w-[503px]
          2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[740px]
        ">
          Potenciamos<br />tu Empresa<br />en la Era Digital
        </h1>
      </div>

      {/* Imagen con red */}
      <div className="order-1 lg:order-2 w-full flex justify-center lg:block">
        <div className="relative overflow-visible 
          lg:-translate-x-30 lg:-translate-y-21
          xl:-translate-x-19  
          2xl:-translate-x-18 2xl:-translate-y-43">
          
          {/* Imagen base */}
          <div className="lg:w-[540px] lg:h-[540px] xl:w-[600px] xl:h-[600px] 2xl:w-[1005px] 2xl:h-[1005px] custom-woman-two custom-image">
            <Image
              src="/womanesfera+halo.png"
              alt="Mujer con esfera"
              fill
              className="object-contain lg:z-6 2xl:z-10"
              unoptimized
            />
          </div>

          {/* Red giratoria */}
          <div className="
            absolute top-1/2 left-1/2 z-20 
            -translate-x-1/2 -translate-y-1/2 
            w-[200px] h-[200px]
            lg:w-[306px] lg:h-[406px] xl:w-[450px] xl:h-[450px]
            2xl:w-[756px] 2xl:h-[756px] custom-woman custom-red 
            animate-spin 
            [animation-direction:reverse] [animation-duration:120s]
            max-[1060px]:translate-x-[-110px] max-[1060px]:translate-y-[-205px]
          ">
            <Image
              src="/redfucsia.png"
              alt="Red giratoria"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}


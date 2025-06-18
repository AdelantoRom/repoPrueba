import Image from 'next/image';

export default function Soluciones() {
  return (
    <div className="w-full min-h-screen text-white">
      <div className="flex items-start justify-between px-0 pt-[96px] pb-[40px] relative">
        {/* Columna de texto + formulario */}
        <div className=" pl-[138px] pr-8 flex flex-col justify-start space-y-12 ">
          {/* Títulos */}
          <div className="flex flex-col w-[962px] h-[360px]">
            <h2 className="text-[32px] font-medium leading-[36px] text-white mb-10">
              Soluciones Digitales de Negocios
            </h2>
            <h1 className="text-[120px] font-normal leading-[132px] text-white">
              Potenciamos<br />tu Empresa<br />en la Era Digital
            </h1>
          </div>

          {/* Formulario */}
          <div className="flex flex-col">
            <h3 className="text-[22px] text-white mt-28 leading-[24px]">
              ¡Anótate ahora y participa de un sorteo con <br /> importantes beneficios para tu próxima campaña!
            </h3>

            <div className="flex flex-col space-y-2 mt-7 max-w-[501px] ">
              {/* Campo de Email */}
              <div className="relative w-full">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border rounded-md border-white text-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[24px] leading-[32px] py-2 pl-4 h-[46px]"
                  />
                </div>

              </div>


              {/* Botón */}
              <button
                type="submit"
                className="bg-white text-[24px] font-bold h-[46px] w-[186px] rounded-[50px] mt-13"
                style={{ color: "#19B7CC" }}
              >
                Enviar
              </button>
            </div>
          </div>

        </div>

        {/* Imagen a la derecha */}
        <div className="absolute -right-[57px] -top-[153px] z-10 w-[1031px] h-[1031px] pointer-events-none">
          <Image
            src="/potenciamos.png"
            alt="Potenciamos"
            fill
            className="object-contain"
            unoptimized
          />
        </div>


      </div>

      <div className="px-[138px] mt-55 py-20 flex justify-between items-start">

        <div className="flex flex-col space-y-6 w-1/2 max-w-[629px] mt-17">
          <h3 className="text-[32px] leading-[40px] font-medium mb-0">Transformación Digital</h3>
          <h4 className="text-[24px] leading-[40px]">
            En un entorno que evoluciona aceleradamente, la <br />
            transformación digital permite a las empresas adaptarse <br />
            rápidamente a las demandas del mercado.{' '}
            <strong>
              Rombux es tu <br />
              socio estratégico en el mundo online
            </strong>
            , ofreciéndote <br />
            soluciones integrales y personalizadas para impulsar tu <br />
            crecimiento y consolidar tu posición.
          </h4>
        </div>


        <div className="w-1/2 flex justify-end">
          <h2 className="text-[120px] leading-[120px] text-right max-w-[829px]">
            Impulsando tus Negocios al Futuro
          </h2>
        </div>
      </div>

      <div className="w-full relative px-[125px] pb-20 pt-10">
        <div className="flex flex-wrap justify-center items-center gap-x-22 gap-y-32 mb-12">
          <Image src="/HP blanco.png" alt="Imagen Ho" width={130} height={76} className="object-contain" />
          <Image src="/DowAgro.png" alt="Imagen Dow Agro" width={216} height={33} className="object-contain" />
          <Image src="/SuperPollo blanco.png" alt="Imagen SuperPollo" width={122} height={101} className="object-contain" />
          <Image src="/Amarula blanco.png" alt="Imagen Amarula" width={100} height={68} className="object-contain" />
          <Image src="/Granix blanco.png" alt="Imagen Granix" width={122} height={81} className="object-contain" />
          <Image src="/The Clinic blanco.png" alt="Imagen The Clinic" width={121} height={36} className="object-contain" />
          <Image src="/Advanta blanco.png" alt="Imagen Advanta" width={152} height={53} className="object-contain" />
          <Image src="/Bi blanco.png" alt="Imagen Bi" width={59} height={58} className="object-contain" />
        </div>
      </div>

    </div>
  );
}

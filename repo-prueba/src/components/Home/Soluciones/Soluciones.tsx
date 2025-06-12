import Image from 'next/image';

export default function Soluciones() {
  return (
    <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white">
      <div className="flex items-start justify-between px-0 pt-[120px] pb-[40px]">
        {/* Columna de texto + formulario */}
        <div className="w-1/2 pl-[143px] pr-8 flex flex-col justify-start space-y-12">
          {/* Títulos */}
          <div className="flex flex-col">
            <h2 className="text-[32px] font-medium leading-[36px] text-white mb-10">
              Soluciones Digitales de Negocios
            </h2>
            <h1 className="text-[126px] font-normal leading-[132px] text-white">
              Potenciamos tu Empresa en la Era Digital
            </h1>
          </div>

          {/* Formulario */}
          <div className="flex flex-col space-y-10">
            <h3 className="text-2xl text-white mt-4">
              ¡Anótate ahora y participa de un sorteo con <br /> importantes beneficios para tu próxima campaña!
            </h3>

            <div className="flex items-center">

              {/* Campo de Email */}
              <div className="relative" style={{ width: '439px' }}>
                <label className="block text-white font-normal text-[24px] leading-[32px] relative top-[30px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full bg-transparent border-b-[1px] border-white text-white focus:outline-none focus:border-[#00CED1] text-[24px] leading-[32px]"
                />
              </div>

              {/* Botón */}
              <button
                className="bg-white text-[#19B7CC] font-bold text-[22px] leading-[32px] h-[40px] min-w-[64px] px-4 py-1 rounded mt-6"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-1/2 flex justify-end items-start">
          <Image
            src="/potenciamos.png"
            alt="Potenciamos"
            width={1031}
            height={1031}
            className="object-contain -mt-[50px] h-full max-h-[1600px] w-auto"
          />
        </div>
      </div>

      <div className="px-[143px] py-20 flex justify-between items-start">
        {/* Columna izquierda con h3 y h4 */}
        <div className="flex flex-col space-y-6 w-1/2 max-w-[629px]">
          <h3 className="text-[32px] leading-[40px] font-medium">Transformación Digital</h3>
          <h4 className="text-[24px] leading-[40px] font-normal">
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

        {/* Columna derecha con h2 */}
        <div className="w-1/2 flex justify-end -mt-18">
          <h2 className="text-[120px] leading-[120px] font-normal text-right max-w-[829px]">
            Impulsando tus Negocios al Futuro
          </h2>
        </div>
      </div>

     <div className="w-full relative px-[143px] pb-20 pt-40">
  <div className="flex flex-wrap justify-center items-center gap-x-48 gap-y-32 mb-12">
    <Image src="/image48.png" alt="Imagen 1" width={130} height={76} className="object-contain" />
    <Image src="/image49.png" alt="Imagen 2" width={216} height={33} className="object-contain" />
    <Image src="/image50.png" alt="Imagen 3" width={122} height={101} className="object-contain" />
    <Image src="/image51.png" alt="Imagen 4" width={100} height={68} className="object-contain" />
    <Image src="/image52.png" alt="Imagen 5" width={122} height={81} className="object-contain" />
    <Image src="/image53.png" alt="Imagen 6" width={121} height={36} className="object-contain" />
    <Image src="/image54.png" alt="Imagen 7" width={152} height={53} className="object-contain" />
    <Image src="/image55.png" alt="Imagen 8" width={59} height={58} className="object-contain" />
  </div>
</div>

    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function BenchmarkingForm() {
  return (
    <section
      className="relative w-full h-[3218px] bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/Gradiente-Home-5.png')" }}
    >
      {/* Título principal */}
      <div className="mt-[260px] w-[1393px] h-[221px] flex flex-col items-center justify-center">
        <h2 className="font-medium text-[120px] leading-[120px] text-center text-white">
          Benchmarking:
        </h2>
        <p className="font-light text-[120px] leading-[120px] text-center text-white">
          orientado a resultados
        </p>
      </div>

      {/* Párrafo */}
      <div className="mt-[30px] w-[1145px] h-[144px] flex items-center justify-center">
        <p className="font-medium text-[40px] leading-[48px] text-center text-white">
          Somos un grupo de profesionales especializados en escalar<br />
          empresas y startups, unidos bajo una misma cultura: lograr el<br />
          liderazgo desde una sólida propuesta de valor.
        </p>
      </div>

      {/* Imagen decorativa + logo */}
      <div className="mt-[60px] relative">
        <Image
          src="/Group-155.png"
          alt="Decoración Benchmarking"
          width={709}
          height={164}
        />
        <Image
          src="/logoin.png"
          alt="Logo In"
          width={60}
          height={60}
          className="absolute top-[90px] left-[130px]"
        />
      </div>

      {/* Esfera pequeña */}
      <div className="absolute top-[710px] left-[1400px] z-0">
        <Image
          src="/Trama-esfera-fucsia.png"
          alt="Trama fucsia pequeña"
          width={275}
          height={275}
          className="rotate-180"
        />
      </div>

      {/* Esfera grande */}
      <div className="absolute top-[940px] left-[50px] z-0">
        <Image
          src="/Trama-esfera-fucsia.png"
          alt="Trama fucsia grande"
          width={503}
          height={503}
          className="rotate-180"
        />
      </div>

      {/* Formulario embebido */}
      <div className="relative z-10 mt-[240px] flex ml-[320px] gap-[60px]">
        {/* Columna izquierda */}
        <div>
    
          <div className="w-[884px] flex justify-center">
  <h3 className="text-white text-[60px] font-light leading-[59px] text-center">
    ¿Conectamos?
  </h3>
</div>



          <form className="mt-[80px] flex flex-col space-y-6 pb-[86px]">
            {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={placeholder}
                className="w-[884px] h-[78px] border border-[#707070] rounded-[5px] px-4 font-bold text-[28px] leading-[32px] placeholder:text-gray-500 text-[#4B4B4B] bg-white"
              />
            ))}

            <div className="w-[884px] border border-[#707070] rounded-[5px] p-6 space-y-4 bg-white">
              <p className="text-[28px] font-semibold text-[#4B4B4B] mb-2 py-[30px] leading-[28px] tracking-normal">
                Área/s de servicios requeridos*
              </p>

              {[
                { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
                { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
                { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
                { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
                { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
              ].map(({ bold, rest }, idx) => (
                <label
                  key={idx}
                  className="flex items-start space-x-3 text-[24px] text-[#4B4B4B]"
                >
                  <input
                    type="checkbox"
                    className="mt-[3px] w-5 h-5 accent-[#D81FB9]"
                  />
                  <span>
                    <strong className="font-semibold">{bold}</strong>
                    {rest}
                  </span>
                </label>
              ))}
            </div>

            <div className="w-[884px] h-[270px] border border-[#707070] rounded-[5px] p-6 bg-white">
              <textarea
                id="mensaje"
                name="mensaje"
                required
                className="w-full h-full p-2 text-[28px] font-bold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
                placeholder="Mensaje*"
              />
            </div>

            <button
              type="submit"
              className="bg-[#D81FB9] text-white text-[32px] font-bold h-[78px] w-[250px] rounded-[50px] mt-[12px] mb-[40px]"
            >
              Enviar
            </button>
          </form>

<div className="w-full flex justify-center mt-[32px] mb-1">
  <div className="w-[1235px] flex justify-between items-start ml-[-150px]">

    <div className="flex flex-col items-center">
      <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} />
      <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
        Agenda una reunión
      </div>
    </div>

       <div className="flex flex-col items-center">
      <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} />
      <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
        Envíanos un mensaje
      </div>
    </div>

    <div className="flex flex-col items-center">
      <Image src="/Chat.gif" alt="Chat" width={64} height={64} />
      <div className="mt-[24px] w-[203px] text-center text-white text-[24px] leading-[24px]">
        Chatea con Romy, nuestro agente IA
      </div>
    </div>
  </div>
</div>


        </div>

       </div>
    </section>
  );
}


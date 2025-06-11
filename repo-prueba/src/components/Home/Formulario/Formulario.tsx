import React from 'react';
import Image from 'next/image';

export default function Formulario() {
  return (
    <div className="flex ml-[140px] mt-[100px] gap-[60px]">
      {/* Columna izquierda: Formulario */}
      <div>
        {/* Título */}
        <h1 className= "text-black text-[120px] w-[1192px] leading-[120px] font-light mb-[120px]">
          Te acompañamos en
          <br />
          tu desarrollo digital
        </h1>

        {/* Subtítulo */}
        <h2 className="text-[#D81FB9] text-[60px] w-[351px] font-normal leading-[60px] mt-[30px]">
          Contáctanos
        </h2>

        {/* Formulario */}
        <form className="mt-[40px] flex flex-col space-y-6">
          {/* Inputs */}
          {['Nombre*', 'Apellido*', 'Email*', 'Empresa*'].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              className="w-[884px] h-[78px] border rounded-[5px] px-4 font-semibold text-[28px] leading-[32px] tracking-normal placeholder:text-gray-500 text-[#4B4B4B]"
              style={{ borderColor: '#70707070' }}
            />
          ))}

        {/* Área de servicios */}
<div
  className="w-[884px] border rounded-[5px] p-6 space-y-4"
  style={{ borderColor: '#70707070' }}
>
  <h4 className="text-[22px] font-semibold text-[#4B4B4B] mb-2 leading-[28px] tracking-normal">
    Área/s de servicios requeridos*
  </h4>

  {[
    {
      bold: "Benchmarking",
      rest: " / Investigación de mercado y propuesta de valor."
    },
    {
      bold: "Branding",
      rest: " / Identidad, presencia digital, reputación."
    },
    {
      bold: "Marketing Digital",
      rest: " / Conexión y adquisición de clientes."
    },
    {
      bold: "Growth",
      rest: " / Crecimiento y posicionamiento de mercado."
    },
    {
      bold: "Data + IA",
      rest: " / Información clave y automatización de procesos."
    }
  ].map(({ bold, rest }, idx) => (
    <label
      key={idx}
      className="flex items-start space-x-3 text-[18px] text-[#4B4B4B]"
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

          {/* Botón */}
          <button
            type="submit"
            className="bg-[#D81FB9] text-white text-[32px] font-bold h-[78px] w-[306px] rounded-[50px] mt-4"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Columna derecha: Imagen */}
      <div className="mt-[270px] ml-auto w-[800px] h-[800px]">
        <Image
          src="/grupoformulario.png"
          alt="Grupo Formulario"
          width={1150}
          height={1150}
          className="object-contain"
           style={{ maxWidth: 'none', width: '800px', height: '800px' }}
        />

      </div>
    </div>
  );
}

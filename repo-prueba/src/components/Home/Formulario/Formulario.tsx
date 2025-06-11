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
            <h4 className="text-[28px] font-semibold text-[#4B4B4B] mb-2">
              Área/s de servicios requeridos*
            </h4>

            {[
              'Benchmarking / Investigación de mercado y propuesta de valor.',
              'Branding / Identidad, presencia digital, reputación.',
              'Marketing Digital / Conexión y adquisición de clientes.',
              'Growth / Crecimiento y posicionamiento de mercado.',
              'Data + IA / Información clave y automatización de procesos.'
            ].map((text, idx) => (
              <label
                key={idx}
                className="flex items-center space-x-3 text-[24px] text-[#4B4B4B] font-semibold"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#D81FB9]"
                />
                <span>{text}</span>
              </label>
            ))}
          </div>

          {/* Campo de mensaje */}
          <textarea
            placeholder="Mensaje*"
            className="w-[884px] h-[220px] border rounded-[5px] px-4 py-4 font-semibold text-[28px] leading-[32px] tracking-normal placeholder:text-gray-500 text-[#4B4B4B] resize-none"
            style={{ borderColor: '#70707070' }}
          />

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
      <div className="mt-[300px] ml-auto w-[900px] h-[900px]">
        <Image
          src="/grupoformulario.png"
          alt="Grupo Formulario"
          width={1150}
          height={1150}
          className="object-contain"
           style={{ maxWidth: 'none', width: '900px', height: '900px' }}
        />

      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';

export default function Adn() {
  return (
    <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white flex flex-col items-center pt-[270px]">

      {/* Título */}
      <div className="w-[1219px] h-[221px] mx-auto mt-[64px] text-center tracking-normal">
        <h1 className="text-[120px] leading-[120px] font-medium">Rombux/ADN:</h1>
        <h2 className="text-[120px] leading-[120px] font-light mt-[12px]">orientado a resultados</h2>
      </div>

      {/* Párrafo */}
      <p className="text-[40px] font-medium text-center w-[1145px] h-[144px] mx-auto mt-[64px] mb-[64px]">
        Somos un grupo de profesionales especializados en escalar<br />
        empresas y startups, unidos bajo una misma cultura:<br />
        lograr el liderazgo desde una sólida propuesta de valor.
      </p>

      {/* Bloque que contiene botón e imágenes */}
      <div className="relative w-[1708px] h-[691px] mx-auto">

        {/* Botón centrado */}
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2">
          <button
            type="submit"
            className="bg-[#D81FB9] text-white text-[32px] font-bold h-[78px] w-[306px] rounded-[50px]"
          >
            Conócenos
          </button>
        </div>

        {/* Imagen izquierda */}
        <Image
          src="/group182.png"
          alt="Esfera Izquierda"
          width={541}
          height={541}
          className="absolute top-[150px] left-0 object-contain"
        />

        {/* Imagen derecha */}
        <Image
          src="/group182.png"
          alt="Esfera Derecha"
          width={299}
          height={299}
          className="absolute top-0 right-0 object-contain"
        />
      </div>

      {/* ¿Conectamos? */}
      <div className="mt-[100px]">
        <p className="text-[64px] leading-[64px] font-normal w-[446px] h-[59px] mx-auto text-center">
          ¿Conectamos?
        </p>
      </div>

{/* Bloque de íconos con textos debajo */}
<div className="w-full flex justify-center mt-[64px] mb-[120px]">
  <div className="w-[1235px] flex justify-between items-start">
    {/* Ítem 1 */}
    <div className="flex flex-col items-center">
      <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} />
      <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
        Agenda una reunión
      </div>
    </div>

    {/* Ítem 2 */}
    <div className="flex flex-col items-center">
      <Image src="/mensaje.png" alt="Mensaje" width={64} height={64} />
      <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
        Envíanos un mensaje
      </div>
    </div>

    {/* Ítem 3 */}
    <div className="flex flex-col items-center">
      <Image src="/Chat.gif" alt="Chat" width={64} height={64} />
      <div className="mt-[24px] w-[203px] text-center text-white text-[24px] leading-[24px]">
        Chatea con Romy, nuestro agente IA
      </div>
    </div>
  </div>
</div>

</div>
  );
}

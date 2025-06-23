import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Abel García',
    role: 'Research & Design Lead',
    photo: '/Abel.png',
  },
  {
    name: 'Marina Merzaroli',
    role: 'Growth Marketing Lead',
    photo: '/Marina deck.png',
  },
  {
    name: 'Nombre Apellido',
    role: 'Data & Lead',
    photo: '/Ellipse 10.png',
  },
  {
    name: 'Nombre Apellido',
    role: 'Data & Lead',
    photo: '/Ellipse 10.png',
  },
  {
    name: 'Nombre Apellido',
    role: 'Data & Lead',
    photo: '/Ellipse 10.png',
  },
];

export default function About_Us() {
  return (
    <div className="bg-[url('/Gradiente-Home-5.png')] bg-cover bg-no-repeat w-full max-w-[1920px] mx-auto px-7 pt-[245px]">
      <div className="w-full text-center px-8">
        <h1 className="text-[120px] leading-[120px] font-medium text-shadow-md text-white mt-[14px] ml-4">
          Quiénes somos
        </h1>
        <p className="mt-[30px] ml-4 text-[40px] leading-[48px] text-white">
          Un grupo de especialistas trabajando en cada proyecto, como partners de<br />
          tu empresa desde el primer día. Conformamos equipos de talentos<br />
          seleccionados para cada caso, bajo la dirección de expertos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-24 items-center mt-[139px] mx-[104px]">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-white ${index === 1 ? 'ml-[18px]' : ''} ${index === 2 ? 'ml-[32px]' : ''}`}
          >

            <div className="relative">
              <Image src={member.photo} alt={member.name} width={201} height={201} className={`object-cover transition-transform duration-300 ${index === 1 ? 'scale-[1.04]' : ''
                }`} />
              <div className="absolute bottom-[10px] right-[-4px]">
                <Image src="/logoin.png" alt="Logo" width={40} height={40} className="rounded-full" />
              </div>
            </div>
            <div className='flex flex-col text-left ml-[68px] mt-[52px]'>
              <p className="font-bold text-[32px] leading-[30px]">
                {member.name}
              </p>
              <p className="font-medium text-[24px] leading-[30px] mt-[3px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-[400px] mt-[100px]">
        {teamMembers.slice(3, 5).map((member, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="relative">
              <Image src={member.photo} alt={member.name} width={201} height={201} className="object-cover" />
              <div className="absolute bottom-[10px] right-[-4px]">
                <Image src="/logoin.png" alt="Logo" width={40} height={40} className="rounded-full" />
              </div>
            </div>
            <div className='flex flex-col text-left'>
              <p className="mt-[32px] font-bold text-[32px] leading-[30px]">
                {member.name}
              </p>
              <p className="mt-[8px] font-medium text-[24px] leading-[30px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sección final */}
      <div className="pt-[140px] pb-[80px]">
        <p className="text-[64px] leading-[64px] font-normal w-[446px] mx-auto text-center text-white">
          ¡Conectemos!
        </p>
      </div>

      <div className="w-full flex justify-center mt-[64px] mb-[80px]">
        <div className="w-[1235px] flex justify-between items-start flex-wrap gap-y-12">
          <div className="flex flex-col items-center">
            <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className="rounded-lg" />
            <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
              Agenda una reunión
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className="rounded-lg" />
            <div className="mt-[24px] w-[132px] text-center text-white text-[24px] leading-[24px]">
              Envíanos un mensaje
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/Chat.gif" alt="Chat" width={64} height={64} className="rounded-lg" />
            <div className="mt-[24px] w-[203px] text-center text-white text-[24px] leading-[24px]">
              Chatea con Romy, nuestro agente IA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

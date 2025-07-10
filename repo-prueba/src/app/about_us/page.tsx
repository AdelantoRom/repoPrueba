import React from 'react';
import Image from 'next/image';
import Botones from '@/components/BotonesInteractivos/Botones';
import Footer from '@/components/Footer/Footer';

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
    role: 'Data & AI Lead',
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
  {
    name: 'Nombre Apellido',
    role: 'Data & Lead',
    photo: '/Ellipse 10.png',
  },
];

export default function About_Us() {
  return (
    <div className="bg-[url('/Gradiente-Home-5.png')] bg-cover bg-no-repeat w-full h-[1935px] max-w-[1920px] mx-auto px-7 pt-[235px] relative">
      <div className="w-full text-center px-90">
        <h1 className="text-[64px] leading-[64px] font-medium text-shadow-md text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Quiénes somos
        </h1>
        <p className="mt-[27px] text-[24px] leading-[28px] text-center text-white">
          Un grupo de especialistas trabajando en cada proyecto, como tus partners desde el primer día. Conformamos equipos de talentos seleccionados para cada caso, bajo la dirección de expertos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-24 items-center mt-[189px] mx-[104px]">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-white ${index === 1 ? '' : ''} ${index === 2 ? '' : ''}`}
          >
            <div className="relative">
              <Image src={member.photo} alt={member.name} width={201} height={201} className={`object-cover transition-transform duration-300 ${index === 1 ? 'scale-[1.04]' : ''
                }`} />
              <div className="absolute bottom-[0px] right-[0px]">
                <Image src="/logoin.png" alt="Logo" width={40} height={40} className="rounded-full" />
              </div>
            </div>
            <div className={`relative flex flex-col text-left ${index === 0 ? ' top-[37px]' : ''} ${index === 1 ? 'top-[37px]' : ''} ${index === 2 ? ' top-[37px]' : ''}`}>
              <p className="font-bold text-[24px] leading-[28px]">
                {member.name}
              </p>
              <p className="font-medium text-[18px] leading-[28px] mt-[3px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-24 items-center mt-[159px] mx-[104px]">
        {teamMembers.slice(3, 6).map((member, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-white ${index === 1 ? '' : ''} ${index === 2 ? '' : ''}`}
          >
            <div className="relative">
              <Image src={member.photo} alt={member.name} width={201} height={201} className={`object-cover transition-transform duration-300 ${index === 1 ? 'scale-[1.04]' : ''
                }`} />
              <div className="absolute bottom-[0px] right-[0px]">
                <Image src="/logoin.png" alt="Logo" width={40} height={40} className="rounded-full" />
              </div>
            </div>

            <div className={`relative flex flex-col text-left ${index === 0 ? ' top-[52px]' : ''} ${index === 1 ? 'top-[52px]' : ''} ${index === 2 ? 'top-[52px]' : ''}`}>
              <p className="font-bold text-[24px] leading-[28px]">
                {member.name}
              </p>
              <p className="font-medium text-[18px] leading-[28px] mt-[3px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-50 pb-23'>
        <Botones />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

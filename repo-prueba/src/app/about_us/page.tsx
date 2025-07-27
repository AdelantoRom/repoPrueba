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
    name: 'Hugo Planiscig',
    role: 'Data & AI Lead',
    photo: '/hugo.png',
  },
  {
    name: 'Nicolás Moisseff',
    role: 'UX/UI Designer',
    photo: '/nicolas.png',
  },
  {
    name: 'Joaquín Nabais',
    role: 'Head of Comms',
    photo: '/joaco.png',
  },
  {
    name: 'Gabriel Martina',
    role: 'Project Manager',
    photo: '/gabriel.png',
  },
];

export default function About_Us() {
  return (
    <div>
      <div className="bg-[url('/Gradiente-Home-5.png')] bg-cover w-full max-w-[1920px] mx-auto px-7 pt-[235px] max-md:px-0 relative">
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="text-[64px] leading-[64px] font-medium text-shadow-md text-white max-md:text-[40px] max-md:leading-[40px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            Quiénes somos 
          </h1>
          <p className="mt-[27px] w-[1078px] text-[24px] leading-[28px] max-md:text-[20px] max-md:leading-[25px] text-center text-white max-sm:w-full ">
            Un grupo de especialistas <br className='md:hidden'/> trabajando en cada proyecto, <br className='2xl:hidden max-sm:hidden'/> como <br className='sm:hidden'/> tus partners desde el <br className='sm:hidden'/> primer día. Conformamos <br className='2xl:hidden max-sm:hidden'/> equipos <br className='sm:hidden'/> de talentos seleccionados para cada <br className='sm:hidden'/>caso, bajo la <br className='2xl:hidden max-sm:hidden'/> dirección de expertos.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-1  gap-y-24 items-center mt-[189px] mx-[104px] max-2xl:mt-[100px]">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-white ${index === 1 ? '' : ''} ${index === 2 ? '' : ''}`}
            >
              <div className="relative">
                <Image src={member.photo} alt={member.name} width={201} height={201} className={`object-cover transition-transform duration-300 ${index === 1 ? 'w-[212px]' : ''} ${index === 2 ? 'w-[212px]' : ''} `} />
                <div className={`absolute bottom-[0px] right-[0px] ${index === 1 ? 'top-[168px]' : ''}  ${index === 2 ? 'top-[168px]' : ''} ${index === 2 ? 'left-[160px]' : ''} ${index === 1 ? 'left-[168px]' : ''}`}>
                  <Image src="/logoin.png" alt="Logo" width={40} height={40} className="rounded-full" />
                </div>
              </div>
              <div className={`relative flex flex-col text-left ${index === 0 ? ' top-[37px]' : ''} ${index === 1 ? 'top-[32px]' : ''} ${index === 2 ? ' top-[32px]' : ''}`}>
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
        <div className="grid grid-cols-1 md:grid-cols-1  gap-y-24 items-center mt-[159px] mx-[104px] max-sm:mb-40">
          {teamMembers.slice(3, 6).map((member, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-white `}
            >
              <div className="relative">
                <Image src={member.photo} alt={member.name} width={201} height={201} className={`relative object-cover transition-transform duration-300  ${index === 2 ? 'w-[228px]' : ''} `} />
                <div className={`absolute bottom-[0px] right-[0px] ${index === 2 ? 'top-[175px]' : ''} ${index === 2 ? 'left-[170px]' : ''}`}>
                  <Image src="/logoin.png" alt="Logo" width={40} height={40} className="rounded-full " />
                </div>
              </div>
      
              <div className={`relative flex flex-col text-left ${index === 0 ? ' top-[52px]' : ''} ${index === 1 ? 'top-[52px]' : ''} ${index === 2 ? 'top-[40px]' : ''}`}>
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
        <div>
          <h3 className='text-white text-[38px] leading-[36px] text-center sm:hidden'>¡Conectemos!</h3>
        </div>
        <div className='mt-50 pb-23 max-sm:mt-10 '>
          <Botones />
        </div>
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

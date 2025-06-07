import React from 'react'
import Image from 'next/image'

function Enfoque() {
    return (
        <div className='text-black mt-[250px]'>
            <div className="w-full flex justify-center ml-2 mb-[89px]">
                <h3 className="text-[120px] w-[1410px] leading-none font-light text-center">Un enfoque especializado <span className="text-[#D81FB9] font-normal">con 3 objetivos clave:</span>
                </h3>
            </div>

            <div className='flex justify-evenly ml-4'>
                <div className='flex flex-col items-center  w-[466px]'>
                    <Image
                        src="/circulo.png"
                        alt=''
                        width={152}
                        height={152}
                        className='mb-12'
                    />
                    <h4 className='text-[48px] text-center leading-none'>01.</h4>
                    <h4 className='text-[48px] text-center leading-none mb-4'>Estrategias
                        personalizadas</h4>
                    <p className='text-[24px] text-center'>Cada plan es único. Trabajamos 1 a 1 con las empresas para posicionarlas y destacarlas en su sector.</p>
                </div>
                <div className='flex flex-col items-center w-[466px]'>
                    <Image
                        src="/circulo.png"
                        alt=''
                        width={152}
                        height={152}
                        className='mb-12'
                    />
                    <h4 className='text-[48px] text-center leading-none'>02.</h4>
                    <h4 className='text-[48px] text-center leading-none mb-4'>Crecimiento
                        sostenible</h4>
                    <p className='text-[24px] text-center'>Desarrollamos proyectos que acompañan a los clientes en su crecimiento de manera sostenible.</p>
                </div>
                <div className='flex flex-col items-center w-[466px]'>
                    <Image
                        src="/circulo.png"
                        alt=''
                        width={152}
                        height={152}
                        className='mb-12'
                    />
                    <h4 className='text-[48px] text-center leading-none'>03.</h4>
                    <h4 className='text-[48px] text-center w-[241px] leading-none mb-4'>Resultados
                        medibles</h4>
                    <p className='text-[24px] text-center'>Basándonos en datos cuantificables, evaluamos el impacto y ajustamos las acciones de manera precisa y escalable.</p>
                </div>
            </div>

        </div>
    )
}

export default Enfoque
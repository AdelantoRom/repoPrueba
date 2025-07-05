import React from 'react'
import Image from 'next/image'

function Enfoque() {
    return (
        <div className='text-black mt-[120px] max-xl:mt-[150px] mb-[215px] max-xl:mb-[150px]'>
            <div className="w-full flex justify-around mb-[89px]">
                <h3 className="text-[80px] w-[1410px] leading-[80px] text-center max-2xl:text-[70px] max-2xl:w-[900px]">Un enfoque especializado <br /><span className="text-[#D81FB9] font-normal">con 3 objetivos clave:</span>
                </h3>
            </div>

            <div className='flex justify-evenly ml-4 px-[200px]'>
                <div className='flex flex-col items-center  w-[400px]'>
                    <div className="relative w-[104px] h-[104px] mb-7 max-2xl:mb-2">
                        <Image
                            src="/circulo.png"
                            alt=""
                            fill
                            className="object-contain"
                        />
                        <Image
                            src="/Viñeta 01.svg"
                            alt=""
                            width={64}
                            height={64}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-2xl:w-[58px]"
                        />
                    </div>
                    <h4 className='text-[32px] text-center leading-[36px] max-2xl:text-[36px] max-2xl:leading-[36px]'>01.</h4>
                    <h4 className='text-[32px] w-[217px] text-center leading-[36px] mb-6 max-2xl:text-[36px] max-2xl:leading-[36px]'>Estrategias
                        personalizadas</h4>
                    <p className='text-[20px] w-[364px] text-center leading-[28px] max-2xl:text-[20px] max-2xl:w-[281px] max-2xl:leading-[25px]'>Cada plan es único. Trabajamos 1 a 1 con las empresas para posicionarlas y destacarlas en su sector.</p>
                </div>
                <div className='flex flex-col items-center w-[400px]'>
                    <div className="relative w-[104px] h-[104px] mb-7 max-2xl:mb-2">
                        <Image
                            src="/circulo.png"
                            alt=""
                            fill
                            className="object-contain max-2xl:w-[94px] max-2xl:ml-7 max-2xl:mt-7"
                        />
                        <Image
                            src="/Viñeta 02.svg"
                            alt=""
                            width={64}
                            height={64}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-2xl:w-[58px]"
                        />
                    </div>
                    <h4 className='text-[32px] text-center leading-[36px] max-2xl:text-[36px] max-2xl:leading-[36px]'>02.</h4>
                    <h4 className='text-[32px] w-[202px] text-center leading-[36px] mb-6 max-2xl:text-[36px] max-2xl:leading-[36px]'>Crecimiento
                        sostenible</h4>
                    <p className='text-[20px] w-[324px] text-center leading-[28px] max-2xl:text-[20px] max-2xl:w-[281px] max-2xl:leading-[25px]'>Desarrollamos proyectos que acompañan a los clientes en su crecimiento de manera sostenible.</p>
                </div>
                <div className='flex flex-col items-center w-[400px]'>
                    <Image
                        src="/vinieta03.png"
                        alt=''
                        width={104}
                        height={104}
                        className='max-2xl:w-[94px]  max-2xl:mt-7 max-2xl:mb-9 mb-7'
                    />
                    <h4 className='text-[32px] text-center leading-[36px] max-2xl:text-[36px] max-2xl:leading-[36px]'>03.</h4>
                    <h4 className='text-[32px] w-[202px] text-center leading-[36px] mb-6 max-2xl:text-[36px] max-2xl:leading-[36px]'>Resultados
                        medibles</h4>
                    <p className='text-[20px] w-[400px] text-center leading-[28px] max-2xl:text-[20px] max-2xl:w-[281px] max-2xl:leading-[25px]'>Basándonos en datos cuantificables, evaluamos el impacto y ajustamos las acciones de manera precisa y escalable.</p>
                </div>
            </div>

        </div>
    )
}

export default Enfoque
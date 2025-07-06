import React from 'react'
import Image from 'next/image'

function BotonesCirculares() {
    return (
        <div className="w-full flex justify-center mt-[160px] mb-[120px]">
                <div className="w-[1235px] flex justify-center gap-[140px] items-start text-black max-lg:flex-col max-lg:items-center max-lg:gap-[60px]">
                    <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-black text-center px-2">
                        <Image src="/Calendly.gif" alt="Calendario" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] font-medium w-[132px] text-center text-[18px] leading-[24px]">
                            Agenda una reunión
                        </div>
                    </div>

                    <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-black text-center px-2">
                        <Image src="/Mensaje.gif" alt="Mensaje" width={64} height={64} className='rounded-lg' />
                        <div className="mt-[24px] font-medium w-[132px] text-center text-[18px] leading-[24px]">
                            Envíanos un mensaje
                        </div>
                    </div>

                    <div className="w-[220px] h-[220px] bg-[#D81FB90D] rounded-full flex flex-col justify-center items-center text-black text-center px-2">
                        <Image src="/Chat.gif" alt="Chat" width={64} height={64} className='rounded-lg' />
                        <div className="mt-2 font-medium text-[18px] leading-[24px]">
                            Chatea con Romy<br />nuestro agente IA
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BotonesCirculares
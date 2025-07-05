import React from 'react'
import Image from 'next/image'

function Botones() {
    return (
        <div>
            <div className="w-full flex justify-center mb-1">
                <div className="flex justify-between items-start gap-x-90">

                    <div className="flex flex-col items-center">
                        <Image src="/Calendly.gif" alt="Calendario" width={48} height={48} className="rounded-lg" />
                        <div className="mt-[24px] w-[203px] text-center text-white text-[18px] leading-[28px]">
                            Agenda una <br />reunión
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/Mensaje.gif" alt="Mensaje" width={48} height={48} className="rounded-lg" />
                        <div className="mt-[24px] w-[203px] text-center text-white text-[18px] leading-[28px]">
                            Envíanos un <br /> mensaje
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/Chat.gif" alt="Chat" width={48} height={48} className="rounded-lg" />
                        <div className="mt-[24px] w-[203px] text-center text-white text-[18px] leading-[28px]">
                            Chatea con Romy, nuestro agente IA
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Botones
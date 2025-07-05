import React from 'react'
import Image from 'next/image'

function Botones() {
    return (
        <div>
            <div className="w-full flex justify-center mb-1">
                <div className="w-[1235px] flex justify-between items-start ml-8">

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
            </div >
        </div>
    )
}

export default Botones
import React from 'react'
import Image from 'next/image'

function FormSections() {
    return (
        <div className="relative z-10 mt-[107px] flex flex-col items-center">

            <h2 className="text-white text-[32px] leading-[36px] text-center">¿Conectamos?</h2>

            <form className="mt-[56px] flex flex-col space-y-[25px] items-center pb-[86px]">
                {["Nombre y Apellido*", "Email*", "Telefono*", "Empresa*"].map((placeholder, idx) => (
                    <input
                        key={idx}
                        type="text"
                        placeholder={placeholder}
                        className="w-[638px] h-[48px] border border-[#707070] rounded-[5px] font-medium text-[16px] leading-[24px] placeholder:text-gray-600 text-[#4B4B4B] bg-white pl-[24px]"
                    />
                ))}

                <div className="w-[638px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-6 space-y-8 bg-white mt-8">
                    <p className="text-[16px] font-medium text-black mb-[26px] leading-[24px] tracking-normal">
                        Área/s de servicios requeridos*
                    </p>

                    {[
                        { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
                        { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
                        { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
                        { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
                        { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
                    ].map(({ bold, rest }, idx) => (
                        <label key={idx} className="flex items-start space-x-[27px] text-[16px] text-black -mt-[2px]">
                            <input
                                type="checkbox"
                                className="w-[25px] h-[25px] border-2 border-gray-400 rounded-md appearance-none bg-white
                      checked:after:content-['✔'] checked:after:text-[#D81FB9] checked:after:text-lg
                      checked:after:flex checked:after:items-center checked:after:justify-center
                      checked:after:w-full checked:after:h-full"
                            />
                            <span>
                                <strong className="font-semibold">{bold}</strong>
                                {rest}
                            </span>
                        </label>
                    ))}
                </div>

                <div className="w-[638px] h-[212px] border border-[#707070] rounded-[5px] p-3 bg-white  mt-8">
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        className="w-full h-full pl-4 pt-[3px] text-[16px] font-bold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
                        placeholder="¿Por qué tema nos consultas?*"
                    />
                </div>

                <div className="w-[638px] flex justify-start">
                    <button
                        type="submit"
                        className="bg-[#D81FB9] text-white text-[18px] font-semibold h-[46px] w-[186px] rounded-[50px] mt-[23px] mb-[40px]"
                    >
                        Enviar
                    </button>
                </div>

            </form>

            <div className="w-full flex justify-center mt-[43px] mb-1">
                <div className="w-[1235px] flex justify-between items-start ml-[-150px]">

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
        </div >
    )
}

export default FormSections
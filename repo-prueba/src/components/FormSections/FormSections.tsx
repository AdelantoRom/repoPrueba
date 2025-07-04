import React from 'react'
import Image from 'next/image'

function FormSections() {
    return (
        <div>
            <div className="relative z-10 mt-[220px] ml-[214px] flex">

                <div>

                    <div className="w-[884px] flex justify-center">
                        <h3 className="text-white text-[64px] font-light leading-[64px] text-center">
                            ¿Conectamos?
                        </h3>
                    </div>

                    <form className="mt-[76px] flex flex-col space-y-[42px] pb-[86px]">
                        {["Nombre*", "Apellido*", "Email*", "Empresa*"].map((placeholder, idx) => (
                            <input
                                key={idx}
                                type="text"
                                placeholder={placeholder}
                                className="w-[884px] h-[78px] border border-[#707070] rounded-[5px]  font-semibold text-[28px] leading-[32px] placeholder:text-gray-500 text-[#4B4B4B] bg-white pl-[32px]"
                            />
                        ))}

                        <div className="w-[884px] h-[340px] border border-[#707070] rounded-[5px] pt-[26px] pl-8 space-y-4 bg-white">
                            <p className="text-[28px] font-semibold text-gray-500 mb-[26px]  leading-[28px] tracking-normal">
                                Área/s de servicios requeridos*
                            </p>

                            {[
                                { bold: "Benchmarking", rest: " / Investigación de mercado y propuesta de valor." },
                                { bold: "Branding", rest: " / Identidad, presencia digital, reputación." },
                                { bold: "Marketing Digital", rest: " / Conexión y adquisición de clientes." },
                                { bold: "Growth", rest: " / Crecimiento y posicionamiento de mercado." },
                                { bold: "Data + IA", rest: " / Información clave y automatización de procesos." },
                            ].map(({ bold, rest }, idx) => (
                                <label
                                    key={idx}
                                    className="flex items-start space-x-[47px] text-[24px]   text-gray-500 -mt-[2px]"
                                >
                                    <input
                                        type="checkbox"
                                        className=" w-[38px] h-[35px] border-2 border-gray-500 rounded-md appearance-none bg-white checked:bg-[#D81FB9]"
                                    />

                                    <span>
                                        <strong className="font-semibold">{bold}</strong>
                                        {rest}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className="w-[884px] h-[270px] border border-[#707070] rounded-[5px] p-4 bg-white">
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                required
                                className="w-full h-full pl-4 pt-[3px] text-[28px] font-semibold placeholder:text-gray-500 text-[#4B4B4B] resize-none focus:outline-none bg-transparent"
                                placeholder="Mensaje*"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#D81FB9] text-white text-[32px] font-semibold h-[78px] w-[306px] rounded-[50px] mt-[23px] mb-[40px]"
                        >
                            Enviar
                        </button>
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
                    </div>


                </div>

            </div>
        </div>
    )
}

export default FormSections
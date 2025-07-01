import React from 'react'
import Image from 'next/image'

function Testimonios() {
    return (
        <div className='flex justify-around bg-[#F4F0F0] mx-[104px] pb-[185px] max-xl:mx-[70px] max-lg:mx-[20px]'>
            <div className="w-[518px] h-[607px] border border-[#C1C1C1] rounded-[40px] overflow-hidden shadow-sm max-2xl:w-[350px] max-xl:w-[290px] max-xl:h-[480px]">
                <div className="px-[43px] pt-[40px] pb-[32px] flex flex-col h-full justify-between relative max-2xl:px-[30px] max-xl:px-[16px]">

                    <p className="text-[#D81FB9] text-[150px] italic rotate-180 inline-block absolute top-[-50px] left-[85px] leading-none font-medium max-2xl:top-[-66px] max-xl:left-[40px]">
                        "
                    </p>

                    <p className="mt-[70px] text-[20px] leading-[27px] text-black max-2xl:text-[18px] max-2xl:mt-[40px] max-xl:leading-[22px] max-xl:mt-[36px]">
                        “Contratamos a Rombus en distintas oportunidades para la promoción de las principales marcas del portfolio: <span className="font-bold">Amarula, Grants, Glenffidich, Bass Pale Ale</span>. Siempre respondieron eficazmente, acorde a nuestras expectativas.”
                    </p>

                    <div className="mt-[32px] flex flex-col text-[18px] max-xl:mb-[10px]">
                        <Image
                            src="/fabian.png"
                            alt="Fabián Álvarez"
                            width={159}
                            height={159}
                            className="rounded-full object-cover max-2xl:w-[100px] max-xl:w-[80px]"
                        />
                        <p className="font-bold mt-4 max-2xl:text-[16px] max-xl:leading-[20px]">Fabián Álvarez</p>
                        <p className="font-medium max-2xl:text-[16px] max-xl:leading-[20px]">Regional Manager</p>
                        <p className="font-medium max-2xl:text-[16px] max-xl:leading-[20px]">Wines & Spirits</p>
                    </div>
                </div>
            </div>
            <div className="w-[518px] h-[607px] border border-[#C1C1C1] rounded-[40px] overflow-hidden shadow-sm max-2xl:w-[350px] max-xl:w-[290px] max-xl:h-[480px]">
                <div className="px-[43px] pt-[40px] pb-[32px] flex flex-col h-full justify-between relative max-2xl:px-[30px] max-xl:px-[16px]">

                    <p className="text-[#D81FB9] text-[150px] italic rotate-180 inline-block absolute top-[-50px] left-[85px] leading-none font-medium max-2xl:top-[-66px] max-xl:left-[40px]">
                        "
                    </p>

                    <p className="mt-[70px] text-[20px] leading-[27px] text-black max-2xl:text-[18px] max-2xl:mt-[40px] max-xl:leading-[22px] max-xl:mt-[36px]">
                        “En Rombus encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación en nuestro país del programa de <span className="font-bold">HP, PremierA3</span>.”
                    </p>

                    <div className="mt-[32px] flex flex-col text-[18px] max-2xl:mt-[22px] max-xl:mb-[10px]">
                        <Image
                            src="/gustavo.png"
                            alt="Gustavo Zureta"
                            width={159}
                            height={159}
                            className="rounded-full object-cover max-2xl:w-[100px] max-xl:w-[80px]"
                        />
                        <p className="font-bold mt-4 max-2xl:text-[16px] max-xl:leading-[20px]">Gustavo Zureta</p>
                        <p className="font-medium max-2xl:text-[16px] max-xl:leading-[20px]">Director Ejecutivo de Procopias,</p>
                        <p className="font-medium max-2xl:text-[16px] max-xl:leading-[20px]">HP PremierA3 Argentina</p>
                    </div>
                </div>
            </div>

            <div className="w-[518px] h-[607px] border border-[#C1C1C1] rounded-[40px] overflow-hidden shadow-sm max-2xl:w-[350px] max-xl:w-[290px] max-xl:h-[480px]">
                <div className="px-[43px] pt-[40px] pb-[32px] flex flex-col h-full justify-between relative max-2xl:px-[30px] max-xl:px-[16px]">
                    <p className="text-[#D81FB9] text-[150px] italic rotate-180 inline-block absolute top-[-50px] left-[85px] leading-none font-medium max-2xl:top-[-66px] max-xl:left-[40px]">
                        "
                    </p>

                    <p className="mt-[70px] text-[20px] leading-[27px] text-black max-2xl:text-[18px] max-2xl:mt-[40px] max-xl:leading-[22px] max-xl:mt-[36px]">
                        “Coordinamos diversas campañas para empresas agroalimentarias de primera línea como <span className="font-bold">Dow Agro, Granix, Advanta Semillas y Fargo</span>, con óptimos resultados en la difusión y posicionamiento de sus productos”.
                    </p>

                    <div className="mt-[32px] flex flex-col text-[18px] max-2xl:mt-[22px] max-xl:mb-[10px]">
                        <Image
                            src="/eduardo.png"
                            alt="Eduardo Dubinsky"
                            width={159}
                            height={159}
                            className="rounded-full object-cover max-2xl:w-[100px] max-xl:w-[80px]"
                        />
                        <p className="font-bold mt-4 max-2xl:text-[16px] max-xl:leading-[20px]">Ing. Eduardo Dubinsky</p>
                        <p className="font-medium max-2xl:text-[16px] max-xl:leading-[20px]">Consultor Técnico Internacional en</p>
                        <p className="font-medium max-2xl:text-[16px] max-xl:leading-[20px]">Grasas y Aceites Comestibles</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonios
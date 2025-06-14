import React from 'react'
import Image from 'next/image'

function Testimonios() {
    return (
        <div className='flex justify-around bg-[#F4F0F0] mx-[104px] pb-[200px]'>
            <div className="w-[518px] h-[607px] border border-[#C1C1C1] rounded-[50px]">
                <div className="p-8 pl-[43px] flex flex-col h-full justify-between">
                    <p className="text-[#D81FB9] text-[135px] -mt-[37px]">"</p>
                    <p className="-mt-[90px] text-[20px] w-[432px]">
                        “Contratamos a Rombus en distintas oportunidades para la promoción de las principales marcas del portfolio: <strong>Amarula, Grants, Glenffidich, Bass Pale Ale</strong>. Siempre respondieron eficazmente, acorde a nuestras expectativas.”
                    </p>
                    <div>
                        <Image src="/fabian.png" alt="" width={159} height={159} />
                        <p className='font-bold'>Fabián Álvarez</p>
                        <p className='font-medium text-[18px]'>Regional Manager</p>
                        <p className='font-medium text-[18px]'>Wines & Spirits</p>
                    </div>
                </div>
            </div>

            <div className="w-[518px] h-[607px] border border-[#C1C1C1] rounded-[50px]">
                <div className="p-8 pl-[43px] flex flex-col h-full justify-between">
                    <p className="text-[#D81FB9] text-[135px] -mt-[37px]">"</p>
                    <p className="-mt-[90px] text-[20px] w-[432px]">
                        “En Rombus encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación en nuestro país del programa de <strong>HP, PremierA3</strong>.”
                    </p>
                    <div>
                        <Image src="/gustavo.png" alt="" width={159} height={159} />
                        <p className='font-bold'>Gustavo Zurueta</p>
                        <p className='font-medium text-[18px]'>Director Ejecutivo de Procopias,</p>
                        <p className='font-medium text-[18px]'>HP PremierA3 Argentina</p>
                    </div>
                </div>
            </div>

            <div className="w-[518px] h-[607px] border border-[#C1C1C1] rounded-[50px]">
                <div className="p-8 pl-[43px] flex flex-col h-full justify-between">
                    <p className="text-[#D81FB9] text-[135px] -mt-[37px]">"</p>
                    <p className="-mt-[90px] text-[20px] w-[432px]">
                        “Coordinamos diversas campañas para empresas agroalimentarias de primera línea como <strong>Dow Agro, Granix, Advanta Semillas y Fargo</strong>, con óptimos resultados en la difusión y posicionamiento de sus productos”.
                    </p>
                    <div>
                        <Image src="/eduardo.png" alt="" width={159} height={159} />
                        <p className='font-bold'>Ing. Eduardo Dubinsky</p>
                        <p className='font-medium text-[19px]'>Consultor Técnico Internacional en</p>
                        <p className='font-medium text-[18px]'>Grasas y Aceites Comestibles</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonios
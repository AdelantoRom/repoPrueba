import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselMarcas from '../../CarouselMarcas/CarouselMarcas'
import Footer from '@/components/Footer/Footer'

function HpMobile() {
    return (
        <div className='mt-25'>
            <div >
                <Link href={"/"} className='block text-black ml-5 mt-28'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col  items-center mt-5'>
                <Image
                    src="/hp3.png"
                    alt="HP"
                    width={635}
                    height={676}
                    className='rounded-2xl max-md:w-[535px] max-md:h-[576px] max-sm:w-[335px] max-sm:h-[376px] shadow-2xl mb-5'
                />
                <Image
                    src="/logopremier.png"
                    alt="Logo HP"
                    width={114}
                    height={62}
                />
            </div>

            <div className=' text-black ml-3 h-[579px] flex flex-col justify-evenly  px-10'>
                <p className='text-[#747474] text-[16px] '>Caso</p>
                <h1 className="text-[24px] leading-[24px] font-semibold">HP Programa Premier A3</h1>
                <p className="text-[18px] font-light md:font-normal leading-[24px]">
                    En su búsqueda por reinventar el mercado de impresión en América Latina, HP ofrece el más completo portafolio de impresión en formato A3 en el mundo. Los Canales Premier A3 ya operan en México, Brasil, Colombia, Perú, Chile y Argentina.</p>
                <p className="text-[18px] italic font-medium leading-[24px]">
                    “En Rombux encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación en nuestro país del programa de HP PremierA3.”
                </p>
                
                <p className="text-[16px] font-light md:font-normal leading-[24px]">
                    Gustavo Zurueta, Director Ejecutivo de Procopias, representante de HP Premier A3 en Argentina.
                </p>
            </div>
            <div className='bg-[#F4F0F0] h-[373px] flex flex-col items-center'>
                <p className='text-black text-[18px] leading-[24px] ml-3 px-10 py-8'>Conozca algunos de los casos atendidos por los talentos de nuestra plataforma:</p>
                <CarouselMarcas />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HpMobile
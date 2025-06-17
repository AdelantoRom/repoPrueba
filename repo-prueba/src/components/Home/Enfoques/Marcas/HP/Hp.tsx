// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModal = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50">
            <div className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-3xl font-bold text-[#D81FB9] border border-[#D81FB9] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#D81FB9]/10 transition"
                >
                    X
                </button>
                <div className=' w-[650px] mx-4'>
                    <div className='w-[600px] h-[679px] flex flex-col justify-around'>
                        <Link href={"/"} className='text-[#747474] text-[22px]'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-4">HP Programa Premier A3</h1>
                        <p className="mb-4 text-[20px] font-light">
                            En su búsqueda por reinventar el mercado de impresión en América Latina, HP ofrece el más completo
                            portafolio de impresión en formato A3 en el mundo. Los Canales Premier A3 ya operan en México, Brasil,
                            Colombia, Perú, Chile y Argentina.
                        </p>
                        <p className="italic mb-4 text-[20px] font-medium">
                            “En Rombux encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación
                            en nuestro país del programa de HP PremierA3.”
                        </p>
                        <div className="mb-4 text-[18px]">
                            <p>Gustavo Zurueta, Director</p>
                            <p>Ejecutivo de Procopias,</p>
                            <p>representante de HP</p>
                            <p>Premier A3 en Argentina.</p>
                        </div>
                        <Image src="/logopremier.png" alt="Logo HP" width={163} height={89} className='-mb-12' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/BannerOjo.jpg"
                        alt="Banner Ojo"
                        width={303}
                        height={679}
                        className="rounded-l-3xl"
                    />
                    <Image
                        src="/BannerMano.jpg"
                        alt="Banner Mano"
                        width={303}
                        height={679}
                        className="rounded-r-3xl"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                        <Image
                            src="/HP-3.jpg"
                            alt="Logo HP"
                            width={341}
                            height={268}
                            className="object-contain"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PopupModal

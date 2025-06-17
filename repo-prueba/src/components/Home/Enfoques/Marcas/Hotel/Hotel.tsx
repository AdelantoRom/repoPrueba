// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalHotel = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50">
            <div className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">
                    ×
                </button>
                <div className=' w-[650px] mx-4'>
                    <div className='w-[610px] h-[579px] flex flex-col justify-around'>
                        <Link href={"/"} className='text-[#747474] text-[22px] mt-6 mb-5'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-6 leading-[36px]">Hotel Marketing and Technology</h1>
                        <p className="mb-4 text-[20px] font-light leading-[28px]">
                            HMandT es una empresa de servicios turísticos con base en Ontario-Canadá, dedicada al marketing de hoteles y reservas.</p>
                        <p className="mb-4 text-[20px] font-light leading-[28px]">
                            Creamos su identidad marcaria, apelando a atributos de clara significación: el mundo y la estrella mirados desde una ventanilla o pantalla. Diseñamos su página de presentación, incluyendo las ofertas y destinos preferidos para el alojamiento, traslados y viajes.
                        </p>
                        <p className="italic mb-10 text-[20px] font-medium leading-[28px]">
                            En base a una alianza como Affiliate Partner de Booking.com y Rentalcars.com, integramos Book engine para el sistema automático de reservas.
                        </p>

                        <Image src="/hmandt.jpg" alt="Logo Hotel" width={340} height={98} className='-mb-28' />
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

export default PopupModalHotel;

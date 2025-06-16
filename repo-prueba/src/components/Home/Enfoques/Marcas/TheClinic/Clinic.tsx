// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalClinic = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50">
            <div className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">
                    ×
                </button>
                <div className=' w-[650px] mx-4'>
                    <div className='w-[600px] h-[679px] flex flex-col justify-around'>
                        <Link href={"/"} className='text-[#747474] text-[22px]'>Caso</Link>
                        <h1 className="text-[36px] font-semibold mb-4">Perfiles: CM Fresh</h1>
                        <p className="mb-4 text-[20px] font-light">
                            Para poder reflejar lo que sucede en la cultura millenial, el semanario chileno The Clinic realizó una serie de entrevistas a jóvenes que realizan hechos innovadores, que rompen los cánones de lo que está bien y está mal y que, utilizando las redes sociales, han logrado salir adelante.
                        </p>
                        <p className="italic mb-4 text-[20px] font-medium">
                            Este es el perfil de Midelson Ceresier, que a sus 24 años, se ha convertido en uno de los más jóvenes exponentes del trap haitiano made in Chile. Llegó al país hace dos años, período en el que trabajó en la construcción, escribió canciones y perdió a su madre.
                        </p>
                        <div className="mb-4 text-[18px]">
                            <p>Hoy, con dos sencillos publicados bajo el nombre de CM Fresh, Midelson es considerado un pequeño trap star en la escena urbana chilena.</p>

                        </div>
                        <Image src="/theclinic.png" alt="Logo Clinic" width={180} height={55} className='-mb-12' />
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

export default PopupModalClinic

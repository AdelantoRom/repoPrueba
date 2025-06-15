// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'

type Props = {
    onClose: () => void
}

const PopupModal = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative">
                {/* Botón de cierre */}
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">
                    ×
                </button>

                {/* Contenido */}
                <div className='flex flex-col justify-around h-full'>
                    <h1 className="text-3xl font-bold mb-4">HP Programa Premier A3</h1>
                    <p className="mb-4">
                        En su búsqueda por reinventar el mercado de impresión en América Latina, HP ofrece el más completo
                        portafolio de impresión en formato A3 en el mundo. Los Canales Premier A3 ya operan en México, Brasil,
                        Colombia, Perú, Chile y Argentina.
                    </p>
                    <p className="italic mb-4">
                        “En Rombux encontramos una respuesta de alta calidad, flexible y de rápida resolución para la presentación
                        en nuestro país del programa de HP PremierA3.”
                    </p>
                    <div className="mb-4">
                        <p>Gustavo Zurueta, Director</p>
                        <p>Ejecutivo de Procopias,</p>
                        <p>representante de HP</p>
                        <p>Premier A3 en Argentina.</p>
                    </div>
                    <Image src="/logopremier.png" alt="Logo HP" width={163} height={89} />
                </div>
            </div>
        </div>
    )
}

export default PopupModal

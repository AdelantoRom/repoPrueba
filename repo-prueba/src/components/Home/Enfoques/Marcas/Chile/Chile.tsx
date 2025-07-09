// components/PopupModal.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    onClose: () => void
}

const PopupModalChile = ({ onClose }: Props) => {
    return (
        <div className="fixed inset-0 bg-gray-400/90 flex justify-center items-center z-50 ">
            <div className="bg-white w-[1382px] rounded-3xl h-[828px] p-10 relative flex max-2xl:w-[1000px] max-2xl:h-[657px] max-2xl:p-7 max-xl:w-[950px] max-xl:h-[550px]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[16px] font-bold text-[#D81FB9] border border-[#D81FB9] rounded-full w-7 h-7 flex items-center justify-center hover:bg-[#D81FB9]/10 transition max-2xl:w-6 max-2xl:h-6 max-2xl:text-xl"
                >
                    X
                </button>
                <div className='w-[650px] mx-4 max-xl:w-[450px]'>
                    <div className='w-[606px] h-[679px] ml-4 flex flex-col justify-around max-xl:w-[450px] max-2xl:w-[450px] max-2xl:justify-start '>

                        <Link href={"/"} className='text-[#747474] text-[20px] max-2xl:text-[19px] max-xl:text-[16px] max-2xl:mb-4 max-2xl:mt-7 max-xl:mt-3 max-xl:mb-2'>Caso</Link>

                        <h1 className="text-[36px] -mt-15 font-bold max-2xl:text-[30px] max-xl:text-[24px] max-2xl:mb-3 max-xl:mb-5">De Chile con Amor</h1>
                        <p className=" text-[16px] -mt-10 leading-[24px] max-2xl:text-[18px] max-2xl:mb-3 max-xl:mb-5">
                            Nos propusimos llevar ese sabor entrañable de las comidas chilenas a compatriotas de todo el mundo. Creamos un sitio web donde podías postular a un ser querido y participar para que Súper Pollo se encargara de llevarle un plato típico de la gastronomía chilena a cualquier lugar del planeta.
                        </p>
                        <p className="italic -mt-10 mb-4 text-[16px] font-medium leading-[24px] max-2xl:text-[18px] max-2xl:mb-3 max-xl:mb-6">
                            Cientos de personas se inscribieron y un mes después viajamos a New York y Toronto, contactamos a dos chef chilenos y grabamos una linda sorpresa.
                        </p>
                        <div className="mb-4 text-[16px] leading-[24px] max-2xl:text-[16px] max-2xl:mb-5 max-xl:mb-0">
                            <p className='font-medium'>Resultados:</p>
                            <p>• 500.000 visualizaciones en Facebook (497.371).</p>
                            <p>• 10.000 visualizaciones en YouTube.</p>
                            <p>Y toda una comunidad emocionada y agradecida</p>
                        </div>
                        <Image src="/superpollo.png" alt="Logo Super Pollo" width={141} height={95} className='-mb-12 max-2xl:w-[100px] max-xl:hidden' />
                    </div>
                </div>
                <div className="relative flex content-center w-[606px] h-[679px] mt-8">
                    <Image
                        src="/Chile.png"
                        alt="Banner Ojo"
                        width={606}
                        height={680}
                        className="rounded-3xl shadow-xl max-2xl:h-[550px] max-xl:h-[448px] max-xl:w-[399px] "
                    />
                </div>
            </div>
        </div>
    )
}

export default PopupModalChile

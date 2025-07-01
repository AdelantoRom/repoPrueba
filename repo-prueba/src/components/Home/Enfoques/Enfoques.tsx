import React from 'react'
import Grid from './Grid'
import Testimonios from './Testimonios'

function Enfoques() {
    return (
        <div className='bg-[#F4F0F0] text-black'>
            <div className='flex pt-[286px] max-2xl:pt-[200px]'>
                <div className='flex flex-col ml-[137px] w-[629px] leading-[36px] max-xl:hidden'>
                    <h2 className='font-semibold text-[32px] max-2xl:text-[28px]'>Talento global</h2>
                    <p className='text-[24px] max-2xl:text-[20px] max-2xl:w-[450px]'>Rombux reúne a profesionales calificados de 23 países, en más de 50 especialidades, para atender las necesidades de empresas de todo el mundo. Conozca algunos de los casos atendidos por los talentos de nuestra plataforma.</p>
                </div>
                <div className='w-[720px] ml-[348px] leading-none -mt-[20px] max-2xl:ml-[200px] max-xl:ml-[620px] max-lg:ml-[10px]'>
                    <h2 className='text-[120px] ml-[286px] max-2xl:text-[70px] max-2xl:ml-[165px] max-lg:ml-0'>Casos/ </h2>
                    <h2 className='text-[120px] max-2xl:text-[70px]'>Testimonios </h2>
                    
                </div>
            </div>
            <div className='flex justify-center mt-[90px] mb-[60px]'>
                <Grid/>
            </div>
            <div>
                <Testimonios/>
            </div>
        </div>
    )
}

export default Enfoques
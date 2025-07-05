import React from 'react'
import Grid from './Grid'
import Testimonios from './Testimonios'

function Enfoques() {
    return (
        <div className='bg-[#F4F0F0] text-black'>
            <div className='flex pt-[216px] max-2xl:pt-[200px]'>
                <div className='relative -top-[46px] flex flex-col ml-[289px] w-[629px] leading-[36px] max-xl:hidden'>
                    <h2 className='text-[32px] max-2xl:text-[28px]'>Talento global</h2>
                    <p className='text-[20px] leading-[28px] w-[582px] max-2xl:text-[20px] max-2xl:w-[450px] mt-[35px]'>Rombux reúne a profesionales calificados de 23 países, en más de 50 especialidades, para atender las necesidades de empresas de todo el mundo. Conozca algunos de los casos atendidos por los talentos de nuestra plataforma.</p>
                </div>
                <div className='relative top-[3px] w-[720px] ml-[197px] leading-none -mt-[20px] max-2xl:ml-[200px] max-xl:ml-[620px] max-lg:ml-[10px]'>
                    <h2 className='text-[80px] leading-[80px] ml-[265px] max-2xl:text-[70px] max-2xl:ml-[165px] max-lg:ml-0'>Casos/ </h2>
                    <h2 className='text-[80px] leading-[80px] max-2xl:text-[70px] ml-[74px]'>Testimonios </h2>
                    
                </div>
            </div>
            <div className='flex justify-center mt-[28px] mb-[60px]'>
                <Grid/>
            </div>
            <div>
                <Testimonios/>
            </div>
        </div>
    )
}

export default Enfoques
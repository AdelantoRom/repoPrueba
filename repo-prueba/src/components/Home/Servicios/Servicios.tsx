import React from 'react'
import Image from 'next/image'

function Servicios() {
    return (

        <div>
            <div className='w-[911px] ml-[139px] mt-[241px] '>
                <h2 className='text-[#D81FB9] text-[120px] font-albert  '>Servicios</h2>
                <h3 className='text-black text-[64px] font-light leading-none pt-[12px]'>Soluciones híperpersonalizadas para tu empresa</h3>
            </div>
            <div>
                <Image
                    src="/mujervioleta.png"
                    width={860}
                    height={500}
                    alt="Person"
                />
                <p>Benchmarking</p>
                <p>Branding</p>
                <p>Marketing Digital</p>
                <p>Growth</p>
                <p>Data + IA</p>
            </div>
        </div>
    )
}

export default Servicios
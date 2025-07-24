import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function BinMobile() {
    return (
        <div className='mt-25'>
            <div>
                <Link href={"/"} className='text-black'>&lt; Volver</Link>

            </div>
            <div className='flex flex-col justify-center items-center'>
                <Image
                    src="/Bintelligenz.png"
                        alt="Hotel"
                    width={535}
                    height={576}
                    className='rounded-2xl'
                />
                <Image
                    src="/binlogo.png"
                    alt="Logo Hotel"
                    width={208}
                    height={55}
                />
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default BinMobile
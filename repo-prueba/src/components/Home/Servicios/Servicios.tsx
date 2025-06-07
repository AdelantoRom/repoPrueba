"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
    title?: string;  
    description?: string;
    link?: string;
    isOpen?: boolean;
    icon?: string;
}

export default function Servicios({ icon, title, description, link }: Props) {
    const [open, setOpen] = useState(false);
    return (

        <div>
            <div className='w-[911px] ml-[139px] mt-[241px] '>
                <h2 className='text-[#D81FB9] text-[120px] font-albert  '>Servicios</h2>
                <h3 className='text-black text-[64px] font-light leading-none pt-[12px]'>Soluciones híperpersonalizadas para tu empresa</h3>
            </div>
            <div className='flex'>
                <Image
                    src="/redvioleta.png"
                    width={891}
                    height={500}
                    alt="Person"
                    className='-mt-[32px] -ml-[29px]'
                />
                <div className="border-t border-pink-500">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full flex items-center justify-between px-4 py-3"
                    >
                        <div className="flex items-center gap-3">
                            <Image 
                            src={icon as string} 
                            alt="title" 
                            width={32} 
                            height={32} 
                            />
                            <span className="text-lg font-medium">{title}</span>
                        </div>
                        {open ? (
                            <ChevronUp className="text-pink-500" />
                        ) : (
                            <ChevronDown className="text-pink-500" />
                        )}
                    </button>

                    {open && description && (
                        <div className="px-16 pb-4 text-sm text-gray-800">
                            <p className="italic">{description}</p>
                            {link && (
                                <p className="pt-1 font-semibold text-pink-600 hover:underline">
                                    <a href={link}>(Leer más)</a>
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

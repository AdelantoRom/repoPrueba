// components/ServicioItem.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
    title: string;
    description?: string;
    link?: string;
    icon: string;
}

export default function ServicioItem({ icon, title, description, link }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-t border-[#D81FB9]  mb-5">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3"
            >
                <div className="flex items-center gap-3 mt-[22px] ">
                    <Image 
                        src={icon} 
                        alt={title} 
                        width={60} 
                        height={60} 
                        className="-ml-[12px] max-xl:w-[40px]"/>
                    <span className="text-5xl font-normal ml-[31px] -mt-2 max-2xl:text-[40px] max-xl:text-[36px] max-xl:ml-2">{title}</span>
                </div>
                {open ? (
                    <ChevronUp className="text-[#D81FB9] w-[55px] h-[55px] -mr-7" />
                ) : (
                    <ChevronDown className="text-[#D81FB9] w-[55px] h-[55px] -mr-7" />
                )}
            </button>

            {open && description && (
                <div className="px-16 pb-4 text-[40px] max-2xl:text-[30px] max-xl:text-[24px] text-gray-800 ml-[40px] max-xl:px-6">
                    <p className="italic font-light -mt-[14px]">{description}</p>
                    {link && (
                        <p className="pt-1 font-bold text-[32px] ml-[3px] -mt-[7px] mb-1 text-[#D81FB9] max-2xl:text-[20px] max-xl:text-[16px]">
                            <a href={link}>(Leer más)</a>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

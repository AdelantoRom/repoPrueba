// components/Servicios.tsx
"use client";

import Image from "next/image";
import ServicioItem from "./ServicioItem";
import Enfoque from "../Enfoque/Enfoque";

export default function Servicios() {
    return (
        <div>
            <div className="w-[911px] ml-[139px] mt-[241px]">
                <h2 className="text-[#D81FB9] text-[120px] font-albert">Servicios</h2>
                <h3 className="text-black text-[64px] font-light leading-none pt-[12px]">
                    Soluciones híperpersonalizadas para tu empresa
                </h3>
            </div>

            <div className="flex">
                <div className="flex justify-center items-center min-h-screen pl-17 -mt-16 pr-[94px]">
                    <div className="relative w-[700px] h-[630px] overflow-visible">

                        <div className="relative w-[583px] h-[555px] m-auto flex justify-center items-center mt-[40px]">
                            <Image
                                src="/hombreesfera.png"
                                alt="Fondo"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>

                        <div className="absolute top-1/2 left-1/2 w-[700px] h-[630px] -translate-x-1/2 -translate-y-1/2 z-10 animate-spin [animation-duration:450s]">
                            <Image
                                src="/redfucsia.png"
                                alt="Decoración giratoria"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[866px] ml-[48px] mt-[113px] text-black ">
                    <ServicioItem
                        title="Benchmarking"
                        icon="/diamante.png"
                        description="Descubre y proyecta tu valor único."
                        link="#"
                    />
                    <ServicioItem
                        title="Branding"
                        icon="/pincel.png"
                        description="Construye una marca con impacto y reputación."
                        link="#"
                    />
                    <ServicioItem
                        title="Marketing Digital"
                        icon="/dardo.png"
                        description="Conecta con tu público allí donde está y desata el potencial único de tu marca."
                        link="#"
                    />
                    <ServicioItem
                        title="Growth"
                        icon="/money.png"
                        description="Escala tu negocio y consolida tu liderazgo."
                        link="#"
                    />
                    <div className="border-b border-[#D81FB9]">
                    <ServicioItem
                        title="Data + IA"
                        icon="/cerebro.png"
                        description="Dirige tu expansión con información clave y conocimiento predictivo."
                        link="#"
                    />
                    </div>
                </div>
            </div>
            <div>
                <Enfoque />
            </div>
        </div>
    );
}

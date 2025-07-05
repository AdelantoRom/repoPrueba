"use client";

import Image from "next/image";
import ServicioItem from "./ServicioItem";
import Enfoque from "../Enfoque/Enfoque";

export default function Servicios() {
    return (
        <div>
            <div className="w-[911px] ml-[293px] mt-[149px] max-xl:ml-[80px]">
                <h2 className="text-[#D81FB9] text-[80px] leading-[80px] max-xl:text-[70px]">Servicios</h2>
                <h3 className="text-black text-[48px] leading-none pt-[26px] max-xl:text-[36px] max-xl:w-[513px]">
                    Soluciones híperpersonalizadas <br /> para tu empresa
                </h3>
            </div>

            <div className="flex items-start">
                <div className="flex justify-center pl-17 -mt-[54px] pr-[94px] max-2xl:pr-0 max-xl:pl-0 ">
                    <div className="relative w-[700px] h-[630px] overflow-visible mt-40 max-2xl:w-[600px] max-2xl:mt-10 max-xl:w-[450px]">

                        <div className="relative ml-[200px] w-[473px] max-2xl:w-[380px] max-xl:w-[280px] h-[445px] m-auto flex justify-center items-center mt-[40px]">
                            <Image
                                src="/hombreesfera.png"
                                alt="Fondo"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                            <div className="absolute top-1/2 left-1/2 w-[580px] max-2xl:w-[435px] max-xl:w-[335px] h-[510px] -translate-x-1/2 -translate-y-1/2 z-10 animate-spin [animation-duration:200s]">
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
                </div>

                <div className="flex flex-col w-[702px] ml-[69px] max-2xl:ml-[20px] mt-[169px] text-black max-2xl:w-[557px] max-xl:w-[500px] max-xl:ml-0">
                    <ServicioItem
                        title="Benchmarking"
                        icon="/diamante.png"
                        description="Descubre y proyecta tu valor único."
                        link="/benchmarking"
                    />
                    <ServicioItem
                        title="Branding"
                        icon="/pincel.png"
                        description="Construye una marca con impacto y reputación."
                        link="/branding"
                    />
                    <ServicioItem
                        title="Marketing Digital"
                        icon="/dardo.png"
                        description="Conecta con tu público allí donde está y desata el potencial único de tu marca."
                        link="/marketing"
                    />
                    <ServicioItem
                        title="Growth"
                        icon="/money.png"
                        description="Escala tu negocio y consolida tu liderazgo."
                        link="/growth"
                    />
                    <ServicioItem
                        title="Data+IA"
                        icon="/cerebro.png"
                        description="Dirige tu expansión con información clave y conocimiento predictivo."
                        link="/data"
                    />
                </div>
            </div>
            <div>
                <Enfoque />
            </div>
        </div>
    );
}

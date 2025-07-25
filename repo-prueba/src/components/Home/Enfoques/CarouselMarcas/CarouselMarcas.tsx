"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
    { id: 1, src: "/hpcarousel.jpg" },
    { id: 2, src: "/chilecarousel.png" },
    { id: 3, src: "/cliniccarousel.jpg" },
    { id: 4, src: "/natreoncarousel.jpg" },
    { id: 5, src: "/hotelcarousel.png" },
    { id: 6, src: "/bincarousel.png" },
];

const CarouselMarcas = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    const calculateWidth = () => {
        if (carouselRef.current && innerRef.current) {
            const scrollWidth = innerRef.current.scrollWidth;
            const offsetWidth = carouselRef.current.offsetWidth;
            setWidth(scrollWidth - offsetWidth);
        }
    };

    useEffect(() => {
        calculateWidth();
        window.addEventListener("resize", calculateWidth);
        return () => window.removeEventListener("resize", calculateWidth);
    }, []);

    return (
        <div
            className="overflow-hidden w-full px-4 sm:px-8" // padding lateral para que no se pegue
            ref={carouselRef}
        >
            <motion.div
                className="flex gap-2 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                ref={innerRef}
            >
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="min-w-[80vw] sm:min-w-[300px] h-[200px] relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100"
                    >
                        <img
                            src={img.src}
                            alt={`Imagen ${img.id}`}
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                        <button
                            className="absolute bottom-2 left-2 bg-white w-6 h-6 text-md rounded-full shadow border border-[#D81FB9] text-[#D81FB9]"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={() => alert(`Botón de imagen ${img.id}`)}
                        >
                            +
                        </button>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CarouselMarcas;

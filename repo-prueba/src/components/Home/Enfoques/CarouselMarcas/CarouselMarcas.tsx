"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
    { id: 1, src: "/hpcarousel.jpg", href: "/hp" },
    { id: 2, src: "/chilecarousel.png", href: "/chile" },
    { id: 3, src: "/cliniccarousel.jpg", href: "/clinic" },
    { id: 4, src: "/natreoncarousel.jpg", href: "/natreon" },
    { id: 5, src: "/hotel.png", href: "/hotel" },
    { id: 6, src: "/bincarousel.png", href: "/bintelligenz" },
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
            className="overflow-hidden w-full px-4 sm:px-8"
            ref={carouselRef}
        >
            <motion.div
                className="flex gap-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                ref={innerRef}
            >
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="w-full min-w-[calc(100%-1rem)] sm:min-w-[300px] max-w-[500px] h-[200px] relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100"
                    >
                        <img
                            src={img.src}
                            alt={`Imagen ${img.id}`}
                            className="w-full h-full object-cover aspect-video"
                            draggable={false}
                        />
                        <Link
                            href={img.href}
                            className="absolute bottom-2 left-2 w-8 h-8 bg-white rounded-full shadow border border-[#D81FB9] text-[#D81FB9] flex items-center justify-center text-[28px] font-medium z-10"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                        >
                            +
                        </Link>
                    </div>
                ))}
            </motion.div>
        </div>

    );
};

export default CarouselMarcas;

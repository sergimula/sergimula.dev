'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

import MotoIconSVG from '@/assets/motorcycle.svg'

const MotorcycleIcon = () => {
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (hover) {
            const wheelie = setTimeout(() => setHover(false), 1000);
            return () => clearTimeout(wheelie);
        }
    }, [hover]);

    return (
        <Image
            className={`duration-500 mt-2 mb-2 block ${hover ? "-rotate-45 cursor-grabbing" : ""}`}
            onMouseOver={() => setHover(true)}
            src={MotoIconSVG}
            alt="Motorcycle Icon"
            width={50}
            height={50}
        />
    )
};

export default MotorcycleIcon;

"use client";

import "./TopImage.css";
import Image from "next/image";
import { FC, useState } from "react";

type TopImageProps = {
    src: string;
    srclite: string;
};

export const TopImage: FC<TopImageProps> = ({ src, srclite }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className="topimage"
            style={{
                backgroundImage: `url(${srclite})`
            }}
        >
            <Image
                src={src}
                className={`topimage__image ${loaded ? "loaded" : ""}`}
                alt="Фоновая картинка"
                fill
                // priority
                onLoad={() => setLoaded(true)}
                sizes="(max-width: 425px) 75vw, 100vw"
            />
        </div>
    );
};

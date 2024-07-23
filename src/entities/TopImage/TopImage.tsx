"use client";

import "./TopImage.css";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

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
                // className="topimage__image"
                alt="Фоновая картинка"
                fill
                priority
                // blurDataURL={srclite}
                // placeholder="blur"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

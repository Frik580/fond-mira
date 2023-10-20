// "use client";

import "./TopImage.css";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { FC, useState } from "react";

type TopImageProps = {
    src: string | StaticImageData;
    srclite?: string | undefined;
};

export const TopImage: FC<TopImageProps> = ({ src, srclite }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className="topimage"
            style={{
                backgroundImage: `url(${srclite})`,
            }}
        >
            <Image
                src={src}
                className={`topimage__image ${loaded ? "loaded" : ""}`}
                alt="Фоновая картинка"
                fill
                priority
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

// "use client";

import "./Image.css";
import Image from "next/image";
import { FC, useState } from "react";
import { CarouselItemType } from "@/shared/models/Models";

export const NewsImage: FC<CarouselItemType> = ({
    src,
    srclite,
    height,
    width,
    i,
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <div
                className="carouselimage"
                style={{
                    height: height,
                    width: width,
                    backgroundImage: `url(${srclite})`,
                }}
            >
                <Image
                    src={src}
                    className={`carouselimage__image ${loaded ? "loaded" : ""}`}
                    width={400}
                    height={400}
                    alt={`фото ${i}`}
                    onLoad={() => setLoaded(true)}
                />
            </div>
        </>
    );
};

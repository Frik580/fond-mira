// "use client";

import "./TopImage.css";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { FC } from "react";

type TopImageProps = {
    src: string | StaticImageData;
};

export const TopImage: FC<TopImageProps> = ({ src }) => {
    return (
        <div className="topimage">
            <Image
                src={src}
                className="topimage__image"
                alt="Фоновая картинка"
                fill
                priority
            />
        </div>
    );
};

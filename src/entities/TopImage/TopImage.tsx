"use client";

import toDataURL from "@/features/ToDataUrl/ToDataUrl";
import "./TopImage.css";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

type TopImageProps = {
    src: string;
    srclite: string;
};

export const TopImage: FC<TopImageProps> = ({ src, srclite }) => {
    const [srcBase64, setSrcBase64] = useState("");

    useEffect(() => {
        toDataURL(srclite).then((dataUrl) => {
            typeof dataUrl === "string" && setSrcBase64(dataUrl);
        });
    }, [srclite]);

    return (
        <div className="topimage">
            <Image
                src={src}
                className={`topimage__image`}
                alt="Фоновая картинка"
                fill
                sizes="(max-width: 425px) 75vw, 100vw"
                placeholder={!!srcBase64 ? "blur" : "empty"}
                blurDataURL={!!srcBase64 ? srcBase64 : ""}
            />
        </div>
    );
};

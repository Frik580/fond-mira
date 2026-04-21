// "use client";

// import toDataURL from "@/features/ToDataUrl/ToDataUrl";
import "./TopImage.css";
import Image from "next/image";
// import { FC, useEffect, useState } from "react";

type TopImageProps = {
    src: string;
    srclite: string;
};

// export const TopImage: FC<TopImageProps> = ({ src, srclite }) => {
//     const [srcBase64, setSrcBase64] = useState("");

// useEffect(() => {
//     toDataURL(srclite).then((dataUrl) => {
//         typeof dataUrl === "string" && setSrcBase64(dataUrl);
//     });
// }, [srclite]);

/**
 * Функция для получения base64 на стороне сервера.
 * Она выполняется во время сборки (SSG) или рендеринга на сервере (SSR).
 */
async function getBase64(url: string): Promise<string> {
    try {
        const res = await fetch(url);
        if (!res.ok) return "";
        const buffer = await res.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        const contentType = res.headers.get("content-type") || "image/webp";
        return `data:${contentType};base64,${base64}`;
    } catch (e) {
        console.error("Ошибка при генерации blurDataURL:", e);
        return "";
    }
}

export const TopImage = async ({ src, srclite }: TopImageProps) => {
    const blurDataURL = await getBase64(srclite);

    return (
        <div className="topimage">
            <Image
                src={src}
                className="topimage__image"
                alt="Фоновая картинка"
                fill
                sizes="(max-width: 425px) 75vw, 100vw"
                // placeholder={!!srcBase64 ? "blur" : "empty"}
                // blurDataURL={!!srcBase64 ? srcBase64 : ""}
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                priority
            />
        </div>
    );
};

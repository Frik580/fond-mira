// "use client";

import "./TopImage.css";
import Image from "next/image";

type TopImageProps = {
    src: string;
    srclite: string;
};

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
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                priority
            />
        </div>
    );
};

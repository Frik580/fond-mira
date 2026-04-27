// "use client";

import "./TopImage.css";
import Image from "next/image";

type TopImageProps = {
    src: string;
    srcPC?: string;
    srcTablet?: string;
    srcMobile?: string;
    srclite: string;
    isInitialPage?: boolean;
};

async function getBase64(url: string): Promise<string> {
    try {
        const res = await fetch(url, { cache: "force-cache" });
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

export const TopImage = async ({
    src,
    srcPC,
    srcTablet,
    srcMobile,
    srclite,
    isInitialPage = false,
}: TopImageProps) => {
    const blurDataURL = await getBase64(srclite);
    const placeholderProps = blurDataURL
        ? { placeholder: "blur" as const, blurDataURL }
        : {};

    return (
        <div className="topimage">
            {/* Desktop Version */}
            <Image
                src={src}
                className={`topimage__image ${
                    isInitialPage ? "header_gradient" : ""
                }`}
                alt="Фоновая картинка"
                fill
                sizes="100vw"
                {...placeholderProps}
                priority
            />

            {/* Адаптивные версии только для начальной страницы */}
            {isInitialPage && (
                <>
                    {srcPC && (
                        <Image
                            src={srcPC}
                            className="topimage__image topimage__image--PC"
                            alt="Фоновая картинка PC"
                            fill
                            sizes="100vw"
                            {...placeholderProps}
                            priority
                        />
                    )}
                    {srcTablet && (
                        <Image
                            src={srcTablet}
                            className="topimage__image topimage__image--tablet"
                            alt="Фоновая картинка Tablet"
                            fill
                            sizes="100vw"
                            {...placeholderProps}
                            priority
                        />
                    )}
                    {srcMobile && (
                        <Image
                            src={srcMobile}
                            className="topimage__image topimage__image--mobile"
                            alt="Фоновая картинка Mobile"
                            fill
                            sizes="100vw"
                            {...placeholderProps}
                            priority
                        />
                    )}
                </>
            )}
        </div>
    );
};

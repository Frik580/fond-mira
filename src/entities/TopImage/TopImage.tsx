"use client";

import "./TopImage.css";
import Image from "next/image";
import { useState, useEffect } from "react";

// Cache for blurDataURLs to avoid re-fetching and re-processing the same image on subsequent renders
const blurDataURLCache = new Map<string, string>();

type TopImageProps = {
    src: string;
    srcPC?: string;
    srcTablet?: string;
    srcMobile?: string;
    srclite: string;
};

// Функция для получения Base64 представления изображения для blurDataURL
async function getBase64(url: string): Promise<string> {
    // Проверяем кэш перед выполнением запроса
    if (blurDataURLCache.has(url)) {
        return blurDataURLCache.get(url)!;
    }

    try {
        const res = await fetch(url, { cache: "force-cache" });
        if (!res.ok) {
            console.warn(
                `Failed to fetch blur image from ${url}: ${res.status} ${res.statusText}`,
            );
            return "";
        }
        const buffer = await res.arrayBuffer();
        // Клиентская замена Buffer для конвертации в base64
        const base64 = btoa(
            new Uint8Array(buffer).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                "",
            ),
        );
        const contentType = res.headers.get("content-type") || "image/webp";
        const dataUrl = `data:${contentType};base64,${base64}`;

        // Сохраняем результат в кэш
        blurDataURLCache.set(url, dataUrl);
        return dataUrl;
    } catch (e) {
        console.error(`Ошибка при генерации blurDataURL для ${url}:`, e);
        return "";
    }
}

export const TopImage = ({
    src,
    srcPC,
    srcTablet,
    srcMobile,
    srclite,
}: TopImageProps) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [blurDataURL, setBlurDataURL] = useState("");

    // Загрузка блюра при монтировании
    useEffect(() => {
        getBase64(srclite).then(setBlurDataURL);
    }, [srclite]);

    // Логика смены src в зависимости от ширины (Art Direction)
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (srcMobile && width <= 800) {
                setCurrentSrc(srcMobile);
            } else if (srcTablet && width <= 1200) {
                setCurrentSrc(srcTablet);
            } else if (srcPC && width <= 1600) {
                setCurrentSrc(srcPC);
            } else {
                setCurrentSrc(src);
            }
        };

        handleResize(); // Инициализация
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [src, srcPC, srcTablet, srcMobile]);

    return (
        <div className="topimage">
            <Image
                src={currentSrc}
                alt="Фоновая картинка"
                fill
                priority
                sizes="100vw"
                className="topimage__image"
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL || undefined}
            />
        </div>
    );
};

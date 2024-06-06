"use client";

import "./TopNews.css";
import { useRef } from "react";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from "./New_header.webp";
import imagelite from "./lite/New_header _lite.webp";
import Link from "next/link";

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    return (
        <section className="top-news">
            <TopImage src={image} srclite={imagelite.src} />
            <div ref={ref} className="top-news__title-conteiner" />
            <div className="top-news__text-conteiner">
                {/* <div className="top-news__line" /> */}
                <p className="top-news__title">Наше лето - 2024</p>
                <p className="top-news__text">
                    Реализация проекта &laquo;КОД Семьи по-Пермски&raquo;<br/>
                    (городской конкурс &laquo;Город - это мы!&raquo;).{" "}
                    {/* <Link
                        href="https://vk.com/pkuchenikgoda"
                        className="top-news__text top-news__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        - Краевой конкурс &#171;Ученик года - 2024&#187;. Финал - 13
                    апреля 2024
                    </Link> */}
                </p>
            </div>
        </section>
    );
};

"use client";

import "./TopNews.css";
import { useRef } from "react";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from "./New_header.png";
import imagelite from "./lite/New_header_lite.png";
import Link from "next/link";

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    return (
        <section className="top-news">
            <TopImage src={image} srclite={imagelite.src} />
            <div ref={ref} className="top-news__title-conteiner" />
            <div className="top-news__text-conteiner">
                <div className="top-news__line" />
                <p className="top-news__text">Конкурс «Ученик года 2024»!</p>
                <p className="top-news__text">
                    Началась подготовка к Х юбилейному Краевому конкурсу
                    обучающихся общеобразовательных организации Пермского края.
                    В этом году ключевая тема: «Счастливая Семья - ЭТО....?»
                </p>
                <p className="top-news__text">Финал в апреле.</p>
                {/* <Link
                    href="https://vk.com/fond.mira2020"
                    className="top-news__text top-news__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    группа ВК российский фонд мира. Пермский край
                </Link> */}
            </div>
        </section>
    );
};

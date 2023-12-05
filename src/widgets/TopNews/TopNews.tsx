"use client";

import "./TopNews.css";
import { useRef } from "react";
import { HeaderTitle } from "../../entities/HeaderTitle/HeaderTitle";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from "./post_image_5.jpg";
import imagelite from "./post_image_5_lite.jpg";
import Link from "next/link";
import Logo from "@/entities/Logo/Logo";

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    return (
        <section className="top-news">
            <TopImage src={image} srclite={imagelite.src} />
            <div ref={ref} className="top-news__title-conteiner">
                {/* <Logo /> */}
                {/* <HeaderTitle
                    title="Пермское региональное отделение Международного общественного фонда
            &#171;Российский фонд мира&#187;"
                /> */}
            </div>

            <div className="top-news__text-conteiner">
                <div className="top-news__line" />
                <p className="top-news__text">
                    В рамках Проекта «ПЕРМЬ ВЕЛИКАЯ - ПАРМА МНОГОЛИКАЯ» при
                    поддержке Президентского фонда культурных инициатив набирает
                    силу Краевой молодежный медиа-марафон «Парма многоликая».
                </p>
                <Link
                    href="https://vk.com/club220023818"
                    className="top-news__text top-news__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    группа ВК Солнечный круг
                </Link>
            </div>
        </section>
    );
};

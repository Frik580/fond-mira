"use client";

import "./TopNews.css";
import Image from "next/image";
import { useRef } from "react";
import { HeaderTitle } from "../../entities/HeaderTitle/HeaderTitle";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from './news.webp'

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    return (
        <section
            className="top-news"
            // style={{
            //     backgroundImage: `url(${image.src})`,
            // }}
        >
            <TopImage src={image} />
            <div ref={ref} className="top-news__title-conteiner">
                <HeaderTitle
                    title="Пермские региональное отделение Международного общественного фонда
            &#171;Российский фонд мира&#187;"
                />
            </div>
            <div className="top-news__text-conteiner">
                <div className="top-news__line" />
                <p className="top-news__text">
                    1 мая 2023 года стартовал ещё один солнечный и очень
                    красивый проект Российского фонда Мира Пермь Великая - Парма
                    многоликая.
                </p>
            </div>
        </section>
    );
};


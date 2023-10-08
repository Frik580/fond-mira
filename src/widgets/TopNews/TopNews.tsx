"use client";

import "./TopNews.css";
import { useRef } from "react";
import { HeaderTitle } from "../../entities/HeaderTitle/HeaderTitle";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from "./New_header.png";
import Link from "next/link";

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    return (
        <section className="top-news">
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
                    В рамках Проекта «Кто, если не ТЫ! PRO-ДОБРО» при поддержке
                    Фонда грантов губернатора Пермского края набирает силу
                    медиа-марафон «Кто, если не ТЫ!».
                </p>
                <p className="top-news__text">
                    Более 1000 участников приняли в нем участие: это школьники и
                    студенты из самых разных уголков Пермского края!
                </p>
                <Link
                    href="https://vk.com/public212800379"
                    className="top-news__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    группа ВКонтакте
                </Link>
            </div>
        </section>
    );
};

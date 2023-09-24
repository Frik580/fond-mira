"use client";

import "./TopNews.css";
import { useEffect, useRef } from "react";
import { HeaderTitle } from "../../entities/HeaderTitle/HeaderTitle";
import { useAppDispatch } from "../../shared/hooks/redux";
// import { setLinkHome } from "../../store/reducers/linkSlice";
import image from "./news.webp";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(setLinkHome());
    // }, []);

    return (
        <section
            className="top-news"
            style={{
                backgroundImage: `url(${image.src})`,
            }}
        >
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

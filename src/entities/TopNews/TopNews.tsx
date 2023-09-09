"use client";

import "./TopNews.css";
import { useEffect, useRef } from "react";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { useAppDispatch } from "../../shared/hooks/redux";
import { setValue } from "../../store/reducers/headerSlice";
import { setLinkHome } from "../../store/reducers/linkSlice";

export const TopNews = () => {
    const domRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentRef = domRef.current;

        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    dispatch(setValue(entry.isIntersecting));
                    entry.isIntersecting && dispatch(setLinkHome());
                });
            });

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, [domRef]);

    return (
        <section
            className="top-news"
            style={{
                backgroundImage: `url(${"./top-news.png"})`,
            }}
        >
            <div ref={domRef} className="top-news__title-conteiner">
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

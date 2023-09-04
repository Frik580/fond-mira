"use client";

import "./TopNews.css";
import { useEffect, useRef } from "react";
import { PeaceFound } from "../PeaceFound/PeaceFound";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { MainLogo } from "../MainLogo/MainLogo";
import { useAppDispatch } from '../../shared/hooks/redux'
import { setValue } from '../../store/reducers/refSlice'


export const TopNews = () => {
    const domRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setValue(domRef.current))
    }, [dispatch]);

    return (
        <section
            className="top-news"
            style={{
                backgroundImage: `url(${"./top-news.png"})`,
                objectFit: "cover",
            }}
        >
            <div ref={domRef} className="top-news__title-conteiner">
                <div className="top-news__links">
                    <MainLogo />
                    <PeaceFound />
                </div>
                <HeaderTitle />
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

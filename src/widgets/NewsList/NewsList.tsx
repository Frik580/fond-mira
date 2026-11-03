"use client";

import "./NewsList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { TITLES } from "@/shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { useState, useMemo } from "react";
import { newsAPI } from "@/shared/services/NewsService";

export const NewsList = () => {
    const { data: news = [], isLoading } = newsAPI.useFetchAllNewsQuery("");
    const [index, setIndex] = useState(0);

const SkeletonNews = () => {
    return (
        <section className="news-list">
            <div className="news-list__conteiner">
                <div className="skeleton-grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="skeleton-card" />
                    ))}
                </div>
            </div>
        </section>
    );
};

    // 🔥 мемоизация (убираем лишние рендеры)
    const newsArray = useMemo(() => {
        if (!news.length) return [];
        const start = index * 6;
        return news.slice(start, start + 6);
    }, [news, index]);

    if (isLoading) {
        return <SkeletonNews />;
    }

    return (
        <section className="news-list">
            <MainTitle text={TITLES.NEWS} />

            <div className="news-list__conteiner">
                <ul className="news-list__block">
                    {newsArray.map((post, i) => (
                        <News
                            key={post._id}
                            post={post}
                            priority={i === 0} // 🔥 LCP optimization
                            className={
                                i % 5 === 0
                                    ? "news-card news-card--large"
                                    : "news-card"
                            }
                        />
                    ))}
                </ul>

                <DotsButton
                    length={Math.ceil(news.length / 6)}
                    index={setIndex}
                />
            </div>
        </section>
    );
};
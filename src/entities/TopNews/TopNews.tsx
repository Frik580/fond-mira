// "use client";

import Image from "next/image";
import "./TopNews.css";
import background from "./top-news.png";

export const TopNews = () => {
    return (
        <section className="top-news">
            <Image
                className="top-news__image"
                src={background}
                fill
                alt="Ветви"
            />
            <div className="top-news__title-conteiner">
                <h1 className="top-news__title">
                    Пермские региональное отделение Международного общественного
                    фонда "Российский фонд мира"
                </h1>
            </div>
            <div className="top-news__text-conteiner">
                <p className="top-news__text">
                    1 мая 2023 года стартовал ещё один солнечный и очень
                    красивый проект Российского фонда Мира Пермь Великая - Парма
                    многоликая.
                </p>
            </div>
        </section>
    );
};

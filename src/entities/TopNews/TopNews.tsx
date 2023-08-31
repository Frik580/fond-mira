// "use client";

import "./TopNews.css";
import { PeaceFound } from "../PeaceFound/PeaceFound";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";

export const TopNews = () => {
    return (
        <section
            className="top-news"
            style={{
                backgroundImage: `url(${"./top-news.png"})`,
                objectFit: "cover",
            }}
        >
            <div className="top-news__title-conteiner">
                <HeaderTitle />
                <div className="top-news__found-ikon">
                    <PeaceFound />
                </div>
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

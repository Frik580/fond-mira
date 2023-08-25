// "use client";

import Image from "next/image";
import "./TopNews.css";
import background from "./top-news.png";
import image from "./fond.png";

export const TopNews = () => {
    return (
        <section
            className="top-news"
            style={{
                backgroundImage: `url(${"./top-news.png"})`,
                objectFit: "cover",
            }}
        >
            {/* <Image
                className="top-news__image"
                src={background}
                fill
                alt="Ветви"
            /> */}
            <div className="top-news__title-conteiner">
                <h1 className="top-news__title">
                    Пермские региональное отделение Международного общественного
                    фонда &#171;Российский фонд мира&#187;
                </h1>
                <a
                    href="https://peacefound.ru"
                    className="top-news__found-ikon"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={image}
                        className="top-news__found-image"
                        alt="логотип фонда мира"
                    />
                </a>
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

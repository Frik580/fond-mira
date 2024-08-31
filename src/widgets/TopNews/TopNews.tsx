// "use client";

import "./TopNews.css";
import { TopImage } from "@/entities/TopImage/TopImage";
import { TOP_NEWS_COVER, TOP_NEWS_COVER_LITE } from "@/shared/Constants";
import Link from "next/link";

export const TopNews = () => {
    return (
        <section className="top-news">
            <TopImage src={TOP_NEWS_COVER} srclite={TOP_NEWS_COVER_LITE} />
            <div className="top-news__conteiner">
                <p className="top-news__title">Наше лето - 2024</p>
                <ul className="top-news__text">
                    <li>Полным ходом идет реализация Проектов:</li>
                    <li>
                        <Link
                            href={"/projects/kod-semyi"}
                            className="top-news__link"
                        >
                            &laquo;КОД Семьи по-Пермски&raquo;
                        </Link>{" "}
                        (при поддержке Администрации города Перми, конкурс
                        &laquo;Город - это МЫ!&raquo; )
                    </li>
                    <li>
                        <Link
                            href={"/projects/rassveti"}
                            className="top-news__link"
                        >
                            &laquo;Рябиновые рассветы. Живая Память&raquo;
                        </Link>{" "}
                        (при поддержке Фонда президентских грантов)
                    </li>
                </ul>
            </div>
        </section>
    );
};

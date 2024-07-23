// "use client";

import "./TopNews.css";
import { TopImage } from "@/entities/TopImage/TopImage";
import { TOP_NEWS_COVER, TOP_NEWS_COVER_LITE } from "@/shared/Constants";

export const TopNews = () => {
    return (
        <section className="top-news">
            <TopImage src={TOP_NEWS_COVER} srclite={TOP_NEWS_COVER_LITE} />
            <div className="top-news__title-conteiner" />
            <div className="top-news__text-conteiner">
                <p className="top-news__title">Наше лето - 2024</p>
                <ul className="top-news__text">
                    <li>Полным ходом идет реализация Проектов:</li>
                    <li>
                        &laquo;КОД Семьи по-Пермски&raquo; (При поддержке
                        Администрации г. Перми, конкурс &laquo;Город - это
                        МЫ!&raquo; )
                    </li>
                    <li>
                        &laquo;Рябиновые рассветы. Живая Память&raquo; (при
                        поддержке Фонда президентских грантов)
                    </li>
                </ul>
            </div>
        </section>
    );
};

// "use client";

import "./TopNews.css";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from "./New_header.webp";
import imagelite from "./Header_lite.webp";

export const TopNews = () => {
    return (
        <section className="top-news">
            <TopImage src={image} srclite={imagelite.src} />
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

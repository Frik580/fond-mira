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
                <p className="top-news__title">Наша зима - 2025</p>
                <ul className="top-news__text">
                    <li>
                        Полным ходом идет реализация Проекта &laquo;Рябиновые
                        рассветы. Живая Память&raquo;, поддержанного Фондом
                        президентских грантов
                    </li>
                    <li>
                        Проект &laquo;Правнуки Победы. Живая Память&raquo; подан
                        на Конкурс Грантов губернатора Пермского края. Верим в
                        Победу!
                    </li>
                    <li>
                    Краевой Молодёжный Штаб &laquo;МИР&raquo; уверенно РУЛИТ!
                    </li>

                    {/* <li>
                        <Link href={"/projects/rassveti"} className="link">
                            &laquo;Рябиновые рассветы. Живая Память&raquo;
                        </Link>{" "}
                        (при поддержке Фонда президентских грантов)
                    </li> */}
                </ul>
            </div>
        </section>
    );
};

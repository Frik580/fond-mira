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
                <p className="top-news__title">Наше лето - 2025</p>
                <ul className="top-news__text">
                    <li>
                        1 июля 2025 года - финиш Проекта &laquo;Рябиновые
                        рассветы. Живая Память&raquo;, поддержанного Фондом
                        президентских
                    </li>
                    <li>
                        Полным ходом идет реализация проекта &laquo;Правнуки
                        Победы. Живая Память&raquo; при поддержке Фонда Грантов
                        губернатора Пермского края
                    </li>
                    <li>
                        Краевой Медиа-Марафон &laquo;Виват, Победа!&raquo; продолжается!
                        Приветствуем новых участников!
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

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
                <p className="top-news__title">Наша осень - 2025</p>
                <ul className="top-news__text">
                    <li>
                        Полным ходом идет реализация проекта &laquo;Правнуки
                        Победы. Живая Память&raquo;, поддержанного Фондом
                        грантов губернатора Пермского Края.
                    </li>
                    <li>
                        Краевой Медиа - марафон &laquo;Виват, Победа!&raquo;
                    </li>
                    <li>
                        Краевой Конкурс творческих (исследовательских) работ
                        &laquo;Моя Галерея Славы&raquo;
                    </li>
                    <li>
                        Проект Фонда мира &laquo;От Победы к Победе. Живая
                        Память&raquo; подан на 1 конкурс Фонда президентских
                        грантов в 2026 году. Верим в Победу!
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

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
                <p className="top-news__title">Наша весна - 2026</p>
                <ul className="top-news__text">


                    <li>
                        Проекты Фонда мира:
                    </li>
                    <li>
                        &laquo;От Сердца к Сердцу. Про - Добро&raquo; - на конкурсе &laquo;Город это МЫ&raquo;
                    </li>
                    <li>
                        &laquo;Каравай Дружбы земли Пермской&raquo; - на конкурсе Фонда президентских грантов. Мы верим в победу!
                    </li>
                    <li>
                        &laquo;От Победы к Победе. Живая Память&raquo; - на конкурсе Фонда грантов губернатора ПК
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

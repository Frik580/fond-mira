"use client";

import "./TopNews.css";
import { useRef } from "react";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { TopImage } from "@/entities/TopImage/TopImage";
import image from "./New_header.png";
import imagelite from "./lite/New_header_lite.png";
import Link from "next/link";

export const TopNews = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);

    return (
        <section className="top-news">
            <TopImage src={image} srclite={imagelite.src} />
            <div ref={ref} className="top-news__title-conteiner" />
            <div className="top-news__text-conteiner">
                <div className="top-news__line" />
                <p className="top-news__text">НАША ВЕСНА - 2024</p>
                {/* <p className="top-news__text">
                    - Краевой конкурс &quot;Ученик года - 2024&quot;. Финал - 13
                    апреля 2024{" "} */}
                    <Link
                        href="https://vk.com/pkuchenikgoda"
                        className="top-news__text top-news__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        - Краевой конкурс &#171;Ученик года - 2024&#187;. Финал - 13
                    апреля 2024
                    </Link>
                {/* </p> */}
                {/* <p className="top-news__text">
                    - Региональный этап Всероссийского конкурса &quot;Учитель
                    года - 2024&quot;{" "} */}
                    <Link
                        href="https://vk.com/club220023818"
                        className="top-news__text top-news__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        - Региональный этап Всероссийского конкурса &#171;Учитель
                    года - 2024&#187;
                    </Link>
                {/* </p> */}
                {/* <p className="top-news__text">
                    - Проект &quot;Рябиновык рассветы. Живая Память&quot;{" "} */}
                    <Link
                        href="https://vk.com/fond.mira2020"
                        className="top-news__text top-news__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        - Проект &#171;Рябиновык рассветы. Живая Память&#187;
                    </Link>
                {/* </p> */}
            </div>
        </section>
    );
};

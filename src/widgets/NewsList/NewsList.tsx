"use client";

import "./NewsList.css";
import Image from "next/image";
import imageNews from "./image.png";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { News } from "../../entities/News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { useRef } from "react";
import { setLinkNewslist } from "../../store/reducers/linkSlice";
import useLinkDeactive from "../../shared/hooks/UseLinkDeactive";

export const NewsList = () => {
    const setIndex = (i: number) => {
        console.log(i);
    };

    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkNewslist(false));

    return (
        <section ref={ref} className="news-list">
            <MainTitle id="news-list" text={TITLES.NEWS} />
            <div className="news-list__conteiner">
                <div className="news-list__block">
                    <ul className="news-list__news">
                        <News />
                        <News />
                        <News />
                    </ul>
                    <DotsButton lenght={18} index={setIndex} />
                </div>
                <Image
                    src={imageNews}
                    className="news-list__image"
                    alt="фото"
                />
            </div>
        </section>
    );
};

"use client";

import "./NewsList.css";
import Image from "next/image";
import imageNews from "./image.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";

export const NewsList = () => {
    const setIndex = (i: number) => {
        console.log(i);
    };

    return (
        <section className="news-list">
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

// "use client";

import "./NewsList.css";
import Image from "next/image";
import imageNews from "./image.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/shared/DotsButton/DotsButton";

export const NewsList = () => {
    return (
        <section className="news-list">
            <MainTitle id="news-list" text={TITLES.NEWS} />
            <div className="news-list__conteiner">
                <ul className="news-list__articles">
                    <News />
                    <News />
                    <News />
                    <DotsButton lenght={18} />
                </ul>
                <Image
                    src={imageNews}
                    className="news-list__image"
                    alt="фото"
                />
            </div>
        </section>
    );
};

// "use client";

import "./NewsList.css";
import Image from "next/image";
import imageNews from "./5_4T5J0z5xA.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const NewsList = () => {
    return (
        <section className="news-list">
            <MainTitle id="news-list" text={TITLES.NEWS} />
            <div className="news-list__conteiner">
               <p>NEWS</p>
            </div>
        </section>
    );
};

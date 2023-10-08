"use client";

import "./NewsList.css";
import Image from "next/image";
import imageNews from "./image.png";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { News } from "../../entities/News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { useEffect, useRef, useState } from "react";
import { setLinkNewslist } from "../../store/reducers/linkSlice";
import useLinkDeactive from "../../shared/hooks/UseLinkDeactive";
import { newsAPI } from "@/shared/services/NewsService";
import { NewsType } from "@/shared/models/Models";

export const NewsList = () => {
    const [newsArray, setNewsArray] = useState<NewsType[]>([]);
    const { data: news } = newsAPI.useFetchAllNewsQuery("");

    useEffect(() => {
        console.log(news)
        if (news) {
            const array = [...news];
            const newarray = array.reverse();
            setNewsArray(newarray);
        }
    }, [news]);

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
                        {news &&
                            newsArray.map((post: NewsType) => (
                                <News key={post._id} post={post} />
                            ))}
                    </ul>
                    {/* <DotsButton lenght={18} index={setIndex} /> */}
                </div>
                {/* <Image
                    src={imageNews}
                    className="news-list__image"
                    alt="фото"
                /> */}
            </div>
        </section>
    );
};

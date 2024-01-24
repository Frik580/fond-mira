"use client";

import "./NewsList.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { useEffect, useRef, useState } from "react";
import { setLinkNewslist } from "../../store/reducers/linkSlice";
import useLinkDeactive from "../../shared/hooks/UseLinkDeactive";
import { newsAPI } from "@/shared/services/NewsService";
import { NewsType } from "@/shared/models/Models";
import { NEWS_AMT } from "@/shared/Constants";
import { NEWS } from "@/shared/Constants";

export const NewsList = () => {
    const { data: news } = newsAPI.useFetchAllNewsQuery("");
    const [newsArray, setNewsArray] = useState<NewsType[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (news) {
            const array = [...news];
            const newArray = array.reverse();
            const sortArray = newArray
                .filter(function (item, i) {
                    while (i < NEWS) {
                        return item;
                    }
                })
                .filter(function (item, i) {
                    while (i < NEWS_AMT + index * NEWS_AMT) {
                        return item;
                    }
                })
                .filter(function (item, i) {
                    while (i >= index * NEWS_AMT) {
                        return item;
                    }
                });
            setNewsArray(sortArray);
        }
    }, [news, index]);

    const handleIndex = (i: number) => {
        setIndex(i);
    };

    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkNewslist(false));

    return (
        <section id="news-list" ref={ref} className="news-list">
            <MainTitle text={TITLES.NEWS} />
            <div className="news-list__conteiner">
                <div className="news-list__block">
                    <ul className="news-list__news">
                        {newsArray.map((post: NewsType) => (
                            <News key={post._id} post={post} />
                        ))}
                    </ul>
                    {news && (
                        <DotsButton
                            lenght={news.length < NEWS ? news.length : NEWS}
                            index={handleIndex}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

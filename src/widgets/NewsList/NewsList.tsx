"use client";

import "./NewsList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { TITLES } from "@/shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { useRef, useState } from "react";
import { linkState, setLinkNewslist } from "@/store/reducers/linkSlice";
import { NewsType } from "@/shared/models/Models";
import { NEWS } from "@/shared/Constants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import useLink from "@/shared/hooks/useLink";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useSortNews from "./lib/useSortNews";
import { newsState } from "@/store/reducers/newsHightSlice";
import { newsAPI } from "@/shared/services/NewsService";
import useSetTheHight from "./lib/useSetTheHight";

export const NewsList = () => {
    const { data: news } = newsAPI.useFetchAllNewsQuery("");
    const sectionNews = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const { newslist } = useAppSelector(linkState);
    const newsArray = useSortNews(index, news);
    const hightValue = useAppSelector(newsState);
    useLinkDeactive(sectionNews, setLinkNewslist(false));
    useLink(sectionNews, newslist);
    useSetTheHight(sectionNews, index, loaded, hightValue);

    const handleIndex = (i: number) => {
        setIndex(i);
        dispatch(setLinkNewslist(false));
        dispatch(setLinkNewslist(true));
    };

    if (!news) {
        return null;
    }

    return (
        <>
            <section
                id="news-list"
                ref={sectionNews}
                className="news-list"
                onLoad={() => setLoaded(true)}
                style={{ minHeight: index === 0 ? hightValue : 2000 }}
            >
                <MainTitle text={TITLES.NEWS} />
                <div className="news-list__conteiner">
                    <ul className="news-list__block">
                        {newsArray.map((post: NewsType) => (
                            <News key={post._id} post={post} />
                        ))}
                    </ul>
                    <DotsButton
                        lenght={news.length < NEWS ? news.length : NEWS}
                        index={handleIndex}
                    />
                </div>
            </section>
        </>
    );
};

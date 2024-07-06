"use client";

import "./NewsList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { TITLES } from "@/shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { useEffect, useRef, useState } from "react";
import {
    linkState,
    setLinkHome,
    setLinkNewslist,
} from "@/store/reducers/linkSlice";
import { NewsType } from "@/shared/models/Models";
import { NEWS } from "@/shared/Constants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import useLink from "@/shared/hooks/useLink";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useSortNews from "./lib/useSortNews";
import { newsState, setNews } from "@/store/reducers/newsHightSlice";

export const NewsList = () => {
    const sectionNews = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const dataConteiner = sectionNews.current?.clientHeight;
    useLinkDeactive(sectionNews, setLinkNewslist(false));
    const { newslist } = useAppSelector(linkState);
    useLink(sectionNews, newslist);
    const { newsArray, news } = useSortNews(index);
    const hightValue = useAppSelector(newsState);

    const handleIndex = (i: number) => {
        setIndex(i);
        dispatch(setLinkHome());
        dispatch(setLinkNewslist(true));
    };

    useEffect(() => {
        console.log(dataConteiner);
        dataConteiner && dispatch(setNews(dataConteiner));
        console.log(hightValue);
    }, [hightValue, loaded]);

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
                style={{ minHeight: hightValue }}
            >
                <MainTitle text={TITLES.NEWS} />
                <div className="news-list__conteiner">
                    <div className="news-list__block">
                        <ul className="news-list__news">
                            {newsArray.map((post: NewsType) => (
                                <News key={post._id} post={post} />
                            ))}
                        </ul>
                        <DotsButton
                            lenght={news.length < NEWS ? news.length : NEWS}
                            index={handleIndex}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

"use client";

import "./NewsList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { TITLES } from "@/shared/Constants";
import { News } from "../News/News";
import { DotsButton } from "@/features/DotsButton/DotsButton";
import { memo, useEffect, useRef, useState } from "react";
import {
    linkState,
    setLinkHome,
    setLinkNewslist,
} from "@/store/reducers/linkSlice";
import { newsAPI } from "@/shared/services/NewsService";
import { NewsType } from "@/shared/models/Models";
import { NEWS_AMT } from "@/shared/Constants";
import { NEWS } from "@/shared/Constants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import useLinkDeactive from "../../shared/hooks/UseLinkDeactive";
import useLink from "@/shared/hooks/useLink";
import { setLoadedRefNewslist } from "@/store/reducers/loadedRefSlice";

export const NewsList = () => {
    const dispatch = useAppDispatch();
    const sectionNews = useRef<HTMLDivElement | null>(null);
    const { data: news } = newsAPI.useFetchAllNewsQuery("");
    const [newsArray, setNewsArray] = useState<NewsType[]>([]);
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [conteinerHight, setConteinerHight] = useState(0);
    const dataConteiner = sectionNews.current?.clientHeight;
    useLinkDeactive(sectionNews, setLinkNewslist(false));
    const { newslist } = useAppSelector(linkState);
    useLink(sectionNews, newslist);

    const handleIndex = (i: number) => {
        setIndex(i);
        dispatch(setLinkHome());
        dispatch(setLinkNewslist(true));
    };

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
    }, [index, news]);

    useEffect(() => {
        dataConteiner && setConteinerHight(dataConteiner);
        console.log(dataConteiner)
    }, [loaded]);

    useEffect(() => {
        // console.log(loaded);
        dispatch(setLoadedRefNewslist(loaded))
    }, [loaded]);

    return (
        <>
            {!!news && (
                <section
                    id="news-list"
                    ref={sectionNews}
                    className="news-list"
                    onLoad={() => setLoaded(true)}
                >
                    <MainTitle text={TITLES.NEWS}/>
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
            )}
        </>
    );
};
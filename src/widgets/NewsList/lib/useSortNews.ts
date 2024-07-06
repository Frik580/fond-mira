// "use client";

import { NEWS, NEWS_AMT } from "@/shared/Constants";
import { NewsType } from "@/shared/models/Models";
import { newsAPI } from "@/shared/services/NewsService";
import { useEffect, useState } from "react";

export default function useSortNews(
    index: number,
) {

    const { data: news } = newsAPI.useFetchAllNewsQuery("");
    const [newsArray, setNewsArray] = useState<NewsType[]>([]);

    useEffect(() => {

        if (news) {
            console.log(news)
            const array = [...news];
            const newArray = array.reverse();
            const sortArray = newArray
                .filter(function (item, i) {
                    while (i < NEWS && i < NEWS_AMT + index * NEWS_AMT && i >= index * NEWS_AMT) {
                        return item;
                    }
                })
            setNewsArray(sortArray);
        }
    }, [index, news]);

    return { newsArray, news };
}

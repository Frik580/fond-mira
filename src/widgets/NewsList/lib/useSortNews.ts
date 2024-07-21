// "use client";

import { NEWS, NEWS_AMT } from "@/shared/Constants";
import { useAppDispatch } from "@/shared/hooks/redux";
import { NewsType } from "@/shared/models/Models";
import { setLoadedRefNewslist } from "@/store/reducers/loadedRefSlice";
import { useEffect, useState } from "react";

export default function useSortNews(
    index: number,
    news: NewsType[] | undefined,
) {
    const [newsArray, setNewsArray] = useState<NewsType[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (news) {
            dispatch(setLoadedRefNewslist(true));
            const array = [...news];
            const sortArray = array.reverse()
                .filter(function (item, i) {
                    while (i < NEWS && i < NEWS_AMT + index * NEWS_AMT && i >= index * NEWS_AMT) {
                        return item;
                    }
                })
            setNewsArray(sortArray);
        }
    }, [index, news]);

    return newsArray;
}

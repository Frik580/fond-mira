"use client";

import { FC, useState } from "react";
import "./News.css";
import { NewsType } from "@/shared/models/Models";
import { NewsNoFull } from "@/widgets/NewsNoFull/NewsNoFull";
import { NewsFull } from "@/widgets/NewsFull/NewsFull";

type NewsProps = {
    post: NewsType;
    className?: string;
    priority?: boolean;
};

export const News: FC<NewsProps> = ({
    post,
    className,
    priority = false,
}) => {
    const [fullNews, setFullNews] = useState(false);

    return (
        <li
            className={
                className ??
                `news ${!fullNews ? "news_nofull" : ""}`
            }
        >
            {!fullNews ? (
                <NewsNoFull
                    post={post}
                    priority={priority}
                    onClickOpenButton={() => setFullNews(true)}
                />
            ) : (
                <NewsFull
                    post={post}
                    onClickCloseButton={() => setFullNews(false)}
                />
            )}
        </li>
    );
};

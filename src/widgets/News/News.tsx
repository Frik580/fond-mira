// "use client";

import { FC, useEffect, useState } from "react";
import "./News.css";
import { NewsType } from "@/shared/models/Models";
import { SERVER_URL_NEWS_IMAGE } from "@/shared/Constants";
import { NewsNoFull } from "@/entities/NewsNoFull/NewsNoFull";
import { NewsFull } from "@/entities/NewsFull/NewsFull";

type NewsProps = {
    post: NewsType;
};

export const News: FC<NewsProps> = ({ post }) => {
    const [fullNews, setFullNews] = useState(false);
    const [server, setServer] = useState("");

    useEffect(() => {
        setServer(`${SERVER_URL_NEWS_IMAGE}${post.slug}/`);
    }, [post]);

    return (
        <li className={`news ${!fullNews ? "news_nofull" : ""}`}>
            {!fullNews ? (
                <NewsNoFull
                    post={post}
                    server={server}
                    onClickOpenButton={() => {
                        setFullNews(true);
                    }}
                />
            ) : (
                <NewsFull
                    post={post}
                    server={server}
                    onClickCloseButton={() => {
                        setFullNews(false);
                    }}
                />
            )}
        </li>
    );
};

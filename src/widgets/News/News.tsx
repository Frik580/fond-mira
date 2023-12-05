// "use client";

import { FC, useEffect, useState } from "react";
import "./News.css";
import { NewsType } from "@/shared/models/Models";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueNewsPopup } from "@/store/reducers/popupSlice";
import { setNews } from "@/store/reducers/newsSlice";
import fixedBody from "@/shared/lib/FixedBody";
import VideoFrame from "@/entities/VideoFrame/VideoFrame";
import { Carousel } from "@/widgets/Carousel/Carousel";
import { IMAGE_EXTENSION, SERVER_URL_NEWS_IMAGE } from "@/shared/Constants";

type NewsProps = {
    post: NewsType;
};

export const News: FC<NewsProps> = ({ post }) => {
    const dispatch = useAppDispatch();
    const [fullNews, setFullNews] = useState(false);
    const [server, setServer] = useState("");

    useEffect(() => {
        setServer(`${SERVER_URL_NEWS_IMAGE}${post.slug}/`);
    }, [post]);

    return (
        <li className={`news ${fullNews ? "news_border" : ""}`}>
            <p className="news__date">{post.createdAt}</p>
            {!fullNews ? (
                <>
                    <p className="news__text">{post.preview}</p>
                    <button
                        className="news__button_open"
                        onClick={() => {
                            // fixedBody();
                            // dispatch(setNews(post));
                            // dispatch(setValueNewsPopup(true));
                            setFullNews(!fullNews);
                        }}
                    >
                        {/* <div className="news__ikon" /> */}
                        подробнее
                    </button>
                </>
            ) : (
                <>
                    <p className="news__title">{post.title}</p>
                    <div className="news__article">
                        {post.article.map((item: string, i) => (
                            <p key={i} className="news__text">
                                {item}
                            </p>
                        ))}
                    </div>
                    {post.video.length !== 0 && (
                        <div className="news__article">
                            <div className="news__video">
                                {post.video.map((item: string, i) => (
                                    <VideoFrame key={i} video={item} />
                                ))}
                            </div>
                        </div>
                    )}
                    {Boolean(post.photo) && (
                        <div className="news__gallery">
                            <Carousel
                                photo={post.photo}
                                server={server}
                                extension={IMAGE_EXTENSION}
                                hight={350}
                            />
                        </div>
                    )}
                    <button
                        className="news__button_close"
                        onClick={() => {
                            setFullNews(!fullNews);
                        }}
                    />
                </>
            )}
        </li>
    );
};

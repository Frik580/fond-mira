// "use client";

import { FC } from "react";
import "./NewsFull.css";
import { NewsType } from "@/shared/models/Models";
import VideoFrame from "@/entities/VideoFrame/VideoFrame";
import { NewCarousel } from "@/widgets/NewCarousel/NewCarousel";
import { IMAGE_PERMISSION } from "@/shared/Constants";
import { NewsDate } from "@/entities/NewsElem/NewsDate/NewsDate";
import { NewsTitle } from "@/entities/NewsElem/NewsTitle/NewsTitle";

type NewsConteinerProps = {
    post: NewsType;
    server: string;
    onClickCloseButton: () => void;
};

export const NewsFull: FC<NewsConteinerProps> = ({
    post,
    server,
    onClickCloseButton,
}) => {
    return (
        <div className="news__box news_border_pink">
            <NewsDate date={post.createdAt} />
            <NewsTitle title={post.title} />
            <div className="news__article">
                {post.article.map((item: string, i) => (
                    <p key={i} className="text">
                        {item}
                    </p>
                ))}
            </div>
            {post.video.length !== 0 && (
                <div className="news__video">
                    {post.video.map((item: string, i) => (
                        <VideoFrame key={i} video={item} title={post.title} />
                    ))}
                </div>
            )}
            {!!post.photo && (
                <NewCarousel
                    photo={post.photo}
                    server={server}
                    extension={IMAGE_PERMISSION}
                    height={350}
                />
            )}
            <button
                className="news__button_close"
                onClick={onClickCloseButton}
            />
        </div>
    );
};

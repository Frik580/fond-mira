// "use client";

import { FC, useEffect, useState } from "react";
import "./News.css";
import { NewsType } from "@/shared/models/Models";
import VideoFrame from "@/entities/VideoFrame/VideoFrame";
import { Carousel } from "@/widgets/Carousel/Carousel";
import { NewCarousel } from "@/widgets/NewCarousel/NewCarousel";
import { IMAGE_EXTENSION, SERVER_URL_NEWS_IMAGE } from "@/shared/Constants";
import { CarouselImage } from "@/entities/CarouselImage/CarouselImage";

type NewsProps = {
    post: NewsType; //
};

export const News: FC<NewsProps> = ({ post }) => {
    const [fullNews, setFullNews] = useState(false);
    const [server, setServer] = useState("");

    useEffect(() => {
        setServer(`${SERVER_URL_NEWS_IMAGE}${post.slug}/`);
    }, [post]);

    return (
        <li className={`news ${fullNews ? "news_border" : ""}`}>
            {!fullNews ? (
                <>
                    <div className="news__box">
                        <div className="news__conteiner">
                            <p className="news__date">{post.createdAt}</p>
                            <div>
                                <p className="news__preview">{post.title}</p>
                                <p className="news__text">{post.article[0]}</p>
                            </div>
                            {!!post.photo && !!server && (
                                <div className="news__photo">
                                    <CarouselImage
                                        src={`${server}1.webp`}
                                        srclite={`${server}lite/1.webp`}
                                        height={200}
                                        width={200}
                                        i={1}
                                        fullphoto={0}
                                        cursor={"default"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        className="news__button_open"
                        onClick={() => {
                            setFullNews(!fullNews);
                        }}
                    >
                        подробнее
                    </button>
                </>
            ) : (
                <div className="news__box">
                    <p className="news__date">{post.createdAt}</p>
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
                            <NewCarousel
                                photo={post.photo}
                                server={server}
                                extension={IMAGE_EXTENSION}
                                height={350}
                            />
                        </div>


                        // <div className="news__gallery">
                        //     <Carousel
                        //         photo={post.photo}
                        //         server={server}
                        //         extension={IMAGE_EXTENSION}
                        //         height={350}
                        //     />
                        // </div>
                    )}
                    <button
                        className="news__button_close"
                        onClick={() => {
                            setFullNews(!fullNews);
                        }}
                    />
                </div>
            )}
        </li>
    );
};

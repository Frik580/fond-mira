// "use client";

import { FC, useState } from "react";
import "./NewsNoFull.css";
import { NewsType } from "@/shared/models/Models";
import Image from "next/image";

type NewsConteinerProps = {
    post: NewsType;
    server: string;
    onClickOpenButton: () => void;
};

export const NewsNoFull: FC<NewsConteinerProps> = ({
    post,
    server,
    onClickOpenButton,
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <div className="news__box news_border_white">
                <div className="news__conteiner">
                    <p className="news__date">{post.createdAt}</p>
                    <div>
                        <h3 className="news__preview">{post.title}</h3>
                        <p className="news__text">{post.article[0]}</p>
                    </div>
                    {!!post.photo && !!server && (
                        <div>
                            <div
                                className="news__photoconteiner"
                                style={{
                                    height: 200,
                                    width: 200,
                                    backgroundImage: `url(${`${server}lite/1.webp`})`,
                                }}
                            >
                                <Image
                                    src={`${server}1.webp`}
                                    className={`news__photo ${
                                        loaded ? "news__photo_loaded" : ""
                                    }`}
                                    width={400}
                                    height={400}
                                    alt="фото 1"
                                    onLoad={() => setLoaded(true)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button className="news__button_open" onClick={onClickOpenButton}>
                подробнее
            </button>
        </>
    );
};

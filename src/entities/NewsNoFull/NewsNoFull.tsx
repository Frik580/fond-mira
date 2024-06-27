// "use client";

import { FC } from "react";
import "./NewsNoFull.css";
import { NewsType } from "@/shared/models/Models";
import { NewsImage } from "@/entities/Image/Image";

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
                        <div className="news__photo">
                            <NewsImage
                                src={`${server}1.webp`}
                                srclite={`${server}lite/1.webp`}
                                height={200}
                                width={200}
                                i={1}
                                fullphoto={0}
                            />
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

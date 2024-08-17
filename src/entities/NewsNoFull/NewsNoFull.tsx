// "use client";

import { FC, useEffect, useState } from "react";
import "./NewsNoFull.css";
import { NewsType } from "@/shared/models/Models";
import Image from "next/image";
import toDataURL from "@/features/ToDataUrl/ToDataUrl";

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
    const [srcBase64, setSrcBase64] = useState("");

    useEffect(() => {
        !!server &&
            toDataURL(`${server}lite/1.webp`).then((dataUrl) => {
                typeof dataUrl === "string" && setSrcBase64(dataUrl);
            });
    }, [server]);

    return (
        <>
            <div className="news__box news_border_white">
                <div className="news__conteiner">
                    <p className="news__date">{post.createdAt}</p>
                    <div className="news__block">
                        <h3 className="news__title">{post.title}</h3>
                        <p className="news__text">{post.article[0]}</p>
                    </div>
                    {!!post.photo && !!server && (
                        <Image
                            src={`${server}1.webp`}
                            className="news__photo"
                            width={400}
                            height={400}
                            alt="фото 1"
                            placeholder={!!srcBase64 ? "blur" : "empty"}
                            blurDataURL={!!srcBase64 ? srcBase64 : ""}
                        />
                    )}
                </div>
            </div>
            <button className="news__button_open" onClick={onClickOpenButton}>
                подробнее
            </button>
        </>
    );
};

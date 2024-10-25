// "use client";

import { FC, useEffect, useState } from "react";
import "./NewsNoFull.css";
import { NewsType } from "@/shared/models/Models";
import Image from "next/image";
import toDataURL from "@/features/ToDataUrl/ToDataUrl";
import { NewsDate } from "@/entities/NewsElem/NewsDate/NewsDate";
import { NewsTitle } from "@/entities/NewsElem/NewsTitle/NewsTitle";
import { TextMain } from "@/entities/NewsElem/TextMain/TextMain";

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
                    <div className="news__tex">
                        <NewsDate date={post.createdAt} />
                        <div className="news__block">
                            <NewsTitle title={post.title} />
                            <TextMain text={post.article[0]} />
                        </div>
                    </div>
                    {!!post.photo && !!server && (
                        <div className="news__img">
                            <Image
                                src={`${server}1.webp`}
                                className="news__photo"
                                width={250}
                                height={250}
                                alt="фото 1"
                                placeholder={!!srcBase64 ? "blur" : "empty"}
                                blurDataURL={!!srcBase64 ? srcBase64 : ""}
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

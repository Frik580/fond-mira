// "use client";

import { FC } from "react";
import "./News.css";
import { NewsType } from "@/shared/models/Models";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueNewsPopup } from "@/store/reducers/popupSlice";
import { setNews } from "@/store/reducers/newsSlice";
import fixedBody from "@/shared/lib/FixedBody";

type NewsProps = {
    post: NewsType;
};

export const News: FC<NewsProps> = ({ post }) => {
    const dispatch = useAppDispatch();

    return (
        <li onMouseEnter={() => console.log("Навел")} className="news">
            <button
                className="news__button"
                onClick={() => {
                    fixedBody();
                    dispatch(setNews(post));
                    dispatch(setValueNewsPopup(true));
                }}
            >
                <div className="news__ikon" />
            </button>
            <p className="news__date">{post.createdAt}</p>
            <p className="news__text">{post.preview}</p>
        </li>
    );
};

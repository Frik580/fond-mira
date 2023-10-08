"use client";

import "./NewsPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValueNewsPopup } from "@/store/reducers/popupSlice";
import useCloseByEsc from "@/widgets/NewsPopup/lib/UseCloseByEsc";
import { Gallery } from "../Gallery/Gallery";
import { newsState } from "@/store/reducers/newsSlice";
import { useEffect, useState } from "react";
import { SERVER_URL } from "@/shared/Constants";

export const NewsPopup = () => {
    const [server, setServer] = useState("");
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const post = useAppSelector(newsState);
    useCloseByEsc(false);

    useEffect(() => {
        setServer(`${SERVER_URL}${post.slug}/`);
    }, [post]);

    return (
        <div
            onClick={() => dispatch(setValueNewsPopup(false))}
            className={`newspopup ${openpopup.valueNews && "newspopup_opened"}`}
        >
            {openpopup.valueNews && (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="newspopup__conteiner"
                >
                    <button
                        onClick={() => dispatch(setValueNewsPopup(false))}
                        className="newspopup__close-button"
                        type="button"
                    />
                    <div className="newspopup__post">
                        <p className="newspopup__date">{post.createdAt}</p>
                        <p className="newspopup__title">{post.title}</p>
                        <div className="newspopup__article">
                            {post.article.map((item: string, i) => (
                                <p key={i} className="newspopup__text">
                                    {item}
                                </p>
                            ))}
                        </div>
                        {Boolean(post.photo) && (
                            <Gallery
                                photo={post.photo}
                                server={server}
                                extension={"jpg"}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

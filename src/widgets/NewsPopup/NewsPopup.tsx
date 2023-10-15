"use client";

import "./NewsPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValueNewsPopup } from "@/store/reducers/popupSlice";
import useCloseByEsc from "@/shared/hooks/UseCloseByEsc";
import { Gallery } from "../Gallery/Gallery";
import { newsState } from "@/store/reducers/newsSlice";
import { useEffect, useState } from "react";
import { IMAGE_EXTENSION, SERVER_URL_NEWS_IMAGE } from "@/shared/Constants";
import VideoFrame from "@/entities/VideoFrame/VideoFrame";
import unfixedBody from "@/shared/lib/UnfixedBody";

export const NewsPopup = () => {
    const [server, setServer] = useState("");
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const post = useAppSelector(newsState);
    useCloseByEsc();

    useEffect(() => {
        setServer(`${SERVER_URL_NEWS_IMAGE}${post.slug}/`);
    }, [post]);

    function closePopup() {
        dispatch(setValueNewsPopup(false));
        unfixedBody();
    }

    return (
        <div
            onClick={closePopup}
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
                        onClick={closePopup}
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
                        {post.video.length !== 0 && (
                            <div className="newspopup__article">
                                <div className="newspopup__video">
                                    {post.video.map((item: string, i) => (
                                        <VideoFrame key={i} video={item} />
                                    ))}
                                </div>
                            </div>
                        )}
                        {Boolean(post.photo) && (
                            <div className="newspopup__gallery">
                                <Gallery
                                    photo={post.photo}
                                    server={server}
                                    extension={IMAGE_EXTENSION}
                                    hight={350}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
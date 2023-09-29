// "use client";

import { FC } from "react";
import "./Document.css";
import downloadFile from "./lib/DownloadFile";

type DocumentProps = {
    title: string;
    href: string;
};

export const Document: FC<DocumentProps> = ({ title, href }) => {
    return (
        <div className="document">
            <p className="document__text">{title}</p>
            <button
                name="button"
                className="document__button"
                onClick={() => downloadFile(href)}
            >
                Скачать
            </button>
        </div>
    );
};

// "use client";

import { FC } from "react";
import "./Document.css";
import downloadFile from "./lib/DownloadFile";
import Link from "next/link";
import { DOCUMENT_PERMISSION, SERVER_URL_DOCUMENTS } from "@/shared/Constants";

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
                onClick={() =>
                    downloadFile(
                        SERVER_URL_DOCUMENTS,
                        href,
                        DOCUMENT_PERMISSION,
                    )
                }
            >
                Скачать
            </button>
            <Link
                href={`${SERVER_URL_DOCUMENTS}${href}.${DOCUMENT_PERMISSION}`}
                className="document__button"
            >
                Открыть
            </Link>
        </div>
    );
};

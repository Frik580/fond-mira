// "use client";

import "./Documents.css";
import {
    TITLES,
    DOCUMENTS,
    backgroundImageWithoutPhoto,
} from "../../shared/Constants";
import { Document } from "@/entities/Document/Document";
import { DocumentsType } from "@/shared/models/Models";
import image from "./Documents.webp";
import imagelite from "./Documents_lite.webp";
import { TopImage } from "@/entities/TopImage/TopImage";
import { Support } from "@/entities/Support/Support";

export const Documents = () => {
    return (
        <section
            className="documents"
            style={{
                backgroundImage: `${backgroundImageWithoutPhoto}`,
            }}
        >
            <TopImage src={image} srclite={imagelite.src} />
            <div className="documents__conteiner">
                <div className="documents__label">
                    <Support>
                        <h1 className="documents__title">{TITLES.DOCUMENTS}</h1>
                    </Support>
                </div>
                {DOCUMENTS.map((doc: DocumentsType) => (
                    <Document key={doc.id} title={doc.title} href={doc.href} />
                ))}
            </div>
        </section>
    );
};

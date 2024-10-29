// "use client";

import "./Documents.css";
import {
    DOCUMENTS,
    backgroundImageWithoutPhoto,
    DOCUMENTS_COVER,
    DOCUMENTS_COVER_LITE,
} from "../../shared/Constants";
import { Document } from "@/entities/Document/Document";
import { DocumentsType } from "@/shared/models/Models";
import { TopImage } from "@/entities/TopImage/TopImage";

export const Documents = () => {
    return (
        <section
            className="documents"
            style={{
                backgroundImage: `${backgroundImageWithoutPhoto}`,
            }}
        >
            <TopImage src={DOCUMENTS_COVER} srclite={DOCUMENTS_COVER_LITE} />
            <ul className="documents__conteiner">
                {DOCUMENTS.map((doc: DocumentsType) => (
                    <li className="li" key={doc.id}>
                        <Document title={doc.title} href={doc.href} num={doc.id} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

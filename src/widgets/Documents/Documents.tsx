"use client";

import "./Documents.css";
import { TITLES, DOCUMENTS, DocumentsType } from "../../shared/Constants";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { useRef } from "react";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { Document } from "@/entities/Document/Document";

export const Documents = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);
    return (
        <section className="documents">
            <div ref={ref} className="documents__title">
                <HeaderTitle title={TITLES.DOCUMENTS} />
            </div>
            <div className="documents__conteiner">
                {DOCUMENTS.map((doc: DocumentsType) => (
                    <Document key={doc.id} title={doc.title} href={doc.href} />
                ))}
            </div>
        </section>
    );
};

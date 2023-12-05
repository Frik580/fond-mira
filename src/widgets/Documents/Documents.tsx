"use client";

import "./Documents.css";
import { TITLES, DOCUMENTS } from "../../shared/Constants";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { useRef } from "react";
import useHeaderActive from "@/shared/hooks/UseHeaderActive";
import { Document } from "@/entities/Document/Document";
import { DocumentsType } from "@/shared/models/Models";

export const Documents = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useHeaderActive(ref);
    return (
        <section className="documents">
            <div ref={ref} style={{height: "20px"}}>
                {/* <HeaderTitle title={TITLES.DOCUMENTS} /> */}
            </div>
            <div className="documents__conteiner">
                <h1 className="documents__title">{TITLES.DOCUMENTS}</h1>
                {DOCUMENTS.map((doc: DocumentsType) => (
                    <Document key={doc.id} title={doc.title} href={doc.href} />
                ))}
            </div>
        </section>
    );
};

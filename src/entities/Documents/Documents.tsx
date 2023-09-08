// "use client";

import "./Documents.css";
import Image from "next/image";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";


export const Documents = () => {
    return (
        <section className="documents">
            <MainTitle id="documents" text={TITLES.DOCUMENTS} />
            <div className="documents__conteiner">
               <p>Contacts</p>
            </div>
        </section>
    );
};

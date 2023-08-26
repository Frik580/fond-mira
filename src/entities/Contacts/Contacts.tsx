// "use client";

import "./Contacts.css";
import Image from "next/image";
import imageNews from "./5_4T5J0z5xA.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const Contacts = () => {
    return (
        <section className="contacts">
            <MainTitle id="contacts" text={TITLES.CONTACTS} />
            <div className="contacts__conteiner">
               <p>CONTACTS</p>
            </div>
        </section>
    );
};

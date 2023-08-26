// "use client";

import "./Partners.css";
import Image from "next/image";
import imageNews from "./5_4T5J0z5xA.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const Partners = () => {
    return (
        <section className="partners">
            <MainTitle id="partners" text={TITLES.PARTNERS} />
            <div className="partners__conteiner">
               <p>PARTNERS</p>
            </div>
        </section>
    );
};

// "use client";

import "./Contacts.css";
import Image from "next/image";
import imgAdds from "./adds3.png";
import imgEmail from "./email4.png";
// import { MainTitle } from "../MainTitle/MainTitle";
// import { TITLES } from "../../shared/Constants";

export const Contacts = () => {
    return (
        <section className="contacts">
            {/* <MainTitle id="contacts" text={TITLES.CONTACTS} /> */}
            <div id="contacts" className="contacts__conteiner">
                <p className="contacts__text">
                    Контакты ПКО МОФ «Российский фонд мира»
                </p>
                <a
                    href="mailto:fondmira.perm@gmail.com"
                    className="contacts__link"
                >
                    <Image className="contacts__icon" src={imgEmail} alt="" />
                    fondmira.perm@gmail.com
                </a>
                <p className="contacts__text">
                    <Image className="contacts__icon" src={imgAdds} alt="" />
                    Пермь, ул. Ленина 51, каб. 103
                </p>
            </div>
        </section>
    );
};

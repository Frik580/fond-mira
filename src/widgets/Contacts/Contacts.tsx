"use client";

import "./Contacts.css";
import Image from "next/image";
import imgAdds from "./adds3.png";
import imgEmail from "./email4.png";
import { useRef } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkContacts } from "@/store/reducers/linkSlice";

export const Contacts = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkContacts(false));

    return (
        <section ref={ref} className="contacts">
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

"use client";

import "./Contacts.css";
import Image from "next/image";
import imgAdds from "./adds3.png";
import imgEmail from "./email4.png";
import { useRef } from "react";
import { linkState, setLinkContacts } from "@/store/reducers/linkSlice";
import { useAppSelector } from "@/shared/hooks/redux";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useLink from "@/shared/hooks/useLink";

export const Contacts = () => {
    const sectionContacts = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(sectionContacts, setLinkContacts(false));
    const { contacts } = useAppSelector(linkState);
    useLink(sectionContacts, contacts);

    return (
        <section id="contacts" ref={sectionContacts} className="contacts">
            <div className="contacts__conteiner">
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

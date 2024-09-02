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
                {/* <p className="contacts__text">
                    Контакты ПКО МОФ «Российский фонд мира»
                </p> */}
                <a
                    href="mailto:fondmira.perm@gmail.com"
                    className="contacts__link"
                >
                    <Image
                        className="contacts__icon"
                        src={imgEmail}
                        alt="почта"
                    />
                    fondmira.perm@gmail.com
                </a>
                <p className="contacts__text">
                    <Image
                        className="contacts__icon"
                        src={imgAdds}
                        alt="адрес"
                    />
                    Пермь, ул. Ленина 51, каб. 103
                </p>
            </div>
            <Image
                src="https://static-maps.yandex.ru/v1?lang=ru_RU&ll=56.230712%2C58.010863&pt=56.232399,58.010727,pm2rdl&z=17&style=elements:geometry|stylers.hue:0d69f2~elements:label.icon|stylers.hue:0d69f2~elements:label.text.fill|stylers.color:083f91&apikey=025e9292-14a5-4cd0-993b-bb480882f651"
                alt="карта"
                width={600}
                height={450}
                className="contacts__map"
            />
        </section>
    );
};

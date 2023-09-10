"use client";

import "./PartnersList.css";
import zeml from "./images/zeml.png";
import res from "./images/res.png";
import vio from "./images/vio.png";
import pgrants from "./images/pg.png";
import pfki from "./images/pfki.png";
import np from "./images/nov.png";
import luch from "./images/luch.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { Partner } from "../Partner/Partner";
import { useRef } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkPartners } from "@/store/reducers/linkSlice";

export const PartnersList = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkPartners(false));

    return (
        <section ref={ref} className="partners">
            <MainTitle id="partners" text={TITLES.PARTNERS} />
            <ul className="partners__conteiner">
                <Partner
                    href="https://vklmolod.ru"
                    src={zeml}
                    text="Пермская региональная краеведческая общественная организация «Мы - земляки»"
                />
                <Partner
                    href="https://vk.com/public60376245"
                    src={luch}
                    text="Пермская региональная общественная организация учителей
                    «Ассоциация «Луч»"
                />
                <Partner
                    href="https://vk.com/59vol"
                    src={res}
                    text="Ресурсный центр добровольчества Пермского края"
                />
                <Partner
                    href="https://rvio.histrf.ru/59"
                    src={vio}
                    text="Региональное отделение Российского военно - исторического общества"
                />
                <Partner
                    href="https://novoepokolenie.com/"
                    src={np}
                    text="Оздоровительно-образовательный лагерь «Ребячий лагерь
                    «Новое поколение»"
                />
                <Partner
                    href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/"
                    src={pgrants}
                    text="Фонд президентских грантов"
                />
                <Partner
                    href="https://xn--80aeeqaabljrdbg6a3ahhcl4ay9hsa.xn--p1ai/"
                    src={pfki}
                    text="Президентский фонд культурных инициатив"
                />
            </ul>
        </section>
    );
};

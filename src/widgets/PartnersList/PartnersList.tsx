"use client";

import "./PartnersList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { TITLES } from "@/shared/Constants";
import { Partner } from "@/entities/Partner/Partner";
import { useRef } from "react";
import { linkState, setLinkPartners } from "@/store/reducers/linkSlice";
import { useAppSelector } from "@/shared/hooks/redux";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useLink from "@/shared/hooks/useLink";

export const PartnersList = () => {
    const sectionPartners = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(sectionPartners, setLinkPartners(false));
    const { partners } = useAppSelector(linkState);
    useLink(sectionPartners, partners);

    return (
        <section id="partners" ref={sectionPartners} className="partners">
            <MainTitle text={TITLES.PARTNERS} />
            <div className="partners__conteiner">
                <Partner
                    href="https://vklmolod.ru"
                    src="zeml"
                    text="Пермская региональная краеведческая общественная организация «Мы - земляки»"
                />
                <Partner
                    href="https://vk.com/public60376245"
                    src="luch"
                    text="Пермская региональная общественная организация учителей
                    «Ассоциация «Луч»"
                />
                <Partner
                    href="https://vk.com/59vol"
                    src="res"
                    text="Ресурсный центр добровольчества Пермского края"
                />
                <Partner
                    href="https://rvio.histrf.ru/59"
                    src="vio"
                    text="Региональное отделение Российского военно - исторического общества"
                />
                <Partner
                    href="https://novoepokolenie.com/"
                    src="nov"
                    text="Оздоровительно-образовательный лагерь «Ребячий лагерь
                    «Новое поколение»"
                />
                <Partner
                    href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/"
                    src="pg"
                    text="Фонд президентских грантов"
                />
                <Partner
                    href="https://xn--80aeeqaabljrdbg6a3ahhcl4ay9hsa.xn--p1ai/"
                    src="pfki"
                    text="Президентский фонд культурных инициатив"
                />
            </div>
        </section>
    );
};

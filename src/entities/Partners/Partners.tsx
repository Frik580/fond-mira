// "use client";

import "./Partners.css";
import Image from "next/image";
import zeml from "./zeml.png";
import res from "./res.png";
import vio from "./vio.png";
import pgrants from "./pg.png";
import pfki from "./pfki.png";
import np from "./nov.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const Partners = () => {
    return (
        <section className="partners">
            <MainTitle id="partners" text={TITLES.PARTNERS} />
            <ul className="partners__conteiner">
                <a
                    href="https://vklmolod.ru"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="partners__icon"
                        src={zeml}
                        alt="Пермская региональная краеведческая общественная организация «Мы - земляки»"
                    />
                </a>
                <a
                    href="https://vk.com/public60376245"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="partners__text">
                        Пермская региональная общественная организация учителей
                        «Ассоциация «Луч»
                    </p>
                </a>
                <a
                    href="https://vk.com/59vol"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="partners__icon"
                        src={res}
                        alt="Ресурсный центр добровольчества Пермского края"
                    />
                </a>
                <a
                    href="https://rvio.histrf.ru/59"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="partners__icon"
                        src={vio}
                        alt="Региональное отделение Российского военно - исторического общества"
                    />
                </a>
                <a
                    href="https://novoepokolenie.com/"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="partners__icon"
                        src={np}
                        alt="Оздоровительно-образовательный лагерь «Ребячий лагерь
                        «Новое поколение»"
                    />
                </a>
                <a
                    href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="partners__icon"
                        src={pgrants}
                        alt="Фонд президентских грантов"
                    />
                </a>
                <a
                    href="https://xn--80aeeqaabljrdbg6a3ahhcl4ay9hsa.xn--p1ai/"
                    className="partners__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="partners__icon"
                        src={pfki}
                        alt="Президентский фонд культурных инициатив"
                    />
                </a>
            </ul>
        </section>
    );
};

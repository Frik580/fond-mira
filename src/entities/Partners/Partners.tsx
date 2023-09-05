// "use client";

import "./Partners.css";
import Image from "next/image";
import zeml from "./zeml.png";
import res from "./res.png";
import vio from "./vio.png";
import pgrants from "./pgrants.png";
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
                <li className="partners__item">
                    <p className="partners__text">
                        Пермская региональная общественная организация учителей
                        «Ассоциация «Луч»
                    </p>
                </li>
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
                <li className="partners__item">
                    <p className="partners__text">
                        Оздоровительно-образовательный лагерь «Ребячий лагерь
                        «Новое поколение»
                    </p>
                </li>
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
                <li className="partners__item">
                    <p className="partners__text">
                        Президентский фонд культурных инициатив
                    </p>
                </li>
            </ul>
        </section>
    );
};

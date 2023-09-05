// "use client";

import "./Partners.css";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const Partners = () => {
    return (
        <section className="partners">
            <MainTitle id="partners" text={TITLES.PARTNERS} />
            <ul className="partners__conteiner">
                <li className="partners__item">
                    <p className="partners__text">
                        Пермская региональная краеведческая общественная
                        организация «Мы - земляки»
                    </p>
                </li>
                <li className="partners__item">
                    <p className="partners__text">
                        Пермская региональная общественная организация учителей
                        «Ассоциация «Луч»
                    </p>
                </li>
                <li className="partners__item">
                    <p className="partners__text">
                        Ресурсный центр добровольчества Пермского края
                    </p>
                </li>
                <li className="partners__item">
                    <p className="partners__text">
                        Региональное отделение Российского военно- исторического
                        общества
                    </p>
                </li>
                <li className="partners__item">
                    <p className="partners__text">
                        Оздоровительно-образовательный лагерь «Ребячий лагерь
                        «Новое поколение»
                    </p>
                </li>
                <li className="partners__item">
                    <p className="partners__text">Фонд президентских грантов</p>
                </li>
                <li className="partners__item">
                    <p className="partners__text">
                        Президентский фонд культурных инициатив
                    </p>
                </li>
            </ul>
        </section>
    );
};

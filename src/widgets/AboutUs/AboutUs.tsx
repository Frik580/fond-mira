"use client";

import "./AboutUs.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { Direction } from "../Direction/Direction";
import Member from "../../entities/Member/Member";
import { useRef } from "react";
import { linkState, setLinkAboutus } from "../../store/reducers/linkSlice";
import useLinkDeactive from "../../shared/hooks/UseLinkDeactive";
import useLink from "@/shared/hooks/useLink";
import { useAppSelector } from "@/shared/hooks/redux";

export const AboutUs = () => {
    const sectionAboutUs = useRef<HTMLDivElement>(null);
    useLinkDeactive(sectionAboutUs, setLinkAboutus(false));
    const { aboutus } = useAppSelector(linkState);
    useLink(sectionAboutUs, aboutus)

    return (
        <section id="about-us" ref={sectionAboutUs} className="about-us">
            <MainTitle text={TITLES.ABOUT_US} />
            <div className="about-us__columns">
                <div className="about-us__member">
                    <Member
                        image="gera3"
                        text="Председатель Правления ПКО МОФ «Российский фонд мира», 
                    Председатель Совета ПРООУ «Ассоциация «ЛУЧ», 
                    Почётный работник общего образования РФ"
                        alt="Герасимчук Любовь Арсеньевна"
                    />
                </div>
                <div className="about-us__conteiner">
                    <p className="about-us__text">
                        Международный общественный Фонд &#171;Российский Фонд
                        мира&#187; - старейшая общественная организация России,
                        созданная в 1961 году. На протяжении шести десятилетий
                        Фонд мира проводит миротворческую и гуманитарную
                        деятельность по оказанию помощи социально уязвимым слоям
                        населения, ветеранам войны, детям-сиротам и инвалидам.
                        Особое внимание традиционно уделяется работе с
                        молодёжью, сохранению исторической памяти о событиях
                        Великой Отечественной войны, сотрудничеству с Русской
                        Православной церковью и другими религиозными конфессиями
                        в деле духовного возрождения России.
                    </p>
                    <p className="about-us__text">
                        Пермское краевое отделение &#171;Российского фонда
                        мира&#187; все эти годы проводило и продолжает активную
                        деятельность по сохранению Живой Памяти о Героях
                        Советского Союза – наших земляках, о Героях нашего
                        времени.
                    </p>
                    <p className="about-us__text">
                        Одним из ключевых направлений деятельности Фонда мира
                        Прикамья является поддержка молодёжных инициатив, в том
                        числе, молодёжного добровольческого движения.
                    </p>
                    <p className="about-us__text">
                        В рамках социально-значимых проектов Фонда мира
                        совместно с краевой педагогической Ассоциацией «ЛУЧ»
                        проводится системная работа с молодежью Пермского края
                        по формированию среды, доброжелательной к детям.
                        (Краевой конкурс &#171;Ученик года&#187;, региональный
                        конкурс &#171;Учитель года&#187;, Медиа- марафон
                        &#171;Калейдоскоп семейных ценностей&#187;, проект
                        &#171;Слово Учителя&#187;, &#171;МИР начинается в
                        Семье&#187; и др.)
                    </p>
                    <p className="about-us__text">
                        Серьезное внимание уделяется объединению молодёжи
                        Пермского края разных национальностей с целью укрепления
                        общероссийской гражданской идентичности, включению
                        молодежи в АКТИВНУЮ социально-культурную деятельность на
                        основе этнокультурного многообразия Прикамья и
                        традиционных культурных ценностей. (Проекты &#171;Пермь
                        Великая. Парма многоликая&#187;, &#171;КОД семьи по –
                        Пермски&#187; и др).
                    </p>
                    <p className="about-us__text">
                        Российский Фонд мира Прикамья – это команда
                        единомышленников- профессионалов своего Дела!
                    </p>
                    <p
                        className="about-us__text"
                        style={{ textAlign: "right" }}
                    >
                        С пожеланием Мира,
                        <br /> председатель Правления ПКО МОФ &#171;Российский
                        фонд мира&#187;
                    </p>
                    <p
                        className="about-us__text"
                        style={{ textAlign: "right" }}
                    >
                        Любовь Герасимчук
                    </p>
                </div>
            </div>
            <Direction />
        </section>
    );
};

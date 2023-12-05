"use client";

import "./AboutUs.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";
import { Direction } from "../Direction/Direction";
import Member from "../../entities/Member/Member";
import { useRef } from "react";
import { setLinkAboutus } from "../../store/reducers/linkSlice";
import useLinkDeactive from "../../shared/hooks/UseLinkDeactive";

export const AboutUs = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkAboutus(false));

    return (
        <section id="about-us" ref={ref} className="about-us">
            <MainTitle text={TITLES.ABOUT_US} />
            <div className="about-us__columns">
                <div className="about-us__member">
                    <Member
                        image="gera3"
                        text="председатель Правления ПКО МОФ «Российский фонд мира», 
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
                        Российский фонд мира имеет Общий консультативный статус
                        при ООН, статус участника в Совете Европы, у Фонда
                        установлены консультативные отношения с ЮНЕСКО.
                    </p>
                    <p className="about-us__text">
                        Пермское краевое отделение &#171;Российского фонда
                        мира&#187; все эти годы проводило и продолжает активную
                        деятельность по сохранению Живой Памяти о Героях – наших
                        земляках, погибших в годы Великой Отечественной войны.
                    </p>
                    {/* <p className="about-us__text">
                        Реализация молодёжных добровольческих Проектов, развитие
                        молодёжной народной дипломатии, поддержка традиционных
                        духовных ценностей многонациональной культуры Пермского
                        края и России – это ключевые направления деятельности
                        Фонда мира.
                    </p>
                    <p className="about-us__text">
                        Российский Фонд мира Прикамья – это команда
                        единомышленников, сообщество неравнодушных людей
                        Пермского края и России, объединившихся для реализации
                        миротворческих инициатив и добровольческих проектов.
                    </p> */}
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

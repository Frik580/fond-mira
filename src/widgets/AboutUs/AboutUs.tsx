"use client";

import "./AboutUs.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { TITLES } from "@/shared/Constants";
import { Direction } from "@/widgets/Direction/Direction";
import Member from "@/entities/Member/Member";
import { useRef } from "react";
import { linkState, setLinkAboutus } from "@/store/reducers/linkSlice";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useLink from "@/shared/hooks/useLink";
import { useAppSelector } from "@/shared/hooks/redux";

export const AboutUs = () => {
    const sectionAboutUs = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(sectionAboutUs, setLinkAboutus(false));
    const { aboutus } = useAppSelector(linkState);
    useLink(sectionAboutUs, aboutus);

    return (
        <section ref={sectionAboutUs} id="about-us" className="about-us">
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
                    <p className="text">
                        Международный общественный Фонд «Российский Фонд мира» —
                        старейшая общественная организация России, созданная в
                        1961 году. На протяжении шести десятилетий Фонд мира
                        проводит миротворческую и гуманитарную деятельность по
                        оказанию помощи социально уязвимым слоям населения,
                        ветеранам войны, детям-сиротам и инвалидам. Особое
                        внимание традиционно уделяется работе с молодёжью,
                        сохранению исторической памяти о событиях Великой
                        Отечественной войны, сотрудничеству с Русской
                        Православной церковью и другими религиозными конфессиями
                        в деле духовного возрождения России.
                    </p>
                    <p className="text">
                        Пермское краевое отделение «Российского фонда мира» все
                        эти годы проводило и продолжает активную деятельность по
                        сохранению Живой Памяти о Героях Советского Союза –
                        наших земляках, о Героях нашего времени.
                    </p>
                    <p className="text">
                        Одним из ключевых направлений деятельности Фонда мира
                        Прикамья является поддержка молодёжных инициатив, в том
                        числе, молодёжного добровольческого движения.
                    </p>
                    <p className="text">
                        В рамках социально-значимых проектов Фонда мира
                        совместно с краевой педагогической Ассоциацией «ЛУЧ»
                        проводится системная работа с молодежью Пермского края
                        по формированию среды, доброжелательной к детям.
                        (Краевой конкурс «Ученик года», региональный конкурс
                        «Учитель года», Медиа-марафон «Калейдоскоп семейных
                        ценностей», проект «Слово Учителя», «МИР начинается в
                        Семье» и др.)
                    </p>
                    <p className="text">
                        Серьезное внимание уделяется объединению молодёжи
                        Пермского края разных национальностей с целью укрепления
                        общероссийской гражданской идентичности, включению
                        молодежи в АКТИВНУЮ социально-культурную деятельность на
                        основе этнокультурного многообразия Прикамья и
                        традиционных культурных ценностей. (Проекты «Пермь
                        Великая. Парма многоликая», «КОД семьи по — Пермски» и
                        др).
                    </p>
                    <p className="text">
                        Российский Фонд мира Прикамья – это команда
                        единомышленников- профессионалов своего Дела!
                    </p>
                    <p className="text about-us__signature">
                        С пожеланием Мира, <br />
                        председатель Правления ПКО МОФ «Российский фонд мира»{" "}
                        <br />
                        Любовь Герасимчук
                    </p>
                </div>
            </div>
            <Direction />
        </section>
    );
};

"use client";

import "./ProjectMyIMir.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";
import { useEffect } from "react";

export const ProjectMyIMir = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects(projects.length);

    return (
        <>
            {projects[6] && (
                <Project project={projects[6]}>
                    <div className="project-card__conteiner">
                        <p className="project-card__text">
                            В настоящее время вопросы сохранения МИРА носят
                            глобальных характер (на мировом, государственном,
                            межличностном уровнях), в этой связи гражданские
                            миротворческие инициативы имеют важнейшее значение.
                            И, безусловно, формирование гражданской
                            миротворческой позиции у молодёжи становится
                            чрезвычайно актуальной задачей.
                        </p>
                        <p className="project-card__text">
                            Учитывая участившиеся в последнее время случаи
                            агрессии, враждебных проявлений в молодёжной среде
                            по отношению друг к другу, окружающим людям и в
                            Пермском крае, миротворческие инициативы Проекта
                            своевременны и востребованы.
                        </p>
                        <p className="project-card__text">
                            В Пермского края проживает свыше 733 тыс. молодых
                            людей в возрасте от 14 до 30 лет, что составляет 26%
                            всего населения Прикамья. Молодые граждане
                            составляют 43,7% трудоспособного населения области.
                            Более 583 тысяч молодых людей (79,6%) являются
                            горожанами, 20,4% (или около 150 тыс. человек)
                            проживают в сельской местности.
                        </p>
                        <p className="project-card__text">
                            Проект представляет собой комплекс мероприятий,
                            направленных на формирование Человека – Миротворца.
                            В основе практической деятельности лежат три
                            основополагающих понятия: МИРОвосприятие,
                            МИРОвоззрение, МИРОустройство.
                        </p>

                        <article className="project-card__article">
                            <p className="project-card__text">
                                В контексте нашего Проекта следует понимать:
                            </p>
                            <ol className="project-card__numlist project-card__article">
                                <li className="project-card__li">
                                    «МИРОвосприятие» как способность человека
                                    воспринимать окружающий мир с позиций
                                    гуманизма, духовно-нравственных категорий,
                                    (Краевой молодёжный фестиваль национальных
                                    культур Прикамья «МЫ – ВМЕСТЕ!», Краевой
                                    Молодёжный форум «Диалог поколений – Россия
                                    в моём сердце», Краевой образовательный
                                    десант «Уроки Мира»)
                                </li>
                                <li className="project-card__li">
                                    «МИРОвоззрение» как система взглядов,
                                    убеждений, гражданской позиции человека;
                                    (Краевой конкурс школьников Пермского края
                                    «Ученик года: Я – гражданин России», Краевая
                                    научно-практическая конференции студентов
                                    ВУЗов «Гармонизация межнациональных
                                    отношений в молодёжной среде на современном
                                    этапе», молодёжный дискуссионный клуб «МЫ и
                                    МИР»)
                                </li>
                                <li className="project-card__li">
                                    «МИРОустройство» как потребность к активной
                                    созидательной деятельности, направленной на
                                    практические дела. (Краевая акция «День
                                    Победы – не в День Победы, Организация
                                    краевой благотворительной акции « Мой двор –
                                    мой Мир»).
                                </li>
                            </ol>
                        </article>
                        <p className="project-card__text">
                            Систему мероприятий в рамках Проекта следует
                            рассматривать как единый, взаимосвязанный процесс,
                            работающий на конечный результат: активное включение
                            участников Проекта в реализацию практических дел,
                            направленных на благо жителей Пермского края
                            (благотворительные акции, волонтёрское движение,
                            краеведение, поисковую деятельность и др.).
                        </p>
                        <p className="project-card__text">
                            <span className="project-card__text project-card__title">
                                Цель Проекта:{" "}
                            </span>
                            создание условий для активного включения в
                            «МИРотворческую» деятельность молодёжи Пермского
                            края.
                        </p>

                        <article className="project-card__article">
                            <h3 className="project-card__text project-card__title">
                                Задачи проекта:
                            </h3>
                            <ul className="project-card__list">
                                <li className="project-card__li">
                                    сохранение исторической памяти через систему
                                    мероприятий с молодёжью;
                                </li>
                                <li className="project-card__li">
                                    вовлечение молодёжи Пермского края в
                                    разноуровневые процессы МИРотворческой
                                    деятельности;
                                </li>
                                <li className="project-card__li">
                                    поддержка добровольческих, волонтёрских
                                    инициатив в молодёжной среде.
                                </li>
                            </ul>
                        </article>

                        <article className="project-card__article">
                            <p className="project-card__text">
                                Поставленные задачи решались через комплекс
                                (систему) мероприятий, направленных на
                                формирование Человека – Миротворца:
                            </p>
                            <ol className="project-card__numlist project-card__article">
                                <li className="project-card__li">
                                    Краевой конкурс общеобразовательных
                                    организаций «Ученик года – Я - гражданин
                                    России».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        В конкурсе приняли участие более 400
                                        учащихся образовательных организаций
                                        Пермского края.
                                    </p>
                                </li>
                                <li className="project-card__li">
                                    Краевой миротворческий образовательный
                                    десант «Уроки Мира».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        В рамках десанта проведено более 80
                                        встреч с учащимися образовательных
                                        организаций Прикамья. Участниками
                                        образовательного десанта «Уроки мира»
                                        стало более 800 учащихся Пермского края.
                                    </p>
                                </li>
                                <li className="project-card__li">
                                    Организована работа молодёжного
                                    дискуссионного клуба «МЫ и МИР».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        В рамках Клуба проведено 4 дискуссионных
                                        площадки, в т.ч. в рамках краевого
                                        молодёжного форума «Голос каждого
                                        ребёнка должен быть услышан» - площадка
                                        «Детский дипломатический корпус… Это
                                        возможно? ДА!!!», в рамках
                                        образовательных десантов «Уроки мира» в
                                        Пермское суворовское училище (п.
                                        Заёздный).
                                    </p>
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        В работе Клуба приняли участие более 200
                                        человек из числа молодёжи и студентов
                                        Прикамья. Участники дискуссий работали в
                                        режиме проектной деятельности.
                                    </p>
                                </li>

                                <li className="project-card__li">
                                    Акция «День Победы – не в День Победы».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        Проведен цикл тематических мероприятий в
                                        память о событиях ВОВ в течение летних
                                        смен в детских лагерях Пермского края.
                                        Состоялись встречи с участником ВОВ
                                        Фукаловым Г.А., с Почётным гражданином
                                        Пермкого края, членом Правления Фонда –
                                        Козловой З.Р., с ветераном войны и труда
                                        Т.М. Вотиновой.
                                    </p>
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        В акции приняли участие более 2000 детей
                                        и молодёжи Пермского края. Дети стали
                                        участниками очень важного и нужного
                                        разговора о Мире, о нашей истории, о дне
                                        сегодняшнем. Особенно проникновенно
                                        прозвучал рассказ о пионерах героях
                                        Великой отечественной войны и нашем
                                        земляке Алёше Щукине, который в 11 лет
                                        ушёл на войну, стал сыном полка и погиб,
                                        когда ему не было ещё 14 лет. Особое
                                        интерес у ребят вызвал рассказ Фукалова
                                        Г.А, человека, который прошёл всю войну
                                        танкистом, дважды горел в танке и
                                        остался жив.
                                    </p>
                                </li>
                                <li className="project-card__li">
                                    Благотворительная акция «Посади дерево
                                    Мира!».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        МИРотворческая благотворительная акция
                                        Фонда мира стартовала 28 сентября 2018
                                        года в школе № 14 города Перми. Заложена
                                        «Школьная аллея Славы», и первые деревца
                                        зазеленеют уже весною 2019 года в память
                                        о Владиславе Михайлове, выпускнике
                                        школы, офицере-ракетчике Российской
                                        армии. В мероприятиях Акции принял
                                        участие отец героя - Владислав Петрович
                                        Михайлов
                                    </p>
                                </li>
                                <li className="project-card__li">
                                    Научно-практическая конференция школьников и
                                    студентов и многофункциональная
                                    интеллектуальная ролевая игра «Пермская
                                    Детская Модель ООН».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        В мероприятии приняли участие 192
                                        человека из числа учащихся старших
                                        классов образовательных организаций
                                        города Перми и студентов ПГНИУ. В рамках
                                        конференции подведены итоги деятельности
                                        молодёжного дискуссионного клуба «МЫ и
                                        МИР».
                                    </p>
                                </li>
                                <li className="project-card__li">
                                    Краевой Молодёжный фестиваль «Диалог
                                    культур».
                                    <p
                                        className="project-card__text"
                                        style={{ marginTop: "10px" }}
                                    >
                                        Участниками Фестиваля стали молодёжные
                                        команды города Перми и муниципальных
                                        районов . В Фестивале приняли участие
                                        205 человек. Фестиваль стал первым
                                        этапом подготовки к I Краевому
                                        молодёжному фестивалю национальных
                                        культур Пермского края «Солнечный круг».
                                    </p>
                                </li>
                            </ol>
                        </article>
                        <p className="project-card__text">
                            В реализации проекта особо следует отметить
                            эффективное взаимодействие с социальными партнёрами.
                            В качестве партнёров стоит отметить плодотворное
                            сотрудничество с Министерством образования и науки
                            Пермского края, Пермской региональной общественной
                            организацией учителей «Ассоциация «ЛУЧ», с учащимися
                            и педагогами МАОУ «СОШ № 77», МАОУ «МОШ № 22», МАОУ
                            «СОШ № 2» г. Перми, методическим центром Куединского
                            и Кудымкарского МР, молодёжной общественной
                            организацией ДИМСИ, МАОУ «Лицей №1» г. Березники,
                            ФГКОУ «Пермское суворовское военное училище» им.
                            генералиссимуса А.В. Суворова, региональным
                            отделением ОГО «Российское движение школьников»,
                            отделом образования и катехизации Пермской епархии.
                        </p>
                    </div>
                </Project>
            )}
        </>
    );
};

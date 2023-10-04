"use client";

import "./ProjectSolnechnyyKrug.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectSolnechnyyKrug = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects(projects.length);

    return (
        <>
            {projects[8] && (
                <Project project={projects[8]}>
                    <div className="project-card__conteiner">
                        <p className="project-card__text">
                            Целью данного Проекта является формирование и
                            укрепление в многонациональной молодёжной среде
                            Пермского края патриотизма, гражданского
                            самосознания, понимания единства действий для
                            достижения общей цели.
                        </p>
                        <p className="project-card__text">
                            Поставленная Цель достигается в рамках организации и
                            проведения выездного двухдневного молодежного
                            фестиваля национальных культур Пермского края
                            «Солнечный круг» с приглашением гостей из других
                            городов России и реализации «на местах»
                            добровольческих, миротворческих проектов, созданных
                            в рамках Фестиваля.
                        </p>
                        <article className="project-card__article">
                            <h3 className="project-card__text project-card__title">
                                Задачи проекта:
                            </h3>
                            <ul className="project-card__list">
                                <li className="project-card__li">
                                    содействие гражданско-патриотическому
                                    воспитанию молодежи Прикамья на основе
                                    краеведческого материала;
                                </li>
                                <li className="project-card__li">
                                    содействие развитию межкультурных и
                                    межнациональных связей молодых людей,
                                    проживающих на территории Пермского края;
                                </li>
                                <li className="project-card__li">
                                    координация деятельности образовательных
                                    учреждений, частных лиц и общественных
                                    организаций в сфере изучения и популяризации
                                    культуры, традиций и истории народов,
                                    проживающих в Пермском крае;
                                </li>
                                <li className="project-card__li">
                                    создание благоприятных условий для
                                    реализации творческого и социального
                                    потенциала участников Фестиваля;
                                </li>
                                <li className="project-card__li">
                                    привлечение внимания общественности к
                                    деятельности по укреплению единства
                                    российской нации.
                                </li>
                            </ul>
                        </article>
                        <article className="project-card__article">
                            <h3 className="project-card__text project-card__title">
                                Ключевые мероприятия проекта.
                            </h3>
                            <ol className="project-card__numlist project-card__article">
                                <li className="project-card__li">
                                    Создать интерактивную молодежную площадку
                                    для тесного взаимодействия представителей
                                    разных культур Пермского края в сфере
                                    добровольческих инициатив, культуры, спорта,
                                    ораторского искусства. Фестиваль должен
                                    стать стартом для продолжения взаимодействия
                                    молодежных групп и объединений Пермского
                                    края.
                                </li>
                                <li className="project-card__li">
                                    В рамках фестиваля провести:
                                    <ul className="project-card__list">
                                        <li className="project-card__li">
                                            творческие мастерские по знакомству
                                            с национальными культурами Пермского
                                            края;
                                        </li>
                                        <li className="project-card__li">
                                            игры на сплочение межнациональными
                                            команд, сформированных в рамках
                                            фестиваля;
                                        </li>
                                        <li className="project-card__li">
                                            интерактивный квест по изучению
                                            культуры и традиционных ценностей
                                            народов современного Прикамья для
                                            укрепления межнационального и
                                            межконфессионального согласия;
                                        </li>
                                        <li className="project-card__li">
                                            организовать работу коммуникационных
                                            площадок, направленных на
                                            преодоление барьеров в межличностных
                                            отношениях: решение кейсов с
                                            примерами из жизни, основанных на
                                            разнообразии национальной
                                            ментальности, выработке
                                            конструктивных решений проблем для
                                            формирования толерантности в
                                            молодежной среде;
                                        </li>
                                        <li className="project-card__li">
                                            провести 4-часовой «Культурный
                                            хакатон» по разработке
                                            добровольческих, миротворческих
                                            проектов для реализации «на местах».
                                        </li>
                                    </ul>
                                </li>
                                <li className="project-card__li">
                                    Организовать в социальных сетях группу
                                    «Солнечный круг» для обмена идеями и
                                    проектами, направленными на формирование
                                    единого информационного банка «Наш Пермский
                                    край, нам вместе за руку идти».
                                </li>
                                <li className="project-card__li">
                                    Провести телемост с молодежью города
                                    Петрозаводска, (Красноярск).
                                </li>
                            </ol>
                        </article>
                        <article className="project-card__article">
                            <h3 className="project-card__text project-card__title">
                                Результаты деятельности в рамках Проекта
                                «Солнечный круг».
                            </h3>
                            <p className="project-card__text">
                                Фестиваль стал стартом нового этапа
                                взаимодействия межнациональных молодежных групп
                                и объединений Пермского края и городов России.
                            </p>
                            <ol className="project-card__numlist project-card__article">
                                <li className="project-card__li">
                                    В молодежном фестивале приняли участие более
                                    200 человек, молодежь Пермского края и гости
                                    края.
                                </li>
                                <li className="project-card__li">
                                    Проведен телемост «Я - Человек Мира!»,
                                    (Красноярск).
                                </li>
                                <li className="project-card__li">
                                    В рамках работы проектных площадок
                                    разработаны социальные (добровольческие)
                                    проекты для реализации «на местах» на
                                    территориях Пермского края.
                                </li>
                            </ol>
                        </article>
                    </div>
                </Project>
            )}
        </>
    );
};

"use client";

import "./ProjectPermVelikaya.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectPermVelikaya = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects();

    return (
        <>
            {projects[1] && (
                <Project
                    child={
                        <div className="project-card__conteiner">
                            <p className="project-card__text">
                                Проект «Пермь великая - Парма многоликая» - это
                                комплекс взаимосвязанных событий, направленных
                                на объединение молодых людей разных
                                национальностей Прикамья вокруг традиционных
                                культурных и духовно-нравственных ценностей.
                                Ключевая идея Проекта: «мы разные, но у нас
                                общая история, единое настоящее, мы в ответе за
                                наше будущее!» Целевая группа – учащиеся 8-11
                                классов образовательных организаций Пермского
                                края, студенты среднего профессионального
                                образования в возрасте 14 – 20 лет. В реализации
                                проекте участвуют 8 муниципалитетов Прикамья,
                                где компактно проживают представители разных
                                национальностей, город Пермь, Коми-Пермяцкий
                                национальный округ (Кудымкар), Куединский,
                                Ординский, Бардымский МР. (татары, башкиры,
                                удмурты), Суксунский МР (марийцы), Краснокамский
                                МР (армяне), Березниковский МР (немцы).
                                Количество участников - не менее 800 чел.
                            </p>
                            <p className="project-card__text">
                                Комплекс мероприятий Проекта системно выстроен,
                                включает 2 этапа: В рамках 1-го этапа: определён
                                круг потенциальных участников, сформированы
                                лидерские команды «на местах», создано в
                                ВКонтакте интернет-сообщество «Солнечный круг» с
                                целью размещения актуального позитивного
                                культурного контента, обсуждения «острых»
                                вопросов межнационального общения в молодёжной
                                среде Прикамья. Интернет-сообщество «Солнечный
                                круг» входит в команду организаторов - идеологов
                                Краевого молодёжного Фестиваля «Парма
                                многоликая». 2 этап - ключевое мероприятие -
                                краевой Фестиваль национальных культур «Парма
                                многоликая» предполагает создание интерактивного
                                пространства для конструктивного взаимодействия
                                участников Проекта.
                            </p>
                            <article className="project-card__article">
                                <p className="project-card__text">
                                    В программе Фестиваля:
                                </p>
                                <ol className="project-card__numlist project-card__article">
                                    <li className="project-card__li">
                                        Открытая дискуссия «Мы разные, но у нас
                                        общая история, мы в ответе за наше
                                        будущее!».
                                    </li>
                                    <li className="project-card__li">
                                        Творческие мастерские для знакомства с
                                        национальными культурами жителей
                                        Прикамья.
                                    </li>
                                    <li className="project-card__li">
                                        Ролевые игры на сплочение
                                        межнациональными команд.
                                    </li>
                                    <li className="project-card__li">
                                        Интерактивный квест по изучению
                                        культуры, традиционных ценностей народов
                                        Прикамья.
                                    </li>
                                    <li className="project-card__li">
                                        Ярмарка талантов «Солнечный круг».
                                    </li>
                                    <li className="project-card__li">
                                        «Проектный Хакатон» по разработке
                                        социально-значимых культурных проектов.
                                    </li>
                                </ol>
                            </article>
                            <p className="project-card__text">
                                Уникальность Проекта в том, что смысловой акцент
                                перенесён с культурно-развлекательной
                                деятельности участников на активный процесс
                                осознания и принятия культуры разных народов как
                                основы мироустройства. Проект даёт возможность
                                молодым людям разных национальностей Прикамья
                                включиться в активные социальные практики на
                                общее благо, получить разноплановую информацию о
                                многообразии национальных культур нашей общей
                                Родины.
                            </p>
                            <p className="project-card__text">
                                Пермский край уникален по своему этнокультурному
                                многообразию: в Прикамье проживают представители
                                144 народностей, действуют 28
                                национально-культурных общественных объединений.
                                Это не только традиционные народности (татары,
                                удмурты, башкиры, коми, немцы), но и мигранты,
                                представляющие народы Средней Азии, Кавказа,
                                Украины, Индии, Африки (студенты ВУЗов).
                                Проблема сохранения национальной самобытности, с
                                одной стороны, и необходимость жить «в мире и
                                согласии», с другой - чрезвычайно актуальна для
                                Прикамья.
                            </p>
                            <p className="project-card__text">
                                В реальной жизни нам достаточно часто приходится
                                сталкиваться с примерами непонимания и неприятия
                                культуры и традиций разных народов в молодёжной
                                среде, а, порою, проявлением враждебности по
                                отношению к представителям «другой»
                                национальности. Полученные в ходе мониторинга
                                данные позволяют сделать определённые выводы:
                                первое для молодёжи Прикамья тема
                                этнокультурного многообразия родного края
                                представляет особый интерес; второе есть
                                основания говорить о низком уровне
                                этнокультурной компетентности молодёжи Прикамья.
                            </p>
                            <article className="project-card__article">
                                <p className="project-card__text">
                                    Первичный анализ позволил выявить ряд причин
                                    сложившейся ситуации:
                                </p>
                                <ol className="project-card__numlist project-card__article">
                                    <li className="project-card__li">
                                        Недостаточное освещение этнокультурного
                                        многообразия в молодёжных информационных
                                        источниках (в частности - соцсети,
                                        Youtube и т.д.).
                                    </li>
                                    <li className="project-card__li">
                                        Клишированное представление о культуре,
                                        менталитете, нормах поведения
                                        представителей разных национальностей,
                                        наличие культурных мифов.
                                    </li>
                                </ol>
                            </article>

                            <p className="project-card__text">
                                Проект направлен на устранение в молодежной
                                среде штампов, клишированности, псевдопонимания
                                и псевдовосприятия этнических особенностей. Как
                                «национальный культурный код» помогает
                                «вписаться» молодому человеку в реалии
                                современного мира? И когда мешает справиться с
                                вызовами нашего времени? Это актуальная повестка
                                для этнокультурной среды многонационального
                                Прикамья. Сегодня, как никогда, возможности
                                «молодёжной дипломатии» востребованы, глобальный
                                МИР во многом зависит от мировоззрения тех, кому
                                сегодня еще нет восемнадцати! Проект с участием
                                молодёжи предполагает широкое использование
                                современных цифровых технологий и выход в
                                интернет-пространство, сотрудничество с
                                профессионалами IT-сферы.
                            </p>
                        </div>
                    }
                    project={projects[1]}
                />
            )}
        </>
    );
};

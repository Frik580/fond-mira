// "use client";

import { Project } from "../Project/Project";
import { PROJECTS } from "@/shared/Constants";

export const ProjectRassveti = () => {
    return (
        <>
            {PROJECTS[10] && (
                <Project project={PROJECTS[10]}>
                    <div className="project-card__conteiner">
                        <p className="text">
                            Проект «Рябиновые рассветы. Живая Память» -
                            продолжение масштабной работы учащихся Пермского
                            края, проведенной в рамках проекта «Рябиновая аллея
                            Героев», поддержанного ФПГ в 2022 году. Проект
                            предлагает один из возможных эффективных подходов
                            включения молодёжи Прикамья 13-17 лет в активный
                            процесс сохранения исторической памяти о героических
                            страницах истории России и наших дней на основе
                            краеведческого материала.
                        </p>
                        <article className="project-card__article">
                            <p className="text">
                                Все этапы Проекта предполагают использование
                                интерактивных практик включения молодёжи в
                                деятельность:
                            </p>
                            <ul className="project-card__numlist project-card__article">
                                <li className="li">
                                    Создание школьниками 2-го содержательного
                                    блока Виртуальной экскурсии «Рябиновая аллея
                                    Героев»: видео-ролики о подвиге и судьбе
                                    Героев Советского Союза - наших земляках с
                                    их размещением на специально созданном сайте{" "}
                                    <a
                                        href="https://rowan-alley.ru"
                                        className="link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Рябиновая Аллея Героев
                                    </a>{" "}
                                    , (видео-ролики о 40 Героях уже размещены -
                                    1 блок, в Рябиновой аллее установлен инф.
                                    стенд с QR-кодом для выхода на Виртуальную
                                    экскурсию).
                                </li>
                                <li className="li">
                                    Разработка, организация, проведение
                                    школьниками - участниками цикла молодёжных
                                    мероприятий «Рябиновые рассветы» в Рябиновой
                                    аллее (ул. Екатерининская 162, город Пермь).
                                </li>
                            </ul>
                        </article>
                        <article className="project-card__article">
                            <p className="text">
                                Проект «Рябиновые рассветы. Живая Память» - это
                                комплекс взаимосвязанных этапов:
                            </p>
                            <ul className="project-card__numlist project-card__article">
                                <li className="li">
                                    Формирование проектных площадок в школах и
                                    обучение команд.
                                </li>
                                <li className="li">
                                    Создание медиа-продукта (видео-ролики о
                                    судьбе и подвиге Героев Советского Союза -
                                    земляках, не менее 30).
                                </li>
                                <li className="li">
                                    Организация и проведение годового цикла
                                    мероприятий (событий) патриотической
                                    направленности «Рябиновые рассветы» для
                                    молодёжи Пермского края в созданном
                                    культурно-образовательном пространстве. Цикл
                                    мероприятий «Рябиновые рассветы»
                                    предполагает проведение разноформатных
                                    молодёжных событий.
                                </li>
                                <li className="li">
                                    Итоговое событие - Краевой молодёжный Слет
                                    «Путь Героя. Живая Память».
                                </li>
                            </ul>
                        </article>

                        <article className="project-card__article">
                            <p className="text">
                                Проект предоставляет молодежи Прикамья
                                возможность:
                            </p>
                            <ul className="project-card__numlist project-card__article">
                                <li className="li">
                                    Стать разработчиками медиа-продукта
                                    (видео-ролик) о героях Советского Союза -
                                    земляках.
                                </li>
                                <li className="li">
                                    Получить практические знания использования
                                    современных IT технологий при создании
                                    медиа-продукта, приобрести навыки работы с
                                    архивными документами, технологиями поиска
                                    информации из различных источников.
                                </li>
                                <li className="li">
                                    Включиться в активную исследовательскую,
                                    творческую, добровольческую деятельность
                                    (подготовка, проведение интерактивных
                                    событий для молодёжи в Рябиновой Аллее).
                                </li>
                                <li className="li">
                                    Получить общественное признание,
                                    почувствовать свою причастность к созданию
                                    особого места Живой Памяти в центре города
                                    Перми. Создание Краевого молодёжного штаба
                                    «МИР» (Молодёжные Инициативы - Родине)
                                    позволит продолжить работу по завершении
                                    данного Проекта, реализовать долгосрочные
                                    планы по сохранению исторической памяти с
                                    участием молодёжи Прикамья. В реализации
                                    Проекта участвуют не менее 900 чел. Целевая
                                    группа - учащиеся 8-11 классов
                                    образовательных организаций ПК (13 - 17
                                    лет).
                                </li>
                            </ul>
                        </article>
                    </div>
                </Project>
            )}
        </>
    );
};

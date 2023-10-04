"use client";

import "./ProjectMayskiyVals.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectMayskiyVals = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects(projects.length);

    return (
        <>
            {projects[4] && (
                <Project project={projects[4]}>
                    <div className="project-card__conteiner">
                        <p className="project-card__text project-card__title">
                            Как говорить с молодыми о Великой Отечественной,
                            чтобы сохранить память и правду о героическом
                            времени в истории страны?
                        </p>
                        <p className="project-card__text">
                            Один из эффективных путей - это возможности «детской
                            дипломатии», деятельностное, активное включение
                            молодёжи в процесс сохранения исторической памяти.
                            Кроме этого, сегодня как никогда важно говорить с
                            молодыми на языке, приемлемом для их восприятия:
                            цифровые технологии и выход в интернет-пространство,
                            сотрудничество с профессионалами из IT-сферы –
                            становятся обязательными условиями успешного
                            взаимодействия с поколением-next. Представленный
                            Проект в полной мере соответствует этим вызовам
                            времени.
                        </p>
                        <p className="project-card__text">
                            Проект «Майский вальс. Виват, Победа!» предлагает
                            один из возможных эффективных подходов организации
                            системной деятельности с молодёжной среде города
                            Перми.
                        </p>
                        <article className="project-card__article">
                            <p className="project-card__text">
                                Проект включает в себя проведение комплекса
                                взаимосвязанных мероприятий (событий) с
                                молодёжью города Перми:
                            </p>
                            <ol className="project-card__numlist project-card__article">
                                <li className="project-card__li">
                                    Городская молодёжная акция «Майский вальс.
                                    Виват, Победа!». В рамках Акции дан старт
                                    реализации Проекта, проведена интерактивная
                                    программа с элементами театрализации и
                                    концертными номерами, состоится флэш-моб
                                    «Майский вальс. Виват, Победа!» (не менее
                                    150 участников).
                                </li>
                                <li className="project-card__li">
                                    Театрализованная интерактивная программа
                                    «Майский вальс. Живая Память» в Краевом
                                    госпитале для ветеранов войн и на площадках
                                    промышленных предприятий г. Перми. В
                                    программе – выступления детских творческих
                                    коллективов, театральные миниатюры, конкурсы
                                    с тематикой, посвящённой ВОВ. Участники –
                                    молодые специалисты предприятий, ветераны
                                    войны и труда. Не менее 5 площадок, не менее
                                    500 участников.
                                </li>
                                <li className="project-card__li">
                                    Городской молодёжный медиа-марафон «Моя
                                    Пермь. Живая Память» по созданию цифрового
                                    контента (видео-роликов и инфорграфики) о
                                    памятных (мемориальных) местах города Перми,
                                    посвящённых ВОВ, о земляках (героях ВОВ и
                                    тыла), о семейных архивах.
                                </li>
                            </ol>
                        </article>
                        <article className="project-card__article">
                            <h3 className="project-card__text project-card__title">
                                Результаты реализации проекта
                            </h3>
                            <ul className="project-card__list">
                                <li className="project-card__li">
                                    В рамках реализации Проекта созданы
                                    благоприятные условия для сохранения
                                    исторической Памяти, исторической Правды о
                                    событиях Великой Отечественной войны у
                                    молодых граждан города Перми. Формирование и
                                    укрепление в молодёжной среде города Перми
                                    патриотизма, гражданского самосознания.
                                </li>
                                <li className="project-card__li">
                                    Сформированы и пополнены школьные и семейные
                                    архивы о событиях Великой Отечественной
                                    войны с целью сохранения памяти о земляках и
                                    членах семей, тружениках тыла в годы ВОВ.
                                    (Видеоролики, созданные участниками Медиа
                                    марафона «Моя Пермь. Живая Память»).
                                </li>
                                <li className="project-card__li">
                                    Разработано методическое сопровождение для
                                    участников Медиа марафона «Моя Пермь. Живая
                                    Память» (проведено 2 мастер – класса в
                                    формате дистанционного обучения).
                                </li>
                                <li className="project-card__li">
                                    Создан медиа-ресурс в сети Интернет
                                    (интернет-портал «Моя Пермь. Живая Память»
                                    для размещения цифрового контента,
                                    созданного участниками Медиа-марафона).
                                </li>
                                <li className="project-card__li">
                                    Сформировано пространство для
                                    интернет-общения, в котором возможно
                                    взаимодействие участников Форума с
                                    представителями других городов России и
                                    зарубежных стран для обсуждения общих и
                                    актуальных для молодёжи тем, в том числе по
                                    вопросам «народной дипломатии».
                                </li>
                                <li className="project-card__li">
                                    Информационные материалы о реализации
                                    Проекта размещены на сайте ПКО МОФ
                                    «Российский фонд мира», в социальных сетях и
                                    группе{" "}
                                    <a
                                        href="https://vk.com/public168427712"
                                        className="project-card__link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ВКонтакте
                                    </a>{" "}
                                    для привлечения внимания общественности к
                                    миротворческой деятельности.
                                </li>
                            </ul>
                        </article>
                    </div>
                </Project>
            )}
        </>
    );
};

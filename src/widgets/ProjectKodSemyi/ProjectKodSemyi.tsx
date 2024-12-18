// "use client";

import { Project } from "../Project/Project";
import { PROJECTS } from "@/shared/Constants";
import { Document } from "@/entities/Document/Document";


export const ProjectKodSemyi = () => {
    return (
        <>
            {PROJECTS[9] && (
                <Project project={PROJECTS[9]}>
                    <div className="project-card__conteiner">
                        <p className="text">
                            Стартовал Проект «КОД Семьи по – Пермски», который
                            стал победителем конкурса социально-значимых
                            проектов Администрации города Перми «Город-это мы!»
                            в 2024 году.
                        </p>
                        <p className="text">
                            <span className="text project-card__title">
                                Цель:{" "}
                            </span>{" "}
                            Создание городского семейного сообщества «Солнечный
                            круг», объединяющего семьи города Перми для
                            взаимодействия на основе традиционных семейных
                            ценностей.
                        </p>
                        <p className="text">
                            500 участников – семьи города Перми с детьми от
                            10-17 лет станут участниками Медиа-марафона
                            «Калейдоскоп семейных ценностей». Создадут
                            видеосюжеты на темы, обозначенные в Положениио
                            Медиа-марафоне.
                        </p>
                        <p className="text">
                            Участие в Городском Медиа-марафоне даст реальную
                            возможность объединения всех членов семьи в
                            увлекательном процессе поиска материалов для
                            создания семейного «медиа-продукта»: обращение к
                            семейным архивам, семейным реликвиям, семейным
                            традициям, общение со старшим поколение семьи и т.п.
                            А для молодых участников Проекта «выход» в Интернет
                            – пространство является ещё одним стимулом к
                            участию. Наполнение молодёжных социальных сетей
                            позитивным контентом в противовес негативной и,
                            зачастую, опасной для молодёжи информации, в
                            настоящее время актуально как никогда.
                        </p>
                        <p className="text">
                            Все видеосюжеты будут размещены в личных аккаунтах
                            участников на платформе социальной сети ВКонтакте, а
                            также в группе{" "}
                            <a
                                href="https://vk.com/club220023818"
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                «Солнечный круг Фонда мира. Пермский край»
                            </a>{" "}
                            с хештегами #КОДсемьипопермски #МИРсемьиПЕРМЬ.
                        </p>
                        <p className="text">
                            Ключевое событие Проекта - Городской Семейный
                            Фестиваль «КОД Семьи по-Пермски». На него будут
                            приглашены самые активные участники Медиа-марафона.
                        </p>
                        <p className="text">
                            Пространство Фестиваля будет включать в себя
                            комплекс творческих, игровых, оздоровительных и
                            просветительских мероприятий, направленных на
                            формирование навыков создания позитивного семейного
                            уклада и сохранение Семейных Ценностей. Будет
                            организована работа интерактивных площадок как для
                            детей, так и для взрослых участников Фестиваля, в
                            т.ч. будет работать «Домик Доверия» - консультации
                            квалифицированного педагога-психолога.
                        </p>
                        <p className="text">
                            В рамках Фестиваля состоится Открытая дискуссия «КОД
                            Семьи по - Пермски», с приглашением экспертов в
                            области семейных отношений и представителей
                            Администрации города Перми. Одним их результатов
                            Дискуссии станет объединение участников в Городское
                            Семейное сообщество «Солнечный круг» для продолжения
                            взаимодействия по завершении данного Проекта.
                        </p>
                        <p className="text">
                            На всех этапах реализации Проекта для участников
                            будет организовано психолого-педагогическое
                            сопровождение специалистами АНО «Добросердие»
                            (консультирование участников Проекта).
                        </p>
                        <p className="text">
                            Проект направлен на укрепление института семьи,
                            сохранение духовно-нравственных семейных традиций и
                            ценностей семейного воспитания у жителей города
                            Перми.
                        </p>

                        <article className="project-card__article">
                            <p className="text">Результат:</p>
                            <ul className="project-card__numlist project-card__article">
                                <li className="li">
                                    Объединение ВСЕХ членов семьи - участников
                                    Проекта в творческом процессе создания
                                    видеосюжетов о ценностях их семьи.
                                </li>
                                <li className="li">
                                    Наполнение Интернет - пространства
                                    позитивным контентом о семейных ценностях, в
                                    т.ч., молодёжные социальные сети.
                                </li>
                                <li className="li">
                                    Создание городского виртуального семейного
                                    сообщества «Солнечный круг» (ВКонтакте), для
                                    продолжения взаимодействия участников и
                                    продолжения сотрудничества в очном формате
                                    по завершении Проекта.
                                </li>
                            </ul>
                        </article>
                        <Document title="ПОЛОЖЕНИЕ о проведении городского Медиа-марафона «Калейдоскоп семейных ценностей»" href="kod" />
                    </div>
                </Project>
            )}
        </>
    );
};

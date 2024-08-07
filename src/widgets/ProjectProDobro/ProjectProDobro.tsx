// "use client";

import { Project } from "../Project/Project";
import { PROJECTS } from "@/shared/Constants";

export const ProjectProDobro = () => {
    return (
        <>
            {PROJECTS[8] && (
                <Project project={PROJECTS[8]}>
                    <div className="project-card__conteiner">
                        <p className="project-card__text">
                            Проект «Кто, если не ТЫ! PRO-ДОБРО» направлен на
                            устойчивое развитие и активизацию добровольчества в
                            молодёжной среде Прикамья. Мы рассматриваем участие
                            в добровольческом движении как одно из условий
                            включения молодых людей в «активный позитивный
                            контекст» жизнеустройства и самореализации, в т.ч.,
                            как возможность противостоять «пассивной
                            интернет-зависимости» школьников 13 – 18 лет.
                        </p>

                        <article className="project-card__article">
                            <p className="project-card__text">
                                Комплекс мероприятий в рамках Проект системно
                                выстроен и предполагает 3 этапа реализации:
                            </p>
                            <ul className="project-card__numlist project-card__article">
                                <li className="project-card__li">
                                    мониторинг ситуации, информирование
                                    потенциальных участников (формирование
                                    пакета документов);
                                </li>
                                <li className="project-card__li">
                                    краевой молодёжный Медиа-марафон «Кто, если
                                    не ТЫ! PRO-ДОБРО»; участники размещают в
                                    соцсетях под хештегом #ktoeslineti,
                                    #ктоеслинеты, #pro-dobro видео-ролики о
                                    своих добровольческих инициативах; активные
                                    участники Медиа-Марафона войдут в состав
                                    делегаций от муниципальных районов и
                                    городских округов Пермского края для участия
                                    в Краевом Форуме, (не менее 15 делегаций);
                                </li>
                                <li className="project-card__li">
                                    краевой молодёжный Форум «КТО, если не ТЫ!»
                                    – ключевое событие (выездной формат - 2 дня,
                                    лагерь «Новое поколение»). В рамках Форума
                                    создано не менее 6 Центров молодёжного
                                    добровольчества (ДОБРО-Центров) на базе
                                    образовательных организаций ПК; разработан
                                    алгоритм их взаимодействия; разработано не
                                    менее 6 добровольческих проектов для
                                    реализации «на местах», проведена серия
                                    Мастер-классов и дискусионных площадок.
                                </li>
                            </ul>
                        </article>
                        <p className="project-card__text">
                            Инновация – широкое использование современных
                            цифровых технологий, выход в интернет-пространство,
                            сотрудничество с профессионалами IT-сферы.
                        </p>
                        <p className="project-card__text">
                            Ключевая особенность – системный подход к
                            организации деятельности по вовлечению молодёжи
                            Прикамья в добровольческое движение, (данный проект
                            является логическим продолжением проекта,
                            поддержанного Фондом грантов губернатора Пермского
                            края в 2021 году).
                        </p>
                        <p className="project-card__text">
                            <span className="project-card__text project-card__title">
                                Цель:{" "}
                            </span>{" "}
                            Создание условий для устойчивого развития и
                            активизации молодёжного добровольческого движения в
                            Пермском крае.
                        </p>

                        <article className="project-card__article">
                            <h2 className="project-card__text project-card__title">
                                Задачи проекта:
                            </h2>
                            <ol className="project-card__list">
                                <li className="project-card__li">
                                    Провести мониторинг ситуации о состоянии
                                    добровольческого молодёжного движения в
                                    образовательных организациях Пермского края.
                                </li>
                                <li className="project-card__li">
                                    Разработать концепцию (в основе – увеличение
                                    численности участников молодёжного
                                    добровольчества) и провести Краевой
                                    Медиа-марафона «Кто, если не ТЫ!».
                                </li>
                                <li className="project-card__li">
                                    Разработать концепцию (в основе – создание
                                    сети Добро-Центров на базе образовательных
                                    организаций) и провести Краевой Молодёжный
                                    Форум «Кто, если не ТЫ!».
                                </li>
                                <li className="project-card__li">
                                    Обеспечить информационное сопровождение
                                    Проекта в СМИ и интернет-пространстве.
                                </li>
                            </ol>
                        </article>
                    </div>
                </Project>
            )}
        </>
    );
};

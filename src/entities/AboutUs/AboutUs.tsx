// "use client";

import "./AboutUs.css";
import Image from "next/image";
import imagePP from "./5_4T5J0z5xA.png";
import { MainTitle } from "../MainTitle/MainTitle";
import { TITLES } from "../../shared/Constants";

export const AboutUs = () => {
    return (
        <section className="about-us">
            <MainTitle id="about-us" text={TITLES.ABOUT_US} />
            <div className="about-us__conteiner">
                <Image
                    src={imagePP}
                    className="about-us__image"
                    alt="фото Герасимчук Л.А."
                />
                <div className="about-us__text-conteiner">
                    <p className="about-us__text">
                        События последнего времени поставили вопросы сохранения
                        исторической памяти в разряд приоритетных. Уникальность
                        проекта ПКО МОФ «Российский фонд мира» - «Рябиновая
                        аллея Героев» в том, что Ключевая идея предложена самими
                        школьниками города Перми. И связано это с их личным
                        знакомством с Василием Михайловичем Астафьевым,
                        последним Героем Советского Союза в Пермском крае,
                        человеком с уникальной Судьбой, и до последнего времени
                        - активным МИРотворцем. Он горячо поддержал инициативу
                        ребят: создание виртуальной экскурсии &#171;Рябиновая
                        аллея Героев&#187; и создание в центре города на
                        Рябиновой аллее особого места Живой памяти. Там в 2013
                        году была установлена памятная Стела Героям Советского
                        Союза, нашим землякам, и первым в списке стоит имя В.М.
                        Астафьева.
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
        </section>
    );
};

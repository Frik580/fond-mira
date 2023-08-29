"use client";

import "./News.css";

export const News = () => {
    return (
        <li onMouseEnter={() => console.log("Навел")} className="news">
            <button
                className="news__button"
                onClick={() => console.log("Кликнул")}
            >
                Ещё
            </button>
            <p className="news__date">21 июля 2023</p>
            <p className="news__text">
                Савелий Хлуднев и Марина Беляева, выпускники школы, доброхоты,
                посадили рябину у памятного знака подвигу роты Василия
                Афанасьевича Полыгалова, Героя Советского Союза, уроженца
                Пермской губернии.
            </p>
        </li>
    );
};

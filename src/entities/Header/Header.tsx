"use client";

import { BurgerButton } from "@/shared/BurgerButton/BurgerButton";
import "./Header.css";
import { MainLogo } from "@/entities/MainLogo/MainLogo";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import img from "./logo.png";

export const Header = () => {
    return (
        <header className="header">
            <BurgerButton click={() => {}} />
            <MainLogo img={img} alt='голубь мира'  />
            <nav className="header__navigation">
                <HeaderLink path={"#aboutus"} title={"Кто мы"} />
                <HeaderLink path={"#"} title={"Новости"} />
                <HeaderLink path={"#"} title={"Наши проекты"} />
                <HeaderLink path={"#"} title={"Партнёры"} />
                <HeaderLink path={"#"} title={"Документы"} />
                <HeaderLink path={"#"} title={"Контакты"} />
            </nav>
            <button className="header__button">
                Поддержать
            </button>
        </header>
    );
};

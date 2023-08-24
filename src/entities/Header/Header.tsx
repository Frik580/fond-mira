"use client";

import { BurgerButton } from "@/shared/BurgerButton/BurgerButton";
import "./Header.css";
import { MainLogo } from "@/shared/MainLogo/MainLogo";
import { HeaderLink } from "@/shared/HeaderLink/HeaderLink";

export const Header = () => {
    return (
        <header className="header">
            <BurgerButton click={() => {}} />
            <MainLogo />
            <nav className="header__navigation">
                <HeaderLink path={"#"} title={"Кто мы"} />
                <HeaderLink path={"#"} title={"Новости"} />
                <HeaderLink path={"#"} title={"Наши проекты"} />
                <HeaderLink path={"#"} title={"Партнёры"} />
                <HeaderLink path={"#"} title={"Контакты"} />
                <HeaderLink path={"#"} title={"Документы"} />
                <HeaderLink path={"#"} title={"Состав фонда"} />
            </nav>
        </header>
    );
};

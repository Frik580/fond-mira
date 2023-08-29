"use client";

import "./Header.css";
import { BurgerButton } from "@/shared/BurgerButton/BurgerButton";
import { MainLogo } from "@/entities/MainLogo/MainLogo";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES } from "../../shared/Constants";
import img from "./logo.png";

export const Header = () => {
    return (
        <header className="header">
            <BurgerButton click={() => {}} />
            <MainLogo img={img} alt="голубь мира" />
            <nav className="header__navigation">
                <HeaderLink path={"#about-us"} title={TITLES.ABOUT_US} />
                <HeaderLink path={"#news-list"} title={TITLES.NEWS} />
                <HeaderLink path={"#projects"} title={TITLES.OUR_PROJECTS} />
                <HeaderLink path={"#partners"} title={TITLES.PARTNERS} />
                <HeaderLink path={"#"} title={TITLES.DOCUMENTS} />
                <HeaderLink path={"#contacts"} title={TITLES.CONTACTS} />
            </nav>
            <button className="header__button">Поддержать</button>
        </header>
    );
};

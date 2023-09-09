"use client";

import "./Header.css";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES } from "../../shared/Constants";
import { MainLogo } from "../MainLogo/MainLogo";
import { PeaceFound } from "../PeaceFound/PeaceFound";
import { useAppSelector } from "../../shared/hooks/redux";
import { setHeader } from "@/store/reducers/headerSlice";
import { setLinkState } from "@/store/reducers/linkSlice";

export const Header = () => {
    const headerValue = useAppSelector(setHeader);
    const link = useAppSelector(setLinkState);

    return (
        <header className={headerValue ? "header" : "header_visibility"}>
            <div className="header__links">
                <MainLogo />
                <PeaceFound />
            </div>
            <nav className="header__navigation">
                <BurgerButton click={() => {}} />
                <HeaderLink
                    path={"/#about-us"}
                    title={TITLES.ABOUT_US}
                    active={link.aboutus}
                />
                <HeaderLink
                    path={"/#news-list"}
                    title={TITLES.NEWS}
                    active={link.newslist}
                />
                <HeaderLink
                    path={"/#projects-list"}
                    title={TITLES.OUR_PROJECTS}
                    active={link.projectslist}
                />
                <HeaderLink
                    path={"/#partners"}
                    title={TITLES.PARTNERS}
                    active={link.partners}
                />
                <HeaderLink
                    path={"/documents"}
                    title={TITLES.DOCUMENTS}
                    active={link.documents}
                />
                <HeaderLink
                    path={"/#contacts"}
                    title={TITLES.CONTACTS}
                    active={link.contacts}
                />
                <button className="header__button">Помочь</button>
            </nav>
        </header>
    );
};

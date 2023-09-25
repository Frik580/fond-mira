"use client";

import "./Header.css";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES, PATH } from "../../shared/Constants";
import MainLogo from "../../entities/MainLogo/MainLogo";
import PeaceFound from "../../entities/PeaceFound/PeaceFound";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { headerValue } from "@/store/reducers/headerSlice";
import { linkState } from "@/store/reducers/linkSlice";
import { setValuePopup } from "@/store/reducers/popupSlice";
import Book from "@/entities/Book/Book";

export const Header = () => {
    const dispatch = useAppDispatch();
    const header = useAppSelector(headerValue);
    const link = useAppSelector(linkState);

    return (
        <header className={header ? "header" : "header_visibility"}>
            <div className="header__links">
                <MainLogo />
                <PeaceFound />
            </div>
            <nav className="header__navigation">
                <BurgerButton
                    click={() => {
                        dispatch(setValuePopup(true));
                    }}
                />
                <HeaderLink
                    path={PATH.ABOUT_US}
                    title={TITLES.ABOUT_US}
                    active={link.aboutus}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={PATH.NEWS}
                    title={TITLES.NEWS}
                    active={link.newslist}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={PATH.OUR_PROJECTS}
                    title={TITLES.OUR_PROJECTS}
                    active={link.projectslist}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={PATH.PARTNERS}
                    title={TITLES.PARTNERS}
                    active={link.partners}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={PATH.DOCUMENTS}
                    title={TITLES.DOCUMENTS}
                    active={link.documents}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={PATH.CONTACTS}
                    title={TITLES.CONTACTS}
                    active={link.contacts}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                {/* <button className="header__button">Помочь</button> */}
                <Book />
            </nav>
        </header>
    );
};

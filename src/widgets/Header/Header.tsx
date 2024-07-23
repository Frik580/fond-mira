"use client";

import "./Header.css";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES, PATH } from "../../shared/Constants";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { linkState } from "@/store/reducers/linkSlice";
import { setValueNavPopup } from "@/store/reducers/popupSlice";
import Book from "@/entities/Book/Book";
import fixedBody from "@/shared/lib/FixedBody";
import { HeaderLogo } from "@/entities/HeaderLogo/HeaderLogo";
import useScrollControl from "@/shared/hooks/useScrollControl";
import useFetchProjects from "@/shared/hooks/useFetchProjects";
import { newsAPI } from "@/shared/services/NewsService";

export const Header = () => {
    const header = useScrollControl();
    useFetchProjects();
    const dispatch = useAppDispatch();
    const link = useAppSelector(linkState);
    const { data: news } = newsAPI.useFetchAllNewsQuery("");

    return (
        <header
            className={`header ${
                header ? "header_gradient" : "header_visibility"
            }`}
        >
            <div className="header__links">
                <HeaderLogo headerValue={header} />
            </div>

            <nav className="header__navigation">
                <BurgerButton
                    headerValue={header}
                    click={() => {
                        dispatch(setValueNavPopup(true));
                        fixedBody();
                    }}
                />
                <HeaderLink
                    path={PATH.ABOUT_US}
                    title={TITLES.ABOUT_US}
                    active={link.aboutus}
                    style="header-link__conteiner"
                    headerValue={header}
                />
                {news && (
                    <HeaderLink
                        path={PATH.NEWS}
                        title={TITLES.NEWS}
                        active={link.newslist}
                        style="header-link__conteiner"
                        headerValue={header}
                    />
                )}
                <HeaderLink
                    path={PATH.OUR_PROJECTS}
                    title={TITLES.OUR_PROJECTS}
                    active={link.projectslist}
                    style="header-link__conteiner"
                    headerValue={header}
                />
                <HeaderLink
                    path={PATH.PARTNERS}
                    title={TITLES.PARTNERS}
                    active={link.partners}
                    style="header-link__conteiner"
                    headerValue={header}
                />
                <HeaderLink
                    path={PATH.DOCUMENTS}
                    title={TITLES.DOCUMENTS}
                    active={link.documents}
                    style="header-link__conteiner"
                    headerValue={header}
                />
                <HeaderLink
                    path={PATH.CONTACTS}
                    title={TITLES.CONTACTS}
                    active={link.contacts}
                    style="header-link__conteiner"
                    headerValue={header}
                />
                {/* <button className="header__button">Помочь</button> */}
                <div className="header__book">
                    <Book />
                </div>
            </nav>
        </header>
    );
};

"use client";

import "./Header.css";
import Image from "next/image";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES } from "../../shared/Constants";
import { MainLogo } from "../../entities/MainLogo/MainLogo";
import { PeaceFound } from "../../entities/PeaceFound/PeaceFound";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { headerValue } from "@/store/reducers/headerSlice";
import { linkState } from "@/store/reducers/linkSlice";
import { setValuePopup } from "@/store/reducers/popupSlice";
import Link from "next/link";

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
                    path={"/#about-us"}
                    title={TITLES.ABOUT_US}
                    active={link.aboutus}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={"/#news-list"}
                    title={TITLES.NEWS}
                    active={link.newslist}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={"/#projects-list"}
                    title={TITLES.OUR_PROJECTS}
                    active={link.projectslist}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={"/#partners"}
                    title={TITLES.PARTNERS}
                    active={link.partners}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={"/documents"}
                    title={TITLES.DOCUMENTS}
                    active={link.documents}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                <HeaderLink
                    path={"/#contacts"}
                    title={TITLES.CONTACTS}
                    active={link.contacts}
                    style="header-link__conteiner"
                    styleLink="header-link"
                    styleText="header-link__text"
                />
                {/* <button className="header__button">Помочь</button> */}
                <Link
                    className="header__button"
                    href={"https://bank.permgaspi.ru/base.php?i=29"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={require("@/shared/image/orden.png")}
                        width={80}
                        height={80}
                        className="header__button-image"
                        alt="логотип фонда мира"
                    />
                    <p className="header__button-title">Книга Памяти</p>
                    <p className="header__button-text">1941 - 1945</p>
                    <p className="header__button-text">
                        База данных погибших военнослужащих Пермского Края
                    </p>
                </Link>
            </nav>
        </header>
    );
};

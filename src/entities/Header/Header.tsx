"use client";

import "./Header.css";
import { useState, useEffect } from "react";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES } from "../../shared/Constants";
import { MainLogo } from "../MainLogo/MainLogo";
import { PeaceFound } from "../PeaceFound/PeaceFound";

export const Header = ({ domRef }: any) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (domRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => setIsVisible(entry.isIntersecting));
            });

            observer.observe(domRef.current);

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(domRef.current);
            };
        }
    }, [domRef]);

    return (
        <header className={isVisible ? "header" : "header_visibility"}>
            <div className="header__links">
                <MainLogo />
                <PeaceFound />
            </div>
            <nav className="header__navigation">
                <BurgerButton click={() => {}} />
                <HeaderLink path={"#about-us"} title={TITLES.ABOUT_US} />
                <HeaderLink path={"#news-list"} title={TITLES.NEWS} />
                <HeaderLink
                    path={"#projects-list"}
                    title={TITLES.OUR_PROJECTS}
                />
                <HeaderLink path={"#partners"} title={TITLES.PARTNERS} />
                <HeaderLink path={"#"} title={TITLES.DOCUMENTS} />
                <HeaderLink path={"#contacts"} title={TITLES.CONTACTS} />
                <button className="header__button">Помочь</button>
            </nav>
        </header>
    );
};

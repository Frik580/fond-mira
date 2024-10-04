"use client";

import "./Header.css";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES, PATH } from "../../shared/Constants";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { linkState, setLinkHome } from "@/store/reducers/linkSlice";
import { setValueNavPopup } from "@/store/reducers/popupSlice";
import { Book } from "@/entities/Book/Book";
import fixedBody from "@/shared/lib/FixedBody";
import { HeaderLogo } from "@/entities/HeaderLogo/HeaderLogo";
import useScrollControl from "@/shared/hooks/useScrollControl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { setValueHeader } from "@/store/reducers/headerSlice";
import { newsState } from "@/store/reducers/newsSlice";

export const Header = () => {
    const pathname = usePathname();
    const header = useScrollControl();
    const dispatch = useAppDispatch();
    const link = useAppSelector(linkState);
    const { news } = useAppSelector(newsState);

    useEffect(() => {
        if (
            pathname !== "/" &&
            pathname !== "/documents" &&
            pathname !== "/helpus"
        ) {
            dispatch(setLinkHome());
        }
    }, [dispatch, pathname]);

    return (
        <header
            className={`header ${
                header ? "header_gradient" : "header_visibility"
            }`}
            style={{
                backgroundImage: `${
                    header && pathname !== "/"
                        ? "linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 110%)"
                        : ""
                }`,
                height: `${header && pathname !== "/" ? "auto" : ""}`,
            }}
        >
            <div className="header__links">
                <HeaderLogo headerValue={header} />
            </div>

            <nav className="header__navigation">
                <BurgerButton
                    headerValue={header}
                    click={() => {
                        dispatch(setValueHeader(header));
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
                <HeaderLink
                    path={PATH.HELP}
                    title={TITLES.HELP}
                    active={link.help}
                    style="header-link__conteiner"
                    headerValue={header}
                />
                {/* <Link href="/helpus" className="header__button">{TITLES.HELP}</Link> */}
                {/* <div className="header__book">
                    <Book />
                </div> */}
            </nav>
            <div className="header__book">
                <Book header={header} />
            </div>
        </header>
    );
};

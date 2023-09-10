"use client";

import "./NavPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { setPopupValue, setValue } from "@/store/reducers/popupSlice";
import { useEffect } from "react";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import { TITLES } from "../../shared/Constants";
import { setLinkState } from "@/store/reducers/linkSlice";

export const NavPopup = () => {
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(setPopupValue);
    const link = useAppSelector(setLinkState);

    useEffect(() => {
        const handleEscClose = (e: any) => {
            e.key === "Escape" && dispatch(setValue(false));
        };
        document.addEventListener("keyup", handleEscClose);
        return () => {
            document.removeEventListener("keyup", handleEscClose);
        };
    }, []);

    return (
        <div
            onClick={() => dispatch(setValue(false))}
            className={`navpopup ${openpopup && "navpopup_opened"}`}
        >
            {openpopup && (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="navpopup__conteiner"
                >
                    <button
                        onClick={() => dispatch(setValue(false))}
                        className="navpopup__close-button"
                        type="button"
                    />
                    <div className="navpopup__links">
                        <HeaderLink
                            path={"/#about-us"}
                            title={TITLES.ABOUT_US}
                            active={link.aboutus}
                            style="header-link__conteiner_burger"
                            styleLink="header-link_burger"
                            styleText="header-link__text_burger"
                        />
                        <HeaderLink
                            path={"/#news-list"}
                            title={TITLES.NEWS}
                            active={link.newslist}
                            style="header-link__conteiner_burger"
                            styleLink="header-link_burger"
                            styleText="header-link__text_burger"
                        />
                        <HeaderLink
                            path={"/#projects-list"}
                            title={TITLES.OUR_PROJECTS}
                            active={link.projectslist}
                            style="header-link__conteiner_burger"
                            styleLink="header-link_burger"
                            styleText="header-link__text_burger"
                        />
                        <HeaderLink
                            path={"/#partners"}
                            title={TITLES.PARTNERS}
                            active={link.partners}
                            style="header-link__conteiner_burger"
                            styleLink="header-link_burger"
                            styleText="header-link__text_burger"
                        />
                        <HeaderLink
                            path={"/documents"}
                            title={TITLES.DOCUMENTS}
                            active={link.documents}
                            style="header-link__conteiner_burger"
                            styleLink="header-link_burger"
                            styleText="header-link__text_burger"
                        />
                        <HeaderLink
                            path={"/#contacts"}
                            title={TITLES.CONTACTS}
                            active={link.contacts}
                            style="header-link__conteiner_burger"
                            styleLink="header-link_burger"
                            styleText="header-link__text_burger"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavPopup;

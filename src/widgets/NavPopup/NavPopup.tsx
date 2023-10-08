"use client";

import "./NavPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValuePopup } from "@/store/reducers/popupSlice";
import { linkState } from "@/store/reducers/linkSlice";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES } from "@/shared/Constants";
import useCloseByEsc from "@/widgets/NavPopup/lib/UseCloseByEsc";

export const NavPopup = () => {
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const link = useAppSelector(linkState);
    useCloseByEsc(false)

    return (
        <div
            onClick={() => dispatch(setValuePopup(false))}
            className={`navpopup ${openpopup.value && "navpopup_opened"}`}
        >
            {openpopup.value && (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="navpopup__conteiner"
                >
                    <button
                        onClick={() => dispatch(setValuePopup(false))}
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

"use client";

import "./NavPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValueNavPopup } from "@/store/reducers/popupSlice";
import { linkState } from "@/store/reducers/linkSlice";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { TITLES } from "@/shared/Constants";
import unfixedBody from "@/shared/lib/UnfixedBody";

export const NavPopup = () => {
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const link = useAppSelector(linkState);

    function closePopup() {
        dispatch(setValueNavPopup(false));
        unfixedBody();
    }

    return (
        <div
            onClick={closePopup}
            className={`navpopup ${openpopup.valueNav && "navpopup_opened"}`}
        >
            {openpopup.valueNav && (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="navpopup__conteiner"
                >
                    <button
                        onClick={closePopup}
                        className="navpopup__close-button"
                        type="button"
                    />
                    <div className="navpopup__links">
                        <HeaderLink
                            path={"/#about-us"}
                            title={TITLES.ABOUT_US}
                            active={link.aboutus}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={"/#news-list"}
                            title={TITLES.NEWS}
                            active={link.newslist}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={"/#projects-list"}
                            title={TITLES.OUR_PROJECTS}
                            active={link.projectslist}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={"/#partners"}
                            title={TITLES.PARTNERS}
                            active={link.partners}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={"/documents"}
                            title={TITLES.DOCUMENTS}
                            active={link.documents}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={"/#contacts"}
                            title={TITLES.CONTACTS}
                            active={link.contacts}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

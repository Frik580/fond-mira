"use client";

import "./NavPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValueNavPopup } from "@/store/reducers/popupSlice";
import { linkState } from "@/store/reducers/linkSlice";
import { HeaderLink } from "@/entities/HeaderLink/HeaderLink";
import { PATH, TITLES } from "@/shared/Constants";
import unfixedBody from "@/shared/lib/UnfixedBody";
import useKeyEvents from "@/shared/hooks/useKeyEvents";
import { useCallback, useEffect } from "react";
import { setValueHeader } from "@/store/reducers/headerSlice";

export const NavPopup = () => {
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const link = useAppSelector(linkState);

    const closePopup = useCallback(() => {
        dispatch(setValueHeader(null))
        unfixedBody();
        dispatch(setValueNavPopup(false));
    }, [dispatch])

    useKeyEvents((key) => {
        key === "Escape" && closePopup();
    });

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
                            path={PATH.ABOUT_US}
                            title={TITLES.ABOUT_US}
                            active={link.aboutus}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={PATH.NEWS}
                            title={TITLES.NEWS}
                            active={link.newslist}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={PATH.OUR_PROJECTS}
                            title={TITLES.OUR_PROJECTS}
                            active={link.projectslist}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={PATH.PARTNERS}
                            title={TITLES.PARTNERS}
                            active={link.partners}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={PATH.DOCUMENTS}
                            title={TITLES.DOCUMENTS}
                            active={link.documents}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                        <HeaderLink
                            path={PATH.CONTACTS}
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

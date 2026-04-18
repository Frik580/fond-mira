"use client";

import "./NavPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValueNavPopup } from "@/store/reducers/popupSlice";
import { linkState } from "@/store/reducers/linkSlice";
import { HeaderLink } from "@/entities/HeaderElem/HeaderLink/HeaderLink";
import unfixedBody from "@/shared/lib/UnfixedBody";
import useKeyEvents from "@/shared/hooks/useKeyEvents";
import { NAV_ITEMS, NavItem } from "@/shared/config/navConfig";
import { useCallback } from "react";
import { setValueHeader } from "@/store/reducers/headerSlice";

export const NavPopup = () => {
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const link = useAppSelector(linkState);

    const closePopup = useCallback(() => {
        dispatch(setValueHeader(null));
        unfixedBody();
        dispatch(setValueNavPopup(false));
    }, [dispatch]);

    useKeyEvents((key) => {
        if (key === "Escape") {
            closePopup();
        }
    });

    if (!openpopup.valueNav) {
        return null;
    }

    return (
        <div className="navpopup" onClick={closePopup}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="navpopup__conteiner"
            >
                <button
                    onClick={closePopup}
                    className="navpopup__close-button"
                    aria-label="Закрыть навигацию"
                    type="button"
                />
                <div className="navpopup__links">
                    {NAV_ITEMS.map((item: NavItem) => (
                        <HeaderLink
                            key={item.path}
                            path={item.path}
                            title={item.title}
                            active={!!link[item.activeKey as keyof typeof link]}
                            style="header-link__conteiner_burger"
                            headerValue={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

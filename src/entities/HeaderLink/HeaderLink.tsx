"use client";

import Link from "next/link";
import "./HeaderLink.css";
import { useAppDispatch } from "../../shared/hooks/redux";
import {
    setLinkHome,
    setLinkAboutus,
    setLinkNewslist,
    setLinkProjectslist,
    setLinkPartners,
    setLinkDocuments,
    setLinkContacts,
} from "../../store/reducers/linkSlice";
import { setValuePopup } from "@/store/reducers/popupSlice";
import { FC } from "react";
import { PATH } from "@/shared/Constants";

type HeaderLinkProps = {
    title: string;
    path: string;
    active: boolean;
    style: string;
    styleLink: string;
    styleText: string;
};

export const HeaderLink: FC<HeaderLinkProps> = ({
    title,
    path,
    active,
    style,
    styleLink,
    styleText,
}) => {
    const dispatch = useAppDispatch();

    const handleLinkState = () => {
        dispatch(setValuePopup(false));
        dispatch(setLinkHome());
        if (path === PATH.ABOUT_US) {
            dispatch(setLinkAboutus(true));
        } else if (path === PATH.NEWS) {
            dispatch(setLinkNewslist(true));
        } else if (path === PATH.OUR_PROJECTS) {
            dispatch(setLinkProjectslist(true));
        } else if (path === PATH.PARTNERS) {
            dispatch(setLinkPartners(true));
        } else if (path === PATH.DOCUMENTS) {
            dispatch(setLinkDocuments(true));
        } else if (path === PATH.CONTACTS) {
            dispatch(setLinkContacts(true));
        }
    };

    return (
        <>
            {active ? (
                <p className={styleText}>{title}</p>
            ) : (
                <button onClick={handleLinkState} className={style}>
                    <Link href={path} className={styleLink}>
                        {title}
                    </Link>
                </button>
            )}
        </>
    );
};

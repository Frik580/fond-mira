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

type Props = {
    title: string;
    path: string;
    active: boolean;
    style: string;
    styleLink: string;
    styleText: string;
};

export const HeaderLink = ({ title, path, active, style, styleLink,styleText }: Props) => {
    const dispatch = useAppDispatch();

    const handleLinkState = () => {
        dispatch(setValuePopup(false))
        dispatch(setLinkHome());
        if (path === "/#about-us") {
            dispatch(setLinkAboutus(true));
        } else if (path === "/#news-list") {
            dispatch(setLinkNewslist(true));
        } else if (path === "/#projects-list") {
            dispatch(setLinkProjectslist(true));
        } else if (path === "/#partners") {
            dispatch(setLinkPartners(true));
        } else if (path === "/documents") {
            dispatch(setLinkDocuments(true));
        } else if (path === "/#contacts") {
            dispatch(setLinkContacts(true));
        }
    };

    return (
        <>
            {active ? (
                <p className={styleText}>{title}</p>
            ) : (
                <button
                    onClick={handleLinkState}
                    className={style}
                >
                    <Link href={path} className={styleLink}>
                        {title}
                    </Link>
                </button>
            )}
        </>
    );
};

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

type Props = {
    title: string;
    path: string;
    active: boolean;
};

export const HeaderLink = ({ title, path, active }: Props) => {
    const dispatch = useAppDispatch();

    const handleLinkState = () => {
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
                <p className="header-link__text">{title}</p>
            ) : (
                <button
                    onClick={handleLinkState}
                    className="header-link__conteiner"
                >
                    <Link href={path} className="header-link">
                        {title}
                    </Link>
                </button>
            )}
        </>
    );
};

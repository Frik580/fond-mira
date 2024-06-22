"use client";

import "./HeaderLink.css";
import { FC, useEffect, useState } from "react";
import handleLinkState from "./lib/LinkState";
import unfixedBody from "@/shared/lib/UnfixedBody";
import { PATH } from "@/shared/Constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { loadedRefState } from "@/store/reducers/loadedRefSlice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";

type HeaderLinkProps = {
    title: string;
    path: string;
    active: boolean;
    style: string;
    headerValue: boolean;
};

export const HeaderLink: FC<HeaderLinkProps> = ({
    title,
    path,
    active,
    style,
    headerValue,
}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const { newslist } = useAppSelector(loadedRefState);

    const routing = () => {
        unfixedBody();
        if (pathname !== "/") {
            router.push("/");
            if (path === PATH.OUR_PROJECTS) {
                setTimeout(() => {
                    handleLinkState(path, dispatch);
                }, 100);
            } else {
                handleLinkState(path, dispatch);
            }
        } else {
            handleLinkState(path, dispatch);
        }
    };

    return (
        <>
            {active ? (
                <div className={style}>
                    <p
                        className={`header-link__text ${
                            headerValue ? "" : "header-link_black"
                        }`}
                    >
                        {title}
                    </p>
                </div>
            ) : (
                <button onClick={routing} className={style}>
                    {path === PATH.DOCUMENTS ? (
                        <Link
                            href={path}
                            className={`header-link ${
                                headerValue ? "" : "header-link_black"
                            }`}
                        >
                            {title}
                        </Link>
                    ) : (
                        <p
                            className={`header-link ${
                                headerValue ? "" : "header-link_black"
                            }`}
                        >
                            {title}
                        </p>
                    )}
                </button>
            )}
        </>
    );
};

export type dispatchType = typeof useAppDispatch;

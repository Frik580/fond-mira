"use client";

import "./HeaderLink.css";
import { useAppDispatch } from "../../shared/hooks/redux";
import { FC, useEffect } from "react";
import handleLinkState from "./lib/LinkState";
import unfixedBody from "@/shared/lib/UnfixedBody";
import { PATH } from "@/shared/Constants";
import Link from "next/link";
import { setLinkHome } from "@/store/reducers/linkSlice";
import { usePathname, useRouter } from "next/navigation";

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

    const routing = () => {
        unfixedBody();
        handleLinkState(path, dispatch);

        if (pathname === PATH.DOCUMENTS) {
            dispatch(setLinkHome());
            router.push("/");
            setTimeout(() => handleLinkState(path, dispatch), 100)
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
                            // href={path}
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

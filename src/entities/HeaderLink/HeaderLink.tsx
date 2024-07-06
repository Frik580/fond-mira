"use client";

import "./HeaderLink.css";
import { FC } from "react";
import handleLinkState from "./lib/LinkState";
import unfixedBody from "@/shared/lib/UnfixedBody";
import { PATH } from "@/shared/Constants";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/shared/hooks/redux";

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

        if (path === PATH.DOCUMENTS) {
            router.push(path);
            handleLinkState(path, dispatch);
        } else {
            if (pathname !== "/") {
                router.push("/");
                handleLinkState(path, dispatch);
                // if (path === PATH.OUR_PROJECTS) {
                //     setTimeout(() => {
                //         handleLinkState(path, dispatch);
                //     }, 300);
                // }
            } else {
                handleLinkState(path, dispatch);
            }
        }
    };

    return (
        <button
            onClick={routing}
            className={`${style} header-link ${
                !headerValue && "header-link_black"
            }`}
            disabled={active}
        >
            {title}
        </button>
    );
};

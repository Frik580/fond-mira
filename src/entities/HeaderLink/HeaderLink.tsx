"use client";

import "./HeaderLink.css";
import { useAppDispatch } from "../../shared/hooks/redux";
import { FC } from "react";
import handleLinkState from "./lib/LinkState";
import { useRouter } from "next/navigation";
import unfixedBody from "@/shared/lib/UnfixedBody";
import { newsAPI } from "@/shared/services/NewsService";
import Link from "next/link";

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
    const { data: news } = newsAPI.useFetchAllNewsQuery("");
    const dispatch = useAppDispatch();
    const router = useRouter();

    const routing = () => {
        console.log(news?.length);
        // router.push("/");
        // if (news?.length !== 0) {
        unfixedBody();
        // router.push("/");
        // setTimeout(() => {
        //     router.push(path);
        // }, 1);
        // router.push(path);
        handleLinkState(path, dispatch);
        // }
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
                    <Link
                        href={path}
                        prefetch={false}
                        className={`header-link ${
                            headerValue ? "" : "header-link_black"
                        }`}
                    >
                        {title}
                    </Link>
                </button>
            )}
        </>
    );
};

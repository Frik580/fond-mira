"use client";

import "./HeaderLink.css";
import { useAppDispatch } from "../../shared/hooks/redux";
import { FC, useEffect } from "react";
import handleLinkState from "./lib/LinkState";
import { useRouter } from "next/navigation";
import unfixedBody from "@/shared/lib/UnfixedBody";
// import Link from "next/link";

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
    const router = useRouter();

    const routing = () => {
        unfixedBody();
        router.push(path);
        handleLinkState(path, dispatch);
    };

    useEffect(() => {
        console.log(path)
    
    }, [path]);

    return (
        <>
            {active ? (
                <p className={styleText}>{title}</p>
            ) : (
                <button onClick={routing} className={style}>
                    <p className={styleLink}>{title}</p>
                    {/* <Link href={path} prefetch={false} className={styleLink}>{title}</Link> */}
                </button>
            )}
        </>
    );
};

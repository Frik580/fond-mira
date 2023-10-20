// "use client";

import "./HeaderLink.css";
import { useAppDispatch } from "../../shared/hooks/redux";
import { FC } from "react";
import handleLinkState from "./lib/LinkState";
import { useRouter } from "next/navigation";
import unfixedBody from "@/shared/lib/UnfixedBody";

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
        handleLinkState(path, dispatch);
        unfixedBody();
        router.push(path);
    };

    return (
        <>
            {active ? (
                <p className={styleText}>{title}</p>
            ) : (
                <button onClick={routing} className={style}>
                    <p className={styleLink}>{title}</p>
                </button>
            )}
        </>
    );
};

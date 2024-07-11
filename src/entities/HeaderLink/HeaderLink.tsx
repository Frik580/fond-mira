"use client";

import "./HeaderLink.css";
import { FC, useState } from "react";
import useRouting from "./lib/useRouting";

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
    const [value, setValue] = useState<null | boolean>(null);
    useRouting(value, path);

    return (
        <button
            onClick={() => (value === null ? setValue(true) : setValue(!value))}
            className={`${style} header-link ${
                !headerValue && "header-link_black"
            }`}
            disabled={active}
        >
            {title}
        </button>
    );
};

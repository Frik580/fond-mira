"use client";

import { FC } from "react";
import "./MainTitle.css";

type MainTitleProps = {
    id?: string;
    text: string;
};

export const MainTitle: FC<MainTitleProps> = ({ id, text }) => {
    return (
        <h2 id={id} className="main-title">
            {text}
        </h2>
    );
};

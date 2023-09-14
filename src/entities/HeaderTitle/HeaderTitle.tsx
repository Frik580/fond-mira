"use client";

import { FC } from "react";
import "./HeaderTitle.css";

type HeaderTitleProps = {
    title: string;
};

export const HeaderTitle : FC<HeaderTitleProps> = ({ title }) => {
    return <h1 className="header-title">{title}</h1>;
};

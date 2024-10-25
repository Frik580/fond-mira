// "use client";

import { FC } from "react";
import "./NewsTitle.css";

type NewsTitleProps = {
    title: string;
};

export const NewsTitle : FC<NewsTitleProps> = ({ title }) => {
    return <h3 className="news-title">{title}</h3>;
};
// "use client";

import { FC } from "react";
import "./NewsDate.css";

type NewsDateProps = {
    date: string;
};

export const NewsDate : FC<NewsDateProps> = ({ date }) => {
    return <p className="news-date">{date}</p>;
};
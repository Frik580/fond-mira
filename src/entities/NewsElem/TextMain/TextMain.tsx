// "use client";

import { FC } from "react";
import "./TextMain.css";

type TextMainProps = {
    text: string;
};

export const TextMain : FC<TextMainProps> = ({ text }) => {
    return <p className="text">{text}</p>;
};
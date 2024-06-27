// "use client";

import { FC } from "react";
import "./MainTitle.css";

type MainTitleProps = {
    id?: number;
    text: string;
};

export const MainTitle: FC<MainTitleProps> = ({ id, text }) => {
    return <h2 className="main-title">{text}</h2>;
};

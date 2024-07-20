// "use client";

import "./index.css";
import cl from "classnames";
import { ComponentProps } from "@/shared/models/Models";

export const LoadingPage = ({ className }: ComponentProps) => {
    return <div className={cl("loading", className)} />;
};

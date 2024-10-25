// "use client";

import "./index.css";
import cl from "classnames";
import { IconNameType, ComponentProps } from "@/shared/models/Models";

interface IconProps extends ComponentProps {
    name: IconNameType;
}

export const CarouselIcon = ({ name, className }: IconProps) => {
    return <span className={cl("icon", `icon--${name}`, className)} />;
};

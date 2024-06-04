// "use client";

import "./index.css";
import cl from "classnames";
import { IconNameType, ComponentProps } from "@/shared/models/Models";
import { CarouselIcon } from "../CarouselIcon/CarouselIcon";
import { useEffect } from "react";

interface ButtonProps extends ComponentProps {
    onClick: () => void;
    iconName?: IconNameType;
    disabled?: boolean;
}

export const CarouselButton = ({
    onClick,
    iconName,
    disabled = false,
    children,
    className,
}: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            className={cl("button", className)}
            disabled={disabled}
        >
            {iconName && <CarouselIcon name={iconName} />}
            {children}
        </button>
    );
};

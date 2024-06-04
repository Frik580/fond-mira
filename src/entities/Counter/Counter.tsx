// "use client";

import "./index.css";
import cl from "classnames";
import { ComponentProps } from "@/shared/models/Models";

interface CounterProps extends ComponentProps {
    activIndex: number;
    size: number;
}

export const Counter = ({ activIndex, size, className }: CounterProps) => {
    return (
        <div className={cl("counter", className)}>
            {activIndex}/{size}
        </div>
    );
};

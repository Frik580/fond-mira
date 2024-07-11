// "use client";

import { FC, useEffect, useState } from "react";
import "./DotsButton.css";
import { NEWS_AMT } from "@/shared/Constants";
import resetActiveDots from "./lib/ResetActiveDots";

type DotsButtonProps = {
    lenght: number;
    index: any;
};

export const DotsButton: FC<DotsButtonProps> = ({ lenght, index }) => {
    const [isActive, setIsActive] = useState<boolean[]>([]);

    useEffect(() => {
        const num = Math.ceil(lenght / NEWS_AMT);
        const data = resetActiveDots(num);
        data[0] = true;
        setIsActive(data);
    }, [lenght]);

    const handleDotsButton = (i: number) => {
        const data = resetActiveDots(isActive.length);
        data[i] = true;
        setIsActive(data);
        index(i);
    };

    return (
        <div className="dots-button__conteiner">
            {isActive.map((item, i) => (
                <button
                    key={i}
                    onClick={() => {
                        handleDotsButton(i);
                    }}
                    className="dots-button"
                    type="button"
                    disabled={item}
                />
            ))}
        </div>
    );
};

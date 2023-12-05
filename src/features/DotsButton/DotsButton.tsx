"use client";

import { FC, useEffect, useState } from "react";
import "./DotsButton.css";
import { NEWS_AMT, PATH } from "@/shared/Constants";
import resetActiveDots from "./lib/ResetActiveDots";
import { useRouter } from "next/navigation";

type DotsButtonProps = {
    lenght: number;
    index: any;
};

export const DotsButton: FC<DotsButtonProps> = ({ lenght, index }) => {
    const [isActive, setIsActive] = useState<boolean[]>([]);
    const router = useRouter();

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
        router.push(PATH.NEWS);
    };

    return (
        <div className="dots-button__conteiner">
            {isActive.map((item, i) =>
                item ? (
                    <div key={i} className="dots-button_active" />
                ) : (
                    <button
                        key={i}
                        onClick={() => {
                            handleDotsButton(i);
                        }}
                        className="dots-button"
                        type="button"
                    />
                ),
            )}
        </div>
    );
};

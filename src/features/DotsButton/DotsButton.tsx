"use client";

import { useEffect, useState } from "react";
import "./DotsButton.css";

type Props = {
    lenght: number;
    index: any;
};

export const DotsButton = ({ lenght, index }: Props) => {
    const [isActive, setIsActive] = useState<boolean[]>([]);

    useEffect(() => {
        const num = Math.ceil(lenght / 3);
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

    const resetActiveDots = (num: number) => {
        let dots = [];
        for (let count = num; count > 0; count--) {
            dots.push(false);
        }
        return dots;
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

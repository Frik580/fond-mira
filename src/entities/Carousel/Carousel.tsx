"use client";

import { FC, useEffect, useState } from "react";
import "./Carousel.css";
import Image from "next/image";
import { WINDOW_SIZE, PHOTO_AMT } from "@/shared/Constants";
import Link from "next/link";

type CarouselProps = {
    href: string;
    photo: number;
};

export const Carousel: FC<CarouselProps> = ({ href, photo }) => {
    const [images, setImages] = useState<string[] | null>(null);
    const [count, setCount] = useState<number>(0);
    const [amt, setAmt] = useState<number>(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => {
            setCount(0);
            setTimeout(() => setWidth(window.innerWidth), 500);
        };

        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    useEffect(() => {
        if (width > WINDOW_SIZE.HIGH) {
            setAmt(PHOTO_AMT.HIGH);
        } else if (width > WINDOW_SIZE.MIDDLE) {
            setAmt(PHOTO_AMT.MIDDLE);
        } else {
            setAmt(PHOTO_AMT.SMALL);
        }

        const array = [];
        for (let i = 1 + count * amt; i <= amt + count * amt; i++) {
            i <= photo &&
                array.push(
                    require(`@/shared/image/projects/${href.slice(
                        1,
                    )}/${i}.webp`),
                );
        }
        setImages(array);
    }, [amt, count, width]);

    return (
        <>
            {images && (
                <div className="carousel__conteiner">
                    {images.map((card: string, i: number) => (
                        <Image
                            key={i}
                            className="carousel__image"
                            src={card}
                            alt={`фото ${i}`}
                        />
                    ))}
                    {count !== 0 && (
                        <button
                            onClick={() => {
                                setCount(count - 1);
                            }}
                            className="carousel__button carousel__button_left"
                            type="button"
                        >
                            <span className="carousel__arrow carousel__arrow_left" />
                        </button>
                    )}
                    {(count + 1) * amt < photo && (
                        <button
                            onClick={() => {
                                setCount(count + 1);
                            }}
                            className="carousel__button carousel__button_right"
                            type="button"
                        >
                            <span className="carousel__arrow carousel__arrow_right" />
                        </button>
                    )}
                </div>
            )}
        </>
    );
};

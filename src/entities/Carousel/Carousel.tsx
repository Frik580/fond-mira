"use client";

import { FC, useEffect, useState } from "react";
import "./Carousel.css";
import Image from "next/image";
import Link from "next/link";

type CarouselProps = {
    href: string;
    photo: number;
};

export const Carousel: FC<CarouselProps> = ({ href, photo }) => {
    const [images, setImages] = useState<string[] | null>(null);

    useEffect(() => {
        const array: any = [];
        for (let i = 1; i <= photo; i++) {
            array.push(require(`@/shared/image/projects/${href.slice(1)}/${i}.jpg`));
        }

        setImages(array);
    }, []);

    return (
        <>
            {images && (
                <div className="carousel__conteiner">
                    {images.map((card: string, i: number) => (
                        <Image
                            key={i}
                            className="carousel__image"
                            src={card}
                            // width={100}
                            // height={200}
                            alt={`фото ${i}`}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

// "use client";

import { FC } from "react";
import "./Carousel.css";
import Image from "next/image";
import { WINDOW_SIZE, PHOTO_AMT } from "@/shared/Constants";
import useHandleCarousel from "./lib/UseHandleCarousel";
import { GalleryType } from "@/shared/models/Models";

export const Carousel: FC<GalleryType> = ({ photo, server, extension }) => {
    const { images, count, amt, setCount } = useHandleCarousel(
        photo,
        WINDOW_SIZE,
        PHOTO_AMT,
        server,
        extension
    );

    return (
        <>
            {images && (
                <div className="carousel__conteiner">
                    {images.map((card: string, i: number) => (
                        <Image
                            key={i}
                            className="carousel__image"
                            src={card}
                            width={600}
                            height={600}
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

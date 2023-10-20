// "use client";

import { FC, useEffect } from "react";
import "./Carousel.css";
import Image from "next/image";
import { WINDOW_SIZE, PHOTO_AMT } from "@/shared/Constants";
import useHandleCarousel from "./lib/UseHandleCarousel";
import { GalleryType } from "@/shared/models/Models";

export const Carousel: FC<GalleryType> = ({
    photo,
    server,
    extension,
    hight,
}) => {
    const { images, count, amt, setCount } = useHandleCarousel(
        photo,
        WINDOW_SIZE,
        PHOTO_AMT,
        server,
        extension,
    );

    return (
        <>
            {images && (
                <div className="carousel__conteiner" style={{ height: `${hight}px` }}>
                    {images.map((card: string, i: number) => (
                        <div
                            key={i}
                            className="carousel__image"
                            // style={{
                            //     height: `${hight}px`,
                            //     backgroundImage: `url(${imagesLite[i]})`,
                            // }}
                        >
                            <Image
                                className="carousel__pic"
                                style={{ height: `${hight}px` }}
                                src={card}
                                width={600}
                                height={600}
                                alt={`фото ${i}`}
                            />
                        </div>
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

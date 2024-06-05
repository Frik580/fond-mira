// "use client";

import { FC, useEffect } from "react";
import "./Carousel.css";
import { WINDOW_SIZE, PHOTO_AMT } from "@/shared/Constants";
import useHandleCarousel from "./lib/UseHandleCarousel";
import { GalleryType } from "@/shared/models/Models";
import { CarouselImage } from "@/entities/Image/Image";

export const Carousel: FC<GalleryType> = ({
    photo,
    server,
    extension,
    height,
}) => {
    const { images, imagesLite, count, amt, setCount } = useHandleCarousel(
        photo,
        WINDOW_SIZE,
        PHOTO_AMT,
        server,
        extension,
    );

    useEffect(() => {
        console.log(images)

    }, [images]);

    return (
        <>
            {images && imagesLite && (
                <div
                    className="carousel__conteiner"
                    style={{ height: `${height}px` }}
                >
                    {images.map((card: string, i: number) => (
                        <CarouselImage
                            key={i}
                            src={card}
                            srclite={imagesLite[i]}
                            height={height}
                            cursor={"pointer"}
                            i={i}
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

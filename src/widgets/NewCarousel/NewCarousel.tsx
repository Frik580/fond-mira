// "use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import "./NewCarousel.css";
import { GalleryType } from "@/shared/models/Models";
import { CarouselItem } from "@/entities/CarouselItem/CarouselItem";
import { CarouselButton } from "@/entities/CarouselButton/CarouselButton";
import { Counter } from "@/entities/Counter/Counter";
import useUpdateActiveIndexBySwipe from "./lib/useUpdateActiveIndexBySwipe";
import useCreateImagesLinks from "./lib/useCreateImagesLinks";
import useKeyEvents from "../../shared/hooks/useKeyEvents";
import useElementVisible from "@/shared/hooks/useElementVisible";

const increaseIndex = (index: number, size: number) =>
    Math.min(index + 1, size - 1);
const decreaseIndex = (index: number) => Math.max(0, index - 1);

export const NewCarousel: FC<GalleryType> = ({
    photo,
    server,
    extension,
    height,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibility, setVisibility] = useState(false);
    const conteinerRef = useRef<HTMLDivElement>(null);
    const scrollActiveIndex = useUpdateActiveIndexBySwipe(conteinerRef);
    const images = useCreateImagesLinks(photo, server, extension);

    const visibilityRef = (value: boolean) => {
        setVisibility(value);
    };

    useElementVisible(conteinerRef, visibilityRef);

    useKeyEvents((key) => {
        if (visibility) {
            key === "ArrowLeft" && move(decreaseIndex(activeIndex));
            key === "ArrowRight" &&
                move(increaseIndex(activeIndex, images.length));
        }
    });

    useEffect(() => {
        setActiveIndex(scrollActiveIndex);
    }, [scrollActiveIndex]);

    const move = useCallback((newActiveIndex: number) => {
        const currentNode = conteinerRef?.current;

        if (!currentNode) {
            return;
        }

        const dataConteiner = currentNode.getBoundingClientRect();
        currentNode.scrollTo({
            left: newActiveIndex * dataConteiner.width,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <div className="gallery">
                <div
                    className="gallery__conteiner"
                    ref={conteinerRef}
                    style={{ height: height }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="gallery__item">
                            <CarouselItem
                                key={index}
                                srcfullphoto={`${server}${
                                    activeIndex + 1
                                }.${extension}`}
                                src={image}
                                height={height}
                                cursor={"pointer"}
                                i={index}
                            />
                        </div>
                    ))}
                </div>
                {photo > 1 && (
                    <div className="gallery__navigation">
                        <CarouselButton
                            onClick={() => {
                                move(decreaseIndex(activeIndex));
                            }}
                            iconName="arrow-left"
                            disabled={activeIndex === 0}
                        />
                        <Counter
                            activIndex={activeIndex + 1}
                            size={images.length}
                        />
                        <CarouselButton
                            onClick={() => {
                                move(increaseIndex(activeIndex, images.length));
                            }}
                            iconName="arrow-right"
                            disabled={activeIndex === images.length - 1}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

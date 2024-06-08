// "use client";

import { FC, useEffect, useRef, useState } from "react";
import "./NewCarousel.css";
import { GalleryType } from "@/shared/models/Models";
import { CarouselItem } from "@/entities/CarouselItem/CarouselItem";
import { CarouselButton } from "@/entities/CarouselButton/CarouselButton";
import { Counter } from "@/entities/Counter/Counter";
import useUpdateActiveIndex from "./lib/useUpdateActiveIndex";

const increaseIndex = (index: number, size: number) =>
    Math.min(index + 1, size - 1);
const decreaseIndex = (index: number) => Math.max(0, index - 1);

export const NewCarousel: FC<GalleryType> = ({
    photo,
    server,
    extension,
    height,
}) => {
    const [images, setImages] = useState<string[]>([]);
    const [activIndex, setActiveIndex] = useState(0);
    const conteinerRef = useRef<HTMLDivElement>(null);
    const scrollActiveIndex = useUpdateActiveIndex(conteinerRef);

    useEffect(() => {
        setActiveIndex(scrollActiveIndex);
    }, [scrollActiveIndex]);

    const move = (newActiveIndex: number) => {
        const currentNode = conteinerRef?.current;

        if (!currentNode) {
            return;
        }

        const dataConteiner = currentNode.getBoundingClientRect();
        setActiveIndex(newActiveIndex);
        currentNode.scrollTo({
            left: newActiveIndex * dataConteiner.width,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const array = [];
        for (let i = 1; i <= photo; i++) {
            array.push(`${server}${i}.${extension}`);
        }
        setImages(array);
    }, [extension, photo, server]);

    return (
        <>
            <div className="gallery">
                <div
                    className="gallery__conteiner"
                    ref={conteinerRef}
                    style={{ height: height }}
                >
                    {images?.map((image, index) => (
                        <div key={index} className="gallery__item">
                            <CarouselItem
                                key={index}
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
                            onClick={() => move(decreaseIndex(activIndex))}
                            iconName="arrow-left"
                            disabled={activIndex === 0}
                        />
                        <Counter
                            activIndex={activIndex + 1}
                            size={images.length}
                        />
                        <CarouselButton
                            onClick={() =>
                                move(increaseIndex(activIndex, images.length))
                            }
                            iconName="arrow-right"
                            disabled={activIndex === images.length - 1}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import './NewCarousel.css';
import { GalleryType } from '@/shared/models/Models';
import { CarouselItem } from '@/entities/CarouselElem/CarouselItem/CarouselItem';
import { Counter } from '@/entities/Counter/Counter';
import useUpdateActiveIndexBySwipe from './lib/useUpdateActiveIndexBySwipe';
import useCreateImagesLinks from './lib/useCreateImagesLinks';
import useKeyEvents from '../../shared/hooks/useKeyEvents';
import useElementVisible from '@/shared/hooks/useElementVisible';
import { CarouselButton } from '@/entities/CarouselElem/CarouselButton/CarouselButton';

const increaseIndex = (index: number, size: number) => Math.min(index + 1, size - 1);
const decreaseIndex = (index: number) => Math.max(0, index - 1);

type Props = GalleryType & { imageUrls?: string[] };

export const NewCarousel: FC<Props> = ({ photo, server, extension, height, imageUrls }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibility, setVisibility] = useState(false);
    const conteinerRef = useRef<HTMLDivElement>(null);
    const scrollActiveIndex = useUpdateActiveIndexBySwipe(conteinerRef);
    const legacyImages = useCreateImagesLinks(photo, server, extension);
    const images = imageUrls || legacyImages;

    useElementVisible(conteinerRef, setVisibility);
    const move = useCallback((newActiveIndex: number) => {
        const currentNode = conteinerRef.current;
        if (!currentNode) return;
        currentNode.scrollTo({ left: newActiveIndex * currentNode.getBoundingClientRect().width, behavior: 'smooth' });
    }, []);

    useKeyEvents((key) => {
        if (!visibility) return;
        if (key === 'ArrowLeft') move(decreaseIndex(activeIndex));
        if (key === 'ArrowRight') move(increaseIndex(activeIndex, images.length));
    });

    useEffect(() => { setActiveIndex(scrollActiveIndex); }, [scrollActiveIndex]);

    return <div className="gallery">
        <div className="gallery__conteiner" ref={conteinerRef} style={{ height }}>
            {images.map((image, index) => <div key={`${image}-${index}`} className="gallery__item">
                <CarouselItem srcfullphoto={image} src={image} height={height} cursor="pointer" i={index} />
            </div>)}
        </div>
        {images.length > 1 && <div className="gallery__navigation">
            <CarouselButton onClick={() => move(decreaseIndex(activeIndex))} iconName="arrow-left" disabled={activeIndex === 0} />
            <Counter activIndex={activeIndex + 1} size={images.length} />
            <CarouselButton onClick={() => move(increaseIndex(activeIndex, images.length))} iconName="arrow-right" disabled={activeIndex === images.length - 1} />
        </div>}
    </div>;
};

"use client";

import { Carousel } from "@/entities/Carousel/Carousel";
import "./Gallery.css";
import { FC } from "react";

type GalleryProps = {
    href: string;
    photo: number;
};

export const Gallery: FC<GalleryProps> = ({ href, photo }) => {

    return (
        <section className="gallery">
            <div className="gallery__conteiner">
                {Boolean(photo) && <Carousel href={href} photo={photo} />}
                <p>Gallery</p>
            </div>
        </section>
    );
};

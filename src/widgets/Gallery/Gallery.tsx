// "use client";

import { Carousel } from "@/entities/Carousel/Carousel";
import "./Gallery.css";
import { FC } from "react";
import { GalleryType } from "@/shared/models/Models";

export const Gallery: FC<GalleryType> = ({
    photo,
    server,
    extension,
    hight,
}) => {
    return (
        <section className="gallery">
            {/* <div className="gallery__conteiner"> */}
            <Carousel
                photo={photo}
                server={server}
                extension={extension}
                hight={hight}
            />
            {/* </div> */}
        </section>
    );
};

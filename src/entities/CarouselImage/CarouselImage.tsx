// "use client";

import "./CarouselImage.css";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { FC, useState } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValuePhoto } from "@/store/reducers/photoSlice";
import { setValuePhotoPopup } from "@/store/reducers/popupSlice";
import fixedBody from "@/shared/lib/FixedBody";

type CarouselImageProps = {
    src: string | StaticImageData;
    srclite?: string | undefined;
    hight: number;
    i: number;
};

export const CarouselImage: FC<CarouselImageProps> = ({
    src,
    srclite,
    hight,
    i,
}) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();

    function openPopup() {
        dispatch(setValuePhoto(src));
        dispatch(setValuePhotoPopup(true));
        fixedBody();
    }

    return (
        <>
            <div
                className="carouselimage"
                style={{
                    height: `${hight}px`,
                    backgroundImage: `url(${srclite})`,
                }}
                onClick={openPopup}
            >
                <Image
                    src={src}
                    className={`carouselimage__image ${loaded ? "loaded" : ""}`}
                    style={{ height: `${hight}px`, cursor: "pointer" }}
                    width={400}
                    height={400}
                    alt={`фото ${i}`}
                    onLoad={() => setLoaded(true)}
                />
            </div>
        </>
    );
};

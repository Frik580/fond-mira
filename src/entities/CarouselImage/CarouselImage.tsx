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
    height: number;
    width?: number;
    i: number;
    fullphoto?: number;
    cursor: string;
};

export const CarouselImage: FC<CarouselImageProps> = ({
    src,
    srclite,
    height,
    width,
    i,
    fullphoto,
    cursor,
}) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();

    function openPopup() {
        if (fullphoto !== 0 && loaded) {
            dispatch(setValuePhoto(src));
            dispatch(setValuePhotoPopup(true));
            fixedBody();
        }
    }

    return (
        <>
            <div
                className="carouselimage"
                style={{
                    height: height,
                    width: width,
                    backgroundImage: `url(${srclite})`,
                }}
                onClick={openPopup}
            >
                <Image
                    src={src}
                    className={`carouselimage__image ${loaded ? "loaded" : ""}`}
                    style={loaded ? {
                        height: height,
                        cursor: cursor,
                    } : {
                        // height: height,
                        cursor: "default",
                    }}
                    width={400}
                    height={400}
                    alt={`фото ${i}`}
                    onLoad={() => setLoaded(true)}
                    priority
                />
            </div>
        </>
    );
};

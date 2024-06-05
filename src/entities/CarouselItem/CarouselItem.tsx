// "use client";

import "./index.css";
import Image from "next/image";
import { FC, useState } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValuePhoto } from "@/store/reducers/photoSlice";
import { setValuePhotoPopup } from "@/store/reducers/popupSlice";
import { CarouselItemType } from "@/shared/models/Models";
import fixedBody from "@/shared/lib/FixedBody";

export const CarouselItem: FC<CarouselItemType> = ({
    src,
    height,
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
                <Image
                    src={src}
                    className="carouselitem"
                    style={loaded ? {
                        height: height,
                        cursor: cursor,
                    } : {
                        height: height,
                        cursor: "default",
                    }}
                    width={400}
                    height={400}
                    alt={`фото ${i}`}
                    onLoad={() => setLoaded(true)}
                    onClick={openPopup}
                />
        </>
    );
};

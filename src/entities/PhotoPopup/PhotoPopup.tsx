"use client";

import "./PhotoPopup.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { popupValue, setValuePhotoPopup } from "@/store/reducers/popupSlice";
import unfixedBody from "@/shared/lib/UnfixedBody";
import useKeyEvents from "@/shared/hooks/useKeyEvents";
import Image from "next/image";
import { photoState } from "@/store/reducers/photoSlice";
import { setValueHeader } from "@/store/reducers/headerSlice";

export const PhotoPopup = () => {
    const dispatch = useAppDispatch();
    const openpopup = useAppSelector(popupValue);
    const src = useAppSelector(photoState);

    function closePopup() {
        dispatch(setValueHeader(null));
        unfixedBody();
        dispatch(setValuePhotoPopup(false));
    }

    useKeyEvents((key) => {
        key === "Escape" && closePopup();
    });

    if (!openpopup.valuePhoto) {
        return null;
    }

    return (
        <div
            className={`photo_full ${
                openpopup.valuePhoto && "photo_full_opened"
            }`}
            onClick={closePopup}
        >
            <div className="photo__loader" />
            {src && (
                <Image
                    src={src}
                    className="photo__image_full"
                    width={800}
                    height={800}
                    alt="фото"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            )}
            <button className="photo__close-button" type="button" />
        </div>
    );
};

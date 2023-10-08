import { useEffect, useState } from "react";

export default function useHandleCarousel(
    photo: number,
    size: { HIGH: number; MIDDLE: number; },
    photoamt: { HIGH: number; MIDDLE: number; SMALL: number; },
    server: string,
    extension: string
) {
    const [images, setImages] = useState<string[] | null>(null);
    const [count, setCount] = useState<number>(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [amt, setAmt] = useState<number>(0);


    useEffect(() => {
        const handleResizeWindow = () => {
            setCount(0);
            setTimeout(() => setWidth(window.innerWidth), 500);
        };

        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    useEffect(() => {
        if (width > size.HIGH) {
            setAmt(photoamt.HIGH);
        } else if (width > size.MIDDLE) {
            setAmt(photoamt.MIDDLE);
        } else {
            setAmt(photoamt.SMALL);
        }

        const array = [];
        for (let i = 1 + count * amt; i <= amt + count * amt; i++) {
            i <= photo &&
                array.push(
                    `${server}${i}.${extension}`
                );

        }
        setImages(array);
    }, [amt, count, width]);

    return { images, count, amt, setCount };
}

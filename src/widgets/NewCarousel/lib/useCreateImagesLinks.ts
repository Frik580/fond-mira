import { useEffect, useState } from "react";

export default function useCreateImagesLinks(
    photo: number,
    server: string,
    extension: string
) {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const array = [];
        for (let i = 1; i <= photo; i++) {
            array.push(`${server}${i}.${extension}`);
        }
        setImages(array);
    }, [extension, photo, server]);

    return images;
}

// "use client";

import "./Member.css";
import Image, { StaticImageData } from "next/image";

type Props = {
    image: string;
    text: string;
    alt: string;
};

export const Member = ({ image, text, alt }: Props) => {
    return (
        <li className="member">
            <Image
                src={`/image/direction/${image}.png`}
                width={1000}
                height={1000}
                className="member__image"
                alt={alt}
            />
            <p className="member__text">
                <b className="member__text_bolt">{alt}</b>
                {text}
            </p>
        </li>
    );
};

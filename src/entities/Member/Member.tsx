// "use client";

import { FC } from "react";
import "./Member.css";
import Image, { StaticImageData } from "next/image";

type MemberProps = {
    image: string;
    text: string;
    alt: string;
};

export const Member: FC<MemberProps> = ({ image, text, alt }) => {
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

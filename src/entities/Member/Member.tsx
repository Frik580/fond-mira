// "use client";

import { memo } from "react";
import "./Member.css";
import Image from "next/image";
import { IMAGE_EXTENSION, SERVER_URL_DIRECTION } from "@/shared/Constants";

interface MemberProps {
    image: string;
    text: string;
    alt: string;
}

const Member = memo(function Member({ image, text, alt }: MemberProps) {
    return (
        <li className="member">
            <Image
                src={`${SERVER_URL_DIRECTION}${image}.${IMAGE_EXTENSION}`}
                width={300}
                height={300}
                className="member__image"
                alt={alt}
            />
            <p className="member__title">{alt}</p>
            <div className="member__conteiner">
                <p className="member__text">{text}</p>
            </div>
        </li>
    );
});

export default Member;

// "use client";

import { memo } from "react";
import "./Member.css";
import Image from "next/image";
import { IMAGE_PERMISSION, SERVER_URL_DIRECTION } from "@/shared/Constants";

interface MemberProps {
    image: string;
    text: string;
    alt: string;
}

const Member = memo(function Member({ image, text, alt }: MemberProps) {
    return (
        <li className="member">
            <Image
                src={`${SERVER_URL_DIRECTION}${image}.${IMAGE_PERMISSION}`}
                width={300}
                height={300}
                className="member__image"
                alt={alt}
            />
            <p className="member__title">{alt}</p>
            <p className="member__text">{text}</p>
        </li>
    );
});

export default Member;

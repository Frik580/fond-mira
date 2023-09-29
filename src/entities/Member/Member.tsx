// "use client";

import { memo } from "react";
import "./Member.css";
import Image from "next/image";

type MemberProps = {
    image: string;
    text: string;
    alt: string;
};

const Member = memo(function Member({ image, text, alt }: MemberProps) {
    return (
        <li className="member">
            <Image
                src={require(`@/shared/image/direction/${image}.webp`)}
                className="member__image"
                alt={alt}
            />
            <p className="member__text">
                <b className="member__text_bolt">{alt}</b>
                {text}
            </p>
        </li>
    );
});

export default Member;

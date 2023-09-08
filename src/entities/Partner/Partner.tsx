// "use client";

import "./Partner.css";
import Image, { StaticImageData } from "next/image";

type Props = {
    href: string;
    src: StaticImageData;
    text: string;
};

export const Partner = ({ href, src, text }: Props) => {
    return (
        <li>
            <a href={href} className="partner" target="_blank" rel="noreferrer">
                <Image className="partner__icon" src={src} alt={text} />
                <div className="partner_hover">
                    <p className="partner__text">{text}</p>
                </div>
            </a>
        </li>
    );
};

"use client";

import { FC } from "react";
import "./Partner.css";
import Image from "next/image";

type PartnerProps = {
    href: string;
    src: string;
    text: string;
};

export const Partner: FC<PartnerProps> = ({ href, src, text }) => {
    return (
        <li>
            <a href={href} className="partner" target="_blank" rel="noreferrer">
                <Image
                    className="partner__icon"
                    src={`/image/partners/${src}.png`}
                    width={200}
                    height={200}
                    alt={text}
                />
                <div className="partner_hover">
                    <p className="partner__text">{text}</p>
                </div>
            </a>
        </li>
    );
};

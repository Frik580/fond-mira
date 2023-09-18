"use client";

import { FC } from "react";
import "./Partner.css";
import Image from "next/image";
import Link from "next/link";

type PartnerProps = {
    href: string;
    src: string;
    text: string;
};

export const Partner: FC<PartnerProps> = ({ href, src, text }) => {
    return (
        <Link href={href} className="partner" target="_blank" rel="noreferrer">
            <Image
                className="partner__icon"
                src={require(`@/shared/image/partners/${src}.png`)}
                width={200}
                height={200}
                alt={text}
            />
            <div className="partner_hover">
                <p className="partner__text">{text}</p>
            </div>
        </Link>
    );
};

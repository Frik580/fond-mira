"use client";

import "./ProjectLink.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
    year: number;
    title: string;
    src: string;
    partner: StaticImageData | null;
    href: string;
};

export const ProjectLink = ({ year, title, src, partner, href }: Props) => {
    return (
        <Link href={href}>
            <li className="projectlink">
                <Image
                    src={`/image/projects/${src}.png`}
                    fill
                    className="projectlink__image"
                    alt=""
                />
                <div className="projectlink__conteiner">
                    <div className="projectlink__partner">
                        <p>{year}</p>
                        {partner && (
                            <>
                                <p style={{ marginLeft: "auto" }}>
                                    при поддержке:
                                </p>
                                <Image
                                    src={partner}
                                    className="projectlink__imagepartner"
                                    alt=""
                                />
                            </>
                        )}
                    </div>
                    <div className="projectlink__info">
                        <p className="projectlink__title">{title}</p>
                        {/* <p className="projectlink__title">{year}</p> */}
                    </div>
                    <p className="projectlink__text">больше информации</p>
                </div>
            </li>
        </Link>
    );
};

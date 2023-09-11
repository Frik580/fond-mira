"use client";

import "./ProjectLink.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
    year: number;
    title: string;
    src: StaticImageData;
    partner: StaticImageData | null;
};

export const ProjectLink = ({ year, title, src, partner }: Props) => {
    return (
        <Link href={`project`}>
            <li
                onMouseEnter={() => console.log("Навел")}
                className="projectlink"
            >
                <Image src={src} className="projectlink__image" alt="" />
                <div className="projectlink__conteiner">
                    <div className="projectlink__partner">
                        {partner && (
                            <>
                                {/* <p>При поддержке</p> */}
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
                        <p className="projectlink__title">{year}</p>
                    </div>
                    <p className="projectlink__text">больше информации</p>
                </div>
            </li>
        </Link>
    );
};

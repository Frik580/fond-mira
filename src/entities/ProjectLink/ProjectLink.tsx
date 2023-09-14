"use client";

import "./ProjectLink.css";
import Image from "next/image";
import Link from "next/link";
import { Support } from "../Support/Support";
import { FC } from "react";

type ProjectLinkProps = {
    year: number;
    title: string;
    src: string;
    partner: string;
    href: string;
};

export const ProjectLink: FC<ProjectLinkProps> = ({
    year,
    title,
    src,
    partner,
    href,
}) => {
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
                        <p style={{ marginRight: "auto" }}>{year}</p>
                        <Support
                            partner={partner}
                            color="var(--color-dust-white)"
                        />
                    </div>
                    <div className="projectlink__info">
                        <p className="projectlink__title">{title}</p>
                    </div>
                    <p className="projectlink__text">больше информации</p>
                </div>
            </li>
        </Link>
    );
};

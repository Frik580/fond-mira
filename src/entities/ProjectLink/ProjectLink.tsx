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
        <Link className="projectlink" href={href}>
            <Image
                src={require(`@/shared/image/projects/${src}.png`)}
                fill
                sizes="(max-width: 799px) 100vw, (max-width: 1199px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                alt={title}
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
        </Link>
    );
};

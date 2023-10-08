// "use client";

import "./ProjectLink.css";
import Image from "next/image";
import { Support } from "../Support/Support";
import { FC } from "react";
import {
    IMAGE_EXTENSION,
    SERVER_URL_PROJECTS_COVER_SMALL,
} from "@/shared/Constants";
import Link from "next/link";
import { ProjectType } from "@/shared/models/Models";

type ProjectLinkProps = {
    card: ProjectType;
};

export const ProjectLink: FC<ProjectLinkProps> = ({ card }) => {
    return (
        <Link className="projectlink" href={card.href}>
            <Image
                src={`${SERVER_URL_PROJECTS_COVER_SMALL}${card.src}.${IMAGE_EXTENSION}`}
                fill
                sizes="(max-width: 799px) 100vw, (max-width: 1199px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                alt={card.title}
            />
            <div className="projectlink__conteiner">
                <div className="projectlink__partner">
                    <p style={{ marginRight: "auto" }}>{card.year}</p>
                    <Support
                        partner={card.partner}
                        color="var(--color-dust-white)"
                    />
                </div>
                <div className="projectlink__info">
                    <p className="projectlink__title">{card.title}</p>
                </div>
                <p className="projectlink__text">больше информации</p>
            </div>
        </Link>
    );
};

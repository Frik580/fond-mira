// "use client";

import "./ProjectLink.css";
import Image from "next/image";
import { Support } from "../Support/Support";
import { FC } from "react";
import {
    IMAGE_PERMISSION,
    SERVER_URL_PROJECTS_COVER_SMALL,
} from "@/shared/Constants";
import Link from "next/link";
import { ProjectType } from "@/shared/models/Models";

type ProjectLinkProps = {
    card: ProjectType;
};

export const ProjectLink: FC<ProjectLinkProps> = ({ card }) => {
    return (
        <Link className="projectlink" href={`projects/${card.href}`}>
            <Image
                src={`${SERVER_URL_PROJECTS_COVER_SMALL}${card.src}.${IMAGE_PERMISSION}`}
                fill
                sizes="(max-width: 799px) 100vw, (max-width: 1199px) 80vw, 75vw"
                // placeholder="blur"
                // blurDataURL={`${SERVER_URL_PROJECTS_COVER_SMALL}${card.src}.${IMAGE_PERMISSION}`}
                style={{ objectFit: "cover" }}
                alt={card.title}
            />
            <div className="projectlink__conteiner">
                <div className="projectlink__partner">
                    <p style={{ marginRight: "auto" }}>{card.year}</p>
                    <Support
                        partner={card.partner}
                        color="var(--color-dust-white)"
                        text={true}
                    />
                </div>
                <p className="projectlink__title">{card.title}</p>
                <p className="projectlink__text">больше информации</p>
            </div>
        </Link>
    );
};

"use client";

import "./ProjectLink.css";
import Image from "next/image";
import Link from "next/link";
import { Support } from "../Support/Support";
import { FC } from "react";
import { ProjectType } from "@/shared/Constants";

type ProjectLinkProps = {
    card: ProjectType;
};

export const ProjectLink: FC<ProjectLinkProps> = ({ card }) => {
    return (
        <>
            <Link className="projectlink" href={card.href}>
                <Image
                    src={require(`@/shared/image/projects/${card.src}.webp`)}
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
        </>
    );
};

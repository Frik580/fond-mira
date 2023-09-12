"use client";

import "./ProjectsList.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { ProjectLink } from "../../entities/ProjectLink/ProjectLink";
import { TITLES } from "../../shared/Constants";
import { PROJECTS } from "../../shared/Constants";
import { Key, useEffect, useRef, useState } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkProjectslist } from "@/store/reducers/linkSlice";
import { StaticImageData } from "next/image";

export const ProjectsList = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkProjectslist(false));

    return (
        <section ref={ref} className="projects-list">
            <MainTitle id="projects-list" text={TITLES.OUR_PROJECTS} />
            <ul className="projects-list__conteiner">
                {PROJECTS.reverse().map(
                    (card: {
                        id: Key | null | undefined;
                        year: number;
                        title: string;
                        src: string;
                        partner: StaticImageData | null;
                        href: string;
                    }) => (
                        <ProjectLink
                            key={card.id}
                            year={card.year}
                            title={card.title}
                            src={card.src}
                            partner={card.partner}
                            href={card.href}
                        />
                    ),
                )}
            </ul>
        </section>
    );
};

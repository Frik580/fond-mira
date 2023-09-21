"use client";

import "./ProjectsList.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { ProjectLink } from "../../entities/ProjectLink/ProjectLink";
import { TITLES } from "../../shared/Constants";
import { PROJECTS, ProjectType } from "../../shared/Constants";
import { useEffect, useRef, useState } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkProjectslist } from "@/store/reducers/linkSlice";

export const ProjectsList = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkProjectslist(false));
    const [currentProjects, setCurrentProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        const array = PROJECTS.sort(
            (a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0,
        );
        setCurrentProjects(array);
    }, []);

    return (
        <section ref={ref} className="projects-list">
            <MainTitle id="projects-list" text={TITLES.OUR_PROJECTS} />
            <div className="projects-list__conteiner">
                {currentProjects.map((card: ProjectType) => (
                    <ProjectLink
                        key={card.id}
                        year={card.year}
                        title={card.title}
                        src={card.src}
                        partner={card.partner}
                        href={card.href}
                    />
                ))}
            </div>
        </section>
    );
};

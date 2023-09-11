"use client";

import "./ProjectsList.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { ProjectLink } from "../../entities/ProjectLink/ProjectLink";
import { TITLES } from "../../shared/Constants";
import { PROJECTS } from "../../shared/Constants";
import { useEffect, useRef, useState } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkProjectslist } from "@/store/reducers/linkSlice";

export const ProjectsList = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkProjectslist(false));
    const [projects, setProjects] = useState<any>([])

    useEffect(() => {
        setProjects(PROJECTS.reverse());
    }, []);

    return (
        <section ref={ref} className="projects-list">
            <MainTitle id="projects-list" text={TITLES.OUR_PROJECTS} />
            <ul className="projects-list__conteiner">
                {projects.map((card :any) => (
                    <ProjectLink
                        key={card.id}
                        title={card.title}
                        src={card.src}
                    />
                ))}
            </ul>
        </section>
    );
};

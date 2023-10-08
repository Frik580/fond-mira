"use client";

import "./ProjectsList.css";
import { MainTitle } from "../../entities/MainTitle/MainTitle";
import { ProjectLink } from "../../entities/ProjectLink/ProjectLink";
import { TITLES } from "../../shared/Constants";
import { useRef } from "react";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import { setLinkProjectslist } from "@/store/reducers/linkSlice";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";
import { ProjectType } from "@/shared/models/Models";

export const ProjectsList = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects(projects.length);
    const ref = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(ref, setLinkProjectslist(false));

    return (
        <section ref={ref} className="projects-list">
            <MainTitle id="projects-list" text={TITLES.OUR_PROJECTS} />
            <div className="projects-list__conteiner">
                {projects.length > 0 &&
                    projects.map((card: ProjectType) => (
                        <ProjectLink key={card.id} card={card} />
                    ))}
            </div>
        </section>
    );
};

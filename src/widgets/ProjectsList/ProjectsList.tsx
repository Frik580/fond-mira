"use client";

import "./ProjectsList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { ProjectLink } from "@/entities/ProjectLink/ProjectLink";
import { TITLES } from "@/shared/Constants";
import { useRef } from "react";
import { linkState, setLinkProjectslist } from "@/store/reducers/linkSlice";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import { ProjectType } from "@/shared/models/Models";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useLink from "@/shared/hooks/useLink";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";
// import useFetchProjects from "@/shared/hooks/useFetchProjects";


export const ProjectsList = () => {
    useFetchProjects();
    const projects = useAppSelector(projectState);
    const sectionProjects = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(sectionProjects, setLinkProjectslist(false));
    const { projectslist } = useAppSelector(linkState);
    useLink(sectionProjects, projectslist);

    return (
        <section
            ref={sectionProjects}
            id="projects-list"
            className="projects-list"
        >
            <MainTitle text={TITLES.OUR_PROJECTS} />
            <div className="projects-list__conteiner">
                {projects.length > 0 &&
                    projects.map((card: ProjectType) => (
                        <ProjectLink key={card.id} card={card} />
                    ))}
            </div>
        </section>
    );
};

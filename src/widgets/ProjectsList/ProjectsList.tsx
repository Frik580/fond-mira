"use client";

import "./ProjectsList.css";
import { MainTitle } from "@/entities/MainTitle/MainTitle";
import { ProjectLink } from "@/entities/ProjectLink/ProjectLink";
import { TITLES } from "@/shared/Constants";
import { useEffect, useRef } from "react";
import { linkState, setLinkProjectslist } from "@/store/reducers/linkSlice";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import { ProjectType } from "@/shared/models/Models";
import useLinkDeactive from "@/shared/hooks/UseLinkDeactive";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";
import useLink from "@/shared/hooks/useLink";
import { loadedRefState } from "@/store/reducers/loadedRefSlice";

export const ProjectsList = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects(projects.length);
    const sectionProjects = useRef<HTMLDivElement | null>(null);
    useLinkDeactive(sectionProjects, setLinkProjectslist(false));
    const { projectslist } = useAppSelector(linkState);
    const { newslist } = useAppSelector(loadedRefState);
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

"use client";

import "./ProjectVetvi.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectVetvi = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects();

    return (
        <>
            {projects[7] && (
                <Project child={<p>ProjectVetvi</p>} project={projects[7]} />
            )}
        </>
    );
};

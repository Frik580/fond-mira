"use client";

import "./ProjectProDobro.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState} from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectProDobro = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects();

    return (
        <>
            {projects[0] && (
                <Project child={<p>ProjectProDobro</p>} project={projects[0]} />
            )}
        </>
    );
};

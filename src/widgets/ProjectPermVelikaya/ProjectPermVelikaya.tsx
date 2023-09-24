"use client";

import "./ProjectPermVelikaya.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectPermVelikaya = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects();

    return (
        <>
            {projects[1] && (
                <Project child={<p>ProjectPermVelikaya</p>} project={projects[1]} />
            )}
        </>
    );
};
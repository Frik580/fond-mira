"use client";

import "./ProjectKtoYesliNeTy.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectKtoYesliNeTy = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects();

    return (
        <>
            {projects[3] && (
                <Project child={<p>ProjectKtoYesliNeTy</p>} project={projects[3]} />
            )}
        </>
    );
};


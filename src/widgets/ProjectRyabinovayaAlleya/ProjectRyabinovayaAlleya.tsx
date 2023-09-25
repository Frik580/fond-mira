"use client";

import "./ProjectRyabinovayaAlleya.css";
import Image from "next/image";
import { Project } from "../Project/Project";
import { useAppSelector } from "@/shared/hooks/redux";
import { projectState } from "@/store/reducers/projectSlice";
import useFetchProjects from "@/shared/hooks/UseFetchProjects";

export const ProjectRyabinovayaAlleya = () => {
    const projects = useAppSelector(projectState);
    useFetchProjects();

    return (
        <>
            {projects[2] && (
                <Project
                    child={<p>ProjectRyabinovayaAlleya</p>}
                    project={projects[2]}
                />
            )}
        </>
    );
};

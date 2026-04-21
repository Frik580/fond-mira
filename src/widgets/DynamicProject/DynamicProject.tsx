// "use client";
import React from "react";

import { Project } from "@/widgets/Project/Project";
import { DynamicProjectContent } from "@/entities/DynamicProjectContent/DynamicProjectContent";
import { ProjectType } from "@/shared/models/Models";

interface DynamicProjectProps {
    project: ProjectType;
}

export const DynamicProject = ({ project }: DynamicProjectProps) => {
    return (
        <>
            {project && (
                <Project project={project}>
                    <DynamicProjectContent content={project.details} />
                </Project>
            )}
        </>
    );
};

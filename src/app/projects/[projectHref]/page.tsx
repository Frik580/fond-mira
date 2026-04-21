// "use client";

import { PROJECTS } from "@/shared/config/projectsConfig";
import { DynamicProject } from "@/widgets/DynamicProject/DynamicProject";
import { ProjectType } from "@/shared/models/Models";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        projectHref: project.href,
    }));
}

export default function Project({
    params,
}: {
    params: { projectHref: string };
}) {
    const { projectHref } = params;

    const project = PROJECTS.find((p) => p.href === projectHref) as
        | ProjectType
        | undefined;

    if (!project) {
        notFound();
    }

    return (
        <main>
            <DynamicProject project={project} />
        </main>
    );
}

// "use client";

import { PROJECTS } from "@/shared/Constants";
import { ProjectKodSemyi } from "@/widgets/ProjectKodSemyi/ProjectKodSemyi";
import { ProjectKtoYesliNeTy } from "@/widgets/ProjectKtoYesliNeTy/ProjectKtoYesliNeTy";
import { ProjectMayskiyVals } from "@/widgets/ProjectMayskiyVals/ProjectMayskiyVals";
import { ProjectMyIMir } from "@/widgets/ProjectMyIMir/ProjectMyIMir";
import { ProjectPermVelikaya } from "@/widgets/ProjectPermVelikaya/ProjectPermVelikaya";
import { ProjectProDobro } from "@/widgets/ProjectProDobro/ProjectProDobro";
import { ProjectRassveti } from "@/widgets/ProjectRassveti/ProjectRassveti";
import { ProjectRyabinovayaAlleya } from "@/widgets/ProjectRyabinovayaAlleya/ProjectRyabinovayaAlleya";
import { ProjectSolnechnyyKrug } from "@/widgets/ProjectSolnechnyyKrug/ProjectSolnechnyyKrug";
import { ProjectVetvi } from "@/widgets/ProjectVetvi/ProjectVetvi";
import { ProjectZhivayaPamyat } from "@/widgets/ProjectZhivayaPamyat/ProjectZhivayaPamyat";

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

    return (
        <main>
            {projectHref === PROJECTS[10].href && <ProjectRassveti />}
            {projectHref === PROJECTS[9].href && <ProjectKodSemyi />}
            {projectHref === PROJECTS[8].href && <ProjectProDobro />}
            {projectHref === PROJECTS[7].href && <ProjectPermVelikaya />}
            {projectHref === PROJECTS[6].href && <ProjectRyabinovayaAlleya />}
            {projectHref === PROJECTS[5].href && <ProjectKtoYesliNeTy />}
            {projectHref === PROJECTS[4].href && <ProjectMayskiyVals />}
            {projectHref === PROJECTS[3].href && <ProjectZhivayaPamyat />}
            {projectHref === PROJECTS[2].href && <ProjectMyIMir />}
            {projectHref === PROJECTS[1].href && <ProjectVetvi />}
            {projectHref === PROJECTS[0].href && <ProjectSolnechnyyKrug />}
        </main>
    );
}

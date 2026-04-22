import qrcode from "../../../public/images/qr-code.gif";
import projectsData from "./projects.json";
import { ProjectType } from "@/shared/models/Models";
import { StaticImageData } from "next/image";

const imageMap: Record<string, StaticImageData> = {
    qrcode_static: qrcode as unknown as StaticImageData,
};
interface RawDetailBlock {
    type: string;
    src?: string;
    [key: string]: unknown;
}

interface RawProject {
    details?: RawDetailBlock[];
    [key: string]: unknown;
}

export const PROJECTS: ProjectType[] = (projectsData as RawProject[]).map((project) => ({
    ...project,
    details: project.details?.map((block) => {
        if (block.type === "image-link" && typeof block.src === "string") {
            return {
                ...block,
                src: imageMap[block.src] || block.src,
            };
        }
        return block;
    }),
})) as ProjectType[];
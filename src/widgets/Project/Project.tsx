"use client";

import "./Project.css";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { PROJECTS, ProjectType } from "../../shared/Constants";
import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueHeader } from "@/store/reducers/headerSlice";
import { Support } from "@/entities/Support/Support";

type ProjectProps = {
    child: React.ReactNode;
    index: number;
};

export const Project: FC<ProjectProps> = ({ child, index }) => {
    const [project, setProject] = useState<ProjectType | null>(null);
    const [image, setImage] = useState("");
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const array = PROJECTS.sort(
            (a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0,
        );
        setProject(array[index]);

        const currentRef = ref.current;

        if (currentRef) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    dispatch(setValueHeader(entry.isIntersecting));
                });
            });

            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, [project]);

    useEffect(() => {
        if (project) {
            const image = require(`@/shared/image/projects/${project.src}.png`);
            setImage(image.default.src);
        }
    }, [project]);

    return (
        <>
            {project && (
                <section className="project">
                    <div
                        className="project__image"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <div ref={ref} className="project__title">
                        <HeaderTitle title={project.title} />
                    </div>
                    <div className="project__conteiner">
                        <div className="project__partner">
                            <Support partner={project.partner} />
                        </div>
                        <>{child}</>
                    </div>
                </section>
            )}
        </>
    );
};

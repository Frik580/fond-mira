"use client";

import "./ProjectRyabinovayaAlleya.css";
import Image from "next/image";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { PROJECTS, ProjectType } from "../../shared/Constants";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueHeader } from "@/store/reducers/headerSlice";
import { Support } from "@/entities/Support/Support";

export const ProjectRyabinovayaAlleya = () => {
    const [project, setProject] = useState<ProjectType | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const array = PROJECTS.sort(
            (a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0,
        );
        setProject(array[2]);
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

    return (
        <>
            {project && (
                <section className="project-ra">
                    <div
                        className="project-ra__image"
                        style={{
                            backgroundImage: `url("./image/projects/${project.src}.png")`,
                        }}
                    />
                    <div ref={ref} className="project-ra__title">
                        <HeaderTitle title={project.title} />
                    </div>
                    <div className="project-ra__conteiner">
                        <div className="project-ra__partner">
                            <Support partner={project.partner} />
                        </div>
                        <p>ProjectRabinovayaAlleya</p>
                    </div>
                </section>
            )}
        </>
    );
};

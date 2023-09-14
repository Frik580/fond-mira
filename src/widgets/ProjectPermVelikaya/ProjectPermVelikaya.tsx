"use client";

import "./ProjectPermVelikaya.css";
import Image from "next/image";
import { HeaderTitle } from "@/entities/HeaderTitle/HeaderTitle";
import { PROJECTS, ProjectType } from "../../shared/Constants";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/shared/hooks/redux";
import { setValueHeader } from "@/store/reducers/headerSlice";
import { Support } from "@/entities/Support/Support";

export const ProjectPermVelikaya = () => {
    const [project, setProject] = useState<ProjectType | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const array = PROJECTS.sort(
            (a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0,
        );
        setProject(array[1]);
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
                <section className="project-pv">
                    <div
                        className="project-pv__image"
                        style={{
                            backgroundImage: `url("./image/projects/${project.src}.png")`,
                        }}
                    />
                    <div ref={ref} className="project-pv__title">
                        <HeaderTitle title={project.title} />
                    </div>
                    <div className="project-pv__conteiner">
                        <div className="project-pv__partner">
                            <Support partner={project.partner} />
                        </div>
                        <p>ProjectPermVelikaya</p>
                    </div>
                </section>
            )}
        </>
    );
};

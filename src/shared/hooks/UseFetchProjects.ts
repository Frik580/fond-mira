import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { PROJECTS } from "../Constants";
import { projectState, setProject } from "@/store/reducers/projectSlice";

export default function useFetchProjects() {
    const dispatch = useAppDispatch();
    const projects = useAppSelector(projectState);

    useEffect(() => {
        if (projects.length === 0) {
            const array = [...PROJECTS];
            const newarray = array.sort(
                (a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0,
            );
            dispatch(setProject(newarray));
        } else { return }
    }, [projects.length]);

}
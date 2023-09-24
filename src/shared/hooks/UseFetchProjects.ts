import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { PROJECTS } from "../Constants";
import { setProject } from "@/store/reducers/projectSlice";

export default function useFetchProjects() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const array = [...PROJECTS];
        const newarray = array.sort(
            (a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0,
        );
        dispatch(setProject(newarray));
    }, []);

}
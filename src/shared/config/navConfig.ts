// src/shared/config/navConfig.ts
import { PATH, TITLES } from "@/shared/Constants";

/**
 * Интерфейс для элемента навигации.
 */
export interface NavItem {
    path: string;
    title: string;
    activeKey: string; 
}

/**
 * Статическая конфигурация элементов навигации.
 */
export const NAV_ITEMS: NavItem[] = [
    { path: PATH.ABOUT_US, title: TITLES.ABOUT_US, activeKey: "aboutus" },
    { path: PATH.NEWS, title: TITLES.NEWS, activeKey: "newslist" },
    { path: PATH.OUR_PROJECTS, title: TITLES.OUR_PROJECTS, activeKey: "projectslist" },
    { path: PATH.PARTNERS, title: TITLES.PARTNERS, activeKey: "partners" },
    { path: PATH.DOCUMENTS, title: TITLES.DOCUMENTS, activeKey: "documents" },
    { path: PATH.CONTACTS, title: TITLES.CONTACTS, activeKey: "contacts" },
    { path: PATH.HELP, title: TITLES.HELP, activeKey: "help" },
    { path: PATH.LUCH, title: TITLES.LUCH, activeKey: "luch" },
];

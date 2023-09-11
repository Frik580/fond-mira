export const WINDOW_SIZE = {
    HIGH: 1280,
    MIDDLE: 898,
    MIDDLE_2: 562,
};

export const CARDS_QUANTITY = {
    HIGH: 10,
    MIDDLE: 8,
    MIDDLE_2: 9,
    SMALL: 6,
};

export const CARDS_QUANTITY_NEXT = {
    HIGH: 5,
    MIDDLE: 4,
    MIDDLE_2: 3,
};

export const TITLES = {
    ABOUT_US: "Кто мы",
    NEWS: "Новости",
    OUR_PROJECTS: "Наши проекты",
    PARTNERS: "Партнёры",
    DOCUMENTS: "Документы",
    CONTACTS: "Контакты",
};

import imagealleya from "./images/alleya.png";
import imagevetvi from "./images/vetvi.png";
import imagemir from "./images/mir.png";
import imagekrug from "./images/krug.png";
import imagepobeda from "./images/pobeda.png";
import imagevals from "./images/vals.png";
import imagedobro from "./images/dobro.png";
import imagekto from "./images/kto.png";
import imageperm from "./images/perm_velikaya.png";

export const PROJECTS = [
    {
        id: 1,
        year: 2018,
        title: 'Солнечный круг',
        preview: 'edededed',
        src: imagekrug
    },

    {
        id: 2,
        year: 2018,
        title: 'Фестиваль семейного досуга и творчества «Мы – ветви. ПЕРМЬ»',
        preview: 'edededed',
        src: imagevetvi
    },
    {
        id: 3,
        year: 2019,
        title: 'МЫ и МИР',
        preview: 'edededed',
        src: imagemir
    },
    {
        id: 4,
        year: 2019,
        title: 'Реконструкция Победы. Живая Память',
        preview: 'edededed',
        src: imagepobeda
    },
    {
        id: 5,
        year: 2020,
        title: 'Майский вальс. Виват, Победа!',
        preview: 'edededed',
        src: imagevals
    },
    {
        id: 6,
        year: 2021,
        title: 'Кто, если не ТЫ',
        preview: 'edededed',
        src: imagekto
    },
    {
        id: 7,
        year: 2022,
        title: 'Рябиновая аллея Героев',
        preview: 'edededed',
        src: imagealleya
    },
    {
        id: 8,
        year: 2022,
        title: 'Пермь великая – ПАРМА многоликая',
        preview: 'edededed',
        src: imageperm
    },
    {
        id: 9,
        year: 2023,
        title: 'Кто, если не ТЫ! PRO-ДОБРО',
        preview: 'edededed',
        src: imagedobro
    },

]
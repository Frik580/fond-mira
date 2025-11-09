export const WINDOW_SIZE = {
    HIGH: 1000,
    MIDDLE: 660,
};

export const PHOTO_AMT = {
    HIGH: 3,
    MIDDLE: 2,
    SMALL: 1,
};

export const NEWS_AMT = 10;
export const NEWS = 80;

export const BASE_URL = 'https://fondmira-pk.ru/'
export const SERVER_URL = 'https://storage.yandexcloud.net/'
export const SERVER_URL_DOCUMENTS = `${SERVER_URL}documents-file/`
export const SERVER_URL_DIRECTION = `${SERVER_URL}direction/`
export const SERVER_URL_PARTNERS = `${SERVER_URL}partners-images/`
export const SERVER_URL_NEWS_IMAGE = `${SERVER_URL}news/`
export const SERVER_URL_PROJECTS_COVER = `${SERVER_URL}projects-cover/`
export const TOP_NEWS_COVER = `${SERVER_URL}cover/Header.webp`
export const TOP_NEWS_COVER_LITE = `${SERVER_URL}cover/lite/Header_lite3.webp`
export const DOCUMENTS_COVER = `${SERVER_URL}cover/Documents.webp`
export const DOCUMENTS_COVER_LITE = `${SERVER_URL}cover/lite/Documents_lite.webp`
export const HELP_COVER = `${SERVER_URL}cover/Help.webp`
export const HELP_COVER_LITE = `${SERVER_URL}cover/lite/Help_lite.webp`
export const LUCH_COVER = `${SERVER_URL}cover/Luch.webp`
export const LUCH_COVER_LITE = `${SERVER_URL}cover/lite/Luch_lite.webp`
export const SERVER_URL_PROJECTS_COVER_SMALL = `${SERVER_URL}projects-cover-small/`
export const SERVER_URL_PROJECTS_COVER_LITE = `${SERVER_URL}projects-cover-lite/`
export const IMAGE_PERMISSION = 'webp'
export const DOCUMENT_PERMISSION = 'pdf'
export const PARTNERS_PERMISSION = 'png'
export const API_BASE_URL = 'https://fondmira-pk-api.ru'
// export const API_BASE_URL = 'https://158.160.82.125'

export const TITLES = {
    ABOUT_US: "Кто мы",
    NEWS: "Новости",
    OUR_PROJECTS: "Наши проекты",
    PARTNERS: "Партнёры",
    DOCUMENTS: "Документы",
    CONTACTS: "Контакты",
    HELP: "Помочь нам",
    LUCH: "Ассоциация Луч"
};

export const PATH = {
    HOME: "/",
    ABOUT_US: "/#about-us",
    NEWS: "/#news-list",
    OUR_PROJECTS: "/#projects-list",
    PARTNERS: "/#partners",
    DOCUMENTS: '/documents',
    CONTACTS: "/#contacts",
    HELP: "/helpus",
    LUCH: "/luch"
};

export const PROJECTS = [
    {
        id: 1,
        year: 2018,
        title: "Солнечный круг",
        preview: "edededed",
        src: 'sol',
        partner: 'pg',
        href: "solnechnyy-krug",
        photo: 4,
    },

    {
        id: 2,
        year: 2018,
        title: "Фестиваль семейного досуга и творчества «Мы – ветви. Пермь»",
        preview: "edededed",
        src: 'vet',
        partner: 'gorod',
        href: "vetvi",
        photo: 7,
    },
    {
        id: 3,
        year: 2019,
        title: "МЫ и МИР",
        preview: "edededed",
        src: 'my',
        partner: 'guber',
        href: "my-i-mir",
        photo: 11,
    },
    {
        id: 4,
        year: 2019,
        title: "Реконструкция Победы. Живая Память",
        preview: "edededed",
        src: 'pobeda',
        partner: 'pg',
        href: "zhivaya-pamyat",
        photo: 13,
    },
    {
        id: 5,
        year: 2020,
        title: "Майский вальс. Виват, Победа!",
        preview: "edededed",
        src: 'vals',
        partner: 'gorod',
        href: "mayskiy-vals",
        photo: 8,
    },
    {
        id: 6,
        year: 2021,
        title: "Кто, если не ТЫ",
        preview: "edededed",
        src: 'kto',
        partner: 'guber',
        href: "kto-yesli-ne-ty",
        photo: 8,
    },
    {
        id: 7,
        year: 2022,
        title: "Рябиновая аллея Героев",
        preview: "edededed",
        src: 'alleya',
        partner: 'pg',
        href: "ryabinovaya-alleya",
        photo: 26,
    },
    {
        id: 8,
        year: 2022,
        title: "Пермь великая – Парма многоликая",
        preview: "edededed",
        src: 'perm_velikaya',
        partner: 'pfki',
        href: "perm-velikaya",
        photo: 20,
    },
    {
        id: 9,
        year: 2023,
        title: "Кто, если не ТЫ! PRO-ДОБРО",
        preview: "edededed",
        src: 'dobro',
        partner: 'guber',
        href: "pro-dobro",
        photo: 12,
    },
    {
        id: 10,
        year: 2024,
        title: "КОД Семьи по - Пермски",
        preview: "edededed",
        src: 'kod',
        partner: 'gorod',
        href: "kod-semyi",
        photo: 0,
    },
    {
        id: 11,
        year: 2024,
        title: "Рябиновые рассветы. Живая Память",
        preview: "edededed",
        src: 'ras',
        partner: 'pg',
        href: "rassveti",
        photo: 0,
    },
    {
        id: 12,
        year: 2026,
        title: "Правнуки Победы. Живая Память",
        preview: "edededed",
        src: 'prav',
        partner: 'guber',
        href: "pravnuki",
        photo: 9,
    },
];

export const DOCUMENTS = [
    {
        id: 1,
        title: "Устав ПКО МОФ «Российский фонд мира»",
        href: "ustav",
    },
    {
        id: 2,
        title: "Отчёт о деятельности ПКО МОФ «Российский фонд мира» за 2022 год",
        href: "otchet_2022_1",
    },
    {
        id: 3,
        title: "Отчёт о целях расходования денежных средств ПКО МОФ «Российский фонд мира» за 2022 год",
        href: "otchet_2022_2",
    },
    {
        id: 4,
        title: "Отчёт об объеме денежных средств и иного имущества ПКО МОФ «Российский фонд мира» за 2022 год",
        href: "otchet_2022_3",
    },
    {
        id: 5,
        title: "Отчёт о деятельности ПКО МОФ «Российский фонд мира» за 2021 год",
        href: "otchet_2021_1",
    },
    {
        id: 6,
        title: "Отчёт о целях расходования денежных средств ПКО МОФ «Российский фонд мира» за 2021 год",
        href: "otchet_2021_2",
    },
    {
        id: 7,
        title: "Отчёт об объеме денежных средств и иного имущества ПКО МОФ «Российский фонд мира» за 2021 год",
        href: "otchet_2021_3",
    },
    {
        id: 8,
        title: "Справка № 5330 об исполнении налогоплательщиком (плательщиком сбора, плательщиком страховых взносов, налоговым агентом) обязанности по уплате налогов, сборов, страховых взносов, пеней, штрафов, процентов",
        href: "spravka_ifns_17.01.2023",
    },
    {
        id: 9,
        title: "Свидетельство о государственной регистрации некоммерческой организации",
        href: "svid",
    },
    {
        id: 10,
        title: "Свидетельство о внесении записи в Единый государственный реестр юридических лиц",
        href: "svid2",
    },
    {
        id: 11,
        title: "Итоги деятельности ПКО МОФ «Российский фонд мира» за 2024-2025 год",
        href: "otchet_2024_2025",
    },
    {
        id: 12,
        title: "Финансовая деятельность ПКО МОФ «Российский фонд мира» за 2022-2024 год",
        href: "fin_2022_2023_2024",
    },
];

export const backgroundImageWithPhoto =
"linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 70%)";
export const backgroundImageWithoutPhoto =
"linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 90%)";
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
export const SERVER_URL_DOCUMENTS = 'documents/'
export const SERVER_URL_DIRECTION = `${SERVER_URL}direction/`
export const SERVER_URL_PARTNERS = `${SERVER_URL}partners-images/`
export const SERVER_URL_NEWS_IMAGE = `${SERVER_URL}news/`
export const SERVER_URL_PROJECTS_COVER = `${SERVER_URL}projects-cover/`
export const SERVER_URL_PROJECTS_COVER_SMALL = `${SERVER_URL}projects-cover-small/`
export const SERVER_URL_PROJECTS_COVER_LITE = `${SERVER_URL}projects-cover-lite/`
export const IMAGE_PERMISSION = 'webp'
export const DOCUMENT_PERMISSION = 'pdf'
export const PARTNERS_PERMISSION = 'png'
export const API_BASE_URL = 'https://fondmira-pk-api.ru'

export const TITLES = {
    ABOUT_US: "Кто мы",
    NEWS: "Новости",
    OUR_PROJECTS: "Наши проекты",
    PARTNERS: "Партнёры",
    DOCUMENTS: "Документы",
    CONTACTS: "Контакты",
};

export const PATH = {
    ABOUT_US: "/#about-us",
    NEWS: "/#news-list",
    OUR_PROJECTS: "/#projects-list",
    PARTNERS: "/#partners",
    DOCUMENTS: '/documents',
    CONTACTS: "/#contacts",
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
        title: "Фестиваль семейного досуга и творчества «Мы – ветви. ПЕРМЬ»",
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
        photo: 0,
    },
    {
        id: 6,
        year: 2021,
        title: "Кто, если не ТЫ",
        preview: "edededed",
        src: 'kto',
        partner: 'guber',
        href: "kto-yesli-ne-ty",
        photo: 5,
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
        photo: 5,
    },
    {
        id: 9,
        year: 2023,
        title: "Кто, если не ТЫ! PRO-ДОБРО",
        preview: "edededed",
        src: 'dobro',
        partner: 'guber',
        href: "pro-dobro",
        photo: 0,
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
];

export const backgroundImageWithPhoto =
"linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 70%)";
export const backgroundImageWithoutPhoto =
"linear-gradient(rgba(255,255,255, 0) 20%, var(--color-dust-white) 90%)";
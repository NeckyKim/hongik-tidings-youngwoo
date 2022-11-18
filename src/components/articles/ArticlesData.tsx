export interface articleType {
    id: number,
    section: "Architecture" | "Art" | "Global" | "Issue" | "Medical" | "Technology",
    title: string,
    year: 2021 | 2022,
    month: 3 | 5 | 9 | 11
}

export const articles: articleType[] = [
    {
        id: 1,
        section: "Architecture",
        title: "Ecopolis",
        year: 2021,
        month: 9
    },

    {
        id: 2,
        section: "Art",
        title: "Back to the Good Old Days: Retro Design",
        year: 2021,
        month: 9
    },

    {
        id: 3,
        section: "Technology",
        title: "Invisible but Powerful Cloud Computing",
        year: 2021,
        month: 11
    },

    {
        id: 4,
        section: "Technology",
        title: "A New Challenge to Space - KSLV-II Nuri",
        year: 2022,
        month: 3
    },

    {
        id: 5,
        section: "Art",
        title: "Branded Content",
        year: 2022,
        month: 3
    },

    {
        id: 6,
        section: "Medical",
        title: "Information About COVID-19 Test Kits",
        year: 2022,
        month: 5
    },

    {
        id: 7,
        section: "Global",
        title: "Figure Skating Doping Scandal at the Olympics",
        year: 2022,
        month: 5
    },

    {
        id: 8,
        section: "Technology",
        title: "The Last of Internet Explorer",
        year: 2022,
        month: 9
    },

    {
        id: 9,
        section: "Issue",
        title: "Korea, No Longer Safe from Drugs",
        year: 2022,
        month: 11
    },

    {
        id: 10,
        section: "Issue",
        title: "Sportswashing",
        year: 2022,
        month: 11
    }
]
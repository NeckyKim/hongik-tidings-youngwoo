import { useEffect, useState } from "react"

import { articlesDatabase } from '../articles/ArticlesDatabase';



export interface articleType {
    id: number,
    section: "Architecture" | "Art" | "Global" | "Issue" | "Medical" | "Technology",
    title: string,
    year: 2021 | 2022,
    month: 3 | 5 | 9 | 11,
    chiefEditor: "Han Seunghyeon" | "Kim Minji",
    keyword: string,
    link: string
}



export default function GetArticleInfo() {
    const [articleInfo, setArticleInfo] = useState<articleType>(articlesDatabase[Number(location.pathname.replace("/articles/", "").replace("/", "")) - 1]);

    return articleInfo;
}
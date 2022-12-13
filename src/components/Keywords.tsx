import { useState } from 'react';
import { useEffect } from 'react';

import styles from "./Keywords.module.css";


export default function Keywords({ keywords }: { keywords: string[] }) {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const keywordInterval = setInterval(() => {
            setIndex((prev) => prev + 1)
        }, 5000);

        return () => {
            clearInterval(keywordInterval);
        };
    });

    return (
        <span>
            <div className={index % keywords.length === 0 ? styles.show : styles.hide}>
                {index % keywords.length === 0 && keywords[0]}
            </div>

            <div className={index % keywords.length === 1 ? styles.show : styles.hide}>
                {index % keywords.length === 1 && keywords[1]}
            </div>

            <div className={index % keywords.length === 2 ? styles.show : styles.hide}>
                {index % keywords.length === 2 && keywords[2]}
            </div>
        </span>
    )
}
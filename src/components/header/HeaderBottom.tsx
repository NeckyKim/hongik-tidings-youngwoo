import { useEffect, useState } from "react";

import styles from './HeaderBottom.module.css';



export default function HeaderBottom({title}: {title: string}) {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        });
    });



    return (
        <div>
            <div className={scrollPosition < 10 ? styles.notScrolled : styles.scrolled}>
                <div className={styles.text}>
                    {title}
                </div>

                <div
                    className={styles.scrollMeter}
                    style={{
                        width: String("calc(100vw * " + (scrollPosition / (document.documentElement.scrollHeight - 1000)) + ")"),
                    }}
                />
            </div>

            <div className={styles.blank} />
        </div>
    )
}
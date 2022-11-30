import { useEffect, useState } from "react";

import styles from './HeaderBottom.module.css';



type HeaderBottomProps = {
    title: string
}



export default function HeaderBottom(props: HeaderBottomProps) {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });



    return (
        <div>
            <div className={scrollPosition < 10 ? styles.notScrolled : styles.scrolled}>
                <div className={styles.text}>
                    {props.title}
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
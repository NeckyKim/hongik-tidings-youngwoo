import { useEffect, useState } from "react";

import styles from './HeaderBottom.module.css';



type HeaderBottomProps = {
    title: string
}



export const HeaderBottom = (props: HeaderBottomProps) => {
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
                {props.title}
            </div>

            <div className={styles.blank} />
        </div>
    )
}
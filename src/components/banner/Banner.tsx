import { useEffect, useState } from "react";

import styles from './Banner.module.css';



type BannerProps = {
    year: number,
    month: number,
    chiefEditor: string,
    keyword: string,
    link: string
}



export default function Banner(props: BannerProps) {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    });

    

    function BannerBottomLeft() {
        return (
            <div className={styles.bannerBottomLeft}>
            <div />

            <div className={styles.yearMonth}>
                {props.year}.{props.month}
            </div>

            <div className={styles.keyword}>
                {props.keyword}
            </div>

            <button className={styles.eBookButton} onClick={() => { window.open(props.link) }}>
                View e-Book
            </button>
        </div>
        )
    }



    function BannerBottomRight() {
        return (
            <div className={styles.bannerBottomRight}>
            <img className={styles.tidings} src={process.env.PUBLIC_URL + "/logos/tidings.png"} />

            <img className={styles.cover} src={process.env.PUBLIC_URL + "/covers/" + props.year + "-" + props.month + ".png"} />
        </div>
        )
    }



    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerTop}>
                This article was originally published on this issue.
            </div>

            {
                width > 500

                    ?

                    <div className={styles.bannerBottom}>
                        <BannerBottomLeft />
                        <BannerBottomRight />
                    </div>

                    :

                    <div className={styles.bannerBottom}>
                        <BannerBottomRight />
                        <BannerBottomLeft />
                    </div>
            }
        </div>
    )
}
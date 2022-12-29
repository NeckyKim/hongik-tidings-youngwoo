import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Home.module.css';



export default function Home() {
    const [width, setWidth] = useState<number>(window.innerWidth);


    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth); })
    }, [])

    let keywords: string[][] = [
        ["도전", "challenge", "挑戰", "RubyMine"],
        ["노력", "effort", "努力", "GoLand"],
        ["성장", "growth", "成長", "Kotlin"]
    ]



    function KeywordsContainer({ index }: { index: number }) {
        return (
            <div className={styles.container}>
                <img className={styles.background} src={process.env.PUBLIC_URL + "/backgrounds/" + keywords[index][3] + ".png"} />

                <div className={styles.textContainer}>
                    <div className={styles.textKorean}>
                        {keywords[index][0]}
                    </div>

                    <div className={styles.textHanja}>
                        {keywords[index][2]}
                    </div>
                </div>

                <div
                    className={styles.textEnglish}
                    style={keywords[index][1] === "challenge" ? { fontSize: "min(20rem, 22vw)" } : { fontSize: "min(20rem, 30vw)" }}
                >
                    {keywords[index][1]}
                </div>
            </div>
        )
    }



    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        pauseOnHover: false
    };



    return (
        <div>
            <div className={styles.textTop}>
                안녕하세요. 저는,
            </div>

            <Slider {...settings} className={styles.slider}>
                <KeywordsContainer index={0} />
                <KeywordsContainer index={1} />
                <KeywordsContainer index={2} />
            </Slider>

            <div className={styles.textBottom}>
                하는 개발자 김영우 입니다.
            </div>
        </div>
    )
}
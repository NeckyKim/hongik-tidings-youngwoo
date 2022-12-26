import { useState } from 'react';
import { useEffect } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Home.module.css';



export default function Home() {
    let keywords: string[][] = [
        ["도전", "challenge", "挑戰"],
        ["노력", "effort", "努力"],
        ["성장", "growth", "成長"]
    ]



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
                안녕하세요. 저는
            </div>

            <div className={styles.textBottom}>
                하는 개발자 입니다.
            </div>

            <Slider {...settings} className={styles.slider}>
                <div className={styles.backgroundContainer}>
                    <img className={styles.background} src={process.env.PUBLIC_URL + "/backgrounds/RubyMine.png"} />

                    <div className={styles.korean}>
                        {keywords[0][0]}
                    </div>

                    <div className={styles.hanja}>
                        {keywords[0][2]}
                    </div>

                    <div className={styles.english}>
                        {keywords[0][1]}
                    </div>
                </div>

                <div className={styles.backgroundContainer}>
                    <img className={styles.background} src={process.env.PUBLIC_URL + "/backgrounds/GoLand.png"} />

                    <div className={styles.korean}>
                        {keywords[1][0]}
                    </div>

                    <div className={styles.hanja}>
                        {keywords[1][2]}
                    </div>

                    <div className={styles.english}>
                        {keywords[1][1]}
                    </div>
                </div>

                <div className={styles.backgroundContainer}>
                    <img className={styles.background} src={process.env.PUBLIC_URL + "/backgrounds/Kotlin.png"} />

                    <div className={styles.korean}>
                        {keywords[2][0]}
                    </div>

                    <div className={styles.hanja}>
                        {keywords[2][2]}
                    </div>

                    <div className={styles.english}>
                        {keywords[2][1]}
                    </div>
                </div>
            </Slider>
        </div>
    )
}
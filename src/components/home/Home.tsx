import { useState } from 'react';
import { useEffect } from 'react';

import styles from './Home.module.css';



function TypingAnimation(props: { text: string }) {
    const [text, setText] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [increase, setIncrease] = useState<boolean>(true);

    const word = props.text;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (increase) {
                setText((prev) => {
                    if (count === word.length) {
                        setIncrease(false);

                        return word
                    }

                    else {
                        setCount(count + 1);

                        return prev + word[count];
                    }
                });
            }

            else {
                setText((prev) => {
                    if (count === 0) {
                        setIncrease(true);

                        return ""
                    }

                    else {
                        setCount(count - 1);

                        return prev.substring(0, count);
                    }
                });
            }
        }, 150);

        return () => {
            clearInterval(typingInterval);
        };
    });



    return (
        <span className={styles.animationText}>
            {text}
        </span>
    )
};




function Keyword() {
    const [index, setIndex] = useState<number>(0);

    const keywords: string[] = ["성장", "도전", "노력"]

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
            <div className={index % 3 === 0 ? styles.show : styles.hide}>
                {index % 3 === 0 && keywords[0]}
            </div>

            <div className={index % 3 === 1 ? styles.show : styles.hide}>
                {index % 3 === 1 && keywords[1]}
            </div>

            <div className={index % 3 === 2 ? styles.show : styles.hide}>
                {index % 3 === 2 && keywords[2]}
            </div>
        </span>
    )
}



export default function Home() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    });



    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.containerTop}>
                    <div className={styles.containerTopText}>
                        archive-eng.html
                    </div>

                    <img className={styles.containerTopButton} src={process.env.PUBLIC_URL + "/icons/homebutton1.png"} />

                    <img className={styles.containerTopButton} src={process.env.PUBLIC_URL + "/icons/homebutton2.png"} />

                    <img className={styles.containerTopButton} src={process.env.PUBLIC_URL + "/icons/homebutton3.png"} />
                </div>

                <div className={styles.containerBottom}>
                    <div className={styles.text1}>
                        &lt;!DOCTYPE html&gt;
                    </div>

                    <div className={styles.text1}>
                        &lt;html lang="en"&gt;
                    </div>

                    <div className={styles.text2}>
                        &lt;body&gt;
                    </div>

                    <span className={styles.text3}>
                        &lt;h1&gt;
                    </span>
                    <TypingAnimation text={"Welcome to archive-eng!"} />
                    <span className={styles.text4}>
                        &lt;/h1&gt;
                    </span>
                    {width >= 1000 && <br />}

                    <span className={styles.text3}>
                        &lt;h2&gt;
                    </span>
                    <TypingAnimation text={"My name is Young-Woo Kim"} />
                    <span className={styles.text4}>
                        &lt;/h2&gt;
                    </span>
                    {width >= 1000 && <br />}

                    <div className={styles.text2}>
                        &lt;/body&gt;
                    </div>

                    <div className={styles.text1}>
                        &lt;/html&gt;
                    </div>
                </div>

                <div className={styles.header}>
                    <div className={styles.lines}>
                        안녕하세요.
                    </div>
                    {width < 650 ? <br /> : <span>&nbsp;</span>}

                    <Keyword />
                    <div className={styles.lines}>
                        하는 개발자,&nbsp;
                    </div>
                    {width < 650 ? <br /> : <span>&nbsp;</span>}

                    <div className={styles.lines}>
                        김영우입니다.
                    </div>
                </div>
            </div>
        </div>
    )
}
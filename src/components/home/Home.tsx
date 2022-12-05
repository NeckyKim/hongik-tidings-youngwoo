import { useState } from 'react';
import { useEffect } from 'react';

import styles from './Home.module.css';



function TypingAnimation(props: { text: string }) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [increase, setIncrease] = useState(true);

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
                        setText("");

                        return ""
                    }

                    else {
                        setCount(count - 1);

                        return prev.substring(0, count);
                    }
                });
            }
        }, 200);

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



export default function Home() {
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
                    <TypingAnimation text={"Welcome to archive-eng"} />
                    <span className={styles.text4}>
                        &lt;/h1&gt;
                    </span>
                    <br />

                    <span className={styles.text3}>
                        &lt;h2&gt;
                    </span>
                    <TypingAnimation text={"안녕하세요, 성장하는 개발자 김영우입니다."} />
                    <span className={styles.text4}>
                        &lt;/h2&gt;
                    </span>
                    <br />

                    <span className={styles.text3}>
                        &lt;p&gt;
                    </span>
                    <TypingAnimation text={"프론트 엔드 개발자가 되는게 목표입니다."} />
                    <span className={styles.text4}>
                        &lt;/p&gt;
                    </span>
                    <br />

                    <div className={styles.text2}>
                        &lt;/body&gt;
                    </div>

                    <div className={styles.text1}>
                        &lt;/html&gt;
                    </div>
                </div>
            </div>
        </div>
    )
}
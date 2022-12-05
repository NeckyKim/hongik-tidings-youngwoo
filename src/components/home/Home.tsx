import { useState } from 'react';
import { useEffect } from 'react';

import styles from './Home.module.css';



function TypingAnimation(props: { text: string }) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const word = props.text;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setText((prev) => {
                let result = prev ? prev + word[count] : word[0];
                setCount(count + 1);

                if (count >= word.length) {
                    setCount(0);
                    setText("");
                }

                return result;
            });
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

                    <div className={styles.containerTopButton}>
                        ＿
                    </div>

                    <div className={styles.containerTopButton}>
                        □
                    </div>

                    <div className={styles.containerTopButton}>
                        ×
                    </div>
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
                    <TypingAnimation text={"Welcome to archive-eng          "} />
                    <span className={styles.text4}>
                        &lt;/h1&gt;
                    </span>
                    <br />

                    <span className={styles.text3}>
                        &lt;h2&gt;
                    </span>
                    <TypingAnimation text={"안녕하세요, 성장하는 개발자 김영우입니다.         "} />
                    <span className={styles.text4}>
                        &lt;/h2&gt;
                    </span>

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
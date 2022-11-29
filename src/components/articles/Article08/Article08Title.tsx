import styles from './Article08.module.css';



export default function Article08Title() {
    return (
        <div className={styles.titleContainer}>
            <img alt="Article Title" className={styles.image1} src={process.env.PUBLIC_URL + "/articles/08/1.png"} />

            <img alt="Article Title" className={styles.image2} src={process.env.PUBLIC_URL + "/articles/08/2.png"} />

            <div className={styles.writer}>
                Written by Kim Young-Woo
            </div>

            <div className={styles.reviser}>
                Revised by Prof. Neil Alexander Cole
            </div>
        </div>
    )
}
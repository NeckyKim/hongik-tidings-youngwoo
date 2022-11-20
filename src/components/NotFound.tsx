import styles from './NotFound.module.css';



export default function NotFound() {
    return (
        <div className={styles.container}>
            <img alt="logo" className={styles.fourZeroFour} src={process.env.PUBLIC_URL + "/logos/404.png"} />

            <div className={styles.mainText}>
                Oops!
            </div>

            <div className={styles.subText}>
                The page was not found.
            </div>
        </div>
    )
}
import { Link } from 'react-router-dom';

import styles from './Home.module.css';



export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <Link to={"/archive"} className={styles.button}>
                    Archive
                </Link>

                <Link to={"/achievements"} className={styles.button}>
                    Achievements
                </Link>

                <Link to={"/aboutme"} className={styles.button}>
                    About Me
                </Link>
            </div>

            <div className={styles.containerRight}>
                <video muted autoPlay loop>
                    <source src={require("./Background.mp4")} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
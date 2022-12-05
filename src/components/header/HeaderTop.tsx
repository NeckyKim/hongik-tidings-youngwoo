import { Link, useNavigate, NavigateFunction } from 'react-router-dom';


import styles from './HeaderTop.module.css';



export default function HeaderTop() {
    const navigate: NavigateFunction = useNavigate();



    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogo} onClick={() => { navigate("/") }}>
                <img className={styles.headerLogoIcon} src={process.env.PUBLIC_URL + "/logos/icon.png"} />

                <div className={styles.headerLogoText}>
                    archive-eng
                </div>
            </div>

            <div className={styles.headerMenu}>
                <Link to={"/articles"} className={styles.headerMenuText}>
                    Articles
                </Link>

                <Link to={"/achievements"} className={styles.headerMenuText}>
                    Achievements
                </Link>

                <Link to={"/aboutme"} className={styles.headerMenuText}>
                    About Me
                </Link>
            </div>
        </div>
    )
}
import styles from './Footer.module.css';



export default function Footer() {
    var year: number = new Date().getFullYear();



    return (
        <div className={styles.footerContainer}>
            <div className={styles.information}>
                Information
            </div>

            <div className={styles.name}>
                Kim Young-Woo
            </div>

            <div className={styles.name}>
                김영우
            </div>
            <br />

            <div className={styles.elements}>
                <img alt="e-mail" className={styles.elementsImage} src={process.env.PUBLIC_URL + "/logo/email.png"} />

                <div className={styles.elementsText}>
                    kyeryoong@gmail.com
                </div>
            </div>

            <div className={styles.elements} onClick={() => { window.open("https://github.com/NeckyKim") }}>
            <img alt="GitHub" className={styles.elementsImage} src={process.env.PUBLIC_URL + "/logo/github.png"} />

                <div className={styles.elementsText}>
                    github.com/NeckyKim
                </div>
            </div>

            <div className={styles.elements} onClick={() => { window.open("https://www.linkedin.com/in/young-woo-kim-493463246/") }}>
            <img alt="LinkedIn" className={styles.elementsImage} src={process.env.PUBLIC_URL + "/logo/linkedin.png"} />

                <div className={styles.elementsText}>
                    linkedin.com/in/young-woo-kim
                </div>
            </div>

            <div className={styles.allRightsReserved}>
                {year}. archive-eng. All righst reserved.
            </div>
        </div>
    )
}
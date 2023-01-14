import styles from './Footer.module.css';



export default function Footer() {
    var year: number = new Date().getFullYear();



    return (
        <div className={styles.footerContainer}>
            <div className={styles.information}>
                Contact
            </div>

            <div className={styles.name}>
                Kim Young-Woo
            </div>

            <div className={styles.name}>
                김영우
            </div>
            <br />

            <div className={styles.elements}>
                <img className={styles.elementsImage} src={process.env.PUBLIC_URL + "/logos/email.png"} />

                <div className={styles.elementsTextE}>
                    <div>
                        kyeryoong
                    </div>
                    
                    <img className={styles.elementsImageE} src={process.env.PUBLIC_URL + "/logos/at.png"} />

                    <div>
                        gmail
                    </div>

                    <img className={styles.elementsImageD} src={process.env.PUBLIC_URL + "/logos/dot.png"} />

                    <div>
                        com
                    </div>
                </div>
            </div>

            <div className={styles.elements} onClick={() => { window.open("https://github.com/kyeryoong") }}>
                <img className={styles.elementsImage} src={process.env.PUBLIC_URL + "/logos/github.png"} />

                <div className={styles.elementsText}>
                    github.com/kyeryoong
                </div>
            </div>

            <div className={styles.elements} onClick={() => { window.open("https://www.linkedin.com/in/kyeryoong/") }}>
                <img className={styles.elementsImage} src={process.env.PUBLIC_URL + "/logos/linkedin.png"} />

                <div className={styles.elementsText}>
                    linkedin.com/in/kyeryoong
                </div>
            </div>

            <div className={styles.allRightsReserved}>
                {year}. archive-eng. All righst reserved.
            </div>
        </div>
    )
}
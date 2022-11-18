import styles from './Footer.module.css';



export default function Footer() {
    var year: number = new Date().getFullYear();



    return (
        <div className={styles.footerContainer}>
            <div className={styles.information}>
                Information
            </div>

            <div className={styles.elements}>
                Kim Young-Woo
            </div>

            <div className={styles.elements}>
                김영우
            </div>
            <br />

            <div className={styles.elements}>
                kyeryoong@gmail.com
            </div>

            <div className={styles.elements} onClick={() => {window.open("https://github.com/NeckyKim")}}>
                github.com/NeckyKim
            </div>

            <div className={styles.elements} onClick={() => {window.open("https://www.linkedin.com/in/young-woo-kim-493463246/")}}>
                linkedin.com/in/young-woo-kim
            </div>

            <div className={styles.allRightsReserved}>
                {year}. archive-eng. All righst reserved.
            </div>
        </div>
    )
}
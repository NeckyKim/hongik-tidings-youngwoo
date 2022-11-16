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

            <div className={styles.elements}>
                github.com/NeckyKim
            </div>

            <div className={styles.allRightsReserved}>
                {year}. archive-eng. All righst reserved.
            </div>
        </div>
    )
}
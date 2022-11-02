import styles from './Footer.module.css';



export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.information}>
                Information
            </div>

            <div>
                Kim Young-Woo
            </div>

            <div>
                김영우
            </div>
            <br />

            <div>
                kyeryoong@gmail.com
            </div>

            <div>
                github.com/NeckyKim
            </div>

            <div className={styles.allRightsReserved}>
                2022. Kim Young-Woo. All righst reserved.
            </div>
        </div>
    )
}
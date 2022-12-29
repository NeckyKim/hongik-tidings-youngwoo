import { Link } from 'react-router-dom';

import styles from './Button.module.css';



type ButtonProps = {
    id: number
    section: "Architecture" | "Art" | "Global" | "Issue" | "Medical" | "Technology"
    title: string
    year: 2021 | 2022
    month: 3 | 5 | 9 | 11
}


type BadgeProps = {
    section: string
}



function Badge({section}: BadgeProps) {
    return (
        <div className={styles.badgeContainer}>
            <img className={styles.badgeIcon} src={process.env.PUBLIC_URL + "/sections/" + section + ".png"} />

            <div className={styles.badgeText}>
                {section}
            </div>
        </div>
    )
}



function MonthTranslator(month: number) {
    if (month === 3) {
        return "March"
    }

    else if (month === 5) {
        return "May"
    }

    else if (month === 9) {
        return "September"
    }

    else if (month === 11) {
        return "November"
    }
}



export default function Button({id, section, title, year, month}: ButtonProps) {
    return (
        <Link to={"/articles/" + String(id)} className={styles.button}>
            <img className={styles.buttonImage} src={process.env.PUBLIC_URL + "/articles/" + id + "/title.png"} />

            <div className={styles.buttonInfo}>
                <div className={styles.title}>
                    {title}
                </div>

                <div className={styles.date}>
                    {MonthTranslator(month)} {year}
                </div>

                <Badge section={section} />
            </div>
        </Link>
    )
}
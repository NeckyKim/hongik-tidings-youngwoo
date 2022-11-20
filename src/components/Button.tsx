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



function Badge(props: BadgeProps) {
    return (
        <div className={styles.badgeContainer}>
            <img alt="Badge" className={styles.badgeIcon} src={process.env.PUBLIC_URL + "/sections/" + props.section + ".png"} />

            <div className={styles.badgeText}>
                {props.section}
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



export default function Button(props: ButtonProps) {
    return (
        <Link to={"/article/" + String(props.id)} className={styles.button}>
            <div className={styles.buttonImage}>

            </div>

            <div className={styles.buttonInfo}>
                <div className={styles.title}>
                    {props.title}
                </div>

                <div className={styles.date}>
                    {MonthTranslator(props.month)} {props.year}
                </div>

                <Badge section={props.section} />
            </div>
        </Link>
    )
}
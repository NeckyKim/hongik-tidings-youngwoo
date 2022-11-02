import { useNavigate, NavigateFunction } from 'react-router-dom';

import styles from './Button.module.css';



type ButtonProps = {
    id: number,
    section: string,
    title: string,
    year: number,
    month: number
}



const MonthTranslator = (month: number) => {
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



export const Button = (props: ButtonProps) => {
    const navigate: NavigateFunction = useNavigate()

    return (
        <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={() => { navigate(String(props.id)); }}>
                <div className={styles.buttonImage}>

                </div>

                <div className={styles.buttonInfo}>
                    <div className={styles.section}>
                        {props.section}
                    </div>

                    <div className={styles.title}>
                        {props.title}
                    </div>

                    <div className={styles.date}>
                        {MonthTranslator(props.month)} {props.year}
                    </div>
                </div>
            </div>
        </div>
    )
}
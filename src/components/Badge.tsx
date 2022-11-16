import styles from './Badge.module.css';

type BadgeProps = {
    section: string
}


export default function Badge(props: BadgeProps) {
    return (
        <div className={styles.badgeContainer}>
            <img alt="logo" className={styles.badgeIcon} src={process.env.PUBLIC_URL + "/section/" + props.section + ".png"} />

            <div className={styles.badgeText}>
                {props.section}
            </div>
        </div>
    )
}
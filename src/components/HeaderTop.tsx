import { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import styles from './HeaderTop.module.css';



export const HeaderTop = () => {
    const navigate: NavigateFunction = useNavigate();



    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.headerDivider}>
                    <img alt="card" className={styles.logo} src={process.env.PUBLIC_URL + "/logo/tidings-white.png"} onClick={() => { navigate("/"); }} />
                </div>
            </div>

            <div className={styles.blank} />
        </div>
    )
}
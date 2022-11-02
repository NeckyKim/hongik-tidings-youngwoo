import { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import styles from './HeaderTop.module.css';



export const HeaderTop = () => {
    const navigate: NavigateFunction = useNavigate();

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.headerDivider}>
                    <img alt="card" className={styles.logo} src={process.env.PUBLIC_URL + "/logo/tidings-white.png"} onClick={() => { navigate("/"); }} />


                    <div>

                    </div>

                    {/* <img alt="card" className={styles.arrow} src={showMenu ? process.env.PUBLIC_URL + "/arrows/arrow-up.png" : process.env.PUBLIC_URL + "/arrows/arrow-down.png"} onClick={() => { setShowMenu(!showMenu); }} /> */}
                </div>

                {/* {
                    showMenu

                    &&

                    <div className={styles.headerMenu}>

                    </div>
                } */}
            </div>

            <div className={styles.blank}>

            </div>
        </div>
    )
}
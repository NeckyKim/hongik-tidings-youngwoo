import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './HeaderTop.module.css';



export default function HeaderTop() {
    const navigate: NavigateFunction = useNavigate();

    const [clicked, setClicked] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    });



    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo} onClick={() => { navigate("/") }}>
                    <img className={styles.headerLogoIcon} src={process.env.PUBLIC_URL + "/logos/icon.png"} />

                    <div className={styles.headerLogoText}>
                        archive-eng
                    </div>
                </div>

                {
                    width > 1000

                        ?


                        <div className={styles.headerMenu1}>
                            <Link to={"/articles"} className={styles.headerMenuText}>
                                Articles
                            </Link>

                            <Link to={"/achievements"} className={styles.headerMenuText}>
                                Achievements
                            </Link>

                            <Link to={"/aboutme"} className={styles.headerMenuText}>
                                About Me
                            </Link>
                        </div>

                        :

                        <div className={styles.headerMenu2}>
                            <img className={styles.headerMenuButton} src={process.env.PUBLIC_URL + "/icons/menubutton.png"} onClick={() => { setClicked(!clicked); }} />

                            {
                                clicked

                                &&

                                <div className={styles.headerMenuContainer}>
                                    <Link to={"/articles"} className={styles.headerMenuContainerButton} onClick={() => { setClicked(false); }}>
                                        Articles
                                    </Link>

                                    <Link to={"/achievements"} className={styles.headerMenuContainerButton} onClick={() => { setClicked(false); }}>
                                        Achievements
                                    </Link>

                                    <Link to={"/aboutme"} className={styles.headerMenuContainerButton} onClick={() => { setClicked(false); }}>
                                        About Me
                                    </Link>
                                </div>
                            }
                        </div>
                }

            </div>

            <div className={styles.blank} />
        </div>
    )
}
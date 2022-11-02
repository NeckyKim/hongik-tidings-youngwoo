import { Button } from './Button';

import styles from './Home.module.css';



export const Home = () => {
    return (
        <div className={styles.buttonContainer}>
            <Button id={1} section="Technology" title="The Last of Internet Explorer" year={2022} month={9} />
            <Button id={2} section="Medical" title="Information About COVID-19 Test Kits" year={2022} month={5} />
        </div>
    )
}
import Button from './Button';
import { articles } from '../articles/ArticlesData';

import styles from './Archive.module.css'



export default function Archive() {
    return (
        <div className={styles.buttonContainer}>
            {/* <Button id={articles[0].id} section={articles[0].section} title={articles[0].title} year={articles[0].year} month={articles[0].month} /> */}
            {/* <Button id={articles[1].id} section={articles[1].section} title={articles[1].title} year={articles[1].year} month={articles[1].month} /> */}
            {/* <Button id={articles[2].id} section={articles[2].section} title={articles[2].title} year={articles[2].year} month={articles[2].month} /> */}
            {/* <Button id={articles[3].id} section={articles[3].section} title={articles[3].title} year={articles[3].year} month={articles[3].month} /> */}
            {/* <Button id={articles[4].id} section={articles[4].section} title={articles[4].title} year={articles[4].year} month={articles[4].month} /> */}
            {/* <Button id={articles[5].id} section={articles[5].section} title={articles[5].title} year={articles[5].year} month={articles[5].month} /> */}
            {/* <Button id={articles[6].id} section={articles[6].section} title={articles[6].title} year={articles[6].year} month={articles[6].month} /> */}
            <Button id={articles[7].id} section={articles[7].section} title={articles[7].title} year={articles[7].year} month={articles[7].month} />
            {/* <Button id={articles[8].id} section={articles[8].section} title={articles[8].title} year={articles[8].year} month={articles[8].month} /> */}
            {/* <Button id={articles[9].id} section={articles[9].section} title={articles[9].title} year={articles[9].year} month={articles[9].month} /> */}
        </div>
    )
}
import Button from './Button';
import { articlesDatabase } from '../articles/ArticlesDatabase';

import styles from './Archive.module.css'



export default function Archive() {
    return (
        <div className={styles.buttonContainer}>
            {/* <Button id={articlesDatabase[0].id} section={articlesDatabase[0].section} title={articlesDatabase[0].title} year={articlesDatabase[0].year} month={articlesDatabase[0].month} /> */}
            {/* <Button id={articlesDatabase[1].id} section={articlesDatabase[1].section} title={articlesDatabase[1].title} year={articlesDatabase[1].year} month={articlesDatabase[1].month} /> */}
            <Button id={articlesDatabase[2].id} section={articlesDatabase[2].section} title={articlesDatabase[2].title} year={articlesDatabase[2].year} month={articlesDatabase[2].month} />
            {/* <Button id={articlesDatabase[3].id} section={articlesDatabase[3].section} title={articlesDatabase[3].title} year={articlesDatabase[3].year} month={articlesDatabase[3].month} /> */}
            {/* <Button id={articlesDatabase[4].id} section={articlesDatabase[4].section} title={articlesDatabase[4].title} year={articlesDatabase[4].year} month={articlesDatabase[4].month} /> */}
            {/* <Button id={articlesDatabase[5].id} section={articlesDatabase[5].section} title={articlesDatabase[5].title} year={articlesDatabase[5].year} month={articlesDatabase[5].month} /> */}
            <Button id={articlesDatabase[6].id} section={articlesDatabase[6].section} title={articlesDatabase[6].title} year={articlesDatabase[6].year} month={articlesDatabase[6].month} />
            <Button id={articlesDatabase[7].id} section={articlesDatabase[7].section} title={articlesDatabase[7].title} year={articlesDatabase[7].year} month={articlesDatabase[7].month} />
            {/* <Button id={articlesDatabase[8].id} section={articlesDatabase[8].section} title={articlesDatabase[8].title} year={articlesDatabase[8].year} month={articlesDatabase[8].month} /> */}
            {/* <Button id={articlesDatabase[9].id} section={articlesDatabase[9].section} title={articlesDatabase[9].title} year={articlesDatabase[9].year} month={articlesDatabase[9].month} /> */}
        </div>
    )
}
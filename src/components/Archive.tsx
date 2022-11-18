import Button from './Button';

import styles from './Archive.module.css'



export default function Archive() {
    return (
        <div className={styles.buttonContainer}>
            <Button id={1} section="Architecture" title="Ecopolis" year={2021} month={9} />
            <Button id={2} section="Art" title="Back to the Good Old Days: Retro Design" year={2021} month={9} />
            <Button id={3} section="Technology" title="Invisible but Powerful Cloud Computing" year={2021} month={11} />
            <Button id={4} section="Technology" title="A New Challenge to Space - KSLV-II Nuri" year={2022} month={3} />
            <Button id={5} section="Art" title="Branded Content" year={2022} month={3} />
            <Button id={6} section="Medical" title="Information About COVID-19 Test Kits" year={2022} month={5} />
            <Button id={7} section="Global" title="Figure Skating Doping Scandal at the Olympics" year={2022} month={5} />
            <Button id={8} section="Technology" title="The Last of Internet Explorer" year={2022} month={9} />
            <Button id={9} section="Issue" title="Korea, No Longer Safe from Drugs" year={2022} month={11} />
            <Button id={10} section="Issue" title="Sportswashing" year={2022} month={5} />
        </div>
    )
}
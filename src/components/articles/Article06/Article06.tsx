import HeaderBottom from '../../header/HeaderBottom';
import Banner from '../../banner/Banner';
import GetArticleInfo from '../../hooks/GetArticleInfo';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import articleStyles from '../ArticleStyle.module.css';
import styles from './Article06.module.css';



export default function Article06() {
    var articleInfo = GetArticleInfo();



    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };



    return (
        <div>
            <HeaderBottom title={articleInfo.title} />



            <div className={articleStyles.paragraph}>
                It has been two years since the COVID-19 virus began. Humans have invented new vaccines and virus technology to survive the war against this virus. At the same time, new  variants of the virus are being spread and detected. In Korea, the daily number of confirmed cases of the virus was on the rise until the middle of March, when on March 16th, the highest number of confirmed cases was 621,328. As the number exploded due to the fast spread of the Omicron variant,  the health care system could not keep up with the demand for only PCR tests . Therefore, the government and the Ministry of Health and Welfare decided to introduce self-test kits and rapid antigen tests to the public.
            </div>



            <div className={articleStyles.subtitle}>
                Types of COVID-19 Tests
            </div>

            <div className={articleStyles.paragraph}>
                A Real-Time PCR Test is a method of collecting samples by inserting a cotton swab deep into the nose or the back of the throat. It is known as the most accurate way among the various COVID-19 virus tests currently being used. After extracting RNA from the sample, this RNA is amplified. If there are two or more types of genes that have the same characteristics as the COVID-19 virus, the result is positive. However, there is a disadvantage to this test in that the test can be judged as negative if there are not enough cells in the sample.
            </div>

            <div className={articleStyles.paragraph}>
                The RT-LAMP Test is different because saliva is used in the test  instead of the nose or throat samples used in PCR tests.  If saliva is being used, the number of tests can be greatly increased because the tests results are returned quicker. Real-Time PCR Tests take six hours for results, while the RT-LAMP Test results come in less than an hour. Also, because the saliva is usually held at temperatures between 60~65℃, DNA can be amplified without expensive equipment. However, the big problem with this test is that it’s accuracy and sample sensitivity is lower than PCR tests.
            </div>



            <div className={articleStyles.subtitle}>
                How Does A Self-Test Kit and Rapid Antigen Test Work?
            </div>

            <div className={articleStyles.paragraph}>
                There are two types of kits that are being used for a rapid antigen test. The ‘Standard Q COVID-19 Ag’ product, common for professional use, collects samples from a nasopharyngeal smear (back of the nose and throat). The ‘Standard Q COVID-19 Ag Home Test’ product collects samples from a patients’ nasal discharge. This test kit can be easily found at pharmacies and convenience stores. Currently, rapid antigen tests are available at temporary screening clinics, public health centers, and hospitals. Although the advantage of this test is being able to conduct a test quickly, there is a disadvantage that its accuracy is lower than the two test types mentioned before.
            </div>

            <div className={articleStyles.paragraph}>
                A rapid antigen test uses the immunochromatography method. This is combination of immune response(antigen-antibody reaction) and a chromatography technique. When users open the kit, there will be a cotton swab, extraction tube, and test strip.
            </div>

            <img className={styles.image1} src={process.env.PUBLIC_URL + "/articles/6/2-1.png"} />

            <div className={articleStyles.paragraph}>
                First, take the sample from your nose with a cotton swab and put this swab into the extraction tube to dilute it. If the analyte in the extraction tube is dropped onto the test strip kit, it flows to the other side. At this time, the analyte is combined with the labeled antibody on the strip and forms the analyte-labeled antibody complex.
            </div>

            <img className={styles.image1} src={process.env.PUBLIC_URL + "/articles/6/2-2.png"} />

            <div className={articleStyles.paragraph}>
                As the analyte-labeled antibody complex continues to spread, it is combined with the primary antibody on the test line. This is called a sandwich complex, because it consists of three layers: labeled antibody, analyte, and primary antibody.
            </div>

            <img className={styles.image1} src={process.env.PUBLIC_URL + "/articles/6/2-3.png"} />

            <div className={articleStyles.paragraph}>
                After forming the sandwich complex, the remaining analyte-labeled antibody complex binds to a secondary antibody on the control line. This control line is used to determine if the patient is positive or negative. If lines appear on both the test and control line, the test result is positive.
            </div>

            <div className={articleStyles.paragraph}>
                COVID-19 related public policies are changing over time. Recently, oral medicines are being introduced, the level of social distancing is being changed, and not wearing masks anymore are being considered. Please refer to the official announcements and news from the government and public health agencies. Hope everyone, including you who is reading this article, will live a safe life while following the correct quarantine rules.
            </div>



            <div className={articleStyles.subtitle}>
                Proper Ways to Use Self-test Kit
            </div>

            <div className={styles.sliderContainer}>


                <Slider {...settings}>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-1.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-2.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-3.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-4.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-5.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-6.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-7.png"} />

                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/6/3-8.png"} />
                </Slider>
            </div>

            <div className={articleStyles.source}>
                (Source) Korean Government Briefing Official Website, www.korea.kr
            </div>



            <div className={articleStyles.subtitle}>
                Frequently Asked Questions
            </div>

            <div className={styles.questionAnswerContainer}>
                <div className={styles.question}>
                    Q. What’s the difference between a test kit for professional use and personal use?
                </div>

                <div className={styles.answer}>
                    A. For professional use, the medical staff performs the whole test procedure, from collecting samples to deciding results, and the personal test is done by the user. There is also a slight difference in collecting samples. In a personal test kit, put the swab 1.5 to 2 cm inside the nostril and rub it around 10 times to collect a sample. On the other hand, for a professional test kit, cotton swabs are inserted much deeper into the nasopharynx of the nostrils.
                </div>
                <br /><br />



                <div className={styles.question}>
                    Q. Is the test positive even if the T-line is very faint?
                </div>

                <div className={styles.answer}>
                    A. Even, if you see a very faint line, the test is determined as positive.
                </div>
                <br /><br />



                <div className={styles.question}>
                    Q. After a very long time, the kit showed a positive sign.
                </div>

                <div className={styles.answer}>
                    A. Please keep the testing time between 15 to 30 minutes. If you see the line after that, please proceed with a new test.
                </div>
                <br /><br />



                <div className={styles.question}>
                    Q. I heard that it’s more accurate if samples are taken from the throat, instead of the nose.
                </div>

                <div className={styles.answer}>
                    A. It’s dangerous for people to collect samples from their throats with a cotton swab. The length of the swab is short and thick, so when you put it to your throat and rub it, it can hurt the roof of your mouth and throat.
                </div>
                <br /><br />



                <div className={styles.question}>
                    Q. How do I dispose of the test kit after using it?
                </div>

                <div className={styles.answer}>
                    A. If the result is positive, please take the kit to a public health center or temporary screening clinic. Then, discard it with COVID-19 quarantine medical waste. If it is negative, you can throw it away in a garbage bag.
                </div>
            </div>



            <Banner year={articleInfo.year} month={articleInfo.month} chiefEditor={articleInfo.chiefEditor} keyword={articleInfo.keyword} link={articleInfo.link} />
        </div>
    )
}
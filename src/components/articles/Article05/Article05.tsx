import HeaderBottom from '../../header/HeaderBottom';
import Banner from '../../banner/Banner';
import GetArticleInfo from '../../hooks/GetArticleInfo';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import articleStyles from '../ArticleStyle.module.css';
import styles from './Article05.module.css';



export default function Article05() {
    var articleInfo = GetArticleInfo();



    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };




    return (
        <div>
            <HeaderBottom title={articleInfo.title} />



            <div className={styles.titleContainer} />

            <img className={styles.titleImage1} src={process.env.PUBLIC_URL + "/articles/5/1-1.png"} />

            <img className={styles.titleImage2} src={process.env.PUBLIC_URL + "/articles/5/1-2.png"} />

            <img className={styles.titleImage3} src={process.env.PUBLIC_URL + "/articles/5/2.png"} />

            <div className={styles.writer}>
                Written by Kim Young-Woo
            </div>

            <div className={styles.reviser}>
                Revised by Prof. Neil Alexander Cole
            </div>



            <div className={styles.intro}>
                What should I do?<br />
                People don’t watch commercials!
            </div>



            <div className={articleStyles.paragraph}>
                Brands are always looking for exposure. They spare no money for this. As a result, advertisements and commercials are created. Advertising is certainly an effective marketing tool. However, increasing sales by running well-made ads on TV or the Internet is no longer working these days. In the analog media era, entertainment and distribution of information were limited by a small number of media companies, such as TV stations, radio stations, and newspapers. As a result, the production of new culture and content was very limited. Therefore, viewers could focus more on ads. Today, due to the rapid development of the Internet and social media, information is overflowing around us. There has been a big change in the way information is being delivered, too. We read Internet news rather than newspapers and watch YouTube instead of TV. This means our lives have undergone a digital transformation. Nowadays, consumers choose the content they want. Branded content is created by these changes.
            </div>



            <div className={articleStyles.subtitle}>
                What is Branded Content?
            </div>

            <div className={articleStyles.paragraph}>
                Branded content is literally a combination of brand advertisements and content. The companies melt their message in the content to provide enjoyment to consumers. These advertisements are made so that consumers can naturally accept brands’ messages even though they have commercial purposes. From the companies’ point of view, this is not simply delivering messages to viewers, but also creating content that can provide entertainment and cultural values as well as information. The promotional effect could be faster because it is being spread among consumers, not only between companies and consumers. However, there is a possibility that the brand could be forgotten and only the content would remain.
            </div>



            <div className={articleStyles.subtitle}>
                What’s the Difference?
            </div>

            <div className={articleStyles.paragraph}>
                Unlike advertisements being created simply focusing on the products’ information or exposure itself, the branded content naturally reveals the product in a context with fun and well-organized story content. It borrows the format, such as dramas, games, and animation, to become content. So, what is the difference between branded content and product placement (PPL) that we often see? While PPL only presents a company’s brands and products in the content, branded content is a combination of advertisement and content which delivers a message that customers will readily consume.
            </div>



            <div className={articleStyles.subtitle}>
                Nego King – BBQ Episode
            </div>

            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/3-1.png"} />

                    <div className={articleStyles.source}>
                        (Source) Nego King YouTube Channel, www.youtube.com/@dalla
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/3-2.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) BBQ, www.bbq.co.kr
                    </div>
                </div>
            </Slider>

            <div className={articleStyles.paragraph}>
                Nego King is the YouTube entertainment program hosted by Hwang Kwang-Hee, and the main content is to negotiate prices against franchise companies. Not long ago, there was a big controversy about false advertising. False advertising is actually ads, but it deceives viewers as if were not ads. On the contrary, Nego King received a lot of attention because it created the content in the form of openly advertising and actively exposing the brand. The first episode was hosted with the chicken brand BBQ. Kwang-Hee interviewed citizens and franchisees to ask their thoughts about BBQ. He visited the headquarters to meet employees and the chairman and started negotiating prices. The process was not easy, but he succeeded in holding a promotion to discount the price of fried chicken from 18,000 won to 11,000 won for all customers for a month.
            </div>

            <div className={articleStyles.paragraph}>
                As soon as the promotion event started, BBQ stores were flooded with orders, even causing BBQ’s ordering system to go down. The video had more than eight million views and a special episode was released due to first episode’s huge success. The headquarters said it would select Kwang-Hee as BBQ’s commercial actor if the number of views exceeded five million, and this was actually achieved. BBQ announced that the number of members in its rewards program exceeded two million. Also, its operating income rose 219% to 55 billion won and sales to 325.6 billion won. Not only has its sales increased, but it has also had a great effect on improving the brand image of BBQ, which previously had a lot of negative public perception.
            </div>



            <div className={articleStyles.subtitle}>
                Red Bull Stratos – Mission to the Edge of Space
            </div>

            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/4-1.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) BBC Studios, www.youtube.com/@BBCStudios
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/4-2.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) Red Bull, www.redbull.com/int-en/projectsred-bull-stratos
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/4-3.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) Sports Business Journal, www.sportsbusinessjournal.com
                    </div>
                </div>
            </Slider>

            <div className={articleStyles.paragraph}>
                As soon as the video starts, someone is taking a rough breath and the black universe fills the screen. Is it NASA’s new space project or is it a camera on a space suit? Soon, you can see a logo on the astronaut’s suit. If you look closely, it says Red Bull. Yes, it’s the Red Bull that you are thinking of. Actually, the person in this video is not an astronaut, but the Austrian skydiver Felix Baumgartner. He jumps after saying “I’m going home now.” As soon as he starts falling, he begins to spin at a tremendous speed, which is so dangerous that he loses consciousness for a while. Fortunately, he corrects his position and makes a stable fall. Nine minutes later, he finally lands his feet on the ground and cheers.
            </div>

            <div className={articleStyles.paragraph}>
                How can an energy drink company work on this project? Red Bull mainly sponsors the fields that challenge human limitations or do things that no one has ever done before. Many people call this extreme marketing. For challenges that seem reckless and impossible to the public, Red Bull instills an image that people can overcome any difficult moment with Red Bull. The Red Bull Stratos project is one of them. It is a mission to float a helium balloon up to 128,000 feet, then fall, reach supersonic speed, and land safely on land. Red Bull has invested about 69 billion won (65 million dollars) over five years and more than 300 engineers worked on the project. Finally, at 9:30 a.m. on October 14, 2012, the balloon carrying Baumgartner started to rise in New Mexico. The live coverage was watched by eight million viewers on YouTube around the world, and 26 million people visited the site through web and mobile sites for two weeks. Most surprisingly, the video posted on the BBC YouTube channel recorded about 110 million views, and the onboard video filmed on a GoPro also recorded 23 million. Due to the project’s great success, Red Bull recorded 6.1 trillion won in sales (4.93 billion euros), which is up to 16% from the previous year.
            </div>



            <div className={articleStyles.subtitle}>
                Balenciaga and The Simpsons Collaboration Episode
            </div>

            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-1.png"} />

                    <div className={articleStyles.source}>
                        (Source) Balenciaga YouTube Channel, www.youtube.com/@balenciaga
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-2.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) Lifestyle Asia, www.lifestyleasia.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-3.png"} />

                    <div className={articleStyles.source}>
                        (Source) Balenciaga YouTube Channel, www.youtube.com/@balenciaga
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-4.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) Lifestyle Asia, www.lifestyleasia.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-5.png"} />

                    <div className={articleStyles.source}>
                        (Source) Balenciaga YouTube Channel, www.youtube.com/@balenciaga
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-6.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) Lifestyle Asia, www.lifestyleasia.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-7.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) @wintourdrobe Instagram, www.instagram.com/wintourdrobe
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/5/5-8.jpg"} />

                    <div className={articleStyles.source}>
                        (Source) @wintourdrobe Instagram, www.instagram.com/wintourdrobe
                    </div>
                </div>
            </Slider>

            <div className={articleStyles.paragraph}>
                The famous animated show The Simpsons and the French luxury fashion brand Balenciaga worked together. At the 2021 Paris Fashion Week, Balenciaga’s creative director Demna Gvasalia presented the 2022 S/S collection at the Theatre du Chatelet in Paris. After the runway show, something even more surprising happened inside the theater. It’s because The Simpsons was being played inside the theater. This is how the video started. Homer was looking for Marge’s birthday present, and there was a Balenciaga product in the magazine she was looking at. He didn’t know the brand, so he couldn’t even pronounce the name of Balenciaga correctly, but he sent an e-mail to Balenciaga’s headquarters asking them to send her their cheapest product. Afterwards, Marge wrote a letter to the headquarters to thank them for giving her precious memories. Somehow, the staff was moved by this and decided to invite all of the Simpsons family and Springfield citizens to Paris to hold a fashion show.
            </div>

            <div className={articleStyles.paragraph}>
                What makes this special is that Balenciaga bought the entire episode of The Simpsons. The show is not completely talking about Balenciaga, though. Famously known for the chief editor of the magazine Vogue, Anna Wintour also appeared as a character. While making a good use of The Simpsons’s satirical and black comedy elements, Balenciaga’s products were well expressed in the video. The clothes worn by the characters are actually Balenciaga’s new and famous products. They can be found on their website with The Simpson’s characters. In just two weeks after the video was posted on YouTube, it surpassed eight million views, also drawing tremendous attention on social media. Not only featuring their products in the episode, the company also released a collaboration product with The Simpsons.
            </div>

            <div className={articleStyles.conclusion}>
                Change is inevitable. As with analog to digital change, creative content has become more important than simple advertising. Today, information is not shared if consumers don’t like it. In the digital era, it is not companies but consumers who take the lead in sharing interesting content. Content and culture that move the digital world are created with our hands.
            </div>



            <Banner year={articleInfo.year} month={articleInfo.month} chiefEditor={articleInfo.chiefEditor} keyword={articleInfo.keyword} link={articleInfo.link} />
        </div>
    )
}
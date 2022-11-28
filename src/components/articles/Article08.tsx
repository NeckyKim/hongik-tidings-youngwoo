import HeaderBottom from '../HeaderBottom';
import Article08Title from './Article08Title';

import articleStyles from './ArticleStyle.module.css';
import styles from './Article08.module.css';


const title: string = "The Last of Internet Explorer";

export default function Article08() {
    return (
        <div>
            <HeaderBottom title={title} />

            <Article08Title />



            <div className={styles.introductionContainer}>
                <div>
                    <img alt="Image" className={styles.image3} src={process.env.PUBLIC_URL + "/articles/08/3.jpg"} />

                    <div className={styles.image3Source}>
                        (Source) Reuters, www.reuters.com 
                    </div>
                </div>

                <div>
                    <div className={styles.introductionParagraph}>
                        Anyone who has used a computer as a child may have experienced using Internet Explorer when surfing the Internet. In June 2022, Microsoft officially announced that it would end technical support for Internet Explorer, which has been running for 20 years. Microsoft has been continuously issuing notices of an end to support for the browser. Instead, it has been actively promoting its new web browser, Microsoft Edge.
                    </div>
                    <br />

                    <div className={styles.introductionParagraph}>
                        Internet Explorer once had its best time, especially in 2003, occupying 90 percent of the market share. Netscape Navigator was defeated by Internet Explorer in the late 90s and Navigator introduced its program code as an open source in 2002. Based on this code, the Mozilla Foundation launched a new browser called Firefox. It began to introduce new features and continuously develop its software, increasing its share slightly. However, in 2008, Google Chrome burst onto the scene and turned the whole game around in the browser war. It has a really fast speed and nice-looking interface and has become the most popular browser, with more than 60 percent of the market share. Today, Internet Explorer is no different from other old-fashioned artifacts that no one uses, as it had less than 2% of the market share in the past six months. Let’s find out how the browser that dominated an era came to fall.
                    </div>
                </div>
            </div>



            <div className={articleStyles.subtitle}>
                The Beginning and Best Days
            </div>

            <div className={articleStyles.paragraph}>
                Internet Explorer was first introduced on August 16, 1995, along with the Plus! pack for Windows 95, which was the add-on package for Microsoft Windows 95. It was installed as the default browser program in later versions of Windows 95. With the huge success of the Windows operating system series, Internet Explorer quickly became the world's most popular web browser. Microsoft’s aggressive marketing strategy also played a major role in its success. For example, the software could be downloaded for free through a website, and the installation CD was sent to homes for free. This strategy had a fatal impact in the collapse of Netscape Navigator, a competitor with a share of more than 80 percent at the time. This is sometimes called the First Browser War. Today, Mozilla Foundation’s Firefox has succeeded Netscape Navigator and continues to provide services.
            </div>

            <div className={articleStyles.subtitle}>
                ActiveX and Security Flaws
            </div>

            <div className={articleStyles.paragraph}>
                ActiveX was used to create web plug-ins that provided more features not supported by Internet Explorer. ActiveX, which was developed for user convenience, later caused numerous flaws. First, the browser’s performance and speed dropped dramatically when it was installed. Sometimes, Internet Explorer itself shut down when it heavily used a computer’s memory. There were also security flaws. ActiveX plug-ins were installed through the Internet, but Explorer was able to do what Windows applications could do. This means that others could access files inside your computer or change settings through the Internet. In Korea, many sites required users to install ActiveX. A lot of users did not know anything about what was being installed on their computers and kept pressing the continue button to install. Among them, unsigned plug-ins or those with unclear sources could cause serious security problems.
            </div>

            <div className={articleStyles.subtitle}>
                Not Using Standards
            </div>

            <div className={articleStyles.paragraph}>
                Developing software without complying with web standards was also a major problem for Internet Explorer. According to the PYPL (PopularitY of Programming Language) Index, JavaScript is used by many programmers, and ranks third among programming languages, with a 9% market share as of 2022. It is known as a standard in the web industry. However, instead of using JavaScript, Internet Explorer used its own standard called Microsoft Jscript. This is a huge problem for software engineering, which considers standards and integrated development environments very important. Not using JavaScript's grammar can cause errors if you run a web page in a browser other than Internet Explorer. For example, letters may appear broken, or various components, such as buttons or images, may be out of place. It was also pointed out as a problem that it didn’t fully support all the features of CSS, which is the language that specifies design elements for web pages. For these reasons, web pages that work normally in other browsers can cause errors in Internet Explorer. This requires more work for developers. Recently, the number of Internet Explorer users has decreased significantly, and most developers do not feel the need for development only for Internet Explorer. That's why many sites recommend using other browsers instead of Internet Explorer. For example, YouTube has made it impossible for users to watch videos through Internet Explorer since March 1, 2020.
            </div>

            <div className={articleStyles.subtitle}>
                Not Supported by Multiple Operating Systems
            </div>

            <div className={articleStyles.paragraph}>
                The two problems mentioned earlier, ActiveX and not using standards, consequently have a significant impact on browsing speed and performance. Another critical reason for the collapse of Internet Explorer is that it isn't supported by operating systems other than Windows. In the late 2000s, such smartphones as the iPhone and Android completely changed the ecosystem of web browsers. The website usage environment, which used to be focused on PCs, has rapidly changed to a mobile environment. As a result, multi-platform and cross-browsing support have become extremely important. Microsoft's single-platform web environment due to market monopoly became a bad choice, causing its browser’s downfall. It later released the Internet Explorer Mobile Version, but it was too late.
            </div>
        </div>
    )
}
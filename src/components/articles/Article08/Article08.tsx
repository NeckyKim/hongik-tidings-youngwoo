import HeaderBottom from '../../header/HeaderBottom';
import Article08Title from './Article08Title';

import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

import articleStyles from '../ArticleStyle.module.css';
import styles from './Article08.module.css';


const title: string = "The Last of Internet Explorer";

const data1 = [
    { id: "Chrome", value: 0.6693 },
    { id: "Edge", value: 0.1064 },
    { id: "Safari", value: 0.0893 },
    { id: "Firefox", value: 0.0780 },
    { id: "Opera", value: 0.0299 },
    { id: "Internet Explorer", value: 0.0075 }
]

const data2 = [
    {
        "id": "Chrome",
        "data": [
            { "x": "09-Jan", "y": 0.0138 },
            { "x": "09-Jul", "y": 0.0301 },
            { "x": "10-Jan", "y": 0.0604 },
            { "x": "10-Jul", "y": 0.0988 },
            { "x": "11-Jan", "y": 0.1568 },
            { "x": "11-Jul", "y": 0.2214 },
            { "x": "12-Jan", "y": 0.2840 },
            { "x": "12-Jul", "y": 0.3381 },
            { "x": "13-Jan", "y": 0.3808 },
            { "x": "13-Jul", "y": 0.4540 },
            { "x": "14-Jan", "y": 0.4660 },
            { "x": "14-Jul", "y": 0.4869 },
            { "x": "15-Jan", "y": 0.5172 },
            { "x": "15-Jul", "y": 0.5539 },
            { "x": "16-Jan", "y": 0.5775 },
            { "x": "16-Jul", "y": 0.6238 },
            { "x": "17-Jan", "y": 0.6209 },
            { "x": "17-Jul", "y": 0.6348 },
            { "x": "18-Jan", "y": 0.6598 },
            { "x": "18-Jul", "y": 0.6760 },
            { "x": "19-Jan", "y": 0.7088 },
            { "x": "19-Jul", "y": 0.7105 },
            { "x": "20-Jan", "y": 0.6878 },
            { "x": "20-Jul", "y": 0.6955 },
            { "x": "21-Jan", "y": 0.6659 },
            { "x": "21-Jul", "y": 0.6850 },
            { "x": "22-Jan", "y": 0.6538 }
        ]
    },
    {
        "id": "Internet Explorer",
        "data": [
            { "x": "09-Jan", "y": 0.6541 },
            { "x": "09-Jul", "y": 0.6011 },
            { "x": "10-Jan", "y": 0.5524 },
            { "x": "10-Jul", "y": 0.5268 },
            { "x": "11-Jan", "y": 0.4600 },
            { "x": "11-Jul", "y": 0.4245 },
            { "x": "12-Jan", "y": 0.3745 },
            { "x": "12-Jul", "y": 0.3204 },
            { "x": "13-Jan", "y": 0.3225 },
            { "x": "13-Jul", "y": 0.2605 },
            { "x": "14-Jan", "y": 0.2465 },
            { "x": "14-Jul", "y": 0.2352 },
            { "x": "15-Jan", "y": 0.2116 },
            { "x": "15-Jul", "y": 0.1886 },
            { "x": "16-Jan", "y": 0.1595 },
            { "x": "16-Jul", "y": 0.1073 },
            { "x": "17-Jan", "y": 0.1049 },
            { "x": "17-Jul", "y": 0.0903 },
            { "x": "18-Jan", "y": 0.0728 },
            { "x": "18-Jul", "y": 0.0697 },
            { "x": "19-Jan", "y": 0.0574 },
            { "x": "19-Jul", "y": 0.0500 },
            { "x": "20-Jan", "y": 0.0370 },
            { "x": "20-Jul", "y": 0.0276 },
            { "x": "21-Jan", "y": 0.0194 },
            { "x": "21-Jul", "y": 0.0137 },
            { "x": "22-Jan", "y": 0.0106 }
        ]
    }
]

function Chart1() {
    return (
        <ResponsiveBar
            data={data1}
            keys={["value"]}
            margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
            padding={0.2}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={["rgb(251, 189, 5)", "rgb(55, 202, 177)", "rgb(22, 146, 245)", "rgb(96, 67, 170)", "rgb(255, 27, 45)", "rgb(0, 191, 255)"]}
            colorBy="indexValue"
            borderRadius={5}
            valueFormat=" >-.2%"
        />
    )
}



function Chart2() {
    return (
        <ResponsiveLine
            data={data2}
            margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
            }}
            yFormat=" >-.2%"
            pointSize={10}
            pointBorderColor={{ from: 'serieColor' }}
            colors={["rgb(251, 189, 5)", "rgb(0, 191, 255)"]}
            useMesh={true}
        />
    )
}



export default function Article08() {
    return (
        <div>
            <HeaderBottom title={title} />

            <Article08Title />



            <div className={styles.introductionContainer}>
                <div>
                    <img alt="Image" className={styles.image3} src={process.env.PUBLIC_URL + "/articles/08/3.jpg"} />

                    <div style={{marginTop: "20px", marginBottom: "50px", color: "rgb(150, 150, 150)", textAlign: "left"}}>
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

            <div className={styles.chart}>
                <Chart1 />
            </div>

            <div style={{marginTop: "20px", marginBottom: "50px", color: "rgb(150, 150, 150)", textAlign: "center"}}>
                (Source) gs.statcounter.com
            </div>

            <div className={styles.chart}>
                <Chart2 />
            </div>

            <div style={{marginTop: "20px", marginBottom: "50px", color: "rgb(150, 150, 150)", textAlign: "center"}}>
                (Source) gs.statcounter.com, netmarketshare.com/browser-market.share.aspx
            </div>

            <div className={articleStyles.paragraph}>
                Internet Explorer was first introduced on August 16, 1995, along with the Plus! pack for Windows 95, which was the add-on package for Microsoft Windows 95. It was installed as the default browser program in later versions of Windows 95. With the huge success of the Windows operating system series, Internet Explorer quickly became the world's most popular web browser. Microsoft’s aggressive marketing strategy also played a major role in its success. For example, the software could be downloaded for free through a website, and the installation CD was sent to homes for free. This strategy had a fatal impact in the collapse of Netscape Navigator, a competitor with a share of more than 80 percent at the time. This is sometimes called the First Browser War. Today, Mozilla Foundation’s Firefox has succeeded Netscape Navigator and continues to provide services.
            </div>



            <div className={articleStyles.subtitle}>
                ActiveX and Security Flaws
            </div>

            <img alt="Image" className={styles.image4} src={process.env.PUBLIC_URL + "/articles/08/4.png"} />

            <div style={{marginTop: "20px", marginBottom: "50px", color: "rgb(150, 150, 150)", textAlign: "center"}}>
                (Source) Wikipedia, en.wikipedia.org/wiki/ActiveX
            </div>

            <div className={articleStyles.paragraph}>
                ActiveX was used to create web plug-ins that provided more features not supported by Internet Explorer. ActiveX, which was developed for user convenience, later caused numerous flaws. First, the browser’s performance and speed dropped dramatically when it was installed. Sometimes, Internet Explorer itself shut down when it heavily used a computer’s memory. There were also security flaws. ActiveX plug-ins were installed through the Internet, but Explorer was able to do what Windows applications could do. This means that others could access files inside your computer or change settings through the Internet. In Korea, many sites required users to install ActiveX. A lot of users did not know anything about what was being installed on their computers and kept pressing the continue button to install. Among them, unsigned plug-ins or those with unclear sources could cause serious security problems.
            </div>



            <div className={articleStyles.subtitle}>
                Not Using Standards
            </div>

            <div className={styles.image5Container}>
                <img alt="Image" className={styles.image51} src={process.env.PUBLIC_URL + "/articles/08/6.png"} />

                <div style={{fontSize: "2rem"}}>
                    vs.
                </div>

                <img alt="Image" className={styles.image52} src={process.env.PUBLIC_URL + "/articles/08/5.png"} />
            </div>

            <div style={{color: "rgb(150, 150, 150)", textAlign: "center"}}>
                (Source) Logos Download, logos-download.com
            </div>

            <div style={{marginBottom: "50px", color: "rgb(150, 150, 150)", textAlign: "center"}}>
                (Source) Wikipedia, en.wikipedia.org/wiki/JavaScript
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

            <div className={articleStyles.paragraph}>
                The second browser war, which was expected to be a battle between Firefox and Internet Explorer, unexpectedly ended in a huge victory for Google Chrome. As a result, Internet Explorer, which won the first browser war, was defeated in the second war with Chrome and has disappeared into history.
            </div>
        </div>
    )
}
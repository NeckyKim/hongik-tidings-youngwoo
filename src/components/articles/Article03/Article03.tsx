import HeaderBottom from '../../header/HeaderBottom';

import { ResponsivePie } from '@nivo/pie';

import articleStyles from '../ArticleStyle.module.css';
import styles from './Article03.module.css';



const title: string = "Invisible but Powerful Cloud Computing";



const data1 = [
    { id: "Amazon Web Services", value: 0.32 },
    { id: "Microsoft Azure", value: 0.19 },
    { id: "Google Cloud Platform", value: 0.07 },
    { id: "Others", value: 0.42 }
]

function Chart() {
    return (
        <ResponsivePie
            data={data1}
            margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
            innerRadius={0.5}
            padAngle={1}
            colors={["rgb(255, 153, 0)", "rgb(0, 137, 214)", "rgb(219, 69, 56)", "rgb(200, 200, 200)"]}
            cornerRadius={3}
            fit={false}
            activeOuterRadiusOffset={20}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsStraightLength={36}
            arcLinkLabelsColor={{ from: 'color' }}
            motionConfig={{
                mass: 1,
                tension: 500,
                friction: 57,
                clamp: true,
                velocity: 0
            }}
            valueFormat=" >-.0%"
            theme={{
                fontSize: 20,
                fontFamily: "Pretendard"
            }}
        />
    )
}



export default function Article03() {
    return (
        <div>
            <HeaderBottom title={title} />

            <div className={styles.titleContainer1}>
                <img className={styles.image11} src={process.env.PUBLIC_URL + "/articles/3/1-1.png"} />

                <img className={styles.image12} src={process.env.PUBLIC_URL + "/articles/3/1-2.png"} />

                <div className={styles.image13} />
            </div>

            <div className={styles.titleContainer2}>
                <div className={styles.image21} />

                <img className={styles.image22} src={process.env.PUBLIC_URL + "/articles/3/1-4.png"} />

                <div className={styles.image23} />
            </div>

            <div className={styles.title}>
                Invisible but<br />
                Powerful<br />
                Cloud Computing
            </div>

            <div className={styles.writer}>
                Written by Kim Young-Woo
            </div>

            <div className={styles.reviser}>
                Revised by Prof. Jeff T. Vandeweerd
            </div>

            <div className={articleStyles.paragraph}>
                In the 21st century, information technology is growing at a faster pace than ever. We are currently living in an “information society”. Computer technologies not only have a great impact on science, but also on our daily lives. As the times change, the need for technicians and high-performance equipment that can handle this information is also increasing. Large corporations may not have much difficulty meeting these conditions, but for individuals or small start-ups the difficulty is real. Due to tight budgets, it’s very difficult to hire technicians and purchase expensive equipment and most small businesses are unable to do so. In this situation, cloud computing could be a very good solution.
            </div>

            <div className={styles.chart}>
                <Chart />
            </div>

            <div className={articleStyles.source}>
                (Source) Canalys Estimates, April 2021
            </div>

            <img className={styles.image3} src={process.env.PUBLIC_URL + "/articles/3/2-1.png"} />
            <img className={styles.image4} src={process.env.PUBLIC_URL + "/articles/3/2-2.png"} />

            <div className={articleStyles.paragraph}>
                Cloud computing technology is a very important item and a core technology for IT industries. Amazon.com started as an Internet shopping mall. They had built many servers to prepare for large events such as Black Friday sales. In 2006, they started a storage service with the idea that servers remain unused after big events. Later they launched Amazon Web Services(AWS) and expanded service categories to machine learning, security, IoT(Internet of Things), networks, databases, and more, becoming number one in the global market. Microsoft, which dominated computer operating systems and the office software market with Windows and Office, also launched their cloud service, Microsoft Azure. Currently, Microsoft Azure’s sales have already surpassed Window’s sales, making it their flagship business. Google, the biggest search engine company in the world, introduced Google Cloud Platform, and has become a new business that leads Google’s sales. In Korea, Naver launched Naver Cloud Platform in 2017, and Korea’s corporations are using their service. Naver is establishing data centers not only in Korea, but in the United States, Japan, Singapore, and Europe. Not only those companies but, IBM and Oracle are also making huge sales in cloud computing.
            </div>



            <div className={articleStyles.subtitle}>
                How Does it Work?
            </div>

            <div className={articleStyles.paragraph}>
                Cloud computing is a technology that does not need a personal computer’s resources and can be used wherever and whenever you want. The reason why it’s called “cloud” computing is that the cloud can’t be seen in reality, but in this cloud, the computer is communicating with servers and processing data. You have to connect your own computer to the cloud through a network, to communicate with another computer. Your computer only deals with input and output tasks. Complicated information processing, storage management, and data distribution tasks are being performed in the cloud. Therefore, all data and computation resources only exist in the cloud servers.
            </div>



            <div className={articleStyles.subtitle}>
                Pros and Cons
            </div>

            <div className={articleStyles.paragraph}>
                Why are so many people using cloud computing? First of all, the biggest advantage is that you can quickly construct the program infrastructure at a low cost. Also, because of the fact that users only own their personal computers and are accessing the cloud through the internet, it’s possible to build the same user interface anywhere. Another characteristic is that the system is easy to handle because it automatically expands and reduces the size of infrastructure according to server traffic. This algorithm is called ‘auto scaling’, which makes it much easier for technicians to manage the system. However, there are not only advantages to cloud computing. If the cloud service providers do not manage it properly, there may be accidents in which data stored in the data center may disappear or be leaked out to the public. A famous example is Japan’s First Server accident. In order to fix bugs and errors in their service, they were conducting a large software update. As a result, 5,698 customers’ data information was lost and the company in the end failed to recover all that data. This case shows that it’s too dangerous to manage data only with a single cloud computing service.
            </div>



            <div className={articleStyles.subtitle}>
                Which Clouds to Use(Cloud Service Models)
            </div>

            <div className={articleStyles.paragraph}>
                There are three types of services in cloud computing, IaaS(Infrastructure as a Service), PaaS(Platform as a Service), SaaS(Software as a Service). As the name indicates, IaaS is a method of only providing the basic infrastructure, which are the physical resources. Only servers, storage, networks, and virtualization services are provided. The rest must be managed by the user. Simply put, it is almost the same as purchasing new computer hardware. Clients only need to pay as much as they use these physical resources. AWS is the most well-known IaaS service provider. SaaS is the service where the cloud service provides software with all the needed functions. In other words, all services are provided if you pay. Dropbox, Google Drive, and Office 365 are good examples of SaaS. PaaS is a little bit ambiguous to define, but it would be easy to think of it as a service between IaaS and SaaS. PaaS is mostly used by program developers. It’s an environment for developing executable computer programs. I know that you might be embarrassed not understanding this terminology, so let me explain with an easy-to-understand example.
            </div>

            <div className={articleStyles.paragraph}>
                Let’s say you got hungry and decided to have pizza for dinner. Assume that there are seven steps to make a pizza. IaaS can be seen as cooking pizza for yourself. For your pizza, you need to prepare the ingredients and then cook your pizza in their kitchen. In this situation, the oven and cooking utensils(e.g. spoons, can opener, peeler and more) available in the kitchen play the same role as the physical resources(networks, servers, storages) mentioned for IaaS. PaaS is cooking prepackaged pizza. Inside the package, there is pizza dough, cheese, and tomato sauce for you to combine. The difference between cooking by yourself and a prepackaged pizza is that the ingredients and pizza dough are already prepared. You don’t have to cut vegetables, shred cheese, make pizza dough, and all of the prep work. Putting pizza toppings on the pizza dough can be seen as engineers building their own software on a provided platform. SaaS would be easy to think of as pizza delivery. Like SaaS, the pizza restaurant does everything for you if you pay. Just as cooking prepackaged pizza is in between making pizza for yourself and ordering pizza from delivery, PaaS offers a service between IaaS and SaaS. I hope this helped you understand the differences in the cloud models, and I will continue explaining about cloud computing.
            </div>



            <div className={articleStyles.subtitle}>
                How to Use Cloud(Deployment Models)
            </div>

            <div className={articleStyles.paragraph}>
                Once you’ve decided on what cloud type meets your need, let’s find out how to use cloud computing. There are two types of clouds, public clouds and private clouds. As its name suggests, a public cloud operates on the Internet for the public. Anyone who needs cloud services can use it and it’s the most common type of cloud computing option. As you can see from the image above, multiple companies are sharing the cloud over the Internet. Another characteristic is that it provides high flexibility, because you can use the cloud resources as much as you want and just pay for them. Also, the customers do not have to directly manage the system itself as the service provider does this instead. In contrast, you can think of a private cloud as a service for an organization or company. The organizations directly own the system resource and run separate clouds exclusively for themselves. People who do not have permission can’t access the cloud server. Private clouds provide a strong level of security and higher-level services compared to public clouds, but it’s very expensive to use this service.
            </div>



            <div className={articleStyles.subtitle}>
                Cloud Computing Technology for the General Public
            </div>

            <div className={articleStyles.paragraph}>
                1. Cloud Gaming
                Cloud gaming is a service in which games are operated on cloud servers through streaming services. These games can be played on personal devices such as PCs and smartphones, but not on consoles. The point is that you can enjoy many games by paying a monthly subscription fee without purchasing expensive consoles and game disks. Microsoft, the founder of Xbox, launched Xbox Game Pass. If you pay only 11,800 won per month, you can play almost all their game titles without an Xbox console.
            </div>

            <div className={articleStyles.paragraph}>
                2. Cloud Storage
                The cloud storage service, which is widely used by students, is also a type of cloud computing service. It’s technology that will store my files or information on the cloud’s server and I can bring them up when I need to. You can upload document files to storage services such as Dropbox and download them from other computers. Also, you can edit or print files without downloading them.
            </div>

            <div className={articleStyles.paragraph}>
                3. Answer Engine
                Wolfram Alpha, which engineering students may have seen at least once, is also operated by cloud computing technology. You can ask it many things, from simple calculations to complex differential equations. When input is received, Wolfram Alpha performs a computational process in the cloud and provides an answer to the questioner.
            </div>
        </div>
    )
}
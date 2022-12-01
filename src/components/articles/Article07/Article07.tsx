import HeaderBottom from '../../header/HeaderBottom';
import Banner from '../../banner/Banner';
import GetArticleInfo from '../../hooks/GetArticleInfo';

import articleStyles from '../ArticleStyle.module.css';
import styles from './Article07.module.css';





export default function Article07() {
    var articleInfo = GetArticleInfo();

    

    return (
        <div>
            <HeaderBottom title={articleInfo.title} />

            <div className={styles.titleContainer} />

            <img className={styles.titleImage} src={process.env.PUBLIC_URL + "/articles/7/1.png"} />

            <div className={styles.title}>
                Figure Skating Doping Scandal<br />
                at the Olympics
            </div>

            <div className={styles.writer}>
                Written by Kim Young-Woo
            </div>

            <div className={styles.reviser}>
                Revised by Prof. Jeff T. Vandeweerd
            </div>

            <img className={styles.quote1} src={process.env.PUBLIC_URL + "/articles/7/quote.png"} />

            <div className={styles.intro1}>
                “The most important thing in the Olympic games is not winning but taking part.”
            </div>

            <div className={styles.intro2}>
                - Pierre de Coubertin, founder of the Olympics -
            </div>

            <img className={styles.quote2} src={process.env.PUBLIC_URL + "/articles/7/quote.png"} />

            <div className={articleStyles.paragraph}>
                The Olympic Games are a big sporting event that takes place every four years. It is a dream for all athletes to compete in these competitions. Of course, the competition is very fierce and you can see athletes experience the joy of victory, but fair competition and beautiful sportsmanship can also be found. However, would you believe that unfair competition with drugs took place at the Olympic Games?
            </div>

            <img className={styles.image} src={process.env.PUBLIC_URL + "/articles/7/2.png"} />

            <div className={articleStyles.source}>
                (Source) dezeen, www.dezeen.com
            </div>

            <div className={articleStyles.paragraph}>
                Doping means athletes are injecting or using prohibited drugs in the sport while they are competing. The reasons for banning performance enhancing drugs are to prevent the disruption of fair competition and to protect the health of athletes. The most well-known drug testing method is using athlete’s urine. The urine before and after the competition is collected, compared, and tested for all substances.
            </div>

            <div className={articleStyles.paragraph}>
                There are many cases where famous sports stars have been caught cheating using banned drugs. Lance Armstrong, who won seven consecutive Tour de France races, was caught doping and his reputation was ruined while all his records were removed. In the 1988 Seoul Olympics 100-meter sprint winner Ben Johnson was also caught with banned drugs in his system and the medal was not awarded to him. He was caught again at the next Olympics and was permanently banned by the IAAF(International Association of Athletics Federations).
            </div>

            <div className={articleStyles.paragraph}>
                Before the start of the 2016 Olympic Games in Rio, a doping scandal involving the entire Russian national team was revealed to the world. This was not just a player’s individual deviation, but an incident that included the Russian athletes, RUSADA (Russian Anti-Doping Agency), and the Russian government working together intentionally to cheat and cover it up. Coaches encouraged young athletes to take banned drugs. They achieved noticeable results but destroyed the health of young athletes and ruined their reputations. Due to this scandal, Russian players were not allowed to participate in future Olympics as part of a Russian national team. The only way they could compete was using the name of OAR (Olympic Athletes from Russia) or ROC (Russian Olympic Committee). However, six years later, a nation-wide doping incident that should have never happened again occurred at the 2022 Winter Olympic Games.
            </div>

            <img className={styles.image} src={process.env.PUBLIC_URL + "/articles/7/3.png"} />

            <div className={articleStyles.source}>
                (Source) The Hill, www.thehill.com
            </div>

            <div className={articleStyles.paragraph}>
                Russian figure skater Kamila Valieva competed in the women’s single and team events. The Russian team (officially, ROC) won the gold medal in the team event that was held from February 4th to 7th. Before the women’s single competition, the IOC (International Olympic Committee) announced that Valieva tested positive in a drug test at the Russian Figure Skating Championships in December 2021. It was revealed that the drug she took was trimetazidine which is banned in figure skating competitions. What caused the problem at the Olympics was the results from that test came out too late. The test was conducted in December of last year, but the results came out six weeks later on February 8, while the Olympic competition was on-going. Also, it was controversial that not only did Valieva test positive for banned substances but that other Russian female skaters have muscles that seemed impossible to be formed at such a young age. Seeing female skaters easily perform quadruple jumps, which are difficult for male skaters to perform properly, raised more controversy about this issue.
            </div>

            <div className={articleStyles.paragraph}>
                The IOC and ISU (International Skating Union) began to discuss the situation during the competition. For the individual skating events, the short program is held first, and the skaters who rank in the top 24 are qualified to perform in the free skate program. The scores of these two programs are combined to determine the overall results. The IOC announced that if Valieva finished in the top 24 in the short program, they would put 25 people in the free skate program. Also, they would postpone the medal ceremony, if she earned an Olympic medal until her test results were official. There were strong calls to ban her from participating, but despite the criticism, she competed in the event and finished fourth.
            </div>

            <div className={articleStyles.paragraph}>
                Korea’s first figure skating gold medalist Yuna Kim left a message on her Instagram mentioning, ‘Athlete who violates doping cannot compete in the game.’(sic) She has never made any particular comment regarding any previous controversies in figure skating, including the judging scandal in her last Olympics in 2014. So, it was considered quite surprising that she reacted like this. German figure skater Katrina Witt, who won two consecutive gold medals in 1984 and 1988, strongly criticized the training systems and coaches around her that forced doping on athletes. Also, she argued that the minimum age of participating in competitions should be increased so that young athletes are not used as consumable products. On the contrary to these criticisms, the Russian media, citizens and other Russian skaters showed support for Valieva. Valieva claimed that this situation was unfair and expressed her joy when she was able to participate in the event. After the competition was over, a large crowd gathered at a Russian airport to welcome her home and the government decided to award Valieva the Order of Friendship.
            </div>

            <div className={articleStyles.conclusion}>
                We need to think whether a disputed competition is really meaningful. What will the athletes think of trying their best without a guarantee of fair play and sportsmanship? The Olympics games without the Olympic spirit should no longer exist.
            </div>

            <Banner year={articleInfo.year} month={articleInfo.month} chiefEditor={articleInfo.chiefEditor} keyword={articleInfo.keyword} link={articleInfo.link} />
        </div>
    )
}
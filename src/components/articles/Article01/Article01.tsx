import HeaderBottom from '../../header/HeaderBottom';
import Banner from '../../banner/Banner';
import GetArticleInfo from '../../hooks/GetArticleInfo';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import articleStyles from '../ArticleStyle.module.css';
import styles from './Article01.module.css';



export default function Article01() {
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

            <div className={articleStyles.paragraph}>
                Humans have grown through rapid industrialization, but at the same time nature is being destroyed and earth is becoming difficult to live due to polluted air, water, and soil. As we only looked for our convenience and used resources thoughtlessly, warning signals from all over the world are being heard such as global warming, destruction of ozone layer, air pollution, and other abnormal weather phenomena. Not until 21st century, we have recognized the seriousness of environmental problems and many efforts are being made from all over the world to solve these problems.
            </div>

            <div className={articleStyles.paragraph}>
                The city is a very attractive place for humans to live. However, from an environment perspective, is it really that attractive? Due to high population density, mass production, and mass consumption, the nature and environment are being covered of concrete and garbage. In Korea, we have been only seeking for economic growth and environmental problems weren’t considered important. From now on, I would like to talk about two ways to create a city where environment and human can ‘coexist’, an ecological city(ecopolis) and environmentally friendly architecture.
            </div>



            <div className={articleStyles.subtitle}>
                Where Nature and Human Coexist, Ecopolis
            </div>

            <div className={articleStyles.paragraph}>
                Ecopolis, also known as ecological city, is a combination of two words, ‘eco’ from word ecological and ‘polis’ which means city. It’s a city where nature and human can coexist and harmonize for continuous development, as well as it’s a place where citizens can live on. This concept was established in 1992 Rio Environmental Conference to reach two goals, regional development and environmental protection. Considering natural ecosystem, the city itself is considered as an ecosystem. The main goal is to create a pleasant place where nature, environment, human can interact each other. Also, ecopolis must minimize environmental destruction, reduce use of energy and resources. Not only environmental perspective should be considered, but also social and economic point of view must be considered.
            </div>



            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/2-1.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        Suncheon Bay Ecological Park
                    </div>

                    <div className={articleStyles.source}>
                        (Source) Voice of Seoul, www.amn.kr
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/2-2.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        Suncheon Bay and black-crowned cranes
                    </div>

                    <div className={articleStyles.source}>
                        (Source) OhmyNews, www.ohmynews.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/2-3.png"} />

                    <div className={styles.sliderImageTitle}>
                        The past of Suncheon Bay, piled up with garbage
                    </div>

                    <div className={articleStyles.source}>
                        (Source) Voice of Seoul, amn.kr
                    </div>
                </div>
            </Slider>

            <div className={articleStyles.paragraph}>
                Suncheon is one of the most well-known ecopolis in Korea. Suncheon is listed as a UNESCO Biosphere Reserve and it’s considered as a city where ecological heritage is well preserved, such as Suncheon Bay Ecological Park, Suncheon Bay Nature Reserve, Jogyesan Provincial Park, and more. Suncheon is showing a lot of effort to restore land to wetland by demolishing buildings to establish sustainable ecological city. Also, they have removed 282 electric poles to prevent black cranes getting caught on wires. In fact, it hasn’t been long since Suncheon showed lot of efforts to become an ecofriendly city. Until 1990s, Suncheon was quite different from today. Trash was piled up in Suncheon Bay, and sewage from cities and farms created rotten smell from all over the places. The first move to make Suncheon to become ecofriendly city was the civilian organization’s effort to preserve reed forest. With this effort and hard work, Korea’s natural monument, the black-crowned crane was discovered in 1996. Today, Suncheon became a place where nature, animals, and humans live together. Currently, there are more than 239 species of migratory birds and 336 species of plants. Not only that, 10 million trees are being planted, and green axis construction project is on its way to make a city where trees can be seen anywhere.
            </div>



            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/3-1.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        Artificial waterway 'Behelle'
                    </div>

                    <div className={articleStyles.source}>
                        (Source) The Hankyoreh, www.hani.co.kr
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/3-2.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        Solar Settlement
                    </div>

                    <div className={articleStyles.source}>
                        (Source) yeogienews, yeogienews.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/3-3.png"} />

                    <div className={styles.sliderImageTitle}>
                        The Energy Hill
                    </div>

                    <div className={articleStyles.source}>
                        (Source) Green City Freiburg, greencity.freiburg.de
                    </div>
                </div>
            </Slider>

            <div className={articleStyles.paragraph}>
                If Suncheon focused on preserving nature, Freiburg in Germany could be seen as an ecopolis focused on saving energy. 43% of landmass in Freiburg is made up of forest, and various environmental policies are being held to save forests. The artificial waterway called ‘Behelle’ flows across the city, which plays a role in controlling temperature and humadity. Freiburg is an ecological city that uses renewable energy such as solar energy. There’s an area called ‘Solar Settlement’ in this city. In here, there are 59 townhouses and commercial buildings, with solar panels installed on the roofs, which produces 420,000kw of electricity annually. The next place is the Energy Hill, which recreated what used to be landfill site as solar energy production facilities. Gas emitted from landfill site is mixed up with biogas generated from organic waste fermentation plants and it’s used in electricity and heat production.
            </div>



            <div className={articleStyles.subtitle}>
                Eco-friendly Architecture to Save Earth
            </div>

            <div className={articleStyles.paragraph}>
                We need materials to build a building, but where do these materials come from? For example, we need woods to build tree house. Cement is needed to make buildings and cement is a mixture of water, sand, and gravel. As you can see, the material used in construction were obtained from nature. So, isn’t architecture an action destroying the earth? What I’m going to talk about now is little bit different.
            </div>

            <div className={articleStyles.paragraph}>
                What conditions should eco-friendly architecture meet? First of all, eco-friendly materials should be used. Building materials are the most important part of the eco-friendly architecture. This is because it’s totally useless if materials aren’t environment friendly, even if the rest of the factors are satisfied. The first material that comes to mind is wood, which is one of the most widely used material in human history. Cork, which is mostly used as wine bottle caps, can also be a building material. Using the properties that doesn’t let liquid and gas flow through, it’s very effective in keeping temperature and soundproofing. Also, it’s very light weight and strong elasticity. Therefore, it’s commonly used as an internal and external material especially in very humid environments.
            </div>

            <div className={articleStyles.paragraph}>
                Also, the environment should be considered even after the building is constructed. In 21st century buildings, there are high technology systems and facilities built in for heating and cooling. However, it can be said that it’s an eco-friendly architecture, if building can minimize the use of energy. For example, storing solar radiation into heat storage materials during the day and using it at night, which could reduce energy consumption. Also, storing rainwater through roofs or terraces and using it at pond or living water is another way of saving environment.
            </div>



            <Slider {...settings} className={styles.sliderContainer}>
                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/4-1.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        Outer wall made of wasted wood
                    </div>

                    <div className={articleStyles.source}>
                        (Source) Energy Alternative Center on Climate Change, sunway.or.kr
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/4-2.png"} />

                    <div className={styles.sliderImageTitle}>
                        Plants install on terrace for natural shading
                    </div>

                    <div className={articleStyles.source}>
                        (Source) ArchDaily, www.archdaily.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/4-3.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        A pipe which controls the indoor temperature
                    </div>

                    <div className={articleStyles.source}>
                        (Source) ArchDaily, www.archdaily.com
                    </div>
                </div>

                <div>
                    <img className={styles.sliderImage} src={process.env.PUBLIC_URL + "/articles/1/4-4.jpg"} />

                    <div className={styles.sliderImageTitle}>
                        Wind power energy production system using released hot air
                    </div>

                    <div className={articleStyles.source}>
                        (Source) ArchDaily, www.archdaily.com
                    </div>
                </div>
            </Slider>



            <div className={articleStyles.paragraph}>
                So, is there a building that meets the standard of eco-friendly architecture? The Council House 2 of Melbourne City is the answer. This building’s key point is reducing energy and using nature at same time.
            </div>



            <div className={styles.imageContainer}>
                <div className={styles.imageContainerLeft}>
                    <img className={styles.image1} src={process.env.PUBLIC_URL + "/articles/1/5.png"} />
                </div>

                <div className={styles.indicator1}>1</div>
                <div className={styles.indicator2}>2</div>
                <div className={styles.indicator3}>3</div>
                <div className={styles.indicator4}>4</div>
                <div className={styles.indicator5}>5</div>
                <div className={styles.indicator6}>6</div>
                <div className={styles.indicator7}>7</div>



                <div className={styles.imageContainerRight}>
                    <div className={styles.explanation1}>
                        <div className={styles.explanationNumber1}>1</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Wind Cowls
                            </div>

                            <div className={styles.explanationText}>
                                wind driven cowls will generate electricity during the day.
                            </div>
                        </div>
                    </div>

                    <div className={styles.explanation2}>
                        <div className={styles.explanationNumber2}>2</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Roof Top energy
                            </div>

                            <div className={styles.explanationText}>
                                includes photovoltaic cells, solar hot water panels, a gas-fired co-generation
                                plant and wind powered turbines.
                            </div>
                        </div>
                    </div>

                    <div className={styles.explanation3}>
                        <div className={styles.explanationNumber3}>3</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Exhaust
                            </div>

                            <div className={styles.explanationText}>
                                high level ceiling exhaust ensures complete emptying of warm air in ceiling spaces.
                            </div>
                        </div>
                    </div>

                    <div className={styles.explanation4}>
                        <div className={styles.explanationNumber4}>4</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Healthy Air
                            </div>

                            <div className={styles.explanationText}>
                                100% outside air supply via vertical ducts deliver air floor by floor to sealed access floor plenum.
                            </div>
                        </div>
                    </div>

                    <div className={styles.explanation5}>
                        <div className={styles.explanationNumber5}>5</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Chilled Ceilings
                            </div>

                            <div className={styles.explanationText}>
                                occupants experience ‘coolth’ by radiating heat to chilled ceilings overhead.
                            </div>
                        </div>
                    </div>

                    <div className={styles.explanation6}>
                        <div className={styles.explanationNumber6}>6</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Shower Towers
                            </div>

                            <div className={styles.explanationText}>
                                air and water falls to provide cool water for building reticulation and cool air to supplement ground floor and retail cooling.
                            </div>
                        </div>
                    </div>

                    <div className={styles.explanation7}>
                        <div className={styles.explanationNumber7}>7</div>

                        <div className={styles.explanationContainer}>
                            <div className={styles.explanationHeader}>
                                Phase Change Material
                            </div>

                            <div className={styles.explanationText}>
                                water is piped to phase change plant for re-cooling.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={articleStyles.paragraph}>
                The outer wall made of wasted wood is moved by the direction of the sunlight, which controls the indoor temperature of the building. It’s closed during the day to prevent hot air entering inside, and opens at night which allows cool air to flow in. Plants were installed on terrace for natural shading. A pipe is installed on the behind and it’s filled with stainless steel balls made of a Phase Change Material(PCM). These PCM balls are made up of non-toxic salts and organic compounds known as Eutectic Salts, which freezes above 0 degrees. Therefore, it makes PCM balls to freeze at 15 degrees. When these materials undergo a phase change(solid to liquid, liquid to gas, and vice versa), it absorbs and releases a lot of heat energy. These balls store the coolness at night and use it to cool the building during the day. Simply, it works as a battery storing ‘coolness’. Also, it helps to cool the building by passing air and water down through the pipe. The hot air inside is released, which is used to produce energy by wind power energy production system installed on the roof.
            </div>

            <div className={articleStyles.paragraph}>
                As a result, the power used for heating and cooling in Council House 2 of Melbourne City is less than 10% compared to other buildings. In Australia where the highest temperature is 38 degrees, the building is maintained about 24 degrees without using any cooling and heating systems. Also, it’s the first building to receive six green stars, which is the highest rating evaluated by Green Building Council Australia.
            </div>

            <img className={styles.image2} src={process.env.PUBLIC_URL + "/articles/1/6.png"} />



            <div className={articleStyles.conclusion}>
                Earth is like a home to us. Humans and earth have been coexisted, is coexisting, and should coexist. For the ecosystem that has been damaged by mankind, we should start to solve our own environmental problems. In order for all creatures to coexist, we must make efforts to solve these problems. Why don’t we start doing what we can to reduce energy use, like ecopolis and eco-friendly buildings? Just as small changes lead to big changes, our small moves to protect sick earth and planet will come as a big result.
            </div>
            <Banner year={articleInfo.year} month={articleInfo.month} chiefEditor={articleInfo.chiefEditor} keyword={articleInfo.keyword} link={articleInfo.link} />
        </div>
    )
}
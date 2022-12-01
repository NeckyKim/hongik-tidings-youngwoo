import { useEffect, useState } from 'react';
import styles from './Achievements.module.css';



type AchievementContainerProps = {
    id: number,
    name: string,
    agency: string,
    details: string,
}

function AchievementContainer(props: AchievementContainerProps) {
    return (
        <div className={styles.achievementContainer}>
            <img className={styles.achievementImage} src={process.env.PUBLIC_URL + "/achievements/" + props.id + ".png"} />

            <div className={styles.achievementInfo}>
                <div className={styles.achievementName}>
                    {props.name}
                </div>

                <div className={styles.achievementAgency}>
                    {props.agency}
                </div>

                <div className={styles.achievementDetails}>
                    {props.details}
                </div>
            </div>
        </div>
    )
}



export default function Achievements() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const [field1, setField1] = useState<boolean>(true);
    const [field2, setField2] = useState<boolean>(true);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth); })
    }, [])

    useEffect(() => {
        if (width < 1000) {
            setField1(true);
            setField2(false);
        }

        else {
            setField1(true);
            setField2(true);
        }
    }, [width])



    return (
        <div className={styles.container}>
            {
                !(field1 && field2)

                &&

                <div>
                    <div className={field1 ? styles.containerHeaderClicked : styles.containerHeaderNotClicked} onClick={() => {
                        if (width < 1000) {
                            setField1(true);
                            setField2(false);
                        }
                    }}>
                        Engineering Field
                    </div>

                    <div className={field2 ? styles.containerHeaderClicked : styles.containerHeaderNotClicked} onClick={() => {
                        if (width < 1000) {
                            setField1(false);
                            setField2(true);
                        }
                    }}>
                        English Field
                    </div>
                    <br />
                </div>
            }

            <div>
                {
                    (field1 && field2)

                    &&

                    <div className={styles.containerHeaderClicked}>
                        Engineering Field
                        <br /><br />
                    </div>
                }

                {
                    field1

                    &&

                    <div>
                        <AchievementContainer
                            id={11}
                            name="마이 핀테크 서비스 개발경진대회 우수상"
                            agency="과학기술정보통신부, 한국인터넷진흥원"
                            details="참가자 본인의 개인정보(금융, 생활, 건강 등)를 직접입력하여 개인 단말에 저장 후 신규 핀테크 서비스 개발하는 대회입니다. 아이디어 우수성, 창의성, 실현가능성 역량을 바탕으로 개발 완성도, 기술력, 창의성, 사업성 등을 종합적으로 평가받게 됩니다."
                        />

                        <AchievementContainer
                            id={12}
                            name="2022 홍익대학교 컴퓨터공학과 졸업프로젝트 전시회 최우수상"
                            agency="홍익대학교 컴퓨터공학과"
                            details="컴퓨터공학을 4년간 공부한 학생들이 하나의 프로젝트로 담아낸 작품들을 대중에게 보여드리는 행사입니다. 학생들은 스스로 제안하고, 설계하고, 구현하는 과정에서 많은 것을 배우고 경험하게 됩니다."
                        />

                        <AchievementContainer
                            id={13}
                            name="정보처리기사"
                            agency="한국산업인력공단"
                            details="컴퓨터를 효과적으로 활용하기 위해서 하드웨어뿐만 아니라 정교한 소프트웨어가 필요합니다. 이에 따라 우수한 프로그램을 개발하여 업무의 효율성을 높이고, 궁극적으로 국가발전에 이바지하기 위해서 컴퓨터에 관한 전문적인 지식과 기술을 갖춘 사람을 양성할 목적으로 제정되었습니다."
                        />
                    </div>
                }

            </div>

            <div>
                {
                    (field1 && field2)

                    &&

                    <div className={styles.containerHeaderClicked}>
                        English Field
                        <br /><br />
                    </div>
                }

                {
                    field2

                    &&

                    <div>
                        <AchievementContainer
                            id={21}
                            name="2019 광주 세계수영선수권대회 통역 지원"
                            agency="광주세계수영선수권대회 조직위원회"
                            details="세계수영대회 기간동안 광주와 여수에서 통역 봉사자로 활동하여, 외국인과 선수단을 대상으로 영어로 통역 서비스를 제공하였습니다."
                        />

                        <AchievementContainer
                            id={22}
                            name="홍익대학교 영자신문사"
                            agency="홍익대학교 언론사"
                            details="본교 공식 부속기관으로 매년 3월, 5월, 9월, 11월 이렇게 1년 중 총 4차례의 영문 잡지를 발행하며 인문, 사회, 문화, 예술, 과학, 기술, 교내 소식 등 다양한 분야의 영문 기사를 전달해드립니다."
                        />
                    </div>
                }
            </div>
        </div>
    )
}
import { Row, Col, Card } from "antd";
import styled from "styled-components";
import { BLUE, GRAY, DARKGRAY, BOXSHADOW } from "@constants/style";
import BaseCard from "@components/Card";
import NewPlanButton from "@components/NewPlanButton";
import { useRouter } from "next/router";
import { JOIN_US } from "../../constants/routes";

const data = [
    { text: "Un accompagnement pour trouver les aides adéquates", icon: "/community.png" },
    { text: "Un Blog pour rester informé(e) et faire les bons choix", icon: "/blogImg.png" }
];

const text = "On a besoin d'aide !";

const HomeMobile = () => {
    const router = useRouter();
return (
    <HomeMobileContainer justify="center" gutter={[25, 25]} className="text-center">
        <Col span={24}>
            <DescriptionContainer>
                {/* AntiCovid est une plateforme solidaire pour aider les entrepreneurs à
                        surmonter la crise du Covid 19. */}
                <p className="description">
                    AntiCovid est une plateforme solidaire pour aider les entrepreneurs à
                    surmonter la crise du Covid 19.
                </p>
            </DescriptionContainer>

            <CardContainer>
                <h2 className="title">AntiCovid c'est :</h2>
                {data.map(({ text, icon }, index) => (
                    <StyledCard key={icon}>
                        <Img src={icon} />
                        <TextCard>{text}</TextCard>
                    </StyledCard>
                ))}
                <p className="encouragement">
                    Vous n'êtes pas seule(e), ensemble nous allons passer la crise et ressortir
                    plus forts.
                </p>
            </CardContainer>
            <AboutContainer>
                <p className="question">Qui est derrière AntiCovid ?</p>
                <p className="response">
                    Nous sommes une équipe d'entrepreneurs, bénévoles, bien décidés à unir nos
                    compétences pour que nos entreprises françaises tiennent le coup pendant la
                    crise !
                </p>
            </AboutContainer>
                    <FixedContainer onClick={() => router.push(JOIN_US)} ><NewPlanButton text={text} link={"#"} /></FixedContainer>
        </Col>
    </HomeMobileContainer>
)};

const HomeMobileContainer = styled(Row)`
    // padding: 0px 30px;
    margin: 0px 0px !important;
`;
const DescriptionContainer = styled(Row)`
    font-size: 15px;
    color: white;
    font-weight: 800;
    text-align: center;
    .description {
        font-size: 15px;
        color: white;
        font-weight: 800;
        text-align: center;
    }
`;
const CardContainer = styled(BaseCard)`
    box-shadow: ${BOXSHADOW};
    padding: 20px 0px;
    margin: 10px 0px;
    .title {
        color: ${BLUE};
        font-size: 23px !important;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .encouragement {
        margin-bottom: 0px;
        padding: 0px 20px;
        font-size: 15px;
        line-height: 20px;
        font-weight: bold;
    }
`;

const StyledCard = styled(BaseCard)`
    margin: 20px 30px;
    border-radius: 25px;
    padding: 10px 10px;
    background-color: ${GRAY};
`;
const Img = styled.img`
    width: 60px;
    height: 35px;
    margin-bottom: 5px;
`;
const TextCard = styled.p`
    font-size: 17px !important;
    font-weight: 700;
    color: black;
`;
const AboutContainer = styled(Row)`
    padding: 20px 0px;
    .question {
        font-size: 23px;
        font-weight: bold;
        color: black;
    }
    .response {
        font-size: 16px;
        color: black;
    }
`;
const FixedContainer = styled.div`
    text-align: center;
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: auto;
`;

export default HomeMobile;

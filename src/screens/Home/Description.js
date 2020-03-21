import { Row, Col, Card } from "antd";
import styled from "styled-components";

import { BLUE } from "@constants/style";
import BaseCard from "@components/Card";

const data = [
    { text: "Un accompagnement pour trouver les aides adéquates", icon: "/community.png" },
    { text: "Un Blog pour rester informé(e) et faire les bons choix", icon: "/blogImg.png" }
];

const HomeDescription = () => (
    <Row justify="center" gutter={[25, 25]} className="text-center">
        <Col span={24} order={1}>
            <Title>AntiCovid c'est :</Title>
        </Col>

        {data.map(({ text, icon }, index) => (
            <Col key={icon} sm={{ span: 24, order: index + 1 }} md={12} lg={7}>
                <StyledCard>
                    <Img src={icon} />
                    <TextCard>{text}</TextCard>
                </StyledCard>
            </Col>
        ))}
        <Col sm={24} md={20} lg={14} order={4}>
            <AboutContainer>
                <p className="question">Qui est derrière AntiCovid ?</p>
                <p className="response">
                    Nous sommes une équipe d'entrepreneurs, bénévoles, bien décidés à unir nos
                    compétences pour que nos entreprises françaises tiennent le coup pendant la
                    crise !
                </p>
            </AboutContainer>
        </Col>
    </Row>
);

const Title = styled.h2`
    color: ${BLUE};
    font-weight: 900;
`;

const AboutContainer = styled(BaseCard)`
    padding: 30px 60px;

    .question {
        font-size: 23px;
        font-weight: bold;
    }

    .response {
        font-size: 16px;
    }
`;

const StyledCard = styled(BaseCard)`
    border-radius: 25px;
    padding: 30px 60px;
    height: 240px;
`;

const Img = styled.img`
    width: 60px;
    height: 35px;
    margin-bottom: 15px;
`;

const TextCard = styled.p`
    font-size: 20px !important;
    font-weight: 900;
`;

export default HomeDescription;

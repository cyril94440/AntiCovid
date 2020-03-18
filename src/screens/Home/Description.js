import { Row, Col, Typography, Card, List } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Page from "@components/Page";
import { BLUE } from "../../constants/style";
import HomeImage from "./Image";

const data = [
    { text: "Un accompagnement pour trouver les aides adéquates" },
    { text: "Un Blog pour rester informé(e) et faire les bons choix" }
];

const HomeDescription = () => (
    <Row gutter={[25, 25]}>
        <Col span={24} style={{ textAlign: "center" }}>
            <Title>AntiCovid c'est :</Title>
        </Col>
        <Col span={3} offset={3}>
            <AboutContainer>
                <p className="question">Qui est derrière AntiCovid ?</p>
                <p className="response">
                    Nous sommes une équipe d'entrepreneurs, bénévoles, bien
                    décidés à unir nos compétences pour que nos entreprises
                    françaises tiennent le coup pendant la crise !
                </p>
            </AboutContainer>
        </Col>
        <Col span={6}>
            <StyledCard>
                <TextCard>
                    Un Blog pour rester informé(e) et faire les bons choix
                </TextCard>
            </StyledCard>
        </Col>
        <Col span={6}>
            <StyledCard>
                <TextCard>
                    Un accompagnement pour trouver les aides adéquates
                </TextCard>
            </StyledCard>
        </Col>
    </Row>
);

const Title = styled.p`
    color: ${BLUE};
    font-size: 40px;
    font-weight: bold;
`;

const AboutContainer = styled.div`
    .question {
        font-size: 23px;
        font-weight: bold;
    }

    .response {
        font-size: 16px;
    }
`;

const StyledCard = styled(Card)`
    text-align: center;

    .ant-card-body {
        padding: 30px 50px;
    }
`;

const TextCard = styled.p`
    color: ${BLUE};
    font-size: 25px;
    font-weight: bold;
`;

export default HomeDescription;

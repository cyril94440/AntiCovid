import styled from "styled-components";
import { Row, Col, Typography, Card, List } from "antd";

import { BLUE } from "../../constants/style";

const HomeImage = () => (
    <ImgContainer justify="center" align="bottom">
        <Col span={12}>
            <DescriptionCard>
                <p className="description">
                    AntiCovid est une plateforme solidaire pour aider les
                    entrepreneurs à surmonter la crise du Covid 19.
                </p>
                <p classNamme="encouragement">
                    Vous n'êtes pas seule(e), ensemble nous allons passer la
                    crise et ressortir plus forts.
                </p>
            </DescriptionCard>
        </Col>
    </ImgContainer>
);

const ImgContainer = styled(Row)`
    background: brown;
    height: 350px;
`;

const DescriptionCard = styled(Card)`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    color: ${BLUE};
    text-align: center;

    .ant-card-body {
        padding: 30px 50px;
    }

    .description {
        font-size: 22px;
        line-height: 25px;
        font-weight: bold;
    }

    .encouragement {
        font-size: 16px;
    }
`;

export default HomeImage;

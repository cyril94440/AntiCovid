import { Row, Col, Typography, Card, List } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Page from "@components/Page";

const data = [
    { text: "Un accompagnement pour trouver les aides adéquates" },
    { text: "Un Blog pour rester informé(e) et faire les bons choix" }
];

const Home = () => (
    <Page title="Accueil">
        <Container justify="center" align="middle">
            <Col span={24}>
                <Typography.Title level={1}>AntiCovid.</Typography.Title>
            </Col>
            <Col span={24}>
                <Typography.Paragraph strong>
                    AntiCovid est une plateforme solidaire pour aider les entrepreneurs à
                    surmonter la crise du Covid19.
                </Typography.Paragraph>
            </Col>
            <Col span={24}>
                <DownOutlined style={{ fontSize: 30 }} />
            </Col>
            <Col span={12}>
                <Card>
                    <Typography.Text>AntiCovid c'est :</Typography.Text>
                    {data.map((item, index) => (
                        <div key={index}>{item.text}</div>
                    ))}
                    <Typography.Paragraph>
                        AntiCovid est une plateforme solidairepour aider les entrepreneurs à
                        surmonterla crise du Covid 19.AntiCovid c’est :Vous n’etes pas
                        seule(e), ensemblenous allons passer la criseet ressortir plus forts.
                    </Typography.Paragraph>
                </Card>
            </Col>
            <Col span={24}>
                <Typography.Title level={2}>Qui est derrière AntiCovid ?</Typography.Title>
                <Typography.Paragraph>
                    Nous sommes une équipe d'entrepreneurs, bénévoles, bien décidés à unir nos
                    compétences pour que nos entreprises françaises tiennent le coup pendant la
                    crise !
                </Typography.Paragraph>
            </Col>
        </Container>
    </Page>
);

const Container = styled(Row)`
    text-align: center;
    height: 100%;
    position: relative;
`;

export default Home;

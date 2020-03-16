import { Row, Col, Typography, Form, Input } from "antd";
import styled from "styled-components";

import Page from "@components/Page";

const Home = () => (
    <Page title="Accueil">
        <Container justify="center" align="middle">
            <Col span={24}>
                <Typography.Paragraph>
                    AntiCovid est une plateforme solidaire pour aider les
                    entrepreneurs et les entreprises à surmonter la crise du
                    Covid 19.
                </Typography.Paragraph>
            </Col>
            <Col span={24}>
                <Typography.Paragraph>
                    AntiCovid c'est:
                    <br />- Un accompagnement pour trouver les{" "}
                    <Typography.Text strong>les aides</Typography.Text>{" "}
                    adéquates
                    <br />- Un <Typography.Text strong>
                        Blog
                    </Typography.Text>{" "}
                    pour rester informé(e) et faire les bons choix
                    <br />- Une{" "}
                    <Typography.Text strong>communauté</Typography.Text>{" "}
                    d'entraide
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Vous n'etes pas seule(e), ensemble nous allons passer la
                    crise et ressortir plus forts.
                </Typography.Paragraph>
            </Col>
            <Col span={24}>
                <Typography.Text>Qui est derrière AntiCovid ?</Typography.Text>
                <Typography.Paragraph>
                    Nous sommes une équipe d'entrepreneurs, bénévoles, bien
                    décidés è unir nos compétences pour que nos entreprises
                    françaises tiennent le coup pendant la crise !
                </Typography.Paragraph>
            </Col>
            <Col span={24}>
                <Form layout="inline">
                    <Form.Item label="Rejoignez nous" name="email">
                        <Input placeholder="Email" />
                    </Form.Item>
                </Form>
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

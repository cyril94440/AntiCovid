import { Row, Col } from "antd";
import styled from "styled-components";

import Page from "@components/Page";

import ContactForm from "./Form";
import NewPlanButton from "@components/NewPlanButton";

const Contact = () => (
    <Page title="Contact">
        <Container justify="center" align="middle">
            <Col xs={24} sm={24} md={18} lg={12}>
                <Row gutter={[25, 25]}>
                    <Col span={24}>
                        <h3 style={{ color: "white" }}>Contact</h3>
                    </Col>
                    <Col span={24}>
                        <ContactForm />
                    </Col>
                    <Col span={24} className="text-center">
                        <NewPlanButton />
                    </Col>
                </Row>
            </Col>
        </Container>
    </Page>
);

const Container = styled(Row)`
    @media screen and (max-width: 576px) {
        min-height: 100vh;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 25px;

        h3 {
            font-size: 50px;
        }
    }
`;

export default Contact;

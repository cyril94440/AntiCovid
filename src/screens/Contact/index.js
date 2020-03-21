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
                    <Col span={24} className="displayTitle">
                        <h3 style={{ color: "white" }}>Contact</h3>
                    </Col>
                    <Col span={24}>
                        <ContactForm />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 0 }} className="text-center addNewPlan">
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
        padding: 12.5px;
        h3 {
            font-size: 50px;
        }
        .displayTitle {
            display: none;
        }
        .addNewPlan {
            position: fixed;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: auto;
        }
    }
`;

export default Contact;

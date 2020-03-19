import { Row, Col } from "antd";

import Page from "@components/Page";

import ContactForm from "./Form";
import NewPlanButton from "@components/NewPlanButton";

const Contact = () => (
    <Page title="Contact">
        <Row justify="center" align="middle">
            <Col sm={24} md={18} lg={12}>
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
        </Row>
    </Page>
);

export default Contact;

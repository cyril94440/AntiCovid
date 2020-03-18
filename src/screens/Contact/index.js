import { Row, Col } from "antd";

import Page from "@components/Page";
import Button from "@components/Button";
import ContactForm from "./Form";

const Contact = () => (
    <Page title="Contact">
        <Row justify="center" align="middle">
            <Col sm={24} md={18} lg={12}>
                <Row gutter={[25, 25]}>
                    <Col span={24}>
                        <h3>Contact</h3>
                    </Col>
                    <Col span={24}>
                        <ContactForm />
                    </Col>
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Button className="orange plan">
                            Soumetttre un dispositif non référencé
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Page>
);

export default Contact;

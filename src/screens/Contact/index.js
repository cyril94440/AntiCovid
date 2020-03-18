import { Row, Col } from "antd";

import Page from "@components/Page";
import Button from "@components/Button";
import ContactForm from "./Form";

const Contact = () => (
    <Page title="Contact">
        <Row justify="center">
            <Col span={12}>
                <Row>
                    <Col span={24}>
                        <h2>Contact</h2>
                    </Col>
                    <Col span={24}>
                        <ContactForm />
                    </Col>
                    <Col span={24}>
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

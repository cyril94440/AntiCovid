import { Row, Col, Card, Form, Input, Button, Upload } from "antd";

import Page from "@components/Page";

const Contact = props => (
    <Page title="Contact">
        <Row>
            <Col span={12}>
                <Card>
                    <Form name="contact-form">
                        <Form.Item name="email">
                            <Input placeholder="Votre email" />
                        </Form.Item>
                        <Form.Item name="message">
                            <Input.TextArea placeholder="Votre message" />
                        </Form.Item>
                        <Form.Item name="upload" valuePropName="fileList">
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>Pièce jointe</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">Envoyer</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Page>
);

export default Contact;

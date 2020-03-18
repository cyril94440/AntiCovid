import styled from "styled-components";
import { Card, Form, Input, Upload, Row, Col } from "antd";

import { BLUE } from "@constants/style";

import Button from "@components/Button";

export default function ContactForm() {
    return (
        <Block>
            <Form>
                <Form.Item name="email">
                    <Input placeholder="Votre email" style={inputStyle} />
                </Form.Item>
                <Form.Item name="message">
                    <Input.TextArea
                        style={inputStyle}
                        autoSize={{ minRows: 6 }}
                        placeholder="Votre message"
                    />
                </Form.Item>

                <Row gutter={[15, 15]} align="middle">
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item name="upload">
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button className="form upload" valuePropName="fileList">
                                    Pièce jointe
                                </Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item>
                            <Button type="submit" className="form">
                                Envoyer
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Block>
    );
}

const Block = styled(Card)`
    border-radius: 25px;
    .ant-card-body {
        padding: 35px 45px 5px 45px;
    }
`;

const inputStyle = {
    color: `${BLUE}`,
    backgroundColor: "#f0f2f5",
    border: "none"
};

import styled from "styled-components";
import { Card, Form, Upload, Row, Col } from "antd";

import Button from "@components/Button";

import ContactInputs from "./Inputs";
import ContactSubmitBtn from "./SubmitBtn";
import ContactUploadBtn from "./UploadBtn";

export default function ContactForm() {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <Block>
            <Form name="contact-form" onFinish={onFinish} hideRequiredMark>
                <ContactInputs />
                <Row gutter={[15, 15]} align="middle">
                    <ContactUploadBtn />
                    <ContactSubmitBtn />
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

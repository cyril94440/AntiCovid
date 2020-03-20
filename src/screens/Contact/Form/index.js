import styled from "styled-components";
import { Form, Row } from "antd";

import BaseCard from "@components/Card";

import ContactInputs from "./Inputs";
import ContactSubmitBtn from "./SubmitBtn";
import ContactUploadBtn from "./UploadBtn";

export default function ContactForm() {
    const [form] = Form.useForm();

    return (
        <Block>
            <Form form={form} name="contact-form" hideRequiredMark>
                <ContactInputs />
                <Row gutter={[15, 15]} align="middle">
                    <ContactUploadBtn />
                    <ContactSubmitBtn form={form} />
                </Row>
            </Form>
        </Block>
    );
}

const Block = styled(BaseCard)`
    padding: 35px 45px 5px 45px;
`;

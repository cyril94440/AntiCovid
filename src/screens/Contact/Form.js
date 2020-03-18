import styled from "styled-components";
import { Card, Form, Input, Upload } from "antd";

import { BLUE } from "@constants/style";

import Button from "@components/Button";

export default function ContactForm() {
    return (
        <Block>
            <Form>
                <Form.Item name="email">
                    <StyledInput placeholder="Votre email" />
                </Form.Item>
                <Form.Item name="message">
                    <StyledInput.TextArea placeholder="Votre message" />
                </Form.Item>
                <ButtonsContainer>
                    <Form.Item name="upload">
                        <Upload
                            name="logo"
                            action="/upload.do"
                            listType="picture"
                        >
                            <Button className="form" valuePropName="fileList">
                                Pièce jointe
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button className="form">Envoyer</Button>
                    </Form.Item>
                </ButtonsContainer>
            </Form>
        </Block>
    );
}

const Block = styled(Card)`
    border-radius: 25px;
    .ant-card-body {
        padding: 25px 45px;
    }
`;

const StyledInput = styled(Input)`
    color: ${BLUE};
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

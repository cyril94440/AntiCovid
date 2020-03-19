import { Form, Upload, Col } from "antd";
import styled from "styled-components";

import BaseButton from "@components/Button";

const ContactUploadBtn = () => {
    const normFile = e => {
        console.log("Upload event:", e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    return (
        <Col span={24}>
            <Form.Item name="upload" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload name="files" action="/api/upload" method="post">
                    <Wrapper type="button" className="form bg-blue">
                        Pièce jointe
                    </Wrapper>
                </Upload>
            </Form.Item>
        </Col>
    );
};

const Wrapper = styled(BaseButton)`
    position: absolute;

    @media only screen and (min-width: 768px) {
        margin-top: -20px;
    }
`;

export default ContactUploadBtn;

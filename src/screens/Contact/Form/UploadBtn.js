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
            <Form.Item name="fichiers" valuePropName="fileList" getValueFromEvent={normFile}>
                <WrapperUpload name="files" action="/api/upload" method="post">
                    <WrapperBtn type="button" className="form bg-green">
                        Pièce jointe
                    </WrapperBtn>
                </WrapperUpload>
            </Form.Item>
        </Col>
    );
};

const WrapperUpload = styled(Upload)`
    position: relative;
    width: 100%;

    .ant-upload,
    .ant-upload-select .ant-upload-select-text {
        width: 100%;
    }
`;

const WrapperBtn = styled(BaseButton)`
    @media only screen and (max-width: 576px) {
        background: rgb(66, 151, 140);
        background: linear-gradient(
            90deg,
            rgba(66, 151, 140, 1) 0%,
            rgba(248, 222, 121, 1) 100%
        );
    }
`;

export default ContactUploadBtn;

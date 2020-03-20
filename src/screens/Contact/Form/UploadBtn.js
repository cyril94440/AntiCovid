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
                <WrapperUpload name="files">
                    <BaseButton type="button" className="form bg-green">
                        Pièce jointe
                    </BaseButton>
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

export default ContactUploadBtn;

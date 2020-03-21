import { Form, Upload, Col, message } from "antd";
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

    const uploadProps = {
        name: "files",
        action: "/api/upload",
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    };

    return (
        <Col span={24}>
            <Form.Item name="fichiers" valuePropName="fileList" getValueFromEvent={normFile}>
                <WrapperUpload {...uploadProps}>
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

import { Form, Upload, Col } from "antd";

import Button from "@components/Button";

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
                    <Button type="button" className="form upload">
                        Pièce jointe
                    </Button>
                </Upload>
            </Form.Item>
        </Col>
    );
};

export default ContactUploadBtn;

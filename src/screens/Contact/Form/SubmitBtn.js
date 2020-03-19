import { Form, Col } from "antd";

import Button from "@components/Button";

const ContactSubmitBtn = () => (
    <Col span={24}>
        <Form.Item>
            <Button type="submit" className="form">
                Envoyer
            </Button>
        </Form.Item>
    </Col>
);

export default ContactSubmitBtn;

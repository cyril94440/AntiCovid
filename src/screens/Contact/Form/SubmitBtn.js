import { Form, Col } from "antd";

import BaseButton from "@components/Button";

const ContactSubmitBtn = () => (
    <Col span={24}>
        <Form.Item>
            <BaseButton type="submit" className="form bg-green">
                Envoyer
            </BaseButton>
        </Form.Item>
    </Col>
);

export default ContactSubmitBtn;

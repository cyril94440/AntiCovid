import { Form, Input } from "antd";

import { BLUE } from "@constants/style";

const ContactInputs = () => (
    <>
        <Form.Item
            name="email"
            rules={[
                { required: true, message: "Ce champ est requis !" },
                { type: "email", message: "Ce champ n'est pas valide !" }
            ]}
        >
            <Input placeholder="Votre email" style={inputStyle} />
        </Form.Item>
        <Form.Item
            name="message"
            rules={[{ required: true, message: "Ce champ est requis !" }]}
        >
            <Input.TextArea
                style={inputStyle}
                autoSize={{ minRows: 6 }}
                placeholder="Votre message"
            />
        </Form.Item>
    </>
);

const inputStyle = {
    color: `${BLUE}`,
    backgroundColor: "#f0f2f5",
    border: "none"
};

export default ContactInputs;

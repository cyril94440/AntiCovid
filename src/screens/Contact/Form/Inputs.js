import { Form, Input } from "antd";

import { BLUE } from "@constants/style";

const inputs = [
    {
        name: "email",
        rules: [
            { required: true, message: "Ce champ est requis !" },
            { type: "email", message: "Ce champ n'est pas valide !" }
        ],
        placeholder: "Votre email",
        Component: Input
    },
    {
        name: "message",
        rules: [{ required: true, message: "Ce champ est requis !" }],
        placeholder: "Votre message",
        Component: Input.TextArea,
        autoSize: { minRows: 6 }
    }
];

const ContactInputs = () => (
    <>
        {inputs.map(({ name, rules, Component, placeholder, ...inputProps }) => (
            <Form.Item key={name} name={name} rules={rules}>
                <Component placeholder={placeholder} style={inputStyle} {...inputProps} />
            </Form.Item>
        ))}
    </>
);

const inputStyle = {
    color: `${BLUE}`,
    backgroundColor: "#f0f2f5",
    border: "none"
};

export default ContactInputs;

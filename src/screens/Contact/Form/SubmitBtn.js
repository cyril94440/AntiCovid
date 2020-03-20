import { Form, Col, Popconfirm, message } from "antd";

import { AirtableContactBase } from "@helpers/airtable";

import BaseButton from "@components/Button";

const ContactSubmitBtn = ({ form }) => {
    const sendDataToAirtable = fields => {
        AirtableContactBase("Table 1").create([{ fields }], function(err) {
            if (err) {
                console.error(err);
                message.error("Une erreur s'est produite !");
                return;
            }

            message.success("Message Envoyé");
        });
    };

    const onConfirm = event => {
        event.preventDefault();

        form.validateFields()
            .then(values => {
                if (!values.fichiers) delete values.fichiers;
                console.log(values);
                sendDataToAirtable(values);

                form.resetFields();
            })
            .catch(error => {
                console.error(error);
                message.error("Une erreur s'est produite !");
            });
    };

    return (
        <Col span={24}>
            <Form.Item>
                <Popconfirm
                    title="Confirmer ?"
                    onConfirm={onConfirm}
                    okText="Oui"
                    cancelText="Annuler"
                >
                    <BaseButton type="submit" className="form bg-blue">
                        Envoyer
                    </BaseButton>
                </Popconfirm>
            </Form.Item>
        </Col>
    );
};

export default ContactSubmitBtn;

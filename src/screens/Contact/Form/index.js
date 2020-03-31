import styled from "styled-components";
import { Form, Row, message } from "antd";

import { AirtableContactBase } from "@helpers/airtable";

import { BOXSHADOW } from "@constants/style";
import BaseCard from "@components/Card";

import ContactInputs from "./Inputs";
import ContactSubmitBtn from "./SubmitBtn";

export default function ContactForm() {
	const [form] = Form.useForm();

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

	const onFinish = values => {
		sendDataToAirtable(values);
		form.resetFields();
	};

	const onFinishFailed = error => {
		message.error("Une erreur s'est produite !");
		console.error(error);
	};

	const formProps = {
		onFinish,
		onFinishFailed,
		form,
		hideRequiredMark: true,
		name: "contact-form"
	};

	return (
		<Block>
			<Form {...formProps}>
				<ContactInputs />
				<Row gutter={[15, 15]} align="middle">
					<ContactSubmitBtn />
				</Row>
			</Form>
		</Block>
	);
}

const Block = styled(BaseCard)`
	box-shadow: ${BOXSHADOW};
	@media screen and (max-width: 576px) {
		padding: 35px 20px 5px 20px;
	}
	padding: 35px 45px 5px 45px;
`;

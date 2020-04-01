import { Row, Col } from "antd";
import styled from "styled-components";

import Page from "@components/Page";
import ContactForm from "./Form";

const Contact = () => (
	<Page title="Contact">
		<Container justify="center" align="middle">
			<Col xs={23} sm={22} md={18} lg={12}>
				<Row gutter={[25, 25]}>
					<Col span={24} className="displayTitle">
						<h3 style={{ color: "white" }}>Contact</h3>
					</Col>
					<Col span={24}>
						<ContactForm />
					</Col>
				</Row>
			</Col>
		</Container>
	</Page>
);

const Container = styled(Row)`
	@media screen and (max-width: 576px) {
	}
`;

export default Contact;

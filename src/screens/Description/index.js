import { Row, Col } from "antd";

import Page from "@components/Page";

import DescriptionCard from "./Card";

const Description = props => (
	<Page title="Description">
		<Row justify="center">
			<Col xs={24} sm={24} md={20} lg={20}>
				<Row>
					<DescriptionCard {...props} />
				</Row>
			</Col>
		</Row>
	</Page>
);

export default Description;

import styled from "styled-components";
import { Col, Row } from "antd";
import ReactMarkdown from "react-markdown";

import DescriptionSection from "./Section";

const DescriptionContent = ({ data }) => {
	const activityTag =
		data["Activité de l'indépendant"] ||
		data["Activité de l'auto-entreprise / micro-entreprise"] ||
		data["Activité de la société"];

	return (
		<Container>
			<DescriptionSection
				title={"Qui est concerné ?"}
				tags={[activityTag, data["Localisation"]]}
				source={data["Détail - qui est concerné"]}
			/>
			<DescriptionSection
				title={"Description de l'aide"}
				tags={[data["Organisme"]]}
				source={data["Description détaillée"]}
			/>

			<h2>Procédure d'obtention</h2>
			<DescriptionSection
				title={"Descriptif"}
				source={data["procédure d'obtention - description"]}
			/>

			<DescriptionSection
				title={"Délais"}
				source={data["procédure d'obtention - délais"]}
			/>
			<DescriptionSection title={"Liens utiles"}>
				<Info>
					{Object.keys(data)
						.filter(k => k.startsWith("lien utile"))
						.map(k => {
							const key = k.replace("lien utile - ", "");
							return (
								<Row gutter={[0, 16]}>
									<KeyCol md={8} sm={24}>
										{key}
									</KeyCol>
									<ValueCol md={16} sm={24}>
										<ReactMarkdown source={data[k]} />
									</ValueCol>
								</Row>
							);
						})}
				</Info>
			</DescriptionSection>

			<DescriptionSection
				title={"Commentaires"}
				source={data["commentaires"]}
			/>
			<div id="graphcomment"></div>
		</Container>
	);
};

const Container = styled.div`
	// @media screen and (max-width: 576px) {
	// 	padding: 20px 30px;
	// }
	padding: 20px 100px 20px 50px;
	font-size: 15px;

	line-height: 14px;
`;
const Info = styled.div`
	font-size: 16px;
`;
const KeyCol = styled(Col)`
	font-size: 1.2em;
	font-weight: 700;
	text-align: left;
	line-height: 1.2em;
`;
const ValueCol = styled(Col)``;

export default DescriptionContent;

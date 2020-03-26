import { Col, Typography, Collapse, Radio, Select, Form, Row } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";
import styled from "styled-components";

import BaseCard from "@components/Card";
import { BLUE } from "../../constants/style";
import { Observer } from "mobx-react";
import aidStore from "../../stores/aids/aidStore";

const { Option } = Select;

const accordionData = [
	/*{ title: "Forme de société" },
    { title: "Secteur d'activité" },
    { title: "Nombre de salariés" },
    { title: "Chiffre d'affaires" },*/
	{
		title: "Vous êtes",
		key: "Type structure",
		Icon: undefined,
		data: [
			"Société",
			"Indépendant (auto-entreprise, micro entreprise, entreprise individuelle, EIRL, dirigeant de société unipersonnelle)"
		]
	},
	{
		title: "Votre activité",
		key: "Activité",
		Icon: undefined,
		data: ["artisan", "agent commercial"]
	}
	// {
	// 	title: "Localisation géographique",
	// 	key: "localization",
	// 	Icon: EnvironmentFilled,
	// 	data: [
	// 		"DOM",
	// 		"Auvergne - Rhônes - Alpes",
	// 		"Hauts de France",
	// 		"Bretagne",
	// 		"Grand-Est",
	// 		"PACA",
	// 		"Pays de la Loire",
	// 		"Occitanie",
	// 		"Bourgogne-Franche-Comté",
	// 		"Centre Val-De-Loire",
	// 		"Ile-de-France",
	// 		"Normandie",
	// 		"Nouvelle-Aquitaine",
	// 		"Corse"
	// 	]
	// }
];

const PlansFilters = ({ filters, setFilters }) => (
	<Container>
		<AntiCovidDiv>
			<span className="description">
				AntiCovid est une plateforme solidaire pour aider les
				entrepreneurs à surmonter la crise du Covid 19.{" "}
			</span>
		</AntiCovidDiv>
		<h3 style={{ color: "white", marginLeft: 30 }}>Mon entreprise</h3>
		<StyledForm>
			{accordionData.map(({ title, data, Icon, key }) => (
				<Form.Item name={key}>
					<Select placeholder={title}>
						{data.map(value => (
							<Option value={value}>{value}</Option>
						))}
					</Select>
				</Form.Item>
			))}
			<Observer>
				{() => (
					<Form.Item name={aidStore.filterLocalisation.key}>
						<Select placeholder={aidStore.filterLocalisation.title}>
							{[...aidStore.filterLocalisation.data].map(
								value => (
									<Option value={value}>{value}</Option>
								)
							)}
						</Select>
					</Form.Item>
				)}
			</Observer>
		</StyledForm>
	</Container>
);

const Container = styled.div``;
const StyledForm = styled(Form)`
	margin-left: 10px;
	background-color: white;
	// max-width: 600px;
	-webkit-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	border-radius: 20px;
	overflow: hidden;
	padding: 20px;
	margin-bottom: 20px;

	.ant-select-selector {
		background-color: #f1f1f1 !important;
		border: none !important;
		border-radius: 20px !important;
		height: 40px !important;
	}

	.ant-select-single {
		height: 40px !important;
		line-height: 40px !important;
		font-weight: 700;
	}

	.ant-select-selection-item {
		position: relative !important;
		left: 20px !important;
		top: 5px;
	}

	.ant-select-selection-placeholder {
		line-height: 40px !important;
		color: ${BLUE};
		font-weight: 500;
		opacity: 1;
		position: relative;
		left: 20px;
	}
`;

const AntiCovidDiv = styled.div`
	text-align: center;
	padding-top: 40px;
	padding-bottom: 40px;

	.description {
		font-size: 20px;
		line-height: 20px;
		font-weight: 900;
		margin-bottom: 5px;
	}

	.encouragement {
		font-size: 16px;
		line-height: 20px;
	}
`;

export default PlansFilters;

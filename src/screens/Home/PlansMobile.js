import { Col, Row, Typography, Collapse, Radio } from "antd";
import { Observer } from "mobx-react-lite";
import aidStore from "../../stores/aidStore";
import { EnvironmentFilled } from "@ant-design/icons";

import styled from "styled-components";
import { BLUE, GRAY, DARKGRAY, ORANGE, BOXSHADOW } from "@constants/style";

import PlanCard from "@components/PlanCard";
import BaseCard from "@components/Card";
import NewPlanButton from "@components/NewPlanButton";

const accordionData = [
	
	{
		title: "Localisation géographique",
		key: "localization",
		Icon: EnvironmentFilled,
		data: [
			"DOM",
			"Auvergne - Rhônes - Alpes",
			"Hauts de France",
			"Bretagne",
			"Grand-Est",
			"PACA",
			"Pays de la Loire",
			"Occitanie",
			"Bourgogne-Franche-Comté",
			"Centre Val-De-Loire",
			"Ile-de-France",
			"Normandie",
			"Nouvelle-Aquitaine",
			"Corse"
		]
	}
];

const text = "Soumettre un dispositif non référencé";
const airTableNewDipositifLink = "https://airtable.com/shroZVJ5EV8tpsaNd";

const PlansMobile = ({ filters, setFilters }) => (
	<PlansMobileContainer justify="center" gutter={[25, 25]}>
		<Col span={24}>
			<Subtitle level={3} className="text-white">
				Mon entreprise
			</Subtitle>
			<Block>
				<Collapse bordered={false}>
					{accordionData.map(({ title, data, Icon, key }) => (
						<Wrapper key={key} header={title} showArrow={false} expandIcon={Icon}>
							<RadioContainer
								onChange={event => {
									setFilters(prev => ({
										...prev,
										[key]: event.target.value
									}));
								}}
								defaultValue={filters[key]}
								buttonStyle="solid"
							>
								{data.map(value => (
									<Radio.Button key={value} value={value}>
										{" "}
										{value}
									</Radio.Button>
								))}
							</RadioContainer>
						</Wrapper>
					))}
				</Collapse>
			</Block>

			<Subtitle level={3}>
				Mes aides
				<Badge>
					{" "}
					<Observer>
						{() => {
							return aidStore.filteredAids([filters.localization]).length;
						}}
					</Observer>
				</Badge>
			</Subtitle>

			<Container>
				<Row gutter={[35, 35]}>
					<Observer>
						{() =>
							aidStore.filteredAids([filters.localization]).map(plan => (
								<Col xs={24} md={24} lg={12} key={plan.ID}>
									<PlanCard
										name={plan["Nom du dispositif"]}
										description={plan["Résumé"]}
										planId={plan.ID}
									/>
								</Col>
							))
						}
					</Observer>
				</Row>
			</Container>

			<AddPlanContainer>
				<NewPlanButton text={text} link={airTableNewDipositifLink} />
			</AddPlanContainer>
		</Col>
	</PlansMobileContainer>
);
const PlansMobileContainer = styled(Row)`
	// padding: 0px 30px;
	text-align: center;
	margin: 0px 0px !important;
`;
const Subtitle = styled(Typography.Title)`
	text-align: left;
	font-size: 23px !important;
	font-weight: bold;
`;
const Block = styled(BaseCard)`
	box-shadow: ${BOXSHADOW};
	padding: 20px 20px;
	margin: 10px 0px;
`;

const Wrapper = styled(Collapse.Panel)`
	background-color: #f0f2f5;
	margin-bottom: 10px;
	font-size: 17px !important;
	font-weight: 700;
	color: black;
`;
const RadioContainer = styled(Radio.Group)`
	display: grid;
	grid-template: 1fr / 1fr;
`;
const Badge = styled.span`
	color: ${ORANGE};
	position: relative;
	left: 10px;
`;
const Container = styled.div`
	height: calc(100vh - 150px);
	&::-webkit-scrollbar {
		width: 7px;
	}
	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${BLUE};
		outline: 1px solid ${BLUE};
	}
`;
const AddPlanContainer = styled.div`
	text-align: center;
	position: fixed;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	width: 80%;
	height: auto;
`;

export default PlansMobile;

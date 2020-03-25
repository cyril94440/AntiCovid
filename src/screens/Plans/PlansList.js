import { Row, Col, Radio } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";

import aidStore from "../../stores/aids/aidStore";

import { BLUE } from "@constants/style";

import PlanCard from "@components/PlanCard";
import { ORANGE } from "../../constants/style";
import PlanListRow from "../../components/PlanListRow";
import { DesktopOnly } from "../../components/ResponsiveCompo";

const Badge = styled.span`
	color: ${ORANGE};
	margin: auto;
	float: center;
`;

const PlansList = ({ filters }) => (
	<div>
		<DesktopOnly>
			<Title>
				{" "}
				<Observer>
					{() => {
						return aidStore.filteredAids([filters.localization])
							.length;
					}}
				</Observer>{" "}
				aides disponibles
			</Title>
		</DesktopOnly>

		<RadioContainer>
			<Radio.Group defaultValue="a" buttonStyle="solid" size="large">
				<Radio.Button value="a"> Professionnelles </Radio.Button>
				<Radio.Button value="b"> Personnelles </Radio.Button>
			</Radio.Group>
		</RadioContainer>

		<Container>
			<CardsContainer>
				<Observer>
					{() =>
						aidStore
							.filteredAids([filters.localization])
							.map(plan => (
								<PlanListRow
									key={plan.ID}
									name={plan["Nom du dispositif"]}
									description={plan["Résumé"]}
									planId={plan.ID}
								/>
							))
					}
				</Observer>
			</CardsContainer>
		</Container>
	</div>
);

const Title = styled.h3`
	margin-left: 30px;
	color: white;
`;

const Container = styled.div`
	padding: 0 5px;
	padding-bottom: 20px;
	height: auto;

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

	@media screen and (max-width: 1200px) {
		padding: 0;
		overflow: "auto";
		height: auto;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

const RadioContainer = styled.div`
	width: 100%;
	text-align: center;
	position: relative;
	top: -40px;

	@media screen and (max-width: 768px) {
		top: 0px;
		margin-bottom: 20px;
	}

	.ant-radio-group {
		border-radius: 10px;
		overflow: hidden;
		-webkit-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
		box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
		font-weight: 700;
		border: none !important;
	}
	.ant-radio-button-wrapper {
		border: none !important;
		height: 50px;
		line-height: 50px;
		width: 200px;
		@media screen and (max-width: 768px) {
			width: auto;
		}
	}
	.ant-radio-button-wrapper-checked {
		border: none !important;
		background-color: ${ORANGE} !important;
	}
	.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
		background: none;
	}
`;

const CardsContainer = styled.div`
	display: grid;
	grid-template: 1fr / 1fr;
	grid-gap: 14px;
`;

export default PlansList;

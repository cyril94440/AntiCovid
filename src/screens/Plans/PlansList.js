import { Row, Col } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";

import aidStore from "../../stores/aids/aidStore";

import { BLUE } from "@constants/style";

import PlanCard from "@components/PlanCard";
import { ORANGE } from "../../constants/style";
import PlanListRow from "../../components/PlanListRow";

const Badge = styled.span`
	color: ${ORANGE};
	margin: auto;
	float: center;
`;

const PlansList = ({ filters }) => (
	<div>
		<Title>
			Mes aides{" "}
			<Badge>
				{" "}
				<Observer>
					{() => {
						return aidStore.filteredAids([filters.localization])
							.length;
					}}
				</Observer>
			</Badge>
		</Title>
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

	@media screen and (max-width: 1200px) {
		color: white;
	}
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

const CardsContainer = styled.div`
	display: grid;
	grid-template: 1fr / 1fr;
	grid-gap: 14px;
`;

export default PlansList;

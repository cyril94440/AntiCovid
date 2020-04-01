import styled from "styled-components";
import { Observer } from "mobx-react-lite";

import aidStore from "../../stores/aids/aidStore";

import { BLUE } from "@constants/style";

import PlanCard from "@components/PlanCard";
import { ORANGE } from "../../constants/style";

const Badge = styled.span`
	color: ${ORANGE};
	position: relative;
	left: 10px;
`;

const PlansCards = ({ filters }) => (
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
								<PlanCard
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
	overflow: scroll;
	padding: 0 5px;
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
	grid-template: 1fr / repeat(2, 1fr);
	grid-gap: 25px;

	@media screen and (max-width: 1200px) {
		grid-template: 1fr / 1fr;
	}
`;

export default PlansCards;

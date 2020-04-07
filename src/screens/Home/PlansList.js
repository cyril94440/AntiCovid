import { Tabs } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";

import aidStore from "../../stores/aids/aidStore";

import {
	GREEN,
	BODY_COLOR,
	RED,
	BLUE,
	GRAY,
	DARKGRAY,
} from "../../constants/style";
import PlanListRow from "../../components/PlanListRow";

const PlansList = ({ filters, setFilters }) => {
	const radioOnChange = (key) => {
		setFilters({ ...filters, "Nature de l'aide": key });
	};

	const isFilterEmpty = (filters) => {
		return Object.keys(filters).length === 1;
	};

	return (
		<div>
			{isFilterEmpty(filters) ? (
				<ImgContainer>
					<p>
						Renseignez les informations de votre société pour
						afficher les dispositifs qui vous concernent
					</p>
					<img
						src="/illus_placeholder.png"
						alt="Illustration filtres"
					/>
				</ImgContainer>
			) : (
				<Observer>
					{() => {
						const data = aidStore.filteredAids(filters);
						return (
							<StyledTabs
								defaultActiveKey="aide professionnelle"
								onChange={radioOnChange}
							>
								<Container
									tab="Professionnel"
									key="aide professionnelle"
								>
									<InfosContainer>
										<h3>{data.length} aides disponibles</h3>
									</InfosContainer>
									<CardsContainer>
										{data.map((plan) => (
											<PlanListRow
												key={plan.ID}
												name={plan["Nom de l'aide"]}
												description={
													plan["Résumé de l'aide"]
												}
												planId={plan.ID}
												category={plan["categorie"]}
											/>
										))}
									</CardsContainer>
								</Container>
								<Container
									tab="Particulier"
									key="aide personnelle"
								>
									<InfosContainer></InfosContainer>
									<CardsContainer>
										{data.map((plan) => (
											<PlanListRow
												key={plan.ID}
												name={plan["Nom de l'aide"]}
												description={
													plan["Résumé de l'aide"]
												}
												planId={plan.ID}
												category={plan["categorie"]}
											/>
										))}
									</CardsContainer>
								</Container>
							</StyledTabs>
						);
					}}
				</Observer>
			)}
			<HelpLinkContainer>
				<HelpLink
					href="https://airtable.com/shr82bZn3LPiNiyQq"
					target="_blank"
				>
					Soumettre une aide
				</HelpLink>
			</HelpLinkContainer>
		</div>
	);
};

const StyledTabs = styled(Tabs)`
	.ant-tabs-tab {
		color: ${BODY_COLOR};
		font-size: 18px;

		&:hover {
			color: ${BODY_COLOR};
		}
	}

	.ant-tabs-tab-active {
		color: ${BODY_COLOR};
		font-weight: bold;
	}

	.ant-tabs-ink-bar {
		background-color: ${RED} !important;
	}
`;

const Container = styled(Tabs.TabPane)`
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
		background-color: ${GREEN};
		outline: 1px solid ${GREEN};
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

const InfosContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 15px 0;
	margin: 15px 0;
`;

const HelpLinkContainer = styled.div`
	text-align: center;
	padding-bottom: 40px;
	@media only screen and (max-width: 1200px) {
		padding-top: 40px;
	}
`;
const HelpLink = styled.a`
	cursor: pointer;
	color: white;
	background-color: ${BLUE};
	padding: 10px 30px;
	font-size: 20px;
	border-radius: 25px;
	text-align: center;

	&:hover {
		color: white;
	}
`;

const CardsContainer = styled.div`
	display: grid;
	grid-template: 1fr / 1fr;
	grid-gap: 14px;
	background-color: ${GRAY};
	padding: 20px;
`;

const ImgContainer = styled.div`
	margin: auto;
	text-align: center;
	padding-bottom: 40px;

	img {
		max-width: 80%;
		height: auto;
	}

	p {
		font-style: italic;
		margin-bottom: 40px;
		color: ${DARKGRAY};
	}
`;

export default PlansList;

import styled from "styled-components";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import { PLAN_HREF, PLAN } from "@constants/routes";

import BaseButton from "./Button";
import BaseCard from "./Card";

const StyledPlanCard = styled(BaseCard)`
	border-radius: 18px;
	overflow: hidden;
	background-color: white;
`;

const Header = styled.div`
	@media screen and (max-width: 576px) {
		padding: 5px;
		line-height: 20px;
	}
	padding: 20px 60px;
	color: white;
	font-weight: 700;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	padding: 20px 30px;
	font-size: 12px;
	display: flex;
	height: 360px;
	flex-direction: column;
	justify-content: space-between;

	@media only screen and (min-width: 768px) {
		padding: 20px 60px;
	}

	@media only screen and (max-width: 1200px) {
		height: auto;
	}
`;

const CommentDiv = styled.div`
	margin-bottom: 10px;
	font-size: 16px;
	img {
		width: 16px;
		margin-right: 7px;
	}
`;

const PlanButton = styled(BaseButton)`
	padding: 0 30px;
	margin: auto;
	@media only screen and (min-width: 768px) {
		padding: 0 50px;
	}
`;

export default function PlanCard({ name, description, planId }) {
	const router = useRouter();

	return (
		<StyledPlanCard>
			<Header className="bg-blue text-center">{name}</Header>
			<Container>
				<ReactMarkdown source={description} />
				<div>
					<CommentDiv className="text-orange">
						<img src="/commentBubble.png" />
						<div
							className="gc-counter"
							data-url={`https://www.anticovid.io/plans/${planId}`}
							style={{ display: "inline" }}
						></div>
					</CommentDiv>
					<div className="text-center">
						<PlanButton
							className="bg-green"
							onClick={() => {
								router.push(PLAN_HREF, PLAN + planId);
							}}
						>
							En savoir plus
						</PlanButton>
					</div>
				</div>
			</Container>
		</StyledPlanCard>
	);
}

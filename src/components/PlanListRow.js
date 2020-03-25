import styled from "styled-components";
import { useRouter } from "next/router";
import { ORANGE } from "@constants/style";

import BaseButton from "./Button";
import BaseCard from "./Card";
import { PLAN_HREF, PLANS } from "../constants/routes";

import ReactMarkdown from "react-markdown";
import { DesktopOnly } from "./ResponsiveCompo";

export default function PlanListRow({ name, description, planId }) {
	const router = useRouter();

	return (
		<Container>
			<IconDiv />
			<CommentDiv>
				<img src="/commentBubble.png" />
				<CommentNumber>13</CommentNumber>
			</CommentDiv>
			<MainContent>
				<TitleH4>{name}</TitleH4>
				<DesktopOnly>{description}</DesktopOnly>
			</MainContent>
		</Container>
	);
}

const Container = styled.div`
	background-color: white;
	border-radius: 8px;
	height: 80px;
	-webkit-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	margin-bottom: 0px;
`;
const IconDiv = styled.div`
	float: left;
	height: 66px;
	width: 66px;
	border-radius: 8px;
	margin-left: 7px;
	margin-top: 7px;
	background-color: #f1f1f1;
`;
const CommentDiv = styled.div`
	float: right;
	height: 66px;
	width: 66px;
	border-radius: 8px;
	margin-right: 7px;
	margin-top: 7px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CommentNumber = styled.span`
	color: ${ORANGE};
	margin-left: 5px;
	font-weight: 700;
`;
const MainContent = styled.div`
	position: relative;
	top: 50%;
	left: 20px;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 75%;
`;
const TitleH4 = styled.h4`
	display: inline;
	font-weight: 700;
	font-size: 1.1em;
`;

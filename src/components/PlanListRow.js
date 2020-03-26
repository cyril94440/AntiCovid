import styled from "styled-components";
import { useRouter } from "next/router";
import { ORANGE } from "@constants/style";

import BaseButton from "./Button";
import BaseCard from "./Card";
import { PLAN_HREF, PLANS } from "../constants/routes";

import ReactMarkdown from "react-markdown";
import { DesktopOnly } from "./ResponsiveCompo";
import { Row, Col } from "antd";

export default function PlanListRow({ name, description, planId }) {
	const router = useRouter();

	return (
		<Container onClick={() => router.push(PLAN_HREF, PLANS + "/" + planId)}>
			<IconDiv />

			<MainContent>
				<TextContent>
					<TitleH4>{name}</TitleH4>
					<DesktopOnly style={{ maxHeight: "50px" }}>
						{description}
					</DesktopOnly>
				</TextContent>
			</MainContent>

			<CommentDiv>
				<img src="/commentBubble.png" />
				<CommentNumber>0</CommentNumber>
			</CommentDiv>
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
	cursor: pointer;
	overflow: hidden;
	display: grid;
	grid-template: 80px / 70px 1fr 50px;
`;

const IconDiv = styled.div`
	height: 66px;
	width: 66px;
	border-radius: 8px;
	margin-left: 7px;
	margin-top: 7px;
	background-color: #f1f1f1;
`;
const CommentDiv = styled.div`
	height: 80px;

	border-radius: 8px;
	padding-right: 15px;
	justify-content: center;
	align-items: center;
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
	padding-left: 14px;
	display: flex;
	justify-content: left;
	align-items: center;
`;
const TextContent = styled.div``;
const TitleH4 = styled.h4`
	display: inline;
	font-weight: 700;
	font-size: 1.1em;
`;

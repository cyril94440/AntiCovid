import styled from "styled-components";
import { useRouter } from "next/router";
import { StarOutlined, CommentOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { RED, YELLOW } from "@constants/style";
import { PLAN_HREF, PLANS } from "@constants/routes";

import { DesktopOnly } from "./ResponsiveCompo";

export default function PlanListRow({ name, description, planId }) {
	const router = useRouter();

	return (
		<Container onClick={() => router.push(PLAN_HREF, PLANS + "/" + planId)}>
			<IconDiv />
			<Col>
				<MainContent>
					<TextContent>
						<TitleH4>{name}</TitleH4>
						<DesktopOnly
							style={{
								maxHeight: "50px"
							}}
						>
							{description}
						</DesktopOnly>
					</TextContent>
				</MainContent>

				<ReactionDiv>
					<span
						className="comments"
						style={{ color: `${RED}`, margin: "0 70px 0 10px" }}
					>
						<CommentOutlined />
						<CommentNumber>12</CommentNumber>
					</span>
				</ReactionDiv>
			</Col>
		</Container>
	);
}

const Container = styled.div`
	background-color: white;
	border-radius: 20px;
	height: 140px;
	margin-bottom: 0px;
	cursor: pointer;
	overflow: hidden;
	display: grid;
	grid-template: 80px / 70px 1fr 50px;
`;

const IconDiv = styled(Col)`
	height: 66px;
	width: 66px;
	border-radius: 8px;
	margin-left: 7px;
	margin-top :7px;
	background-image: url("https://picsum.photos/66");
	background-color: #f1f1f1;
	display flex;
`;
const ReactionDiv = styled(Row)`
	border-radius: 8px;
	padding-right: 15px;
	margin-top : 15px;
	display: flex;
	position : relative
	align-content : flex-end;
	justify-content: flex-end;
`;
const CommentNumber = styled.span`
	margin-left: 5px;
	font-weight: 700;
`;

const MainContent = styled(Row)`
	padding-left: 14px;
	display: flex;
	justify-content: left;
	align-items: center;
`;
const TextContent = styled.div``;

const TitleH4 = styled.h4`
	margin-top: 7px;
	display: inline;
	font-weight: 700;
	font-size: 1.1em;
`;

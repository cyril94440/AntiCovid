import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

import { NAVLINKS, HOME } from "@constants/routes";
import { DARK_BLUE, BLUE_BACKGROUND } from "@constants/style";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Logo from "../Logo";

import Title from "./Title";

export default function Header({ title, toggleMobileHeader, mobileHeader }) {
	const router = useRouter();

	return (
		<Container>
			<Row
				align="middle"
				className="text-center"
				gutter={{ xs: 0, sm: 15, md: 15, lg: 0 }}
			>
				<Col
					xs={{ span: 3, order: 1 }}
					sm={{ span: 0, order: 1 }}
					xl={{ span: 0, order: 1 }}
				>
					<div
						onClick={toggleMobileHeader}
						className="cursor-pointer"
						style={{ width: "fit-content", height: "auto" }}
					>
						<MenuOutlined className="mobile-icon" />
					</div>
				</Col>
				<ContainerButtons
					xs={{ span: 0, order: 3 }}
					sm={{ span: 24, order: 3 }}
					xl={{ span: 8, order: 1 }}
				>
					<Row gutter={[15, 15]}>
						<Col></Col>
					</Row>
				</ContainerButtons>
				<Col
					xs={{ span: 0, order: 2 }}
					sm={{ span: 24, order: 1 }}
					xl={{ span: 10, order: 2 }}
				>
					<div
						onClick={() => router.push(HOME)}
						className="cursor-pointer"
					>
						<Logo />
					</div>
				</Col>
				<Col
					xs={{ span: 18, order: 2 }}
					sm={{ span: 0, order: 1 }}
					xl={{ span: 0, order: 2 }}
				>
					{title === "Accueil" ? (
						<div
							onClick={() => router.push(HOME)}
							className="cursor-pointer"
						>
							<Logo />
						</div>
					) : (
						<div>
							<Title>{title}</Title>
						</div>
					)}
				</Col>
				<Col
					xs={{ span: 3, order: 3 }}
					sm={{ span: 0, order: 1 }}
					xl={{ span: 0, order: 1 }}
				>
					{mobileHeader && (
						<div
							onClick={toggleMobileHeader}
							className="cursor-pointer"
							style={{ width: "auto", height: "auto" }}
						>
							<CloseOutlined className="mobile-icon" />
						</div>
					)}
				</Col>
				<Col
					xs={{ span: 0, order: 2 }}
					sm={{ span: 24, order: 2 }}
					xl={{ span: 6, order: 3 }}
				>
					<Row gutter={10}>
						{NAVLINKS.desktop.map(({ href, label }) => (
							<Col key={href}>
								<Link
									className="text-uppercase"
									key={href}
									onClick={() => router.push(href)}
									active={router.pathname === href}
								>
									{label}
								</Link>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

const Container = styled.header`
	padding: 10px 15px;
`;

const ContainerButtons = styled(Col)`
	@media screen and (max-width: 1200px) {
		margin-top: 15px;
	}
`;

const Link = styled.a`
	cursor: pointer;
	font-size: 14px !important;
	color: ${DARK_BLUE};
	background-color: ${BLUE_BACKGROUND};
	font-weight: 700;
	border-radius: 18px;
	font-size: 17px;
	height: 29px;
	line-height: 19px;
	border: none;
	text-align: center;
	margin: auto;

	&:hover {
		color: ${DARK_BLUE};
	}
`;

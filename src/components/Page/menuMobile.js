import { Row, Col } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";

import { NAVLINKS } from "@constants/routes";

const MenuMobile = ({ toggleMobileHeader }) => {
	const router = useRouter();

	const hangleItemClick = href => e => {
		toggleMobileHeader(e);
		router.push(href);
	};

	return (
		<Col justify="center" align="middle">
			{NAVLINKS.mobile.map(({ href, label, icon }) => (
				<MenuItem justify="center" key={href}>
					<a onClick={hangleItemClick(href)}>
						<Img src={icon} />
						<Label className="text-uppercase" key={href}>
							{label}
						</Label>
					</a>
				</MenuItem>
			))}
		</Col>
	);
};

const MenuItem = styled(Row)`
	display: flex;
	flex-direction: column;
	margin: 40px 0px;
	align-items: center;
`;
const Img = styled.img`
	height: 30px;
`;

const Label = styled.div`
	font-size: 23px !important;
	font-weight: bold;
	color: white !important;
`;

export default MenuMobile;

import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

import Header from "./Header";
import MenuMobile from "./menuMobile";

export default function Layout({ title, noHeader = false, children }) {
	const [mobileHeader, setMobileHeader] = React.useState(false);
	const toggleMobileHeader = () => {
		console.log("toggleMobileHeader");
		setMobileHeader(!mobileHeader);
	};

	return (
		<AntdLayout
			className={` ${mobileHeader ? "backgroundMobileMenu" : ""}`}
		>
			{!noHeader && (
				<Header
					title={mobileHeader ? "Menu" : title}
					mobileHeader={mobileHeader}
					toggleMobileHeader={toggleMobileHeader}
				/>
			)}
			<Container>
				{mobileHeader ? (
					<MenuMobile toggleMobileHeader={toggleMobileHeader} />
				) : (
					children
				)}
			</Container>
		</AntdLayout>
	);
}

const Container = styled(AntdLayout.Content)`
	min-height: calc(100vh - 102px);
	padding: 5px !important;
	overflow: scroll;
	height: 10px; //TODO: .....
`;

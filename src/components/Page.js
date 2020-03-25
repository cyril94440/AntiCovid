import Head from "next/head";
import { Layout } from "antd";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import Header from "./Header";
import MenuMobile from "./menuMobile";

export default function Page({ title, noHeader = false, children }) {
	const [mobileHeader, setMobileHeader] = React.useState(false);
	const toggleMobileHeader = e => {
		// e.preventDefault();
		console.log("toggleMobileHeader");
		setMobileHeader(!mobileHeader);
	};

	React.useEffect(() => {
		Router.onRouteChangeStart = () => {
			NProgress.start();
		};

		Router.onRouteChangeComplete = () => {
			NProgress.done();
		};

		Router.onRouteChangeError = () => {
			console.error("Erreur lors du changement de page");
			NProgress.done();
		};
	}, []);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<title>{title}</title>
			</Head>
			<Layout
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
			</Layout>
		</>
	);
}

const Container = styled(Layout.Content)`
	min-height: calc(100vh - 102px);
	padding: 5px !important;
	overflow: scroll;
	height: 10px; //TODO: .....
`;

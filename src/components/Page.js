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
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `(function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="Xy02MjA5NjAxMjY";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/Xy02MjA5NjAxMjY/oribi.js","ORIBI");`
					}}
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-162058754-1"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'UA-162058754-1');`
					}}
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

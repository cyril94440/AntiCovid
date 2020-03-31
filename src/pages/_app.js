import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

import GlobalStyle from "@components/GlobalStyle";

import "antd/dist/antd.css";

Router.events.on("routeChangeStart", url => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => (
	<React.Fragment>
		<GlobalStyle />
		<Component {...pageProps} />
	</React.Fragment>
);

export default MyApp;

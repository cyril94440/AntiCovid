import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "@constants/theme";

import GlobalStyle from "@components/GlobalStyle";

import "antd/dist/antd.less";

const MyApp = ({ Component, pageProps }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Component {...pageProps} />
	</ThemeProvider>
);

export default MyApp;

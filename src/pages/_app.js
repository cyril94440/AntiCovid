import React from "react";
import GlobalStyle from "@components/GlobalStyle";

import "antd/dist/antd.less";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

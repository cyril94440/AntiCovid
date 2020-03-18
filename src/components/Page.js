import Head from "next/head";
import { Layout } from "antd";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

import HeaderNav from "./HeaderNav";
import { BLUE, ORANGE, FONT_FAMILY } from "../constants/style";

export default function Page({ title, children }) {
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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap"
                    rel="stylesheet"
                />
                <title>{title}</title>
            </Head>
            <Body>
                <HeaderNav />
                <Container>{children}</Container>
            </Body>
        </>
    );
}

const Body = styled(Layout)`
    font-family: ${FONT_FAMILY};
    color: ${BLUE};

    h1 {
        font-size: 45px;
        line-height: 27px;
        color: ${BLUE};
    }

    h2 {
        font-size: 30px;
        line-height: 27px;
        font-weight: 900;
        color: ${BLUE};
    }

    h3 {
        font-size: 23px;
        line-height: 27px;
        font-weight: 900;
        color: ${BLUE};
    }

    p {
        font-size: 15px;
        line-height: 27px;
        color: ${BLUE};
    }

    a {
        color: ${BLUE};
    }

    a:hover {
        color: ${ORANGE};
    }
`;

const Container = styled(Layout.Content)`
    min-height: calc(100vh - 102px);
    padding: 15px;
    color: ${BLUE};
`;

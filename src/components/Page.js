import Head from "next/head";
import { Layout } from "antd";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import { Breakpoint, BreakpointProvider } from "react-socks";
import Header from "./Header";

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
            <Layout>
                <Header title={title} />
                <Container>{children}</Container>
            </Layout>
        </>
    );
}

const Container = styled(Layout.Content)`
    min-height: calc(100vh - 102px);
    padding: 15px;
    overflow: scroll;
    height: 10px; //TODO: .....
`;

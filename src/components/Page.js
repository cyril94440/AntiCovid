import Head from "next/head";
import { Layout } from "antd";
import styled from "styled-components";

import HeaderNav from "./HeaderNav";

export default function Page({ title, children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
                    rel="stylesheet"
                />
                <title>{title}</title>
            </Head>
            <Layout>
                <HeaderNav />
                <Container>{children}</Container>
            </Layout>
        </>
    );
}

const Container = styled(Layout.Content)`
    min-height: calc(100vh - 64px);
    padding: 15px;
`;

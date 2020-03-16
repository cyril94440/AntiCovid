import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import { Layout } from "antd";

import HeaderNav from "./HeaderNav";

export default function Page({ title, children }) {
    React.useEffect(() => {
        showProgressBar();
    }, []);

    const showProgressBar = () => {
        Router.onRouteChangeStart = () => {
            nProgress.start();
        };

        Router.onRouteChangeComplete = () => {
            nProgress.done();
        };

        Router.onRouteChangeError = () => {
            console.error("Erreur lors du changement de page");
            nProgress.done();
        };
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{title}</title>
            </Head>
            <Layout>
                <HeaderNav />
                {children}
            </Layout>
        </>
    );
}

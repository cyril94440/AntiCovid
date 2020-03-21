import { Breakpoint, BreakpointProvider } from "react-socks";
import Page from "@components/Page";
import HomeImage from "./Image";
import HomeDescription from "./Description";
import HomeMobile from "./HomeMobile";

const Home = () => {
    return (
        <Page title="Accueil">
            <BreakpointProvider>
                <Breakpoint small down>
                    <HomeMobile />
                </Breakpoint>
                <Breakpoint medium up>
                    <HomeImage />
                    <HomeDescription />
                </Breakpoint>
            </BreakpointProvider>
        </Page>
    );
};

export default Home;

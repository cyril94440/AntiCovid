import { Breakpoint, BreakpointProvider } from "react-socks";
import { Row, Col, Card } from "antd";
import Page from "@components/Page";
import HomeImage from "./Image";
import HomeDescription from "./Description";
import HomeMobile from "./HomeMobile";
import useWindowSize from "@hooks/useWindowSize";

const Home = () => {
    console.log('Home started')
    const size = useWindowSize();
    console.log('size :', size)
    return (
        <Page title="Accueil">
            <Row
                align="middle"
            >
                <Col
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: 24, order: 1 }}
                    md={{ span: 0, order: 1 }}
                    lg={{ span: 0, order: 1 }}
                >
                    <HomeMobile />
                </Col>
                <Col
                    xs={{ span: 0, order: 1 }}
                    sm={{ span: 0, order: 1 }}
                    md={{ span: 24, order: 1 }}
                    lg={{ span: 24, order: 1 }}
                >
                    <React.Fragment>
                        <HomeImage />
                        <HomeDescription />
                    </React.Fragment>
                </Col>
            </Row>
            {/* {size.width < 500 ? (
                    <HomeMobile />
                    // <p></p>
            ): (
                <React.Fragment>
                    <HomeImage />
                    <HomeDescription />
                </React.Fragment>
            )} */}



            {/* <BreakpointProvider>
                <Breakpoint small down>
                    <HomeMobile />
                </Breakpoint>
                <Breakpoint medium up>
                    <HomeImage />
                    <HomeDescription />
                </Breakpoint>
            </BreakpointProvider> */}
        </Page>
    );
};

export default Home;

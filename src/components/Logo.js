import styled from "styled-components";
import { Breakpoint, BreakpointProvider } from "react-socks";
import { Row, Col } from "antd";

const Logo = () => (
    <Wrapper>
        <Row>
            <Col
                className="mobile"
                xs={{ span: 1, order: 1 }}
                sm={{ span: 1, order: 1 }}
                md={{ span: 0, order: 1 }}
                lg={{ span: 0, order: 1 }}
            >
                                AntiCovid<span className="text-orange">.</span>
            </Col>
            <Col
                className="desktop"
                xs={{ span: 0, order: 1 }}
                sm={{ span: 0, order: 1 }}
                md={{ span: 24, order: 1 }}
                lg={{ span: 24, order: 1 }}
            >
                                AntiCovid<span className="text-orange">.</span>
            </Col>
        </Row>
        {/* <BreakpointProvider>
            <Breakpoint small down className="mobile">
                AntiCovid<span className="text-orange">.</span>
            </Breakpoint>
            <Breakpoint medium up className="desktop">
                AntiCovid<span className="text-orange">.</span>
            </Breakpoint>
        </BreakpointProvider> */}
    </Wrapper>
);

const Wrapper = styled.div`
    .mobile {
        font-weight: 900;
        font-size: 30px;
        color: white;
    }

    .desktop {
        font-weight: 900;
        font-size: 65px;
    }
`;

export default Logo;

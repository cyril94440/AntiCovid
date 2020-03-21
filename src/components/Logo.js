import styled from "styled-components";
import { Breakpoint, BreakpointProvider } from "react-socks";

const Logo = () => (
    <Wrapper>
        <BreakpointProvider>
            <Breakpoint small down className="mobile">
                AntiCovid<span className="text-orange">.</span>
            </Breakpoint>
            <Breakpoint medium up className="desktop">
                AntiCovid<span className="text-orange">.</span>
            </Breakpoint>
        </BreakpointProvider>
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

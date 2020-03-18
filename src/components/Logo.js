import styled from "styled-components";
import { SECONDARY } from "../constants/style";

const Logo = () => (
    <Wrapper>
        AntiCovid<span id="point">.</span>
    </Wrapper>
);

const Wrapper = styled.div`
    font-weight: 900;
    font-size: 65px;

    #point {
        color: ${SECONDARY};
    }
`;

export default Logo;

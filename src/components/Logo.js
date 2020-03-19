import styled from "styled-components";

const Logo = () => (
    <Wrapper>
        AntiCovid<span className="text-orange">.</span>
    </Wrapper>
);

const Wrapper = styled.div`
    font-weight: 900;
    font-size: 65px;
`;

export default Logo;

import styled from "styled-components";
import { MobileOnly, DesktopOnly } from "@components/ResponsiveCompo"
const Logo = () => (
    <Wrapper>
        <MobileOnly  className="mobile">
                AntiCovid<span className="text-orange">.</span>
        </MobileOnly>
        <DesktopOnly className="desktop">
            AntiCovid<span className="text-orange">.</span>
        </DesktopOnly>
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

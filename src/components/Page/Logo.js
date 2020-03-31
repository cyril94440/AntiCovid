import styled from "styled-components";

import { MobileOnly, DesktopOnly } from "@components/ResponsiveCompo";

import { PINK, DARK_BLUE } from "@constants/style";

const Logo = () => (
	<Wrapper>
		<MobileOnly className="mobile">
			AntiCovid<span>.</span>
		</MobileOnly>
		<DesktopOnly className="desktop">
			AntiCovid<span>.</span>
		</DesktopOnly>
	</Wrapper>
);

const Wrapper = styled.div`
	span {
		color: ${PINK};
	}

	.mobile {
		font-weight: 900;
		font-size: 30px;
		color: white;
	}

	.desktop {
		font-weight: 900;
		font-size: 65px;
		color: ${DARK_BLUE};
	}
`;

export default Logo;

import styled from "styled-components";
import { DARK_BLUE } from "../../constants/style";

const Title = styled.div`
	font-weight: 900;
	font-size: 30px;
	color: ${DARK_BLUE};

	@media only screen and (min-width: 768px) {
		font-weight: 900;
		font-size: 65px;
		color: inherit;
	}
	@media only screen and (min-width: 1024px) {
		font-weight: 900;
		font-size: 65px;
	}
`;

export default Title;

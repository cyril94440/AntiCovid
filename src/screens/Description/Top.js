import styled from "styled-components";

import { BLUE_BACKGROUND } from "@constants/style";

const DescriptionTop = ({ data }) => (
	<React.Fragment>
		<h2 style={{ maxWidth: 650 }}>{data["Nom de l'aide"]}</h2>
		<InfosContainer>
			<h4>
				{data["Nature de l'aide"].includes("personelle")
					? "Personel"
					: "Professionnel"}
			</h4>
		</InfosContainer>
	</React.Fragment>
);

const InfosContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	h4 {
		font-size: 20px;
		font-weight: 700;
	}
`;

export default DescriptionTop;

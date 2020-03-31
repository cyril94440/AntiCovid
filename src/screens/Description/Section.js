import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import DescriptionTag from "./Tag";

const DescriptionSection = ({ title, tags = [], source, children }) => (
	<section>
		<TitleContainer>
			<h3>{title}</h3>
			{tags.length
				? tags.map((tag, index) => (
						<DescriptionTag key={index} tag={tag} />
				  ))
				: null}
		</TitleContainer>
		{children ? children : <ReactMarkdown source={source} />}
	</section>
);

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	h3 {
		margin-right: 40px;
	}
`;

export default DescriptionSection;

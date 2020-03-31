import styled from "styled-components";
import { useRouter } from "next/router";

import BaseButton from "./Button";

const NewPlanButton = ({ text, link }) => {
	const router = useRouter();

	return (
		<Wrapper className="bg-orange">
			<a href={link} target="_blank" style={{ color: "white" }}>
				{text}
			</a>
		</Wrapper>
	);
};

const Wrapper = styled(BaseButton)`
	padding: 10px 100px;
	width: 425px;
	height: auto;

	@media screen and (max-width: 576px) {
		padding: 10px 10px;
		width: 100%;
		border-radius: 45px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		color: white;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		height: 84px;
	}
`;

export default NewPlanButton;

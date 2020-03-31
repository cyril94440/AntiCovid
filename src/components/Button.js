import styled from "styled-components";
import { BLUE } from "@constants/style";

const BaseButton = styled.button`
	color: white;
	background-color: ${BLUE};
	cursor: pointer;
	font-weight: 700;
	border-radius: 18px;
	font-size: 17px;
	height: 29px;
	line-height: 19px;
	border: none;
	text-align: center;
	outline: none;
	margin: auto;

	&:active {
		outline: none;
	}

	&.form {
		width: 100%;
	}
`;

export default BaseButton;

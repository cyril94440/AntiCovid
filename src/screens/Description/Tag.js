import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const DescriptionTag = ({ tag }) => {
	let array = tag ? [...tag] : null;

	if (array) {
		if (array.indexOf("toutes") != -1) {
			array = ["Toutes"];
		}
	}

	return array
		? array.map(element => (
				<Wrapper key={element}>
					<CloseOutlined />
					<Text>{element}</Text>
				</Wrapper>
		  ))
		: null;
};

const Wrapper = styled.div`
	background-color: white;
	border-radius: 25px;
	height: 40px;
	padding: 15px 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Text = styled.span`
	font-weight: 300;
	margin-left: 30px;
`;

export default DescriptionTag;

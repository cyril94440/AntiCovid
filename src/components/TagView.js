import styled from "styled-components";

export const TagView = ({ key, array, icon, float = "none" }) => {
	if (array) {
		if (array.indexOf("toutes") != -1) {
			array = ["Toutes"];
		}
	}

	return (
		<div key={key} style={{ float }}>
			{array
				? array.map(i => (
						<InfoValue>
							<img src={`/${icon}.png`} width="30" />
							{i}
						</InfoValue>
				  ))
				: null}
			<div style={{ clear: "both" }} />
		</div>
	);
};

const InfoValue = styled.div`
	color: white;
	height: 50px;
	padding: 0px 20px;
	border-radius: 25px;
	margin-right: 10px;
	margin-bottom: 5px;
	display: block;
	line-height: 50px;
	float: left;
	background-color: white;
	color: #1c1c2a;
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;

	img {
		margin-right: 15px;
	}
`;

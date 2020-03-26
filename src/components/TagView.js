import styled from "styled-components";

export const TagView = ({ key, array, color }) => {
	if (array) {
		if (array.indexOf("toutes") != -1) {
			array = ["Toutes"];
		}
	}

	return (
		<React.Fragment key={key}>
			{array ? (
				<p style={{ fontWeight: "bold" }}>
					{array.map(i => (
						<InfoValue
							className="bg-green"
							style={{ backgroundColor: color }}
						>
							{i}
						</InfoValue>
					))}
				</p>
			) : null}
			<div style={{ clear: "both", marginBottom: "10px" }} />
		</React.Fragment>
	);
};

const InfoValue = styled.div`
	color: white;
	padding: 5px 10px;
	border-radius: 10px;
	margin-right: 10px;
	margin-bottom: 5px;
	display: block;
	float: left;
`;

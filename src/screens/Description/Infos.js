import styled from "styled-components";
const infos = [
	"Organisme",
	"lien utile - contact/site web de l'organisme",
	"Adresse mail"
];

const DescriptionInfos = ({ data }) =>
	infos.map(info => (
		<React.Fragment key={info}>
			{data[info] ? (
				<p style={{ fontWeight: "bold" }}>
					{info}:{" "}
					{Array.isArray(data[info]) ? (
						data[info].map(i => (
							<InfoValue className="bg-green">{i}</InfoValue>
						))
					) : (
						<InfoValue className="bg-green">{data[info]}</InfoValue>
					)}
				</p>
			) : null}
		</React.Fragment>
	));

const InfoValue = styled.span`
	color: white;
	padding: 5px 10px;
	border-radius: 10px;
`;
export default DescriptionInfos;

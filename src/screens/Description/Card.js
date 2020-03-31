import { Col, Card, Spin, Row } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";

import aidStore from "@stores/aidStore";

import { BLUE, GREEN, ORANGE, RED } from "@constants/style";

import { TagView } from "@components/TagView";

const DescriptionCard = ({ recordId }) => {
	React.useEffect(() => {
		const script1 = document.createElement("script");
		script1.type = "text/javascript";
		script1.textContent = `/* - - - CONFIGURATION VARIABLES - - - */

        // make sure the id is yours
        window.gc_params = {
          graphcomment_id: 'AntiCovid',
      
          // if your website has a fixed header, indicate it's height in pixels
          fixed_header_height: 0,
        };
      
        /* - - - DON'T EDIT BELOW THIS LINE - - - */
      
        
        (function() {
          var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
          gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
        })();`;

		document.body.appendChild(script1);

		return () => {
			document.body.removeChild(script1);
		};
	}, []);

	return (
		<Col span={24}>
			<Observer>
				{() => {
					const data = aidStore.getRecordById(recordId);

					if (!data) return <Spin />;

					return (
						<Block>
							<Header>{data["Nom de l'aide"]}</Header>
							<Time>{data["Nature de l'aide"][0]}</Time>
							<Container>
								<h2>Qui est concerné ?</h2>
								<TagView
									array={
										data["Activité de l'indépendant"] ||
										data[
											"Activité de l'auto-entreprise / micro-entreprise"
										] ||
										data["Activité de la société"]
									}
									key="Activité"
								/>
								<TagView
									array={data["Localisation"]}
									key="Localisation"
									color={ORANGE}
								/>
								<ReactMarkdown source={data["Détail - qui est concerné"]} />
								<h2>Description de l'aide</h2>
								<TagView
									array={data["Organisme"]}
									key="Organisme"
									color={RED}
								/>
								<ReactMarkdown source={data["Description détaillée"]} />
								<h2>Procédure d'obtention</h2>
								<h3>Descriptif</h3>
								<ReactMarkdown
									source={data["procédure d'obtention - description"]}
								/>
								<h3>Délais</h3>
								<ReactMarkdown
									source={data["procédure d'obtention - délais"]}
								/>
								<h3>Liens utiles</h3>
								<Info>
									{Object.keys(data)
										.filter(k => k.startsWith("lien utile"))
										.map(k => {
											const key = k.replace("lien utile - ", "");
											return (
												<Row gutter={[0, 16]}>
													<KeyCol md={8} sm={24}>
														{key}
													</KeyCol>
													<ValueCol md={16} sm={24}>
														<ReactMarkdown source={data[k]} />
													</ValueCol>
												</Row>
											);
										})}
								</Info>
								<h2>Commentaires</h2>
								<ReactMarkdown source={data["commentaires"]} />
								<div id="graphcomment"></div>
							</Container>
						</Block>
					);
				}}
			</Observer>
		</Col>
	);
};

const Block = styled(Card)`
	border-radius: 18px !important;
	border: 0;
	margin-bottom: 20px;
	overflow: hidden;

	-webkit-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);
	box-shadow: 8px 7px 29px -4px rgba(0, 0, 0, 0.4);

	.ant-card-body {
		padding: 0;
	}
	::-webkit-scrollbar {
		display: none;
	}
`;

const Header = styled.div`
	background-color: ${BLUE};
	color: white;
	font-weight: 700;
	min-height: 40px;
	// height: 40px;
	line-height: 40px;
	text-align: center;
`;

const Time = styled.div`
	background-color: ${GREEN};
	height: 25px;
	text-align: center;
	color: white;
	width: 220px;
	border-radius: 0;
	border-bottom-left-radius: 25px;
	border-bottom-right-radius: 25px;
	margin-right: auto;
	margin-left: auto;
`;

const Container = styled.div`
	// @media screen and (max-width: 576px) {
	// 	padding: 20px 30px;
	// }
	padding: 20px 60px;
	font-size: 12px;
	text-align: justify;
	line-height: 14px;
`;
const Info = styled.div`
	font-size: 16px;
`;
const KeyCol = styled(Col)`
	font-size: 1.2em;
	font-weight: 700;
	text-align: left;
	line-height: 1.2em;
`;
const ValueCol = styled(Col)``;

export default DescriptionCard;

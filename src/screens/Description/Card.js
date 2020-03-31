import { Col, Spin } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";

import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";

import aidStore from "@stores/aids/aidStore";

import { HOME } from "@constants/routes";
import { BLUE_BACKGROUND } from "@constants/style";

import DescriptionTop from "./Top";
import DescriptionContent from "./Content";

const DescriptionCard = ({ recordId }) => {
	const router = useRouter();

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

					const category = data["categorie"];

					return (
						<>
							<Row>
								<Col>
									<h2 style={{ maxWidth: 650 }}>
										{data["Nom de l'aide"]}
									</h2>
								</Col>
								<Col flex="auto"></Col>
								<Col flex="100px">
									<img
										src={`/CATEGORIES/${category}.png`}
										alt={category}
										width="100"
									/>
								</Col>
							</Row>
							<Block>
								<IconContainer>
									<CloseIcon
										onClick={() => router.push(HOME)}
									/>
								</IconContainer>

								<Container>
									<div
										style={{
											paddingTop: "20px",
											paddingBottom: "40px"
										}}
									>
										<FloatH3>Qui est concerné ?</FloatH3>
										<TagView
											array={
												data[
													"Activité de l'indépendant"
												] ||
												data[
													"Activité de l'auto-entreprise / micro-entreprise"
												] ||
												data["Activité de la société"]
											}
											key="Activité"
											float="left"
											icon="ACTIVITE"
										/>
										<TagView
											array={data["Localisation"]}
											key="Localisation"
											icon="LOCALISATION"
										/>
									</div>
									<ReactMarkdown
										source={
											data["Détail - qui est concerné"]
										}
									/>
									<div
										style={{
											paddingTop: "20px",
											paddingBottom: "40px"
										}}
									>
										<FloatH3>Description de l'aide</FloatH3>
										<TagView
											array={data["Organisme"]}
											key="Organisme"
											icon="VOUSETES"
										/>
									</div>
									<ReactMarkdown
										source={data["Description détaillée"]}
									/>
									<MainH3>Procédure d'obtention</MainH3>
									<h3>Descriptif</h3>
									<ReactMarkdown
										source={
											data[
												"procédure d'obtention - description"
											]
										}
									/>
									<h3>Délais</h3>
									<ReactMarkdown
										source={
											data[
												"procédure d'obtention - délais"
											]
										}
									/>
									<MainH3>Liens utiles</MainH3>
									<Info>
										{Object.keys(data)
											.filter(k =>
												k.startsWith("lien utile")
											)
											.map(k => {
												const key = k.replace(
													"lien utile - ",
													""
												);
												return (
													<Row gutter={[0, 16]}>
														<KeyCol md={8} sm={24}>
															{key}
														</KeyCol>
														<ValueCol
															md={16}
															sm={24}
														>
															<ReactMarkdown
																source={data[k]}
															/>
														</ValueCol>
													</Row>
												);
											})}
									</Info>
									<MainH3>Commentaires</MainH3>
									<ReactMarkdown
										source={data["commentaires"]}
									/>
									<div id="graphcomment"></div>
								</Container>
							</Block>
						</>
					);
				}}
			</Observer>
		</Col>
	);
};

const Block = styled.div`
	background-color: ${BLUE_BACKGROUND};
	border: 0;
	margin-bottom: 20px;
	overflow: hidden;
	text-align: justify;

	::-webkit-scrollbar {
		display: none;
	}
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 15px 25px 0 0;
`;

const MainH3 = styled.h3`
	margin-bottom: 40px;
	margin-top: 40px;
`;

const FloatH3 = styled(MainH3)`
	float: left;
	height: 50px;
	margin-right: 20px;
	// background-color: red;
	margin-top: 0px;
	padding-top: 10px;
	margin-bottom: 0px;
`;

const CloseIcon = styled(CloseOutlined)`
	font-size: 40px;
	cursor: pointer;
`;

const Container = styled.div`
	// @media screen and (max-width: 576px) {
	// 	padding: 20px 30px;
	// }
	padding: 20px 100px 20px 50px;
	font-size: 15px;

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

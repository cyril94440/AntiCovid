import { Col, Spin, Row } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";

import aidStore from "@stores/aids/aidStore";

import { HOME } from "@constants/routes";
import { ORANGE, RED, BLUE_BACKGROUND } from "@constants/style";

import { TagView } from "@components/TagView";

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

					return (
						<>
							<h2 style={{ maxWidth: 650 }}>
								{data["Nom de l'aide"]}
							</h2>
							<Block>
								<IconContainer>
									<CloseIcon
										onClick={() => router.push(HOME)}
									/>
								</IconContainer>

								<Container>
									<h3>Qui est concerné ?</h3>
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
									<ReactMarkdown
										source={
											data["Détail - qui est concerné"]
										}
									/>
									<h3>Description de l'aide</h3>
									<TagView
										array={data["Organisme"]}
										key="Organisme"
										color={RED}
									/>
									<ReactMarkdown
										source={data["Description détaillée"]}
									/>
									<h2>Procédure d'obtention</h2>
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
									<h3>Liens utiles</h3>
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
									<h2>Commentaires</h2>
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
	border-radius: 18px !important;
	background-color: ${BLUE_BACKGROUND};
	border: 0;
	margin-bottom: 20px;
	overflow: hidden;

	::-webkit-scrollbar {
		display: none;
	}
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 15px 25px 0 0;
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

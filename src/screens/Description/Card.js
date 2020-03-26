import { Col, Card, Spin } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import Disqus from "disqus-react";

import aidStore from "../../stores/aids/aidStore";

import { disqusShortname, getDisqusConfig } from "@helpers/disqus";

import { BLUE, GREEN } from "@constants/style";

import BaseButton from "@components/Button";

import DescriptionInfos from "./Infos";
import DescriptionButtons from "./Buttons";
import DescriptionsStatus from "./Statuts";

import useWindowSize from "@hooks/useWindowSize";

import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

const components = [DescriptionInfos, DescriptionsStatus, DescriptionButtons];

const DescriptionCard = ({ recordId }) => {
	const size = useWindowSize();

	useEffect(() => {
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
						<Block style={{ height: size.height - 150 }}>
							<Header>{data["Nom de l'aide"]}</Header>
							<Time>{data["Nature de l'aide"][0]}</Time>
							<Container>
								<h2>Qui est concerné ?</h2>
								<ReactMarkdown
									source={data["Détail - qui est concerné"]}
								/>
								<h2>Description de l'aide</h2>
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
										data["procédure d'obtention - délais"]
									}
								/>
								<h3>Liens utiles</h3>
								<Info>
									{components.map((Component, index) => (
										<Component key={index} data={data} />
									))}
								</Info>
								<h2>Commentaires</h2>
								<ReactMarkdown source={data["commentaires"]} />
								<h3>Test</h3>
								<ReactMarkdown source={data["Field 22"]} />
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
	overflow: scroll;

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
	@media screen and (max-width: 576px) {
		padding: 20px 30px;
	}
	padding: 20px 60px;
	font-size: 12px;
	text-align: justify;
	line-height: 14px;
`;
const Info = styled.div`
	@media screen and (max-width: 576px) {
		font-size: 12px !important;
		text-align: left;
	}
`;

export default DescriptionCard;

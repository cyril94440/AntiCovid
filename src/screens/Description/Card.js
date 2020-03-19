import { Col, Card, Spin } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import Disqus from "disqus-react";

import aidStore from "@models/aids/aidStore";

import { disqusShortname, getDisqusConfig } from "@helpers/disqus";

import { BLUE, GREEN } from "@constants/style";

import Button from "@components/Button";

const DescriptionCard = ({ recordId }) => (
    <Col span={24}>
        <Observer>
            {() => {
                const data = aidStore.getRecordById(recordId);

                if (!data) return <Spin />;

                console.log(data["Documents à télécharger"][0]);

                return (
                    <Block>
                        <Header>{data["Nom du dispositif"]}</Header>
                        <Container>
                            <p>{data["Description"]}</p>
                            {data["Formulaire en ligne"] && (
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginBottom: 35
                                    }}
                                >
                                    <Button className="plan">
                                        <a
                                            href={data["Formulaire en ligne"]}
                                            target="_blank"
                                            style={{ color: "white" }}
                                        >
                                            {" "}
                                            Formulaire en ligne
                                        </a>
                                    </Button>
                                </div>
                            )}

                            {data["Documents à télécharger"] && (
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginBottom: 35
                                    }}
                                >
                                    <Button className="orange plan">
                                        <a
                                            target="_blank"
                                            href={data["Documents à télécharger"][0].url}
                                            style={{ color: "white" }}
                                            download
                                        >
                                            {" "}
                                            Document à télécharger
                                        </a>
                                    </Button>
                                </div>
                            )}

                            {data["Site web"] && (
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginBottom: 35
                                    }}
                                >
                                    <Button className="green plan">
                                        <a
                                            href={data["Site web"]}
                                            target="_blank"
                                            style={{ color: "white" }}
                                        >
                                            {" "}
                                            Aller sur le site
                                        </a>
                                    </Button>
                                </div>
                            )}

                            <Disqus.DiscussionEmbed
                                shortname={disqusShortname}
                                config={getDisqusConfig(recordId)}
                            />
                        </Container>
                    </Block>
                );
            }}
        </Observer>
    </Col>
);

const Block = styled(Card)`
    border-radius: 10px !important;

    .ant-card-body {
        padding: 0;
    }
`;

const Header = styled.div`
    background-color: ${BLUE};
    color: white;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    text-align: center;
`;
const Container = styled.div`
    padding: 20px 60px;
    font-size: 12px;
    text-align: justify;
    line-height: 14px;
`;

export default DescriptionCard;

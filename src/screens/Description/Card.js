import { Col, Card, Spin } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import Disqus from "disqus-react";

import aidStore from "../../stores/aids/aidStore";

import { disqusShortname, getDisqusConfig } from "@helpers/disqus";

import { BLUE, GREEN } from "@constants/style";

import BaseButton from "@components/Button";

import useWindowSize from "@hooks/useWindowSize";

const buttons = [
    { key: "Formulaire en ligne", label: "Formulaire en ligne", url: "key", bg: "blue" },
    {
        key: "Documents à télécharger",
        label: "Document à télécharger",
        url: "upload",
        bg: "orange"
    },
    { key: "Site web", label: "Aller sur le site", url: "key", bg: "green" }
];

const DescriptionCard = ({ recordId }) => {
    const size = useWindowSize();

    return (
        <Col span={24}>
            <Observer>
                {() => {
                    const data = aidStore.getRecordById(recordId);

                    if (!data) return <Spin />;

                    return (
                        <Block style={{ height: size.height - 150 }}>
                            <Header>{data["Nom du dispositif"]}</Header>
                            <Container>
                                <p>{data["Description"]}</p>
                                {buttons.map(button => (
                                    <React.Fragment key={button.key}>
                                        {data[button.key] ? (
                                            <div
                                                className="text-center"
                                                style={{
                                                    marginBottom: 35
                                                }}
                                            >
                                                <LinkButton className={`bg-${button.bg}`}>
                                                    <a
                                                        href={
                                                            button.url === "key"
                                                                ? data[button.key]
                                                                : data[button.key][0].url
                                                        }
                                                        target="_blank"
                                                        style={{
                                                            color: "white",
                                                            margin: "auto"
                                                        }}
                                                        download={button.url === "upload"}
                                                    >
                                                        {button.label}
                                                    </a>
                                                </LinkButton>
                                            </div>
                                        ) : null}
                                    </React.Fragment>
                                ))}

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
};

const Block = styled(Card)`
    border-radius: 18px !important;
    border: 0;
    overflow: scroll;

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

const LinkButton = styled(BaseButton)`
    padding: 10px auto;
    width: 425px;
`;

export default DescriptionCard;

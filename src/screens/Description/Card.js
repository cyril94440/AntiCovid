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

const components = [DescriptionInfos, DescriptionsStatus, DescriptionButtons];

const DescriptionCard = ({ recordId }) => {
    const size = useWindowSize();

    return (
        <Col span={24}>
            <Observer>
                {() => {
                    const data = aidStore.getRecordById(recordId);

                    if (!data) return <Spin />;

                    console.log(data["Updated"]);

                    return (
                        <Block style={{ height: size.height - 150 }}>
                            <Header>{data["Nom du dispositif"]}</Header>
                            <Time>{data["Updated"]}</Time>
                            <Container>
                                <p>{data["Description"]}</p>
                                {components.map((Component, index) => (
                                    <Component key={index} data={data} />
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

const Time = styled.div`
    background-color: ${GREEN};
    height: 25px;
    text-align: center;
    color: white;
    width: 110px;
    border-radius: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-right: auto;
    margin-left: auto;
`;

const Container = styled.div`
    padding: 20px 60px;
    font-size: 12px;
    text-align: justify;
    line-height: 14px;
`;

export default DescriptionCard;

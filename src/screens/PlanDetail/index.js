import { Row, Col, Typography, Card, Tag, Button } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import { useRouter } from "next/router";

import aidStore from "@models/aids/aidStore";

import Page from "@components/Page";

import Disqus from 'disqus-react';

const PlanDetail = ({ recordId }) => {
    const router = useRouter();

    const disqusShortname = 'AntiCovid';
    const disqusConfig = {
        url: `http://AntiCovid/plans/${recordId}`,
        identifier: recordId,
        title: recordId
    };

    return (
        <Page title="detail">
            <Block>
                <Observer>
                    {() => {
                        const data = aidStore.getRecordById(recordId);

                        if (!data) return <h1>Attendre</h1>;

                        return (
                            <Typography.Title level={4}>
                                {data["Nom du dispositif"]}
                            </Typography.Title>
                        );
                    }}
                </Observer>
                
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

            </Block>

            <Button type="link">MES AIDES</Button>
        </Page>
    );
};

const Block = styled(Card)``;

export default PlanDetail;

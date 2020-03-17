import { Row, Col, Typography, Card, Tag } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import { useRouter } from "next/router";

import aidStore from "@models/aids/aidStore";

import Page from "@components/Page";

const PlanDetail = () => {
    const router = useRouter();

    return (
        <Page title="detail">
            <Block>
                <Observer>
                    {() => {
                        const data = aidStore.getRecordById(router.query.planId);

                        if (!data) return <h1>Attendre</h1>;

                        return (
                            <Typography.Title level={4}>
                                {data["Nom du dispositif"]}
                            </Typography.Title>
                        );
                    }}
                </Observer>
            </Block>

            <Typography.Title level={3}>MES AIDES</Typography.Title>
        </Page>
    );
};

const Block = styled(Card)``;

export default PlanDetail;

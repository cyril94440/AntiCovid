import { Row, Col, Typography, Card, Tag, Spin } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { Row, Col } from "antd";

import Page from "@components/Page";

import DescriptionCard from "./DescriptionCard";

const Description = props => (
    <Page title="Description">
        <Row justify="center">
            <Col xs={24} sm={24} md={18} lg={12}>
                <Row>
                    <Col span={24}>
                        <h3>Description</h3>
                    </Col>
                    <DescriptionCard {...props} />
                </Row>
            </Col>
        </Row>
    </Page>
);

export default Description;

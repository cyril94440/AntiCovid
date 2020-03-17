import { Row, Col, Typography, Card, Tag } from "antd";

import Page from "@components/Page";

const Plans = ({ plans, CompaniesOptions, RegionsOptions, ...props }) => (
    <Page title="Mes aides">
        <Row gutter={[25, 25]}>
            <CompaniesOptions />
            <RegionsOptions />
            {plans.map(plan => (
                <Col span={24} key={plan.ID}>
                    <Card>
                        <Row>
                            <Col span={12}>
                                <Typography.Title level={4}>
                                    {plan["Nom du dispositif"]}
                                </Typography.Title>
                            </Col>
                            <Col span={12}>Logo</Col>
                        </Row>
                        <Typography.Paragraph>
                            Description: {plan.Description}
                        </Typography.Paragraph>
                    </Card>
                </Col>
            ))}
        </Row>
    </Page>
);

export default Plans;

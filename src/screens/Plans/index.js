import { Row, Col, Typography, Card, Button } from "antd";

import Page from "@components/Page";

import aidStore from "@models/aids/aidStore";
import { Observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { PLAN_HREF, PLANS } from "@constants/routes";

const Plans = ({ CompaniesOptions, RegionsOptions }) => {
    const router = useRouter();

    return (
        <Page title="Mes aides">
            <Row gutter={[25, 25]}>
                <CompaniesOptions />
                <RegionsOptions />
                <Observer>
                    {() =>
                        aidStore.filteredAids([""], ["Toutes", ""]).map(plan => (
                            <Col span={24} key={plan.ID}>
                                <Card>
                                    <Typography.Title level={4}>
                                        {plan["Nom du dispositif"]}
                                    </Typography.Title>

                                    <Typography.Paragraph>
                                        Description: {plan.Description}
                                    </Typography.Paragraph>
                                    <Button
                                        onClick={() => {
                                            router.push(PLAN_HREF, PLANS + "/" + plan.ID);
                                        }}
                                    >
                                        En savoir plus
                                    </Button>
                                </Card>
                            </Col>
                        ))
                    }
                </Observer>
            </Row>
        </Page>
    );
};

export default Plans;

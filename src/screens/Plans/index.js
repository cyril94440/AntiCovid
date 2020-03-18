import { Row, Col, Typography, Card, Button, Collapse, Radio, Rate } from "antd";

import Page from "@components/Page";

import aidStore from "@models/aids/aidStore";
import { Observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { PLAN_HREF, PLANS } from "@constants/routes";
import PlanCard from "../../components/PlanCard";

const accordionData = [
    { title: "Forme de société" },
    { title: "Secteur d'activité" },
    { title: "Nombre de salariés" },
    { title: "Chiffre d'affaires" },
    { title: "Location géographique" }
];

const Plans = () => {
    const router = useRouter();

    return (
        <Page title="Mes aides">
            <Row gutter={[25, 25]}>
                <Col span={24}>
                    <Typography.Title level={3}>Mon entreprise</Typography.Title>
                </Col>
                <Col span={12}>
                    <Card>
                        <Collapse>
                            {accordionData.map(({ title }) => (
                                <Collapse.Panel key={title} header={title}>
                                    <Radio.Group buttonStyle="solid">
                                        <Radio.Button value="a">Hangzhou</Radio.Button>
                                        <Radio.Button value="b">Shanghai</Radio.Button>
                                        <Radio.Button value="c">Beijing</Radio.Button>
                                        <Radio.Button value="d">Chengdu</Radio.Button>
                                    </Radio.Group>
                                </Collapse.Panel>
                            ))}
                        </Collapse>
                    </Card>
                </Col>
                <Observer>
                    {() =>
                        aidStore.filteredAids([""], ["Toutes", ""]).map(plan => (
                            <Col span={24} key={plan.ID}>
                                <PlanCard name={plan["Nom du dispositif"]} description={plan.Description} planId={plan.ID} />
                            </Col>
                        ))
                    }
                </Observer>
            </Row>
        </Page>
    );
};

export default Plans;

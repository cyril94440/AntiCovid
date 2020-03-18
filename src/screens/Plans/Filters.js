import {
    Row,
    Col,
    Typography,
    Card,
    Button,
    Collapse,
    Radio,
    Rate
} from "antd";

const accordionData = [
    { title: "Forme de société" },
    { title: "Secteur d'activité" },
    { title: "Nombre de salariés" },
    { title: "Chiffre d'affaires" },
    { title: "Location géographique" }
];

const PlansFilters = props => (
    <Col span={8}>
        <Typography.Title level={3}>Mon entreprise</Typography.Title>
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
);

export default PlansFilters;

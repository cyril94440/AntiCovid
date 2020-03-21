import { Col, Typography, Collapse, Radio } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";
import styled from "styled-components";

import BaseCard from "@components/Card";

const accordionData = [
    /*{ title: "Forme de société" },
    { title: "Secteur d'activité" },
    { title: "Nombre de salariés" },
    { title: "Chiffre d'affaires" },*/
    {
        title: "Localisation géographique",
        key: "localization",
        Icon: EnvironmentFilled,
        data: [
            "DOM",
            "Auvergne - Rhônes - Alpes",
            "Hauts de France",
            "Bretagne",
            "Grand-Est",
            "PACA",
            "Pays de la Loire",
            "Occitanie",
            "Bourgogne-Franche-Comté",
            "Centre Val-De-Loire",
            "Ile-de-France",
            "Normandie",
            "Nouvelle-Aquitaine",
            "Corse"
        ]
    }
];

const PlansFilters = ({ filters, setFilters }) => (
    <Col sm={24} xl={8}>
        <h3 style={{ color: "white", marginLeft: 30 }}>Mon entreprise</h3>
        <Block>
            <Collapse bordered={false}>
                {accordionData.map(({ title, data, Icon, key }) => (
                    <Wrapper key={key} header={title} showArrow={false}>
                        <RadioContainer
                            onChange={event => {
                                setFilters(prev => ({ ...prev, [key]: event.target.value }));
                            }}
                            defaultValue={filters[key]}
                            buttonStyle="solid"
                        >
                            {data.map(value => (
                                <Radio.Button key={value} value={value}>
                                    {" "}
                                    {value}
                                </Radio.Button>
                            ))}
                        </RadioContainer>
                    </Wrapper>
                ))}
            </Collapse>
        </Block>
    </Col>
);

const Block = styled(BaseCard)`
    padding: 30px;
    margin-bottom: 30px;
`;

const Wrapper = styled(Collapse.Panel)`
    background-color: #f0f2f5;
`;

const RadioContainer = styled(Radio.Group)`
    display: grid;
    grid-template: 1fr / 1fr;
`;

export default PlansFilters;

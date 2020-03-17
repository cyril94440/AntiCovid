import { Row, Col, Typography, Card, Tag } from "antd";

import AirtableBase from "@helpers/airtable";

import useCheckbox from "@hooks/useCheckBox";

import Page from "@components/Page";

import { companiesOptions, regionsOptions } from "./config";

import aidStore from "../../models/aids/aidStore"
import {Observer} from "mobx-react-lite"

const Plan = () => {
    const [plans, setPlans] = React.useState([]);
    const [CompaniesOptions, companiesValues, isAllCompanies] = useCheckbox(
        "Type d'entreprise",
        companiesOptions
    );
    const [RegionsOprions, regionsValues, isAllRegions] = useCheckbox(
        "Région",
        regionsOptions
    );

    return (
        <Page title="Mes aides">
            <Row gutter={[25, 25]}>
                <CompaniesOptions />
                <RegionsOprions />
                <Observer>
                {() => aidStore.aids.map(plan => (
                    <Col span={24} key={plan.ID}>
                        <Card title={plan["Nom du dispositif"]}>
                            <Typography.Paragraph>
                                Description: {plan.Description}
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                Région: {plan["Région"] || "Toutes"}
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                Entreprises:{" "}
                                {plan["Type entreprise"] ? (
                                    plan["Type entreprise"].map(company => (
                                        <Tag key={company} color="volcano">
                                            {company}
                                        </Tag>
                                    ))
                                ) : (
                                    <Tag color="geekblue">Toutes</Tag>
                                )}
                            </Typography.Paragraph>
                            {plan["Lien d'information"] && (
                                <Typography.Paragraph>
                                    Lien:{" "}
                                    {
                                        <a
                                            href={plan["Lien d'information"]}
                                            target="_blank"
                                        >
                                            {plan["Lien d'information"]}
                                        </a>
                                    }
                                </Typography.Paragraph>
                            )}
                        </Card>
                    </Col>
                ))}
                </Observer>
            </Row>
        </Page>
    );
};

export default Plan;

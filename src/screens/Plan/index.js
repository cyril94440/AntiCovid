import { Row, Col, Typography, Card, Tag } from "antd";

import AirtableBase from "@helpers/airtable";

import useCheckbox from "@hooks/useCheckBox";

import Page from "@components/Page";

import { companiesOptions, regionsOptions } from "./config";

const Plan = () => {
    const [plans, setPlans] = React.useState([]);
    const [CompaniesOptions, companiesState] = useCheckbox(
        "Type d'entreprise",
        companiesOptions
    );
    const [RegionsOprions, regionsState] = useCheckbox(
        "Région",
        regionsOptions
    );

    React.useEffect(() => {
        fetchData(regionsState);
    }, [regionsState.checkAll]);

    const fetchData = React.useCallback(
        regionsState => {
            AirtableBase("Dispositifs")
                .select({
                    view: "Grid view"
                })
                .firstPage((err, records) => {
                    if (err) console.error(err);
                    else {
                        const data = records
                            .map(record => record.fields)
                            .filter(record =>
                                regionsState.checkAll
                                    ? true
                                    : !regionsState.indeterminate
                                    ? false
                                    : record["Région"]
                                    ? regionsState.checkedList.includes(
                                          record["Région"][0]
                                      )
                                    : true
                            );
                        console.log(data);
                        setPlans(data);
                    }
                });
        },
        [regionsState]
    );

    return (
        <Page title="Mes aides">
            <Row gutter={[25, 25]}>
                <CompaniesOptions />
                <RegionsOprions />
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
                            {plan["Action à réaliser"] && (
                                <Typography.Paragraph>
                                    Action à réaliser:{" "}
                                    {plan["Action à réaliser"]}
                                </Typography.Paragraph>
                            )}
                            {plan["Action à réaliser"] && (
                                <Typography.Paragraph>
                                    Action à réaliser:{" "}
                                    {plan["Action à réaliser"]}
                                </Typography.Paragraph>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </Page>
    );
};

export default Plan;

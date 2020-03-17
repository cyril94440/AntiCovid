import { Row, Col, Typography } from "antd";

import AirtableBase from "@helpers/airtable";

import useCheckbox from "@hooks/useCheckBox";

import Page from "@components/Page";

import { companiesOptions, regionsOptions } from "./config";

const Plan = () => {
    const [plans, setPlans] = React.useState([]);
    const [CompaniesOptions] = useCheckbox(
        "Type d'entreprise",
        companiesOptions,
        []
    );
    const [RegionsOprions] = useCheckbox("Région", regionsOptions, []);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        AirtableBase("Dispositifs")
            .select()
            .firstPage((err, records) => {
                if (err) console.error(err);
                else console.log(records);
            });
    };

    return (
        <Page title="Mes aides">
            <Row gutter={[25, 25]}>
                <CompaniesOptions />
                <RegionsOprions />
            </Row>
        </Page>
    );
};

export default Plan;

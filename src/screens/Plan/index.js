import { Row, Col, Typography } from "antd";

import useCheckbox from "@hooks/useCheckBox";

import Page from "@components/Page";

import { companiesOptions, regionsOptions } from "./config";

const Plan = () => {
    const [CompaniesOptions] = useCheckbox(
        "Type d'entreprise",
        companiesOptions,
        []
    );
    const [RegionsOprions] = useCheckbox("Région", regionsOptions, []);

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

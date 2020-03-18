import { Row } from "antd";

import Page from "@components/Page";

import PlansFilters from "./Filters";
import PlansCards from "./Cards";

const Plans = () => {
    return (
        <Page title="Mes aides">
            <Row align="middle" gutter={[25, 25]}>
                <PlansFilters />
                <PlansCards />
            </Row>
        </Page>
    );
};

export default Plans;

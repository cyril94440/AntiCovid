import { Row } from "antd";

import Page from "@components/Page";

import PlansFilters from "./Filters";
import PlansCards from "./Cards";

const Plans = () => {
    const [filters, setFilters] = React.useState({});

    return (
        <Page title="Mes aides">
            <Row align="middle" gutter={[25, 25]}>
                <PlansFilters filters={filters} setFilters={setFilters} />
                <PlansCards filters={filters} />
            </Row>
        </Page>
    );
};

export default Plans;

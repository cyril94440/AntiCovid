import { MobileOnly, DesktopOnly } from "@components/ResponsiveCompo"
import Page from "@components/Page";

import PlansFilters from "./Filters";
import PlansCards from "./Cards";
import PlansMobile from "./PlansMobile";
import { Row } from "antd";

const Plans = () => {
    const [filters, setFilters] = React.useState({});

    return (
        <Page title="Mes aides">
            <MobileOnly>
                <PlansMobile filters={filters} setFilters={setFilters} />
            </MobileOnly>
            <DesktopOnly>
                <Row align="middle" gutter={[25, 25]}>
                    <PlansFilters filters={filters} setFilters={setFilters} />
                    <PlansCards filters={filters} />
                </Row>
            </DesktopOnly>
        </Page>
    );
};

export default Plans;

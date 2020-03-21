import { Row } from "antd";
import { Breakpoint, BreakpointProvider } from "react-socks";

import Page from "@components/Page";

import PlansFilters from "./Filters";
import PlansCards from "./Cards";
import PlansMobile from "./PlansMobile";

const Plans = () => {
    const [filters, setFilters] = React.useState({});

    return (
        <Page title="Mes aides">
            <BreakpointProvider>
                <Breakpoint small down>
                    <PlansMobile filters={filters} setFilters={setFilters} />
                </Breakpoint>
                <Breakpoint medium up>
                    <Row align="middle" gutter={[25, 25]}>
                        <PlansFilters filters={filters} setFilters={setFilters} />
                        <PlansCards filters={filters} />
                    </Row>
                </Breakpoint>
            </BreakpointProvider>
        </Page>
    );
};

export default Plans;

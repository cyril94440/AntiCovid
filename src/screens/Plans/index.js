import { MobileOnly, DesktopOnly } from "@components/ResponsiveCompo"
import Page from "@components/Page";

import PlansFilters from "./Filters";
import PlansCards from "./Cards";
import PlansMobile from "./PlansMobile";

const Plans = () => {
    const [filters, setFilters] = React.useState({});

    return (
        <Page title="Mes aides">
<<<<<<< HEAD
            <BreakpointProvider>
                <Breakpoint small down>
                    <PlansMobile filters={filters} setFilters={setFilters} />
                </Breakpoint>
                <Breakpoint medium up>
                    <Row align="middle" style={{ padding: 15 }} gutter={[25, 25]}>
                        <PlansFilters filters={filters} setFilters={setFilters} />
                        <PlansCards filters={filters} />
                    </Row>
                </Breakpoint>
            </BreakpointProvider>
=======
            <MobileOnly>
                <PlansMobile filters={filters} setFilters={setFilters} />
            </MobileOnly>
            <DesktopOnly>
                <PlansFilters filters={filters} setFilters={setFilters} />
                <PlansCards filters={filters} />
            </DesktopOnly>
>>>>>>> jeremie
        </Page>
    );
};

export default Plans;

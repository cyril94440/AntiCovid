import { MobileOnly, DesktopOnly } from "@components/ResponsiveCompo"
import Page from "@components/Page";

import PlansFilters from "./Filters";
import PlansCards from "./Cards";
import PlansMobile from "./PlansMobile";
import { Row } from "antd";
import { useEffect } from "react";

const Plans = () => {
    const [filters, setFilters] = React.useState({});

    useEffect(() => {
        const script1 = document.createElement("script");
        script1.type = "text/javascript"
        script1.textContent = `/* - - - CONFIGURATION VARIABLES - - - */

        var gc_params = {
          graphcomment_id: 'AntiCovid'
        };
      
        /* - - - DON'T EDIT BELOW THIS LINE - - - */
      
        
        (function() {
          var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
          gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
        })();`

        document.body.appendChild(script1);

        return () => {
            document.body.removeChild(script1);
        }
    }, []);

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

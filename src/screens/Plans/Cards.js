import { Row, Col } from "antd";

import aidStore from "@models/aids/aidStore";
import { Observer } from "mobx-react-lite";

import PlanCard from "@components/PlanCard";

const PlansCards = props => (
    <Col span={16}>
        <h2>Mes aides</h2>
        <div style={{ maxHeight: "calc(100vh - 150px)", overflow: "scroll" }}>
            <Row gutter={[35, 35]}>
                <Observer>
                    {() =>
                        aidStore
                            .filteredAids([""], ["Toutes", ""])
                            .map(plan => (
                                <Col span={12} key={plan.ID}>
                                    <PlanCard
                                        name={plan["Nom du dispositif"]}
                                        description={plan.Description}
                                        planId={plan.ID}
                                    />
                                </Col>
                            ))
                    }
                </Observer>
            </Row>
        </div>
    </Col>
);

export default PlansCards;

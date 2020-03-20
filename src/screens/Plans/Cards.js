import { Row, Col } from "antd";
import styled from "styled-components";
import { Observer } from "mobx-react-lite";

import aidStore from "../../stores/aids/aidStore";

import { BLUE } from "@constants/style";

import PlanCard from "@components/PlanCard";
import { ORANGE } from "../../constants/style";

const Badge = styled.span`
    color: ${ORANGE};
    position: relative;
    left: 10px;
`;

const PlansCards = ({ filters }) => (
    <Col span={16}>
        <h3>
            Mes aides{" "}
            <Badge>
                {" "}
                <Observer>
                    {() => {
                        return aidStore.filteredAids([filters.localization]).length;
                    }}
                </Observer>
            </Badge>
        </h3>
        <Container>
            <Row gutter={[35, 35]}>
                <Observer>
                    {() =>
                        aidStore.filteredAids([filters.localization]).map(plan => (
                            <Col xs={24} md={24} lg={12} key={plan.ID}>
                                <PlanCard
                                    name={plan["Nom du dispositif"]}
                                    description={plan["Résumé"]}
                                    planId={plan.ID}
                                />
                            </Col>
                        ))
                    }
                </Observer>
            </Row>
        </Container>
    </Col>
);

const Container = styled.div`
    overflow: scroll;
    padding: 0 15px;
    height: calc(100vh - 150px);

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${BLUE};
        outline: 1px solid ${BLUE};
    }
`;

export default PlansCards;

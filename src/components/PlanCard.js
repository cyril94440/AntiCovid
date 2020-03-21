import styled from "styled-components";
import { Typography } from "antd";
import { useRouter } from "next/router";
import Disqus from "disqus-react";

import BaseButton from "./Button";
import BaseCard from "./Card";
import { PLAN_HREF, PLANS } from "../constants/routes";

import { disqusShortname, getDisqusConfig } from "../helpers/disqus";

const StyledPlanCard = styled(BaseCard)`
    border-radius: 18px;
    overflow: hidden;
    background-color: white;
`;

const Header = styled.div`
    @media screen and (max-width: 576px) {
        padding: 5px;
        line-height: 20px;
    }
    padding: 20px 60px;
    color: white;
    font-weight: 700;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    padding: 20px 30px;
    font-size: 12px;
    @media only screen and (min-width: 768px) {
        padding: 20px 60px;
    }
`;

const CommentDiv = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
    img {
        width: 16px;
        margin-right: 7px;
    }
`;

const PlanButton = styled(BaseButton)`
    padding: 0 30px;
    margin: auto;
    @media only screen and (min-width: 768px) {
        padding: 0 70px;
    }
`;

export default function PlanCard({ name, description, planId }) {
    const router = useRouter();

    return (
        <StyledPlanCard>
            <Header className="bg-blue text-center">{name}</Header>
            <Container>
                <p style={{ minHeight: 141 }}>{description}</p>
                <CommentDiv className="text-orange">
                    <img src="/commentBubble.png" />
                    <Disqus.CommentCount
                        shortname={disqusShortname}
                        config={getDisqusConfig(planId)}
                    >
                        ...
                    </Disqus.CommentCount>
                </CommentDiv>
                <div className="text-center">
                    <PlanButton
                        className="bg-green"
                        onClick={() => {
                            router.push(PLAN_HREF, PLANS + "/" + planId);
                        }}
                    >
                        En savoir plus
                    </PlanButton>
                </div>
            </Container>
        </StyledPlanCard>
    );
}

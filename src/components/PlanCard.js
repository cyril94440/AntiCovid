import styled from "styled-components";
import { Typography } from "antd";
import { useRouter } from "next/router";
import Disqus from "disqus-react";

import BaseButton from "./Button";
import { PLAN_HREF, PLANS } from "../constants/routes";

import { disqusShortname, getDisqusConfig } from "../helpers/disqus";

const StyledPlanCard = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
`;

const Header = styled.div`
    color: white;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
`;

const Container = styled.div`
    padding: 20px 60px;
    font-size: 12px;
    text-align: justify;
    line-height: 14px;
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
    padding: 0 70px;
    margin: auto;
`;

export default function PlanCard({ name, description, planId }) {
    const router = useRouter();

    return (
        <StyledPlanCard>
            <Header className="bg-blue text-center">{name}</Header>
            <Container>
                <Typography.Paragraph style={{ minHeight: 141 }} ellipsis={{ rows: 6 }}>
                    {description}
                </Typography.Paragraph>
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
                        className="bg-blue"
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

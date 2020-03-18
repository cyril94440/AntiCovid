import styled from "styled-components";
import Button from "./Button";
import { ORANGE } from "../constants/style";
import { PLAN_HREF, PLANS } from "../constants/routes";
import { useRouter } from "next/router";
import Disqus from "disqus-react";
import { disqusShortname, getDisqusConfig } from "../helpers/disqus";

const StyledPlanCard = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
`;

const Header = styled.div`
    background-color: #233c44;
    color: white;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    text-align: center;
`;

const Container = styled.div`
    padding: 20px 60px;
    font-size: 12px;
    text-align: justify;
    line-height: 14px;
`;

const DotSeparator = styled.div`
    text-align: center;
    margin-top: 5px;
    margin-bottom: 0px;
    font-weight: 900;
    font-size: 16px;
`;

const CommentDiv = styled.div`
    margin-bottom: 10px;
    color: ${ORANGE};
    font-size: 16px;

    img {
        width: 16px;
        margin-right: 7px;
    }
`;

export default function PlanCard({ name, description, planId }) {
    const router = useRouter();

    return (
        <StyledPlanCard>
            <Header>{name}</Header>
            <Container>
                {description}
                <DotSeparator>. . .</DotSeparator>
                <CommentDiv>
                    <img src="/commentBubble.png" />
                    <Disqus.CommentCount
                        shortname={disqusShortname}
                        config={getDisqusConfig(planId)}
                    >
                        ...
                    </Disqus.CommentCount>
                </CommentDiv>
                <div style={{ textAlign: "center" }}>
                    <Button
                        className="planCard"
                        style={{ margin: "auto" }}
                        onClick={() => {
                            router.push(PLAN_HREF, PLANS + "/" + planId);
                        }}
                    >
                        En savoir plus
                    </Button>
                </div>
            </Container>
        </StyledPlanCard>
    );
}

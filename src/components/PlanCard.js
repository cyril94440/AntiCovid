import styled from 'styled-components'
import Button from './Button'
import { SECONDARY } from '../constants/style'
import { PLAN_HREF, PLANS } from '../constants/routes'
import { useRouter } from "next/router";

const StyledPlanCard = styled.div`
  border-radius:10px;
  overflow:hidden;
  background-color:white;
  width:400px;
  margin-left:100px;
`

const Header = styled.div`
    background-color:#233C44;
    color:white;
    font-weight:700;
    height:40px;
    line-height:40px;
`

const Container = styled.div`
    padding:20px 60px;
    font-size:12px;
    text-align:justify;
    line-height:14px;
`

const DotSeparator = styled.div`
    text-align:center;
    margin-top:5px;
    margin-bottom:0px;
    font-weight:900;
    font-size:16px;
`

const CommentDiv = styled.div`
    margin-bottom:10px;
    color:${SECONDARY};
    font-size:16px;

    img{
        width:16px;
        margin-right:7px;
    }
`

export default function PlanCard({name,description,planId,commentsNumber}) {

    const router = useRouter();

    return (<StyledPlanCard>
            <Header>{name}</Header>
            <Container>
                {description}
                <DotSeparator>. . .</DotSeparator>
                <CommentDiv><img src="/commentBubble.png" />{commentsNumber}</CommentDiv>
                <div style={{textAlign:"center"}}><Button className="planCard" style={{margin:"auto"}} onClick={() => {router.push(PLAN_HREF, PLANS + "/" + planId)}}>En savoir plus</Button></div>
            </Container>
    </StyledPlanCard>)
}
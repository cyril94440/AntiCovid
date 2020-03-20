import { Row, Col } from "antd";
import styled from "styled-components";

import { BLUE } from "@constants/style";
import BaseCard from "@components/Card";
import BaseButton from "../../components/Button";

const data = [
    {
        title: "Développement web ou design",
        icon: "/community.png",
        items: ["Front-End (React)", "Back-End (Node.js)", "Design (Figma, Photoshop)"]
    },
    {
        title: "Marketing digital / produit",
        icon: "/blogImg.png",
        items: [
            "Rédaction d'articles blog",
            "Community management",
            "SEO",
            "Growth hacking",
            "Partenariats",
            "Gestion de projets",
            "Evolution du site web"
        ]
    },
    {
        title: "Finance Comptabilité",
        icon: "/blogImg.png",
        items: [
            "Compléter, simplifier et amélioler le contenur sur les aides",
            "Répondes aux questions",
            "Réaliser des webinars"
        ]
    }
];

const JoinUsDescription = () => (
    <Row justify="center" gutter={[25, 25]} className="text-center">
        {data.map(({ title, icon, items }, index) => (
            <Col key={icon} sm={{ span: 24, order: index }} md={12} lg={7}>
                <StyledCard>
                    <Img src={icon} />
                    <TextCard>{title}</TextCard>
                    <Items className="text-center">
                        {items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </Items>
                </StyledCard>
            </Col>
        ))}

        <Col span={24} order={3}>
            <JoinUsButton className="text-uppercase">Rejoingez nous</JoinUsButton>
        </Col>
    </Row>
);

const StyledCard = styled(BaseCard)`
    border-radius: 25px;
    padding: 30px 60px;
`;

const Img = styled.img`
    width: 60px;
    height: 35px;
    margin-bottom: 15px;
`;

const TextCard = styled.p`
    font-size: 20px !important;
    font-weight: 900;
`;

const Items = styled.ul``;

const JoinUsButton = styled(BaseButton)`
    background-color: #aaa;
`;

export default JoinUsDescription;

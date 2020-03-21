import styled from "styled-components";

import { BLUE } from "@constants/style";
import BaseCard from "@components/Card";
import BaseButton from "../../components/Button";
import { ORANGE } from "../../constants/style";

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
    <Container className="text-center mx-auto" style={{ padding: 15 }}>
        <Grid>
            {data.map(({ title, icon, items }, index) => (
                <StyledCard key={title}>
                    <Img src={icon} />
                    <TextCard>{title}</TextCard>
                    <ul className="text-center" style={{ listStylePosition: "inside" }}>
                        {items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </StyledCard>
            ))}
        </Grid>

        <JoinUsButton className="text-uppercase"><a href="https://airtable.com/shrVHJ45g3JIGKne7" target="_blank">Rejoignez nous ici</a></JoinUsButton>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template: 1fr / repeat(3, 0.8fr);
    grid-gap: 25px;
    margin-bottom: 35px;

    @media screen and (max-width: 992px) {
        grid-template: 1fr / 100%;
    }
`;

const StyledCard = styled(BaseCard)`
    border-radius: 25px;
    padding: 30px 60px;
    width: 100%;
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

const JoinUsButton = styled(BaseButton)`
    background-color: ${BLUE};
    font-weight: 500;
    width: 400px;

    @media screen and (max-width: 992px) {
        margin-bottom: 90px;
        width:98%;
    }
    a{
        color:white;
    }
    a:hover{
        color: ${ORANGE};
    }
`;

export default JoinUsDescription;

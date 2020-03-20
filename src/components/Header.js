import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

import { NAVLINKS, PLANS, HOME } from "@constants/routes";
import { ORANGE, RED } from "@constants/style";

import Logo from "./Logo";
import BaseButton from "./Button";

export default function Header() {
    const router = useRouter();

    return (
        <Container>
            <Row align="middle" className="text-center">
                <Col>
                    <Row>
                        <Col>
                            <ContactButton
                                className="bg-orange text-uppercase"
                                onClick={() => router.push(PLANS)}
                            >
                                MES AIDES
                            </ContactButton>
                        </Col>
                        <Col>
                            <HelpButton>SOUMETTRE UNE AIDE</HelpButton>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <Logo />
                    </div>
                </Col>
                <Col>
                    <Row>
                        {NAVLINKS.map(({ href, label }) => (
                            <Col key={href}>
                                <Link
                                    className="text-uppercase"
                                    key={href}
                                    onClick={() => router.push(href)}
                                    active={router.pathname === href}
                                >
                                    {label}
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

const Container = styled.header`
    padding: 10px 15px;

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

const ContactButton = styled(BaseButton)`
    padding: 0 30px;
    transition: all 0.5s;
`;

const HelpButton = styled(BaseButton)`
    padding: 0 30px;
    transition: all 0.5s;
    background-color: ${RED};
`;

const Link = styled.a`
    font-size: 14px !important;

    color: ${props => (props.active ? `${ORANGE} !important` : "initial")};
`;

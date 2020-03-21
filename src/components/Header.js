import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

import { NAVLINKS, PLANS, HOME } from "@constants/routes";
import { ORANGE, RED } from "@constants/style";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import BaseButton from "./Button";
import Title from "./Title";

export default function Header({ title, toggleMobileHeader, mobileHeader }) {
    const router = useRouter();

    return (
        <Container>
            <Row
                align="middle"
                className="text-center"
                gutter={{ xs: 0, sm: 15, md: 15, lg: 0 }}
            >
                <Col
                    xs={{ span: 3, order: 1 }}
                    sm={{ span: 0, order: 1 }}
                    xl={{ span: 0, order: 1 }}
                >
                    <div
                        onClick={toggleMobileHeader}
                        className="cursor-pointer"
                        style={{ width: "fit-content", height: "auto" }}
                    >
                        <MenuOutlined className="mobile-icon" />
                    </div>
                </Col>
                <ContainerButtons
                    xs={{ span: 0, order: 3 }}
                    sm={{ span: 24, order: 3 }}
                    xl={{ span: 8, order: 1 }}
                >
                    <Row gutter={[15, 15]}>
                        <Col>
                            <ContactButton
                                className="bg-orange text-uppercase"
                                onClick={() => router.push(PLANS)}
                            >
                                MES AIDES
                            </ContactButton>
                        </Col>
                        <Col>
                            <HelpButton>
                                <HelpLink
                                    className="text-white"
                                    href="https://airtable.com/shroZVJ5EV8tpsaNd"
                                    target="_blank"
                                >
                                    SOUMETTRE UNE AIDE
                                </HelpLink>
                            </HelpButton>
                        </Col>
                    </Row>
                </ContainerButtons>
                <Col
                    xs={{ span: 0, order: 2 }}
                    sm={{ span: 24, order: 1 }}
                    xl={{ span: 10, order: 2 }}
                >
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <Logo />
                    </div>
                </Col>
                <Col
                    xs={{ span: 18, order: 2 }}
                    sm={{ span: 0, order: 1 }}
                    xl={{ span: 0, order: 2 }}
                >
                    {title === "Accueil" ? (
                        <div onClick={() => router.push(HOME)} className="cursor-pointer">
                            <Logo />
                        </div>
                    ) : (
                        <div>
                            <Title>{title}</Title>
                        </div>
                    )}
                </Col>
                <Col
                    xs={{ span: 3, order: 3 }}
                    sm={{ span: 0, order: 1 }}
                    xl={{ span: 0, order: 1 }}
                >
                    {mobileHeader && (
                        <div
                            onClick={toggleMobileHeader}
                            className="cursor-pointer"
                            style={{ width: "auto", height: "auto" }}
                        >
                            <CloseOutlined className="mobile-icon" />
                        </div>
                    )}
                </Col>
                <Col
                    xs={{ span: 0, order: 2 }}
                    sm={{ span: 24, order: 2 }}
                    xl={{ span: 6, order: 3 }}
                >
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
`;

const ContainerButtons = styled(Col)`
    @media screen and (max-width: 1200px) {
        margin-top: 15px;
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

const HelpLink = styled.a`
    color: white;

    &:hover {
        color: white;
    }
`;

const Link = styled.a`
    font-size: 14px !important;

    color: ${props => (props.active ? `${ORANGE} !important` : "initial")};
`;

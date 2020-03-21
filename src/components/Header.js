import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { MenuMobileModal } from "./menuMobileModal";

import { NAVLINKS, PLANS, HOME, MENUMOBILE, CONTACT } from "@constants/routes";
import { ORANGE, RED } from "@constants/style";

import { MenuOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import BaseButton from "./Button";
import Title from "./Title";

export default function Header({ title }) {
    const router = useRouter();

    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
        console.log("show modal");
        setVisible(true);
    };
    const handleOk = e => {
        console.log(e);
        setVisible(false);
    };
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };

    return (
        <Container>
            <MenuMobileModal
                visible={visible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <Row
                align="middle"
                className="text-center"
                gutter={{ xs: 0, sm: 15, md: 15, lg: 0 }}
            >
                <Col
                    xs={{ span: 1, order: 1 }}
                    sm={{ span: 0, order: 1 }}
                    md={{ span: 0, order: 1 }}
                    lg={{ span: 0, order: 1 }}
                >
                    <div
                        onClick={() => router.push(MENUMOBILE)}
                        className="cursor-pointer"
                        style={{ width: "auto", height: "auto" }}
                    >
                        <MenuOutlined style={{ fontSize: 30 }} />
                    </div>
                </Col>
                <Col
                    xs={{ span: 0, order: 3 }}
                    sm={{ span: 24, order: 3 }}
                    md={{ span: 24, order: 3 }}
                    lg={{ span: 8, order: 1 }}
                >
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
                </Col>
                <Col
                    xs={{ span: 0, order: 2 }}
                    sm={{ span: 24, order: 1 }}
                    md={{ span: 24, order: 1 }}
                    lg={{ span: 10, order: 2 }}
                >
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <Logo />
                    </div>
                </Col>
                <Col
                    xs={{ span: 22, order: 2 }}
                    sm={{ span: 0, order: 1 }}
                    md={{ span: 0, order: 1 }}
                    lg={{ span: 0, order: 2 }}
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
                    xs={{ span: 0, order: 2 }}
                    sm={{ span: 24, order: 2 }}
                    md={{ span: 24, order: 2 }}
                    lg={{ span: 6, order: 3 }}
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

import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

import { NAVLINKS, CONTACT } from "@constants/routes";

import Logo from "./Logo";
import Button from "./Button";

export default function HeaderNav() {
    const router = useRouter();

    return (
        <Container>
            <Row align="middle">
                <Col
                    xs={{ span: 6, order: 3 }}
                    sm={{ span: 6, order: 3 }}
                    lg={{ span: 6, order: 1 }}
                    style={{ textAlign: "center" }}
                >
                    <Button className="orange contact" onClick={() => router.push(CONTACT)}>
                        Contact
                    </Button>
                </Col>
                <Col
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: 24, order: 1 }}
                    lg={{ order: 2, span: 12 }}
                    style={{ textAlign: "center" }}
                >
                    <Logo />
                </Col>
                <Col
                    xs={{ span: 18, order: 2 }}
                    sm={{ span: 18, order: 2 }}
                    lg={{ span: 6, order: 3 }}
                    style={{ textAlign: "center" }}
                >
                    <Row>
                        {NAVLINKS.map(({ href, label }) => (
                            <Col key={href}>
                                <Link key={href} onClick={() => router.push(href)}>
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

const Link = styled.a`
    font-size: 16px;
    cursor: pointer;
`;

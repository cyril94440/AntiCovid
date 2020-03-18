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
            <Row justify="space-between" align="middle">
                <Col md={12} sm={24}>
                    <Logo />
                </Col>
                <Col>
                    <Row justify="end" align="middle">
                        {NAVLINKS.map(({ href, label }) => (
                            <Col key={href} span={6}>
                                <Link key={href} onClick={() => router.push(href)}>
                                    {label}
                                </Link>
                            </Col>
                        ))}
                        <Col span={6}>
                            <Button
                                className="orange contact"
                                onClick={() => router.push(CONTACT)}
                            >
                                Contact
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

const Container = styled.header`
    padding: 0 50px;

    @media only screen and (max-width: 820px) {
        text-align: center;
    }

    @media only screen and (max-width: 576px) {
        /* display: none; */
    }
`;

const Link = styled.a`
    font-size: 16px;
    cursor: pointer;
`;

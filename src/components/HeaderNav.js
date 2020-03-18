import { Layout, Row, Col } from "antd";

import { useRouter } from "next/router";

import { NAVLINKS } from "@constants/routes";
import Logo from "./Logo";
import Button from "./Button";
import { CONTACT } from "../constants/routes";

export default function HeaderNav() {
    const router = useRouter();

    return (
        <header>
            <Row align="middle">
                <Col flex="1" style={{ textAlign: "center" }}>
                    <Button
                        className="orange contact"
                        onClick={() => router.push(CONTACT)}
                    >
                        Contact
                    </Button>
                </Col>
                <Col flex="1" style={{ textAlign: "center" }}>
                    <Logo />
                </Col>
                <Col flex="1" style={{ textAlign: "center" }}>
                    <Row align="middle">
                        {NAVLINKS.map(({ href, label }) => (
                            <Col>
                                <a key={href} onClick={() => router.push(href)}>
                                    {label}
                                </a>
                            </Col>
                        ))}
                        <Col flex="auto"></Col>
                    </Row>
                </Col>
            </Row>
            <style jsx>{`
                a {
                    font-size: 16px;
                    cursor: pointer;
                }
            `}</style>
        </header>
    );
}

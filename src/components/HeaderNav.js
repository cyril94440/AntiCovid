import { Row, Col } from "antd";

import { useRouter } from "next/router";

import { NAVLINKS } from "@constants/routes";
import Logo from "./Logo";
import Button from "./Button";

export default function HeaderNav() {
    const router = useRouter();

    return (
        <div>
            <Row align="middle">
                <Col flex="1" style={{ textAlign: "center" }}>
                    <Button className="contact">Contact</Button>
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
        </div>

        // <Layout.Header>
        //     <Row align="middle">
        //         <Col flex="auto">
        //             <Menu
        //                 theme="dark"
        //                 mode="horizontal"
        //                 defaultSelectedKeys={[router.pathname]}
        //             >
        //                 {NAVLINKS.map(({ href, label }) => (
        //                     <Menu.Item key={href} onClick={() => router.push(href)}>
        //                         {label}
        //                     </Menu.Item>
        //                 ))}
        //             </Menu>
        //         </Col>
        //     </Row>
        // </Layout.Header>
    );
}

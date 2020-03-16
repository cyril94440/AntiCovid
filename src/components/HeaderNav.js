import { Layout, Row, Col, Menu, Avatar } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import { NAVLINKS } from "@constants/routes";

export default function HeaderNav() {
    const router = useRouter();

    return (
        <Layout.Header>
            <Row align="middle">
                <Col flex="auto">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[router.pathname]}
                    >
                        {NAVLINKS.map(({ href, label }) => (
                            <Menu.Item
                                key={href}
                                onClick={() => router.push(href)}
                            >
                                {label}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Col>
                <Col flex="20px">
                    <Avatar icon={<UserAddOutlined />} />
                </Col>
            </Row>
        </Layout.Header>
    );
}

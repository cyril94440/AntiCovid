import { Layout, Row, Col, Menu, Avatar } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import { NAVLINKS } from "@constants/routes";
import Logo from "./Logo";
import OrangeButton from "./OrangeButton";

export default function HeaderNav() {
    const router = useRouter();

    return (

        <div>
            <Row align="middle">
                <Col flex="1" style={{textAlign:"center"}}><OrangeButton /></Col>
                <Col flex="1" style={{textAlign:"center"}}><Logo /></Col>
                <Col flex="1" style={{textAlign:"center"}}>
                    <Row align="middle">
                    {NAVLINKS.map(({ href, label }) => (
                            <Col>
                                <a key={href} onClick={() => router.push(href)}>{label}</a>
                            </Col>
                        ))}
                    <Col flex="auto"></Col>
                    </Row>
                </Col>
            </Row>
            <style jsx>{`
           a{
               font-size:16px;
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

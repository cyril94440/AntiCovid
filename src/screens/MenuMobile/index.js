import { Row, Col, Card } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";
import Page from "@components/Page";
import { HomeFilled, WechatFilled, PhoneFilled } from "@ant-design/icons";
import { NAVLINKSMENUMOBILE } from "@constants/routes";

const MenuMobile = () => {
    const router = useRouter();
    return (
        <Page title="Menu">
            <Container justify="center" align="middle">
                {NAVLINKSMENUMOBILE.map(({ href, label, icon }) => (
                    <MenuItem justify="center" key={href}>
                        <Img src={icon} />
                        <Link
                            className="text-uppercase"
                            key={href}
                            onClick={() => router.push(href)}
                            active={router.pathname === href}
                        >
                            {label}
                        </Link>
                    </MenuItem>
                ))}
            </Container>
        </Page>
    );
};

const Container = styled(Col)``;
const MenuItem = styled(Row)`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
`;
const Img = styled.img`
    height: 30px;
`;

const Link = styled.a`
    font-size: 23px !important;
    font-weight: bold;
    color: white !important;
`;

export default MenuMobile;

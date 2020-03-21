import { Row, Col, Card, Modal } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";
import Page from "@components/Page";
import { HomeFilled, WechatFilled, PhoneFilled } from "@ant-design/icons";
import { NAVLINKSMENUMOBILE } from "@constants/routes";

export const MenuMobileModal = ({ visible, handleOk, handleCancel }) => (
    <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
);

const FullPageModal = styled(Modal)`
    width: 100%:
`;

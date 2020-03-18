import { Row, Col, Typography, Card, List } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Page from "@components/Page";
import { BLUE } from "../../constants/style";
import HomeImage from "./Image";
import HomeDescription from "./Description";

const data = [
    { text: "Un accompagnement pour trouver les aides adéquates" },
    { text: "Un Blog pour rester informé(e) et faire les bons choix" }
];

const Home = () => (
    <Page title="Accueil">
        <HomeImage />
        <HomeDescription />
    </Page>
);

export default Home;

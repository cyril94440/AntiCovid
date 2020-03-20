import styled from "styled-components";
import { Layout } from "antd";

import BaseButton from "./Button";

const text = "Soumetttre un dispositif non référencé";

const NewPlanButton = () => <Wrapper className="bg-orange">{text}</Wrapper>;

const Wrapper = styled(BaseButton)`
    padding: 10px 100px;
    width: 425px;
    height: auto;

    @media screen and (max-width: 576px) {
        padding: 10px 10px;
        width: 100%;
        border-radius: 45px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: white;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 84px;
    }
`;

export default NewPlanButton;

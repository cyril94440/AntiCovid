import styled from "styled-components";

import { GREEN } from "@constants/style";

const BaseButton = styled.button`
    color: white;
    cursor: pointer;
    font-weight: 700;
    border-radius: 18px;
    font-size: 17px;
    height: 29px;
    line-height: 19px;
    border: none;
    text-align: center;
    outline: none;

    &:active {
        outline: none;
    }

    &.form {
        width: 100%;
    }

    &.planCard {
        background-color: ${GREEN};
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        padding: 0 70px;
    }
`;

export default BaseButton;

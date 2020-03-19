import styled from "styled-components";

import { GREEN } from "@constants/style";

const BaseButton = styled.button`
    color: white;
    cursor: pointer;
    font-weight: medium;
    border-radius: 18px;
    font-size: 13px;
    height: 26px;
    line-height: 15px;
    border: none;
    text-align: center;
    outline: none;

    &:active {
        outline: none;
    }

    &.plan {
        padding: 10px 100px;
        width: 425px;
        height: auto;
        line-height: 20px;
        font-weight: 700;
    }

    &.form {
        width: 100%;
    }

    &.upload {
        background-color: ${GREEN};
        position: absolute;

        @media only screen and (min-width: 768px) {
            margin-top: -20px;
        }
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

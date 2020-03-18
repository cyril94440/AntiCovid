import styled from "styled-components";
import { BLUE, ORANGE, GREEN } from "@constants/style";

const Button = styled.button`
    color: white;
    cursor: pointer;
    font-weight: 500;
    background-color: ${BLUE};
    border-radius: 18px;
    font-size: 16px;
    height: 32px;
    border: none;
    text-align: center;
    outline: none;

    &:active {
        outline: none;
    }

    &.orange {
        background-color: ${ORANGE};
    }

    &.green {
        background-color: ${GREEN};
    }

    &.contact {
        padding: 0 30px;
        transition: all 0.5s;

        &:hover {
            color: ${ORANGE};
            border: 1px solid ${ORANGE};
            background-color: white;
        }
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

export default Button;

import styled from "styled-components";
import { BLUE, ORANGE } from "../constants/style";

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

    &.contact {
        padding: 0 30px;
    }

    &.plan {
        padding: 10px 100px;
        width: 400px;
        height: auto;
        line-height: 20px;
    }

    &.form {
        width: 400px;
    }

    &.planCard {
        background-color: #3c8476;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        padding: 0 70px;
    }
`;

export default Button;

import styled from "styled-components";
import { PRIMARY, SECONDARY } from "../constants/style";

const Button = styled.button`
    color: white;
    cursor: pointer;
    font-weight: 500;
    background-color: ${PRIMARY};
    border-radius: 18px;
    font-size: 16px;
    height: 32px;
    border: none;
    text-align: center;
    outline: none;

    &:active {
        outline: none;
    }

    &.contact {
        background-color: ${SECONDARY};
        padding: 0 50px;
    }

    &.planCard {
        background-color: #3C8476;
        font-weight:700;
        font-size:14px;
        line-height:14px;
        padding: 0 70px;
    }
`;

export default Button;

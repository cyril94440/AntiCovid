import styled from "styled-components";
import { PRIMARY, SECONDARY } from "../constants/style";

const Button = styled.button`
    color: white;
    cursor: pointer;
    font-weight: 500;
    background-color: ${PRIMARY};
    border-radius: 18px;
    font-size: 16px;
    height: 35px;
    line-height: 35px;
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
`;

export default Button;

import styled from "styled-components";

import BaseButton from "./Button";

const NewPlanButton = () => (
    <Wrapper className="bg-orange">Soumetttre un dispositif non référencé</Wrapper>
);

const Wrapper = styled(BaseButton)`
    padding: 10px 100px;
    width: 425px;
    height: auto;
`;

export default NewPlanButton;

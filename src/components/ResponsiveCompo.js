import styled from "styled-components";


export const MobileOnly = styled.div`
display:none;
@media (max-width: 800px) {
      display: block !important;
  }
`;
export const DesktopOnly = styled.div`
display:none;
@media (min-width: 801px) {
    display: block !important;
}
`;
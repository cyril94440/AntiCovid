import styled from "styled-components";


export const MobileOnly = styled.div`
display:none;
@media (max-width: 767px) {
      display: block !important;
  }
`;
export const DesktopOnly = styled.div`
display:none;
@media (min-width: 768px) {
    display: block !important;
}
`;
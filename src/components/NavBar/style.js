import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 90%;
  background-color: var(--bg-color)
`;

export default StyledNavBar;

import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: var(--font-2);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-5);
  font-family: var(--font-family-1);
  color: var(--color-white);
  text-align: center;
  border-radius: var(--radius-2);
  background-color: var(--color-grey-1);
  padding: 10px 22px;

  :hover {
    background-color: var(--color-grey-2);
  }
`;

export default StyledLink;

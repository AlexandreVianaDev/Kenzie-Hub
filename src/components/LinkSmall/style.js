import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    font-size: var(--font-4);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-5);
  font-family: var(--font-family-1);
  color: var(--color-white);
  border-radius: var(--radius-2);
  background-color: var(--color-grey-3);
  padding: 8px 16px;


  :hover {
    background-color: var(--color-grey-2); 
  }
`

export default StyledLink
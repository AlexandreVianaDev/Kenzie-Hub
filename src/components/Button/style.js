import styled from "styled-components";

const StyledButton = styled.button`
  font-size: var(--font-2);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-5);
  border-radius: var(--radius-2);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 10px 16px;

  :hover {
    background-color: var(--color-primary-focus);
  }

  :disabled {
    background-color: var(--color-primary-negative);
  }

  .button-disabled {
    background-color: var(--color-grey-1);
  }

  .button-disabled:hover {
    background-color: var(--color-grey-2);
  }
`;

export default StyledButton;

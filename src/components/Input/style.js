import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    font-size: var(--font-4);
    font-weight: var(--font-weight-3);
    line-height: var(--line-heigth-4);
  }

  > input {
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: var(--radius-1);
    padding: 8px 14px;
    color: var(--color-grey-0);
  }

  > input:hover,
  form > input:focus {
    border: 1px solid var(--color-grey-0);
  }

  > p {
    color: var(--color-negative);
    font-size: var(--font-4);
  }
`;

export default StyledInput;

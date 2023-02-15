import styled from "styled-components";

const StyledTech = styled.li`
  background-color: var(--color-grey-4);
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-radius: var(--radius-1);

  > span:nth-child(odd) {
    color: var(--color-grey-0);
    font-weight: var(--font-weight-1);
    font-size: var(--font-3);
  }

  > span:nth-child(even) {
    color: var(--color-grey-1);
    font-weight: var(--font-weight-3);
    font-size: var(--font-4);
  }

  :hover {
    background-color: var(--color-grey-2);

    > span:nth-child(even) {
      color: var(--color-grey-0);
    }
  }
`;

export default StyledTech;

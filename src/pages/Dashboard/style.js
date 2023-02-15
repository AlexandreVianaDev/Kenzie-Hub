import styled from "styled-components";

const StyledDashboard = styled.div`
  header {
    width: 100vw;
    border-bottom: 1px solid var(--color-grey-2);

    > div {
      margin-top: 90px;
      padding: 32px 0;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 0;
  }

  main > div {
    display: flex;
    justify-content: space-between;
  }

  button {
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
  }

  ul {
    background-color: var(--color-grey-3);
    padding: 16px 8px;
    border-radius: var(--radius-1);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 769px) {
    header > div {
      flex-direction: row;
    }
  }
`;

export default StyledDashboard;

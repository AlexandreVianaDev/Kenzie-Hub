import styled from "styled-components";

const StyledModal = styled.dialog`
  background: none;
  width: 100%;
  max-width: 369px;
  top: 150px;
  margin: 0 auto;
  background: rgba(18, 18, 20, 0.5);
  /* border: 2px solid red; */

  ::backdrop {
    /* background: rgba(18, 18, 20, 0.5); */
  }

  > div {
    background-color: var(--color-grey-3);
    border-radius: var(--radius-1);
    width: 100%;
    /* width: 90vw; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div > div {
    width: 100%;
    background-color: var(--color-grey-2);
    border-radius: (--radius-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-top-left-radius: var(--radius-1);
    border-top-right-radius: var(--radius-1);
  }

  .modal__closeBtn {
    font-size: var(--font-1);
    color: var(--color-grey-1);
  }

  .tech__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tech__controls > button {
    width: fit-content;
  }
`;

export default StyledModal;

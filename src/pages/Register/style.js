import styled from "styled-components";

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 24px;

  header {
    width: 369px;
    max-width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 369px;
    max-width: 100%;
  }
`;

export default StyledRegister;

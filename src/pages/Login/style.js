import styled from "styled-components";

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 24px;
    /* padding-top: 60px; */

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

export default StyledLogin;

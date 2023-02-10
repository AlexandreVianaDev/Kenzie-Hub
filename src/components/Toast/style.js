import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: var(--color-grey-2) !important;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

export default StyledContainer;

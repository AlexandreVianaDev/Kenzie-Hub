import AppRoute from "./routes";
import "react-toastify/dist/ReactToastify.css";
import StyledContainer from "./components/Toast/style";

function App() {
  return (
    <>
      <AppRoute />
      <StyledContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

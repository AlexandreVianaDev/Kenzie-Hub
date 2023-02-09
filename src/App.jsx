import { useState } from "react";
import AppRoute from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledContainer from "./components/Toast/style";

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <AppRoute user={user} setUser={setUser} />
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
      {/* {toast.success("teste")} */}
    </>
  );
}

export default App;

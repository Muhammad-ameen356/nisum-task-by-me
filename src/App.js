import "./App.scss";
import AppRoutes from "src/routes/appRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer hideProgressBar={true} autoClose={3000} />
      <AppRoutes />
    </>
  );
}

export default App;

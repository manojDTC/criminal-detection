import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;

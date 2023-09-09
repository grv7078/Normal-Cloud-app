import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import Users from "./pages/Users";
import UserCreate from "./pages/UserCreate";
import UserUpdate from "./pages/UserUpdate";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route index element={<Users />} />
        <Route path="/add" element={<UserCreate />} />
        <Route path="/:id" element={<UserUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;

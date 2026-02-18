import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Submit from "./pages/Submit/Submit";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Complaints from "./pages/Complaints/Complaints";
import { ComplaintsProvider } from "./context/ComplaintsContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ComplaintsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/submit" element={<Submit />}></Route>
            <Route path="/admin/login" element={<AdminLogin />}></Route>
            <Route path="/admin" element={<Complaints />}></Route>
          </Routes>
        </BrowserRouter>
      </ComplaintsProvider>
    </AuthProvider>
  );
}

export default App;

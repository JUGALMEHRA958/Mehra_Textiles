import "./App.css";
import { Button, Alert, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { URL } from "./api";
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
function HomePage() {
  return (
    <div>
      {alert("Welcome to Mehra textiles")}
      <MyNavbar></MyNavbar>
    </div>
  );
}
export default App;

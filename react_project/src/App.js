import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./Pages/Homepage/HomePage";
import Aboutpage from "./Pages/Aboutpage/AboutPage";
import ExtraSalesPage from "./Pages/ExtraSalesPage";
import NotFoundPage from "./Pages/NotefoundPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import Button from "./component/Button/button";

export default function App() {
  const handleClick = () => {
    alert("Кнопка была нажата!");
  };
  return (
    <div className="app-container">
      <header className="navbar-container">
        <img className="img-navbar" src="./img/Logo.png"></img>
        <div className="navbar-div">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">about</Link>
          <Link to="/extrasales">ExtraSalesPage</Link>

          <Button
          
            onClick={handleClick}
            border="none"
            className="my-button"
            label="Get your free guide now"
          />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/extrasales" element={<ExtraSalesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

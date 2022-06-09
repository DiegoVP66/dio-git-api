import Footer from "components/Footer";
import Menu from "components/Menu";
import NavBar from "components/NavBar";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesComponent;

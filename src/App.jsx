import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

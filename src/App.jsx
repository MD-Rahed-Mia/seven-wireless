import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

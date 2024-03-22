import React from "react";
import Navbar from "../component/HeroNav/Navbar";
import Footer from "../component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

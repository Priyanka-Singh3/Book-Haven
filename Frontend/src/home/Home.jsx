import React from "react";
import Banner from "../components/Banner.jsx"
import Navbar from "../components/Navbar.jsx"
import Freebook from "../components/Freebook.jsx"
import Footer from "../components/Footer.jsx"

function Home() {
  return (
    <>
      <div className="">
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Products from "./Products";

function Home() {
  return (
    <div className="home__Container">
      <Banner />

      <Products />
      <Footer/>
    </div>
  );
}

export default Home;

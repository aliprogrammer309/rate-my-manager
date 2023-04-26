import React, { useState } from "react";
import About from "../About/About";
import SearchManager from "../search/SearchManager";

const Home = () => {
  return (
    <>
      <SearchManager />
      <About />
    </>
  );
};

export default Home;

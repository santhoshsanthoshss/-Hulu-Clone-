import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import requests from "./components/helpers/requests";
import Results from "./components/Results/Results.jsx";
const App = () => {
  const [selected, setselected] = useState(requests.fetchTrending);
  console.log(selected);
  return (
    <div className="app">
      <Header />
      <Navbar setselected={setselected} />
      <Results selected={selected} />
    </div>
  );
};

export default App;

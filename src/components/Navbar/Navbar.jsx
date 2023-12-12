import React from "react";
import navstyle from "../../css/Nav.module.css";
import requests from "../helpers/requests";
const Navbar = ({ setselected }) => {
  return (
    <div className={navstyle.nav}>
      <h2 onClick={() => setselected(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setselected(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setselected(requests.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setselected(requests.fectchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => setselected(requests.fectchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setselected(requests.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={() => setselected(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setselected(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setselected(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselected(requests.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setselected(requests.fetchTv)}>Movie</h2>
    </div>
  );
};

export default Navbar;

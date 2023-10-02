import React, { useState, useEffect } from "react";
import axios from "../stores/axios";
import requests from "../stores/request";
import "./Banner.css";

function Banner() {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[Math.floor(Math.random() * req.data.results.length)]
      );
      return req;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `URL(
                https://image.tmdb.org/t/p/original/${Movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* bcg img */}
        {/* title */}
        <h1 className="banner__title">
          {Movie?.title || Movie?.name || Movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* div > 2 buttons */}
        {/* description */}
        <h1 className="banner__description">
          {truncate(Movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;

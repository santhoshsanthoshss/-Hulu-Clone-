import React, { useEffect, useState } from "react";
import axios from "../helpers/axios";
import CardVideo from "../VideoCard/CardVideo";
import Resultstyle from "../../css/Results.module.css";
import FlipMove from "react-flip-move";

const Results = ({ selected }) => {
  const [movieapi, setmovieapi] = useState([]);

  useEffect(() => {
    async function userdata() {
      let { data } = await axios.get(selected);
      setmovieapi(data.results);
      console.log(data.results);
    }
    userdata();
  }, [selected]);

  return (
    <div className={Resultstyle.results}>
      <FlipMove>
        {movieapi.map((movie) => {
          return <CardVideo key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Results;

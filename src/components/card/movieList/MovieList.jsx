import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "upcoming"
      }?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className='movie--list'>
      <h2 className='list--title'>{(type ? type : "UPCOMING").toUpperCase()}</h2>
      <div className='list--cards'>
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

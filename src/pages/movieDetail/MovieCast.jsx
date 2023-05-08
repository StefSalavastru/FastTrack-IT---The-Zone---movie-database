import React, { useEffect, useState } from "react";
import PeopleCards from "../../components/people/PeopleCard";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [currentMovieCast, setMovieCast] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setMovieCast(data.cast));
  };

  return (
    <div className='TV--list'>
      <h2 className='TV--title'>Cast: </h2>
      <div className='TV--cards'>
      {Array.isArray(currentMovieCast) && currentMovieCast.length > 0 && currentMovieCast.map((castMember) => (
                <PeopleCards person={castMember} role={castMember.character}/>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
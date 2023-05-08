import React, { useEffect, useState } from "react";
import PeopleCards from "../../components/people/PeopleCard";
import { useParams } from "react-router-dom";

const TVCast = () => {
  const [currentTVCast, setTVCast] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setTVCast(data.cast));
  };

  return (
    <div className='TV--list'>
      <h2 className='TV--title'>Cast: </h2>
      <div className='TV--cards'>
      {Array.isArray(currentTVCast) && currentTVCast.length > 0 && currentTVCast.map((castMember) => (
                <PeopleCards person={castMember} role={castMember.character}/>
        ))}
      </div>
    </div>
  );
};

export default TVCast;
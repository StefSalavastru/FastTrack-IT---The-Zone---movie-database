import React, { useEffect, useState } from "react";
import PeopleCards from "./PeopleCard";

const People = () => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setPeopleList(data.results));
  };

  return (
    <div className='TV--list'>
      <h2 className='TV--title'>Trending Actors  </h2>
      <div className='TV--cards'>
      {Array.isArray(peopleList) && peopleList.length > 0 && peopleList.map((person) => (
            <PeopleCards person={person} key={person.id}/>
        ))}
      </div>
    </div>
  );
};

export default People;
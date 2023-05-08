import React, { useEffect, useState } from "react";
import Cards from "../../components/card/Card";
import TVCards from "../../components/TVcard/TVcard";
import { useParams } from "react-router-dom";

const Credit = () => {

  const [credits, setCredits] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=6bee4806fc958a7582c5ba1247d935ec&language=en`
    )
      .then((res) => res.json())
      .then((data) => setCredits(data.cast));
  };

  return (
    <div className='TV--list'>
      <h2 className='TV--title'>Titles: </h2>
      <div className='TV--cards'>
      {credits && credits.map((credit) => (
          credit.media_type && credit.media_type=='tv' ?
          <TVCards tvshow={credit} key={credit.id}/>
          : credit.media_type=='movie' ?
          <Cards movie={credit} key={credit.id}/>
          :''
        ))}
      </div>
    </div>
  );
};

export default Credit;